import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        common: {
            count: 23,
            selectedIndex: 0
        }
    },
    mutations: {
        increment(state) {
            state.common.count++
        },
        setIndex(state, index) {
            console.log(index);
            state.common.selectedIndex = index;
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        },
        setIndex(context, index) {
            console.log(index);
            context.commit('setIndex', index);
        }
    }
})


export default store;