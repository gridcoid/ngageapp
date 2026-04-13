export default function ({ store, $auth, $axios, redirect }) {
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      console.error('Unauthorized')
      redirect('/')
    }
  })
}
