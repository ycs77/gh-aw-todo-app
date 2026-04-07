import { loadTodos, saveTodos } from './src/storage.js'
import { addTodo, listTodos, markDone } from './src/todo.js'

const [, , command, ...args] = process.argv

switch (command) {
  case 'add': {
    const title = args.join(' ')
    if (!title) {
      console.error('請輸入待辦事項內容，例如：node cli.js add 買牛奶')
      process.exit(1)
    }
    const todos = loadTodos()
    const updated = addTodo(todos, title)
    saveTodos(updated)
    console.log(`已新增：[${updated.at(-1).id}] ${title}`)
    break
  }

  case 'list': {
    const todos = listTodos(loadTodos())
    if (todos.length === 0) {
      console.log('目前沒有任何待辦事項')
      break
    }
    todos.forEach(({ id, title, done }) => {
      const status = done ? '✓' : '○'
      console.log(`${status} [${id}] ${title}`)
    })
    break
  }

  case 'done': {
    const id = parseInt(args[0], 10)
    if (isNaN(id)) {
      console.error('請輸入有效的 id，例如：node cli.js done 1')
      process.exit(1)
    }
    try {
      const todos = loadTodos()
      const updated = markDone(todos, id)
      saveTodos(updated)
      console.log(`已完成：[${id}]`)
    } catch (err) {
      console.error(err.message)
      process.exit(1)
    }
    break
  }

  default:
    console.log('用法：')
    console.log('  node cli.js add <待辦事項>')
    console.log('  node cli.js list')
    console.log('  node cli.js done <id>')
}
