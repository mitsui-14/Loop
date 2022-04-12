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
        <section class="container mb-5 animate__animated animate__fadeInUp" style="margin-top: 90px">
          <div class="row g-3">
            <div class="col-md-8">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <router-link to="/skateboards">
                      <img
                        src="../../image/bannertwo.jpeg"
                        class="d-block w-100"
                        alt="..."
                      />
                    </router-link>
                  </div>
                  <div class="carousel-item">
                <router-link to="/skateboards">
                      <img
                        src="../../image/bannerone.jpg"
                        class="d-block w-100"
                        alt="..."
                      />
                        </router-link>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row row-cols-2 row-cols-md-1 g-3">
                <div class="col">
                  <img
                    class="img-fluid h-100"
                    src="../../image/coupon.jpeg"
                    alt=""
                  />
                </div>
                <div class="col demo">
                  <router-link to="/sale">
                    <img
                      class="img-fluid h-100"
                      src="../../image/sale.jpeg"
                      alt=""
                    />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="container mb-5 animate__animated animate__fadeInUp">
          <div class="border-bottom border-1 border-secondary mb-4">
            <h5 class="fw-light text-secondary">STYLE</h5>
          </div>
          <div class="row g-3 mt-3">
            <div class="col-md-4 demo">
              <router-link to="/shortboard">
                <img
                  class="img-fluid h-100"
                  src="../../image/shortboard.jpeg"
                />
              </router-link>
            </div>
            <div class="col-md-4 demo">
              <router-link to="/longboard">
                <img
                  class="img-fluid h-100"
                  src="../../image/longboard.jpeg"
                  alt=""
                />
              </router-link>
            </div>
            <div class="col-md-4 demo">
              <router-link to="/cruiser">
                <img
                  class="img-fluid h-100"
                  src="../../image/cruiser.jpeg"
                  alt=""
                />
              </router-link>
            </div>
          </div>
        </section>
        <section class="container mb-5 animate__animated animate__fadeInUp">
          <div class="border-bottom border-1 border-secondary mb-4">
            <h5 class="fw-light text-secondary">RECOMMEND</h5>
          </div>
          <div class="row g-3 mt-3">
            <div
              class="col-lg-3 col-6 demo text-center"
              v-for="item in products.slice(2, 6)"
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
                    <i class="bi bi-cart-fill" style="font-size: 1.2rem"></i>
                  </p>
                </div>
              </a>
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
import UserLogin from '../components/UserLogin.vue'
import { currency } from '../methods/filters'

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
