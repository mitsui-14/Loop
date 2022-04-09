<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-lg" role="document" style="opacity:0.9;">
      <div class="modal-content border-0">
        <div class="modal-body">
          <div class="row justify-content-center gx-md-3">
            <article class="col-md-6 text-center">
            <button
            type="button"
            class="btn-close ms-auto d-block d-md-none mb-3"
            data-bs-dismiss="modal"
            aria-label="Close"
             @click="resetQty"
          ></button>
              <img :src="product.imageUrl" alt="" class="img-fluid mb-3" />
            </article>
            <div class="col-md-6 position-relative">
            <div class="d-flex">
              <p class="fs-4">{{ product.title }}</p>
              <button
            type="button"
            class="btn-close ms-auto d-none d-md-block"
            data-bs-dismiss="modal"
            aria-label="Close"
             @click="resetQty"
          ></button>
          </div>
              <p class="fs-5">{{ product.unit }}</p>
              <p class="fs-5">{{ product.content }}</p>
              <hr />
              <del
                class="h5 text-danger"
                v-if="product.price !== product.origin_price"
                >NT$ {{ currency(product.origin_price) }}</del
              >
              <div class="h5 mt-3 mb-3" v-if="product.price">
                NT$ {{ currency(product.price) }}
              </div>
              <div class="position-absolute bottom-0 w-100 start-0 translate-middle-y px-2 d-none d-md-block">
              <div class="d-flex">
                <input
                  class="form-control form-control-sm rounded-0 w-50"
                  v-model.number="qty"
                  type="number"
                  min="1"
                />
                <button
                  type="button"
                  class="btn btn-danger text-white rounded-0 w-50 btn-sm ms-3"
                  data-bs-dismiss="modal"
                  @click="addToCart(product.id)"
                >
                  ADD TO CART
                </button>
              </div>
              </div>
               <div class="d-flex d-block d-md-none">
                <input
                  class="form-control form-control-sm rounded-0 w-50"
                  v-model.number="qty"
                  type="number"
                  min="1"
                />
                <button
                  type="button"
                  class="btn btn-danger text-white rounded-0 w-50 btn-sm ms-3"
                  data-bs-dismiss="modal"
                  @click="addToCart(product.id)"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'
import { currency } from '../methods/filters'
export default {
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {
    product () {
      this.tempProduct = this.product
    }
  },
  data () {
    return {
      modal: {},
      tempProduct: {},
      qty: 1
    }
  },
  methods: {
    currency,
    uploadFile () {
      const uploadedFile = this.$refs.fileInput.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload` // eslint-disable-line no-unused-vars
      this.$http.post(url, formData).then((response) => {
        console.log(response.data)
        if (response.data.success) {
          this.tempProduct.imageUrl = response.data.imageUrl
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
        this.qty = 1
        this.$emit('get-cart')
      })
    },
    resetQty () {
      this.qty = 1
    }
  },
  mixins: [modalMixin]
}
</script>
