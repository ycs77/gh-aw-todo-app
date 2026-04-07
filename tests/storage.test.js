import { describe, it, expect, beforeEach, vi } from 'vitest'
import { vol } from 'memfs'
import path from 'node:path'
import { loadTodos, saveTodos } from '../src/storage.js'

vi.mock('node:fs')

beforeEach(() => {
  vol.reset()
  vol.mkdirSync(process.cwd(), { recursive: true })
})

describe('loadTodos', () => {
  it('當 todos.json 存在時，應回傳解析後的陣列', () => {
    const mockData = [{ id: 1, title: '買牛奶', done: false }]
    vol.fromJSON({ 'todos.json': JSON.stringify(mockData) })

    const result = loadTodos()

    expect(result).toEqual(mockData)
  })

  it('當 todos.json 不存在時，應回傳空陣列', () => {
    const result = loadTodos()

    expect(result).toEqual([])
  })
})

describe('saveTodos', () => {
  it('應將資料寫入 todos.json（格式化 JSON）', () => {
    const todos = [{ id: 1, title: '買牛奶', done: false }]

    saveTodos(todos)

    const saved = JSON.parse(vol.readFileSync(path.join(process.cwd(), 'todos.json'), 'utf-8'))
    expect(saved).toEqual(todos)
  })

  it('應可儲存空陣列', () => {
    saveTodos([])

    const saved = JSON.parse(vol.readFileSync(path.join(process.cwd(), 'todos.json'), 'utf-8'))
    expect(saved).toEqual([])
  })

  it('save 後再 load 應能還原等價資料', () => {
    const todos = [
      { id: 1, title: '買牛奶', done: false, createdAt: '2026-04-07T00:00:00.000Z' },
      { id: 2, title: '寫報告', done: true, createdAt: '2026-04-07T00:05:00.000Z' },
    ]

    saveTodos(todos)

    expect(loadTodos()).toEqual(todos)
  })
})
