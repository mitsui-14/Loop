<template>
<Navbar></Navbar>
<ToastMessages></ToastMessages>
<div class="container-fluid">
<router-view/>
</div>
</template>
<script>
import emitter from '@/methods/emitter'
import Navbar from '../components/Navbar.vue'
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  components: {
    Navbar,
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = `${token}`
    console.log(token)
    const api = `${process.env.VUE_APP_API}api/user/check` // eslint-disable-line no-unused-vars
    this.$http.post(api, token)
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>
