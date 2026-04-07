import fs from 'node:fs'

const FILE_PATH = 'todos.json'

export function loadTodos() {
  if (!fs.existsSync(FILE_PATH)) {
    return []
  }
  return JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'))
}

export function saveTodos(todos) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2), 'utf-8')
}
