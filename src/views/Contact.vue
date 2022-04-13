<template>
  <Loading :active="isLoading"></Loading>
  <body ref="body">
    <div class="d-flex" style="overflow-x: hidden">
      <aside class="sidebar vh-100 d-md-none bg-dark fixed-top">
        <div class="navbar-toggler mt-2">
          <a href="#">
            <i
              class="bi bi-arrow-left text-white"
              @click="toogleMenu"
              style="font-size: 2rem"
            ></i>
          </a>
        </div>

        <div class="text-center" style="margin-top: 40%">
          <div class="mt-5">
            <router-link class="text-decoration-none link-light" to="/about">
              About</router-link
            >
          </div>

          <div class="mt-5">
            <router-link
              class="text-decoration-none link-light"
              to="/skateboards"
            >
              Skateboards</router-link
            >
          </div>
          <div class="mt-5">
            <router-link class="text-decoration-none link-light" to="/contact">
              Contact</router-link
            >
          </div>
        </div>
      </aside>
      <main class="main">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container d-flex justify-content-between">
            <button
              class="navbar-toggler"
              type="button"
              id="navbar-btn"
              @click="toogleMenu"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <router-link
              class="navbar-brand text-white ms-md-0 ms-5 h2 mb-0 text-center"
              to="/userboard"
            >
              LOOP</router-link
            >
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li class="nav-item">
                  <router-link class="nav-link text-white fs-5" to="/about">
                    About /</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link text-white fs-5"
                    to="/skateboards"
                  >
                    Skateboards /</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link text-white fs-5" to="/contact">
                    Contact</router-link
                  >
                </li>
              </ul>
            </div>
            <ul class="d-flex justify-content-between list-unstyled mb-2">
              <li class="mx-2">
                <a href="#"
                  ><i
                    @click.prevent="openLogin()"
                    class="bi bi-person text-white"
                    style="font-size: 1.7rem"
                  ></i
                ></a>
              </li>
              <li class="mx-2">
                <div class="dropdown">
                  <a
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i
                      class="bi bi-cart text-white position-relative"
                      style="font-size: 1.7rem"
                    >
                      <span
                        v-if="cartnow !== 0"
                        class="
                          position-absolute
                          top-0
                          start-100
                          translate-middle
                          p-1
                          bg-danger
                          border border-light
                          rounded-circle
                        "
                      >
                        <span class="visually-hidden">New alerts</span>
                      </span>
                    </i>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuLink"
                    style="width: 350px; opacity: 0.9"
                  >
                    <div v-if="cartnow !== 0">
                      <table class="table align-middle">
                        <thead>
                          <tr>
                            <th></th>
                            <th>商品名稱</th>
                            <th>數量</th>
                            <th>單價</th>
                          </tr>
                        </thead>
                        <tbody>
                          <template v-if="cart.carts">
                            <tr v-for="item in cart.carts" :key="item.id">
                              <td class="align-middle">
                                <button
                                  type="button"
                                  class="btn btn-outline-dark btn-sm"
                                  :disabled="status.loadingItem === item.id"
                                  @click="removeCartItem(item.id)"
                                >
                                  <i class="bi bi-x"></i>
                                </button>
                              </td>
                              <td class="align-middle">
                                {{ item.product.title }}
                              </td>
                              <td class="align-middle">
                                {{ item.qty }}
                              </td>
                              <td class="align-middle">
                                {{ $filters.currency(item.final_total) }}
                              </td>
                            </tr>
                          </template>
                        </tbody>
                      </table>
                      <div class="text-end me-2">
                        <router-link
                          to="/cart"
                          class="btn btn-outline-danger rounded-0"
                        >
                          前往結帳
                        </router-link>
                      </div>
                    </div>
                    <div v-else class="text-center">
                      <p class="h4 p-1">Your cart is currently empty.</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div class="discount-banner row">
          <div class="col-md-6">
            <p class="text-center display-5 mt-5 ms-md-5 text-info">
              NEW OPENNING
            </p>
          </div>
          <div class="col-md-6">
            <p class="text-center display-6 mt-md-3 mt-3 me-md-5 text-info">
              DISCOUNT CODE
            </p>
            <p class="text-center display-2 me-md-5 text-info mt-3">
              4kete 20%off
            </p>
          </div>
        </div>
        <section class="container col-md-9 mb-5 d-none d-md-block">
          <h1 class="mt-3 mb-3">Contact.</h1>
          <div class="row border border-3 border-dark p-md-5 rounded-pill">
            <div class="col-md-6">
              <div class="youtube-rwd">
                <iframe
                  src="https://www.youtube.com/embed/xKAPHmQJ5CE?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="col-md-6 mt-3 mt-md-0">
              <h3>OPEN TIME</h3>
              <p class="fs-5">2:00 PM - 8:00 PM - Monday - Saturday</p>
              <h3>TEL</h3>
              <p class="fs-5">080-0857-057</p>
              <h3>ADDRESS</h3>
              <p class="fs-5">
                101F, No.23, Shvit 13, Skateboards Rd., Heaven City
              </p>
            </div>
          </div>
        </section>
        <section class="container col-md-9 mb-5 d-block d-md-none">
          <h1 class="mt-3 mb-3">Contact.</h1>
          <div class="row">
            <div class="col-md-8">
              <div class="youtube-rwd">
                <iframe
                  src="https://www.youtube.com/embed/xKAPHmQJ5CE?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="col-md-4 mt-3 mt-md-0">
              <h3>OPEN TIME</h3>
              <p class="fs-5">2:00 PM - 8:00 PM - Monday - Saturday</p>
              <h3>TEL</h3>
              <p class="fs-5">080-0857-057</p>
              <h3>ADDRESS</h3>
              <p class="fs-5">
                101F, No.23, Shvit 13, Skateboards Rd., Heaven City
              </p>
            </div>
          </div>
        </section>
        <footer class="bg-dark text-center">
          <div class="row py-5">
            <div class="col-md-4 text-white mx-auto">
              <p>Shuvit1080@gmail.com</p>
            </div>
            <div class="col-md-4 text-white mx-auto">
              <p>© 2022 Luis | All rights reserved.</p>
            </div>
            <div class="col-md-4 text-white mx-auto">
               <a class="text-decoration-none text-light" href="https://github.com/mitsui-14/Loop.git">GitHub</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
    <UserModal
      ref="userModal"
      :product="tempProduct"
      @get-cart="getCart"
    ></UserModal>
    <UserLogin ref="userLogin"></UserLogin>
  </body>
</template>
<script>
import UserModal from '../components/UserModal.vue'
import { currency } from '../methods/filters'
import UserLogin from '../components/UserLogin.vue'

export default {
  data () {
    return {
      isLoading: false,
      cartnow: 0,
      tempProduct: {},
      products: [],
      product: {},
      status: {
        loadingItem: ''
      },
      cart: {},
      coupon_code: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  components: { UserModal, UserLogin },
  methods: {
    currency,
    toogleMenu (evt) {
      evt.preventDefault()
      this.$refs.body.classList.toggle('sidebar-toggled')
    },
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.products = response.data.products
        console.log('products:', response)
        this.isLoading = false
      })
    },
    getProduct (id) {
      this.$router.push(`product/${id}`)
    },
    addCart (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty: 1
      }
      this.$http.post(url, { data: cart }).then((res) => {
        this.status.loadingItem = ''
        console.log(res)
        this.getCart()
      })
    },
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        console.log(response)
        this.cart = response.data.data
        this.isLoading = false
      })
    },
    updateCart (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      this.status.loadingItem = item.id
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.$http.put(url, { data: cart }).then((res) => {
        this.status.loadingItem = ''
        console.log(res)
        this.getCart()
      })
    },
    removeCartItem (item) {
      const id = item
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url).then((res) => {
        console.log(res)
        this.getCart()
      })
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.$http.post(url, { data: coupon }).then((res) => {
        console.log(res)
        this.getCart()
      })
    },
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order }).then((res) => {
        console.log(res)
        this.getCart()
      })
    },
    openModal (item) {
      console.log(item)
      this.tempProduct = { ...item }
      const userComponent = this.$refs.userModal
      userComponent.showModal()
    },
    openLogin () {
      const userLogin = this.$refs.userLogin
      userLogin.showModal()
    }
  },
  watch: {
    cart (n) {
      if (n.total > 0) {
        this.cartnow = 1
      } else {
        this.cartnow = 0
      }
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>
