export const state = () => ({
  darkMode: false
})

export const getters = {}

export const mutations = {
  setDarkMode (state, payload) {
    state.darkMode = payload
  },
}

