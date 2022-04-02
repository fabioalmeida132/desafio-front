export const state = () => ({
  boards: [],
  activeBoard: null,
  boardSelected: {},
  tasks: [],
  subtasks: [],
  status: [],
  modalEdit: false,
  modalAddSubtask: false,
  modalEditSubtask: false,
  activeTask: null,
  activeSubtask: null
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
  ADD_SUBTASK_TO_LIST(state, subtasks) {
    state.subtasks = [];
    state.subtasks = subtasks;
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
  SET_MODAL_ADD_SUBTASK(state) {
    state.modalAddSubtask = !state.modalAddSubtask
  },
  SET_MODAL_EDIT_SUBTASK(state) {
    state.modalEditSubtask = !state.modalEditSubtask
  },
  UPDATE_TASK(state, task) {
    const index = state.tasks.findIndex(t => t.id === task.id)
    state.tasks.splice(index, 1, task)
  },
  SET_BOARD_SELECTED(state, board) {
    state.boardSelected = board
  },
  SET_TASK_ITEM_SELECTED(state, task) {
    state.activeTask = task
  },

  SET_SUBTASK_ITEM_SELECTED(state, subtask) {
    state.activeSubtask = subtask
  },

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

  async addSubtask({ commit,state }, payload) {
    const subtask = await this.$axios.$post('/subtask', payload)
    await this.$axios.$get('/subtasks/' + state.activeTask).then(subtasks => {
      commit('ADD_SUBTASK_TO_LIST', subtasks)
    })
  },

  async removeBoard({ commit }, board) {
    await this.$axios.$delete(`/board/${board.id}`)
    commit('REMOVED_BOARD_FROM_LIST', board)
  },

  async removeTask({ commit }, task) {
    await this.$axios.$delete(`/task/${task.id}`)
    commit('REMOVED_TASK_FROM_LIST', task)
  },

  async removeSubtask({ commit }, subtask) {
    const sub = await this.$axios.$delete(`/subtask/${subtask.id}`)
    return await this.$axios.$get(`/subtasks/${subtask.task_id}`)
  },

  async setActiveBoard({ commit, state }, board) {
    commit('CLEAR_TASKS', board)
    commit('SET_BOARD_SELECTED', {})

    await this.$axios.$get(`/tasks/${board}`)
      .then(tasks => {
        commit('SET_ACTIVE_BOARD', board)
        commit('SET_TASKS', tasks)
      })

    let boardSelected = state.boards.find(b => b.id === Number(board))
    commit('SET_BOARD_SELECTED', boardSelected)

  },

  async tasks({state }) {
    const tasks = await this.$axios.$get(`/tasks/${state.activeBoard}`)
    return tasks
  },

  async subtasks({},payload) {
    const subtasks =  await this.$axios.$get(`/subtasks/${payload}`)
    return subtasks
  },

  async updateTaskStatus({ commit,state }, payload) {
    const task = await this.$axios.$put(`/task/status/${payload.taskId}`, {
      statusId: payload.statusId
    })

    commit('UPDATE_TASK', task)
  },

  async updateSubtaskStatus({ commit, actions }, payload) {
    const task = await this.$axios.$put(`/subtask/status/${payload.subtaskId}`, {
      statusId: payload.statusId
    })

    let subtasksUpdated = await this.$axios.$get(`/subtasks/${payload.taskId}`)
    commit('ADD_SUBTASK_TO_LIST', subtasksUpdated)

    return subtasksUpdated
  },

  async updateTask({ commit, dispatch }, payload) {

    const task = await this.$axios.$put(`/task/${payload.id}`, {
      title: payload.title,
      description: payload.description,
      statusId: payload.statusId
    })

    commit('UPDATE_TASK', task)
  },

  async updateSubtask({ commit, dispatch }, payload) {
    const subtask = await this.$axios.$put(`/subtask/${payload.id}`, {
      title: payload.title,
      description: payload.description,
      statusId: payload.statusId
    }).then(async () => {
      const subtasksUpdated = await this.$axios.$get(`/subtasks/${payload.taskId}`)
      commit('ADD_SUBTASK_TO_LIST', subtasksUpdated)
    })


  },

  async findTask({ commit, state }, payload) {
    let task = await state.tasks.find(t => t.id === Number(payload.id))
    return task
  },

  setModalEdit({ commit }) {
    commit('SET_MODAL_EDIT')
  },

  setModalAddSubtask({ commit }) {
    commit('SET_MODAL_ADD_SUBTASK')
  },
  setModalEditSubtask({ commit }) {
    commit('SET_MODAL_EDIT_SUBTASK')
  },

  setTaskItemSelected({ commit }, task) {
    commit('SET_TASK_ITEM_SELECTED', task)
  },

  setSubtaskActive({ commit }, subtask) {
    commit('SET_SUBTASK_ITEM_SELECTED', subtask)
  }
}

export const getters = {
  boards: state => state.boards,
  activeBoard: state => state.activeBoard,
  activeTask: state => state.activeTask,
  tasks: state => state.tasks,
  subtasks: state => state.subtasks,
  modalEdit: state => state.modalEdit,
  modalAddSubtask: state => state.modalAddSubtask,
  modalEditSubtask: state => state.modalEditSubtask,
  selectedBoard: state => state.boardSelected
}
