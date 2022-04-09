 <template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">後台</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http://localhost:8081/dist/#/dashboard/products">產品</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http://localhost:8081/dist/#/dashboard/orders">訂單</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:8081/dist/#/dashboard/coupons">優惠卷</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="logout">登出</a>
        </li>
      </ul>
      <span class="navbar-text">
       </span>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    logout () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = `${token}`
      console.log(token)
      const api = `${process.env.VUE_APP_API}logout` // eslint-disable-line no-unused-vars
      this.$http.post(api, token)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/login')
          }
        })
    }
  }
}
</script>
