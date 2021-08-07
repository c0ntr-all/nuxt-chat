export const state = () => ({
  user: {},
  messages: [],
  users: []
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  clearData(state) {
    state.user = {}
    state.messages = []
    state.users = []
  },
  addMessage(state, message) {
    state.messages.push(message)
  },
  checkUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  SOCKET_newMessage({commit}, data) {
    commit("addMessage", data)
  },
  SOCKET_updateUsers({commit}, data) {
    commit("checkUsers", data)
  }
}