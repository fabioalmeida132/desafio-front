export const state = () => ({
  boards: [],
  activeBoard: null,
  boardSelected: [],
  tasks: [],
  status: [],
  modalEdit: false
})

export const mutations = {
  SET_BOARDS(state, boards) {
    state.boards = boards
  },
  ADD_BOARD_TO_LIST(state, board) {
    state.boards.unshift(board)
  },
  ADD_TASK_TO_LIST(state, task) {
    state.tasks.push(task)
  },
  REMOVED_BOARD_FROM_LIST(state, board) {
    state.boards = state.boards.filter(b => b.id !== board.id)
  },
  REMOVED_TASK_FROM_LIST(state, task) {
    state.tasks = state.tasks.filter(t => t.id !== task.id)
  },
  SET_ACTIVE_BOARD(state, board) {
    state.activeBoard = board
  },
  SET_TASKS(state, tasks) {
    state.tasks = tasks
  },
  CLEAR_TASKS(state) {
    state.tasks = []
  },
  SET_STATUS(state, status) {
    state.status = status
  },
  SET_MODAL_EDIT(state) {
    state.modalEdit = !state.modalEdit
  },
  UPDATE_TASK(state, task) {
    const index = state.tasks.findIndex(t => t.id === task.id)
    state.tasks.splice(index, 1, task)
  },
  SET_BOARD_SELECTED(state, board) {
    state.boardSelected = board
  }

}

export const actions = {

  async nuxtServerInit({ commit }) {
    const boards = await this.$axios.$get('/boards')
    commit('SET_BOARDS', boards)

    const status = await this.$axios.$get('/status')
    commit('SET_STATUS', status)
  },

  async addBoard({ commit }, payload) {
    const board = await this.$axios.$post('/board', payload)
    commit('ADD_BOARD_TO_LIST', board)
  },

  async addTask({ commit }, payload) {
    const task = await this.$axios.$post('/task', payload)
    commit('ADD_TASK_TO_LIST', task)
  },

  async removeBoard({ commit }, board) {
    await this.$axios.$delete(`/board/${board.id}`)
    commit('REMOVED_BOARD_FROM_LIST', board)
  },

  async removeTask({ commit }, task) {
    await this.$axios.$delete(`/task/${task.id}`)
    commit('REMOVED_TASK_FROM_LIST', task)
  },

  async setActiveBoard({ commit, state }, board) {
    commit('CLEAR_TASKS', board)

    this.$axios.$get(`/tasks/${board}`)
      .then(tasks => {
        commit('SET_ACTIVE_BOARD', board)
        commit('SET_TASKS', tasks)
      })
    const boardActive = state.boards.find(b => b.id === board)
    commit('SET_BOARD_SELECTED', boardActive)
  },

  async tasks({ commit,state }, payload) {
    const tasks = await this.$axios.$get(`/tasks/${state.activeBoard}`)
    return tasks
  },

  async subtasks({},payload) {
    const subtasks =  await this.$axios.$get(`/subtasks/${payload}`)
    return subtasks
  },

  async updateTaskStatus({ commit }, payload) {
    const task = await this.$axios.$put(`/task/status/${payload.taskId}`, {
      statusId: payload.statusId
    })
  },

  async updateSubtaskStatus({ commit }, payload) {
    const task = await this.$axios.$put(`/subtask/status/${payload.subtaskId}`, {
      statusId: payload.statusId
    })
  },

  async updateTask({ commit }, payload) {
    const task = await this.$axios.$put(`/task/${payload.id}`, {
      title: payload.title,
      description: payload.description,
      statusId: payload.statusId
    })
    commit('UPDATE_TASK', task)
  },

  setModalEdit({ commit }) {
    commit('SET_MODAL_EDIT')
  }

}

export const getters = {
  boards: state => state.boards,
  activeBoard: state => state.activeBoard,
  tasks: state => state.tasks,
  modalEdit: state => state.modalEdit,
}
