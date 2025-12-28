export default function ({ store, $auth, $axios, redirect }) {
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      $auth.logout()
      store.dispatch('reset')
      redirect('/login')
    }
  })
}
