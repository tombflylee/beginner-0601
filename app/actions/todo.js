// Action type
// 对于todo有三个操作
export const ADD_TODO = 'ADD_TODO'
export const DEL_TODO = 'DEL_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

// Action Creator
const addTodo = (content) => ({
	type: ADD_TODO,
	payload: {
		id: setTimeout(()=>{}),
		content,
		completed: false,
		createAt: Date.now()
	}
})
const delTodo =(id) => ({
	type: DEL_TODO,
	payload: id 
})
const toggleTodo =(id) => ({
	type: TOGGLE_TODO,
	payload: id 
})

export default{
	addTodo, toggleTodo, delTodo
}

// ####################缺#######################
