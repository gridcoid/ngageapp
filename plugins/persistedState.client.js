import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState()(store)
}

// export default ({ store }) => {
//   createPersistedState({
//     reducer(state) {
//       return {
//         ...state,
//         query: {
//           ...state.query,
//           dataResult: {}, // don't persist this cache
//           dataList: {}, // don't persist this cache
//         },
//       }
//     },
//   })(store)
// }
