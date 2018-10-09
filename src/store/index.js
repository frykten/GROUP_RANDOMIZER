import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: null,
    resultToPrint: null,
    array: null
  },
  getters: {
    list: state => state.list,
    resultToPrint: state => state.resultToPrint,
    array: state => state.array
  },
  mutations: {
    setList(state, newList) {
      console.warn("Here's the VUEX")
      
      state.list = newList
      console.warn(state.list)
    },
    setResultToPrint(state, newResultToPrint) {
      state.resultToPrint = newResultToPrint
    },
    setArray(state, newArray) {
      state.array = newArray
    }
  }
})