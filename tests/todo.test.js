import { describe, it, expect, beforeEach } from 'vitest'
import { addTodo, listTodos, markDone } from '../src/todo.js'

describe('addTodo', () => {
  it('應新增一筆待辦事項並回傳更新後的陣列', () => {
    const todos = []

    const result = addTodo(todos, '買牛奶')

    expect(result).toHaveLength(1)
    expect(result[0]).toMatchObject({
      id: 1,
      title: '買牛奶',
      done: false,
    })
    expect(result[0].createdAt).toBeDefined()
    expect(Number.isNaN(Date.parse(result[0].createdAt))).toBe(false)
  })

  it('id 應自動遞增', () => {
    const todos = [{ id: 1, title: '買牛奶', done: false, createdAt: '' }]

    const result = addTodo(todos, '寫報告')

    expect(result[1].id).toBe(2)
  })

  it('應以目前最大 id + 1 產生新 id', () => {
    const todos = [
      { id: 3, title: '買牛奶', done: false, createdAt: '' },
      { id: 10, title: '寫報告', done: true, createdAt: '' },
      { id: 4, title: '運動', done: false, createdAt: '' },
    ]

    const result = addTodo(todos, '讀書')

    expect(result.at(-1).id).toBe(11)
  })

  it('不應修改原始陣列', () => {
    const todos = []

    addTodo(todos, '買牛奶')

    expect(todos).toHaveLength(0)
  })
})

describe('listTodos', () => {
  it('應回傳所有待辦事項', () => {
    const todos = [
      { id: 1, title: '買牛奶', done: false, createdAt: '' },
      { id: 2, title: '寫報告', done: true, createdAt: '' },
    ]

    const result = listTodos(todos)

    expect(result).toHaveLength(2)
    expect(result).toEqual(todos)
  })

  it('空清單時應回傳空陣列', () => {
    expect(listTodos([])).toEqual([])
  })
})

describe('markDone', () => {
  let todos

  beforeEach(() => {
    todos = [
      { id: 1, title: '買牛奶', done: false, createdAt: '' },
      { id: 2, title: '寫報告', done: false, createdAt: '' },
    ]
  })

  it('應將指定 id 的待辦標記為完成', () => {
    const result = markDone(todos, 1)

    expect(result[0].done).toBe(true)
    expect(result[1].done).toBe(false)
  })

  it('不應修改原始陣列', () => {
    markDone(todos, 1)

    expect(todos[0].done).toBe(false)
  })

  it('當 id 不存在時應拋出錯誤', () => {
    expect(() => markDone(todos, 99)).toThrow('找不到 id 為 99 的待辦事項')
  })
})
