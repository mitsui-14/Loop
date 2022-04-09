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
        <section class="container mb-5 col-md-9 mb-5" style="margin-top: 100px">
          <div class="d-flex">
            <h5 class="">Skateboards</h5>
            <h5 class="d-block d-md-none">/Sale</h5>
          </div>
          <hr />
          <div class="row mt-md-5">
            <div class="col-md-2 mb-3 mb-md-0">
              <div
                class="
                  nav
                  flex-md-column
                  nav-pills
                  d-flex
                  flex-nowrap
                  overflow-scroll
                "
              >
                <div
                  class="
                    nav-item
                    text-center text-md-start
                    m-1
                    col-4 col-md-12
                    scroll
                  "
                >
                  <router-link
                    class="nav-link rounded-0 scroll-a"
                    to="/skateboards"
                    >All</router-link
                  >
                </div>
                <div
                  class="text-center text-md-start m-1 col-4 col-md-12 scroll"
                >
                  <router-link
                    class="nav-link rounded-0 scroll-a"
                    to="/shortboard"
                    >Shortboard</router-link
                  >
                </div>
                <div
                  class="text-center text-md-start m-1 col-4 col-md-12 scroll"
                >
                  <router-link
                    class="nav-link rounded-0 scroll-a"
                    to="/longboard"
                    >Longboard</router-link
                  >
                </div>
                <div
                  class="text-center text-md-start m-1 col-4 col-md-12 scroll"
                >
                  <router-link class="nav-link rounded-0 scroll-a" to="/cruiser"
                    >Cruiser</router-link
                  >
                </div>
                <div class="text-center text-md-start m-1 col-4 col-md-12">
                  <router-link
                    class="nav-link rounded-0 active bg-danger"
                    to="/sale"
                    >Sale</router-link
                  >
                </div>
              </div>
            </div>
            <div class="col-md-10 mb-5">
              <div class="row g-3 gy-md-0">
                <div
                  class="col-md-4 col-6 demo text-center"
                  v-for="item in filterData"
                  :key="item.id"
                >
                  <a
                    href="#"
                    class="text-decoration-none"
                    @click.prevent="getProduct(item.id)"
                  >
                    <img class="img-fluid h-80 mb-3" :src="item.imageUrl" />
                  </a>
                  <a href="#" class="text-decoration-none">
                    <div
                      class="bg-secondary d-none d-md-block btn-cart"
                      @click.prevent="openModal(item)"
                    >
                      <p class="text-white py-2">ADD TO CART</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    class="text-decoration-none"
                    @click.prevent="getProduct(item.id)"
                  >
                    <p class="text-secondary fs-6 fw-light">
                      {{ item.title }}
                    </p>
                    <div class="d-flex justify-content-center">
                      <del
                        class="text-danger fs-6 fw-light px-2"
                        v-if="item.price !== item.origin_price"
                      >
                        NT${{ currency(item.origin_price) }}
                      </del>
                      <p class="text-secondary fs-6 fw-light px-2">
                        NT${{ currency(item.price) }}
                      </p>
                    </div>
                  </a>
                  <a href="#" class="text-decoration-none">
                    <div
                      class="border border-secondary d-block d-md-none rounded"
                      @click.prevent="openModal(item)"
                    >
                      <p class="my-auto text-dark">
                        <i
                          class="bi bi-cart-fill"
                          style="font-size: 1.2rem"
                        ></i>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="bg-dark text-center">
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
      pagination: {},
      isLoading: false,
      cartnow: 0,
      tempProduct: {},
      products: [],
      product: {},
      filterData: [],
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
    filterArray () {
      this.isLoading = true
      this.filterData = this.products.filter((item) => {
        return item.price !== item.origin_price
      })
      this.isLoading = false
    },
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
        this.filterArray()
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
        this.filterArray()
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
