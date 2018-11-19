import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: null,
    resultToPrint: null,
    array: null,
    isError: false
  },
  getters: {
    list: state => state.list,
    resultToPrint: state => state.resultToPrint,
    array: state => state.array,
    isError: state => state.isError
  },
  mutations: {
    setList(state, newList) {
      state.list = newList
//      console.log(state.list)
//      console.log(newList)
    },
    setResultToPrint(state, newResultToPrint) {
      state.resultToPrint = newResultToPrint
    },
    setArray(state, newArray) {
      state.array = newArray
    },
    setErrorState(state, newErrorState) {
      state.isError = newErrorState
    }
  }
})