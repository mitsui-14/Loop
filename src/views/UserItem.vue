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
        <div class="container col-md-8" style="margin-top: 80px">
          <div class="row justify-content-center g-md-5 mt-4">
            <nav aria-label="breadcrumb" class="d-md-none">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link
                    class="text-decoration-none text-secondary"
                    to="/skateboards"
                    >ALL</router-link
                  >
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {{ product.category }}
                </li>
              </ol>
            </nav>
            <article class="col-md-6 text-center">
              <img :src="product.imageUrl" alt="" class="img-fluid mb-3" />
            </article>
            <div class="col-md-6 pt-2">
              <nav aria-label="breadcrumb" class="d-none d-md-block">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link
                      class="text-decoration-none text-secondary"
                      to="/skateboards"
                      >ALL</router-link
                    >
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {{ product.category }}
                  </li>
                </ol>
              </nav>
              <p class="fs-2">{{ product.title }}</p>
              <p class="fs-4">{{ product.unit }}</p>
              <p class="fs-4">{{ product.content }}</p>
              <hr />
              <del
                class="h4 text-danger"
                v-if="product.price !== product.origin_price"
                >NT$ {{ currency(product.origin_price) }}</del
              >
              <div class="h4 mt-3 mb-3" v-if="product.price">
                NT$ {{ currency(product.price) }}
              </div>
              <div class="mb-4 mt-3">
                <input
                  class="form-control form-control-lg rounded-0"
                  v-model.number="qty"
                  type="number"
                  min="1"
                />
              </div>
              <div class="d-flex">
                <button
                  type="button"
                  class="btn btn-danger text-white rounded-0 w-50 btn-lg"
                  @click="addToCart(product.id)"
                >
                  ADD TO CART
                </button>
                <button
                  type="button"
                  class="btn btn-outline-dark rounded-0 w-50 ms-3 btn-lg"
                  @click="nowToBuy(product.id)"
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <p class="fs-3">PRODUCT DESCRIPTION</p>
            {{ product.description }}
          </div>
        </div>

        <footer class="bg-dark text-center" style="margin-top: 8%">
          <div class="row py-5">
            <div class="col-md-4 text-white mx-auto">
              <p>New Taipei City 242</p>
            </div>
            <div class="col-md-4 text-white mx-auto">
              <p>© 2022 Luis | All rights reserved.</p>
            </div>
            <div class="col-md-4 text-white mx-auto">
              <a class="text-decoration-none text-light" href="#">GitHub</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
    <UserLogin ref="userLogin"></UserLogin>
  </body>
</template>

<script>
import { currency } from '../methods/filters'
import UserLogin from '../components/UserLogin.vue'

export default {
  data () {
    return {
      status: {
        loadingItem: ''
      },
      cart: {},
      cartnow: 0,
      product: {},
      id: '',
      loadingItem: false,
      isLoading: true,
      qty: 1
    }
  },
  components: { UserLogin },
  methods: {
    currency,
    toogleMenu (evt) {
      evt.preventDefault()
      this.$refs.body.classList.toggle('sidebar-toggled')
    },
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        console.log(response.data)
        this.isLoading = false
        if (response.data.success) {
          this.product = response.data.product
        }
      })
    },
    addToCart (id, qty = this.qty) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.$http.post(url, { data: cart }).then((res) => {
        this.isLoading = false
        this.loadingItem = true
        console.log(res)
        this.getCart()
      })
    },
    nowToBuy (id, qty = this.qty) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.$http.post(url, { data: cart }).then((res) => {
        this.isLoading = false
        this.loadingItem = true
        console.log(res)
        this.$router.push('cart')
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
    removeCartItem (item) {
      const id = item
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url).then((res) => {
        console.log(res)
        this.getCart()
      })
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
    this.id = this.$route.params.productId
    this.getProduct()
    this.getCart()
  }
}
</script>
