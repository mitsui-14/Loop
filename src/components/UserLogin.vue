<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-md" role="document" style="opacity: 0.9">
      <div class="modal-content border-0">
        <div class="modal-body">
          <div class="container mt-3">
            <form class="row justify-content-center">
              <div>
                <div class="d-flex justify-content-between">
                  <h1 class="h3 mb-3 font-weight-normal">Login</h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="mb-2" v-if="loginstatus===0">
                  <label for="inputEmail" class="sr-only">Email address</label>
                  <input
                    type="email"
                    id="inputEmail"
                    class="form-control rounded-0"
                    placeholder="Email address"
                    required
                    autofocus
                  />
                </div>
                <div class="mb-2" v-if="loginstatus===0">
                  <label for="inputPassword" class="sr-only">Password</label>
                  <input
                    type="password"
                    id="inputPassword"
                    class="form-control rounded-0"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="text-end mt-4" v-if="loginstatus===0">
                  <button
                    class="btn btn-lg btn-dark btn-block rounded-0"
                    type="submit"
                    @click="signIn()"
                  >
                    Login
                  </button>
                </div>
                <div class="text-center" v-else>
                <i class="bi bi-check-square" style="font-size: 10rem;"></i>
                <h1>
Login completed</h1>
</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'
export default {
  data () {
    return {
      loginstatus: 0,
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      this.loginstatus = 1
      console.log(this.loginstatus)
    }
  },
  mixins: [modalMixin]
}
</script>
