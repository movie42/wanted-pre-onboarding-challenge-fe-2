/**
 * @typedef {Object} Tag - tag type.
 * @property {string} id - tag id.
 * @property {string} name - tag name.
 */

/**
 * A Todo data type
 * @typedef {Object} Todo - Todo type
 * @property {string} id - todo id
 * @property {string} content - todo content
 * @property {boolean} completed - todo status
 * @property {string} category - todo category
 * @property {Tag[]} tags - tags string array
 */

/**
 * A createTodo function params type.
 * @typedef {Object} CreateTodo - CreateTodo type.
 * @property {string} content - todo content. reqired.
 * @property {string=} category - todo category. optional.
 * @property {Array<string>=} tags - tags string array. optional.
 */

/**
 * A createTodo function create todo.
 * @param {CreateTodo} props content(reqired), category(optional), tags(optional)
 * @returns {Promise<Todo>} return todo value.
 */
async function createTodo({ content, category, tags }) {}

/**
 * A getTodo function is request function for todo list.
 * @returns {Promise<Todo[]>} todo json data.
 */
async function getTodo() {}

/**
 * A getTodoDetail function is request function for todo detail.
 * @param {Todo.id} id todo id. reqired.
 * @returns {Promise<Todo>} todo json data.
 */
async function getTodoDetail(id) {}

/**
 * A UpdateTodo data type
 * @typedef {Object} UpdateTodo - UpdateTodo type.
 * @property {string} id - id. reqired.
 * @property {string=} content - content. optional.
 * @property {boolean=} completed - status. optional.
 * @property {string=} category - category. optional.
 * @property {Array<string>=} tags - tags string array. optional.
 */

/**
 * A updateTodo function update specific todo with id.
 * A updateTodo function requrest HTTP method 'patch'.
 * @tutorial
 * @param {UpdateTodo} props reqired : id, optional : content, completed, category, tags
 * @returns {Promise<Todo>} todo json data about update
 */
async function updateTodo({ id, content, completed, category, tags }) {}

/**
 * The deleteTodo function deletes a to-do item with a specific id.
 * @param {Todo.id} id reqired.
 * @returns {Promise<any>}
 */
async function deleteTodo(id) {}

/**
 * The deleteAllTodo function deletes ALL TODO.
 * @returns {Promise<any>}
 */
async function deleteAllTodo() {}

/**
 * The deleteTodoTag function deletes a to-do's tag.
 * @param {Todo.id} todoId reqired.
 * @param {Tag} todoTag reqired.
 * @returns {Promise<any>}
 */
async function deleteTodoTag(todoId, todoTag) {}

/**
 * The deleteAllTodo function deletes to-do's all tags.
 * @param {Todo.id} todoId reqired.
 * @returns {Promise<any>}
 */
async function deleteAllTodoTags(todoId) {}
