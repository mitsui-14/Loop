<template>
  <nav
    class="navbar navbar-expand-md p-0 sticky-top navbar-light"
    style="background: black"
  >
    <div class="container-fluid d-flex justify-content-between">
      <button
        class="navbar-toggler d-bilock d-md-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div class="bar1"></div>
        <div class="bar2 mt-2"></div>
      </button>
      <div class="nav-item font-weight-bold py-md-0 text-center">
        <a href="#/" class="nav-link"
          ><h1 class="font-weight-bold mb-0 h4 text-center text-white">
            <span class="nav-logo">Loop</span>
          </h1></a
        >
      </div>
      <ul class="d-flex d-md-none align-items-center pt-3">
        <li class="position-relative me-2" style="list-style-type: none">
          <a href="#/wishlist" class="link"
            ><span class="material-icons-outlined" style="color: white"
              >favorite_border</span
            ></a
          >
        </li>
        <li class="position-relative" style="list-style-type: none">
          <a href="#/wishlist" class="link ps-2"
            ><span class="material-icons-outlined" style="color: white"
              >shopping_cart</span
            ></a
          >
        </li>
      </ul>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#"
              >Home</a
            >
          </li>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDarkDropdownMenuLink"
                style="background: black"
              >
                <li>
                  <a
                    class="dropdown-item text-white"
                    style="background: black"
                    href="#"
                    >Action</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-white"
                    style="background: black"
                    href="#"
                    >Another action</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-white"
                    style="background: black"
                    href="#"
                    >Something else here</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item d-md-none">
              <a class="nav-link text-white" href="#">Home</a>
            </li>
          </ul>
        </ul>
      </div>
      <ul class="d-none d-md-flex align-items-center pt-3">
        <li style="list-style-type: none">
          <a href="#" class="link px-3"
            ><span class="material-icons-outlined" style="color: white"
              >person_outline</span
            ></a
          >
        </li>
        <li class="position-relative" style="list-style-type: none">
          <a href="#/wishlist" class="link px-3"
            ><span class="material-icons-outlined" style="color: white"
              >favorite_border</span
            ></a
          >
        </li>
        <li class="position-relative" style="list-style-type: none">
          <a href="#" class="link px-3"
            ><span class="material-icons-outlined" style="color: white"
              >shopping_cart</span
            ></a
          >
        </li>
      </ul>
    </div>
  </nav>
  <div class="row mt-4">
    <div class="col-md-7">
      <table class="table align-middle">
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td style="width: 200px">
              <div
                style="
                  height: 100px;
                  background-size: cover;
                  background-position: center;
                "
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
              ></div>
            </td>
            <td>
              <a href="#" class="text-dark">{{ item.title }}</a>
            </td>
            <td>
              <div class="h5" v-if="!item.price">
                {{ item.origin_price }} 元
              </div>
              <del class="h6" v-if="item.price"
                >原價 {{ item.origin_price }} 元</del
              >
              <div class="h5" v-if="item.price">
                現在只要 {{ item.price }} 元
              </div>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="getProduct(item.id)"
                >
                  查看更多
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="addCart(item.id)"
                  :disabled="this.status.loadingItem === item.id"
                >
                  <div
                    class="spinner-grow spinner-grow-sm text-danger"
                    role="status"
                    v-if="this.status.loadingItem === item.id"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  加到購物車
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="footer d-flex align-items-center mt-5" style="background: black">
    <div class="container text-left mt-3 p-2">
      <div class="row">
        <div class="col-md-4">
          <div class="h6 text-light mb-4 d-flex d-md-none font-weight-bold">
            <a
              target="_blank"
              href="https://github.com/HuiyuLiz/vue-ecommerce"
              class="h6 text-light font-weight-bold"
              >About</a
            >
            &nbsp; |&nbsp;
            <a
              target="_blank"
              href="https://github.com/HuiyuLiz"
              class="h6 text-light font-weight-bold"
              >GitHub</a
            >
          </div>
          <div class="h6 text-light font-weight-bold">
            Zhongping Rd., Xinzhuang Dist.,
          </div>
          <div class="h6 text-light mb-4 font-weight-bold">
            New Taipei City 242
          </div>
          <small class="text-light"
            >© 2021 Geyao Sandwich | All rights reserved.</small
          >
        </div>
        <div class="col-md-4 d-none d-md-flex justify-content-center">
          <a
            target="_blank"
            href="https://github.com/HuiyuLiz/vue-ecommerce"
            class="h6 text-light font-weight-bold"
            >About</a
          >
        </div>
        <div class="col-md-4 d-none d-md-flex justify-content-center">
          <a
            target="_blank"
            href="https://github.com/HuiyuLiz"
            class="h6 text-light font-weight-bold"
            >GitHub</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
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
  methods: {
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
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>
