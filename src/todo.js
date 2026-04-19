export function addTodo(todos, title) {
  const nextId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1
  return [...todos, { id: nextId, title, done: false, createdAt: new Date().toISOString() }]
}

export function listTodos(todos) {
  return todos
}

export function markDone(todos, id) {
  const index = todos.findIndex((t) => t.id === id)
  if (index === -1) {
    throw new Error(`找不到 id 為 ${id} 的待辦事項`)
  }
  return todos.map((t) => (t.id === id ? { ...t, done: true } : t))
}

export function deleteTodo(todos, id) {
  const index = todos.findIndex((t) => t.id === id)
  if (index === -1) {
    throw new Error(`找不到 id 為 ${id} 的待辦事項`)
  }
  return todos.filter((t) => t.id !== id)
}
