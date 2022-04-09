<template>
  <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <div class="swiper-slide d-md-flex justify-content-center">
      <div class="d-none d-md-block">
        <div class="p-4" style="border: 3px solid #272727; background: #e47f54">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce%2F1577638138870.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=iJ480yHEl40v0SyV%2B%2Bozbx%2FvMjH9STGiBmnLbtXwaFhsZGT3MhURfDOLx%2BI6AGKXEYaycEN363w%2BL9iziCBF%2BP7FPJbChh39RbwAu6lwTFwFQhSgnZw8mZ3vk0Sm1eQmtE3hXKPHg5RLxlgOiLO0lS1QEnfcUH4yA41BQ8gxa1lSzFYBIMx2GmcUWHVJG4RNgwEicdPlM%2Bs52dzDYjUgWV7V81DOwCrgnO9y1%2Bn9VAFbRsbZXbjTfM3eyaUBWGgmSMF4cJh4aioL7oDhiAGm03YnXtMs5Mf5dBDXLWqdyp9wAirVINprLawIKPrxH6foLaZ7%2FaGmrwEZSAGHSEYzIg%3D%3D"
            class="img-fluid"
            alt="..."
          />
        </div>
      </div>
      <div
        class="col-md-7 col-lg-6 p-4 justify-content-start d-none d-md-block"
      >
        <h4 class="fs-3 fs-md-2 mb-2 mb-lg-4">The Grand Budapest Hotel</h4>
        <div class="badge bg-primary">SALE</div>
        <hr style="border: 1px solid #000000" />
        <div>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">YEAR：</p>
            <p class="col-8 col-lg-7">2014</p>
          </li>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">COUNTRY：</p>
            <p class="col-8 col-lg-7">United States</p>
          </li>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">TYPE：</p>
            <p class="col-8 col-lg-7">Unfolded Original One Sheet</p>
          </li>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">SIZE：</p>
            <p class="col-8 col-lg-7">61 × 91.5 cm</p>
          </li>
        </div>
        <hr style="border: 1px solid #000000" />
        <p class="mb-2 mb-lg-4">
          famed concierge of a twentieth-century mountainside resort in the
          fictional East European country of Zubrowka. When Gustave is framed
          for the murder of a wealthy dowager, he and hi...
        </p>
      </div>
      <div class="d-md-none">
        <div
          class="p-4 m-5"
          style="border: 3px solid #272727; background: #e47f54"
        >
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce%2F1577638138870.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=iJ480yHEl40v0SyV%2B%2Bozbx%2FvMjH9STGiBmnLbtXwaFhsZGT3MhURfDOLx%2BI6AGKXEYaycEN363w%2BL9iziCBF%2BP7FPJbChh39RbwAu6lwTFwFQhSgnZw8mZ3vk0Sm1eQmtE3hXKPHg5RLxlgOiLO0lS1QEnfcUH4yA41BQ8gxa1lSzFYBIMx2GmcUWHVJG4RNgwEicdPlM%2Bs52dzDYjUgWV7V81DOwCrgnO9y1%2Bn9VAFbRsbZXbjTfM3eyaUBWGgmSMF4cJh4aioL7oDhiAGm03YnXtMs5Mf5dBDXLWqdyp9wAirVINprLawIKPrxH6foLaZ7%2FaGmrwEZSAGHSEYzIg%3D%3D"
            class="img-fluid"
            alt="..."
          />
        </div>
      </div>
      <div class="col-md-7 col-lg-6 p-4 justify-content-start d-md-none m-5">
        <h4 class="fs-3 fs-md-2 mb-2 mb-lg-4">The Grand Budapest Hotel</h4>
        <div class="badge bg-primary">SALE</div>
        <hr style="border: 1px solid #000000" />
        <div>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">YEAR：</p>
            <p class="col-8 col-lg-7">2014</p>
          </li>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">COUNTRY：</p>
            <p class="col-8 col-lg-7">United States</p>
          </li>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">TYPE：</p>
            <p class="col-8 col-lg-7">Unfolded Original One Sheet</p>
          </li>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">SIZE：</p>
            <p class="col-8 col-lg-7">61 × 91.5 cm</p>
          </li>
        </div>
        <hr style="border: 1px solid #000000" />
        <p class="mb-2 mb-lg-4">
          famed concierge of a twentieth-century mountainside resort in the
          fictional East European country of Zubrowka. When Gustave is framed
          for the murder of a wealthy dowager, he and hi...
        </p>
      </div>
    </div>
    <div class="swiper-slide d-md-flex justify-content-center">
      <div class="d-none d-md-block">
        <div class="p-4" style="border: 3px solid #272727; background: #455ed7">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce%2F1577638138870.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=iJ480yHEl40v0SyV%2B%2Bozbx%2FvMjH9STGiBmnLbtXwaFhsZGT3MhURfDOLx%2BI6AGKXEYaycEN363w%2BL9iziCBF%2BP7FPJbChh39RbwAu6lwTFwFQhSgnZw8mZ3vk0Sm1eQmtE3hXKPHg5RLxlgOiLO0lS1QEnfcUH4yA41BQ8gxa1lSzFYBIMx2GmcUWHVJG4RNgwEicdPlM%2Bs52dzDYjUgWV7V81DOwCrgnO9y1%2Bn9VAFbRsbZXbjTfM3eyaUBWGgmSMF4cJh4aioL7oDhiAGm03YnXtMs5Mf5dBDXLWqdyp9wAirVINprLawIKPrxH6foLaZ7%2FaGmrwEZSAGHSEYzIg%3D%3D"
            class="img-fluid"
            alt="..."
          />
        </div>
      </div>
      <div
        class="col-md-7 col-lg-6 p-4 justify-content-start d-none d-md-block"
      >
        <h4 class="fs-3 fs-md-2 mb-2 mb-lg-4">The Grand Budapest Hotel</h4>
        <div class="badge bg-primary">SALE</div>
        <hr style="border: 1px solid #000000" />
        <div>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">YEAR：</p>
            <p class="col-8 col-lg-7">2014</p>
          </li>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">COUNTRY：</p>
            <p class="col-8 col-lg-7">United States</p>
          </li>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">TYPE：</p>
            <p class="col-8 col-lg-7">Unfolded Original One Sheet</p>
          </li>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">SIZE：</p>
            <p class="col-8 col-lg-7">61 × 91.5 cm</p>
          </li>
        </div>
        <hr style="border: 1px solid #000000" />
        <p class="mb-2 mb-lg-4">
          famed concierge of a twentieth-century mountainside resort in the
          fictional East European country of Zubrowka. When Gustave is framed
          for the murder of a wealthy dowager, he and hi...
        </p>
      </div>
      <div class="d-md-none">
        <div
          class="p-4 m-5"
          style="border: 3px solid #272727; background: #455ed7"
        >
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce%2F1577638138870.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=iJ480yHEl40v0SyV%2B%2Bozbx%2FvMjH9STGiBmnLbtXwaFhsZGT3MhURfDOLx%2BI6AGKXEYaycEN363w%2BL9iziCBF%2BP7FPJbChh39RbwAu6lwTFwFQhSgnZw8mZ3vk0Sm1eQmtE3hXKPHg5RLxlgOiLO0lS1QEnfcUH4yA41BQ8gxa1lSzFYBIMx2GmcUWHVJG4RNgwEicdPlM%2Bs52dzDYjUgWV7V81DOwCrgnO9y1%2Bn9VAFbRsbZXbjTfM3eyaUBWGgmSMF4cJh4aioL7oDhiAGm03YnXtMs5Mf5dBDXLWqdyp9wAirVINprLawIKPrxH6foLaZ7%2FaGmrwEZSAGHSEYzIg%3D%3D"
            class="img-fluid"
            alt="..."
          />
        </div>
      </div>
      <div class="col-md-7 col-lg-6 p-4 justify-content-start d-md-none m-5">
        <h4 class="fs-3 fs-md-2 mb-2 mb-lg-4">The Grand Budapest Hotel</h4>
        <div class="badge bg-primary">SALE</div>
        <hr style="border: 1px solid #000000" />
        <div>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">YEAR：</p>
            <p class="col-8 col-lg-7">2014</p>
          </li>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">COUNTRY：</p>
            <p class="col-8 col-lg-7">United States</p>
          </li>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">TYPE：</p>
            <p class="col-8 col-lg-7">Unfolded Original One Sheet</p>
          </li>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">SIZE：</p>
            <p class="col-8 col-lg-7">61 × 91.5 cm</p>
          </li>
        </div>
        <hr style="border: 1px solid #000000" />
        <p class="mb-2 mb-lg-4">
          famed concierge of a twentieth-century mountainside resort in the
          fictional East European country of Zubrowka. When Gustave is framed
          for the murder of a wealthy dowager, he and hi...
        </p>
      </div>
    </div>
    <div class="swiper-slide d-md-flex justify-content-center">
      <div class="d-none d-md-block">
        <div class="p-4" style="border: 3px solid #272727; background: #f2f46d">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce%2F1577638138870.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=iJ480yHEl40v0SyV%2B%2Bozbx%2FvMjH9STGiBmnLbtXwaFhsZGT3MhURfDOLx%2BI6AGKXEYaycEN363w%2BL9iziCBF%2BP7FPJbChh39RbwAu6lwTFwFQhSgnZw8mZ3vk0Sm1eQmtE3hXKPHg5RLxlgOiLO0lS1QEnfcUH4yA41BQ8gxa1lSzFYBIMx2GmcUWHVJG4RNgwEicdPlM%2Bs52dzDYjUgWV7V81DOwCrgnO9y1%2Bn9VAFbRsbZXbjTfM3eyaUBWGgmSMF4cJh4aioL7oDhiAGm03YnXtMs5Mf5dBDXLWqdyp9wAirVINprLawIKPrxH6foLaZ7%2FaGmrwEZSAGHSEYzIg%3D%3D"
            class="img-fluid"
            alt="..."
          />
        </div>
      </div>
      <div
        class="col-md-7 col-lg-6 p-4 justify-content-start d-none d-md-block"
      >
        <h4 class="fs-3 fs-md-2 mb-2 mb-lg-4">The Grand Budapest Hotel</h4>
        <div class="badge bg-primary">SALE</div>
        <hr style="border: 1px solid #000000" />
        <div>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">YEAR：</p>
            <p class="col-8 col-lg-7">2014</p>
          </li>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">COUNTRY：</p>
            <p class="col-8 col-lg-7">United States</p>
          </li>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">TYPE：</p>
            <p class="col-8 col-lg-7">Unfolded Original One Sheet</p>
          </li>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">SIZE：</p>
            <p class="col-8 col-lg-7">61 × 91.5 cm</p>
          </li>
        </div>
        <hr style="border: 1px solid #000000" />
        <p class="mb-2 mb-lg-4">
          famed concierge of a twentieth-century mountainside resort in the
          fictional East European country of Zubrowka. When Gustave is framed
          for the murder of a wealthy dowager, he and hi...
        </p>
      </div>
      <div class="d-md-none">
        <div
          class="p-4 m-5"
          style="border: 3px solid #272727; background: #f2f46d"
        >
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce%2F1577638138870.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=iJ480yHEl40v0SyV%2B%2Bozbx%2FvMjH9STGiBmnLbtXwaFhsZGT3MhURfDOLx%2BI6AGKXEYaycEN363w%2BL9iziCBF%2BP7FPJbChh39RbwAu6lwTFwFQhSgnZw8mZ3vk0Sm1eQmtE3hXKPHg5RLxlgOiLO0lS1QEnfcUH4yA41BQ8gxa1lSzFYBIMx2GmcUWHVJG4RNgwEicdPlM%2Bs52dzDYjUgWV7V81DOwCrgnO9y1%2Bn9VAFbRsbZXbjTfM3eyaUBWGgmSMF4cJh4aioL7oDhiAGm03YnXtMs5Mf5dBDXLWqdyp9wAirVINprLawIKPrxH6foLaZ7%2FaGmrwEZSAGHSEYzIg%3D%3D"
            class="img-fluid"
            alt="..."
          />
        </div>
      </div>
      <div class="col-md-7 col-lg-6 p-4 justify-content-start d-md-none m-2">
        <h4 class="fs-3 fs-md-2 mb-2 mb-lg-4">The Grand Budapest Hotel</h4>
        <div class="badge bg-primary">SALE</div>
        <hr style="border: 1px solid #000000" />
        <div>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">YEAR：</p>
            <p class="col-8 col-lg-7">2014</p>
          </li>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">COUNTRY：</p>
            <p class="col-8 col-lg-7">United States</p>
          </li>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">TYPE：</p>
            <p class="col-8 col-lg-7">Unfolded Original One Sheet</p>
          </li>
          <li class="row mb-2 mb-lg-4">
            <p class="col-4 col-lg-3">SIZE：</p>
            <p class="col-8 col-lg-7">61 × 91.5 cm</p>
          </li>
        </div>
        <hr style="border: 1px solid #000000" />
        <p class="mb-2 mb-lg-4">
          famed concierge of a twentieth-century mountainside resort in the
          fictional East European country of Zubrowka. When Gustave is framed
          for the murder of a wealthy dowager, he and hi...
        </p>
      </div>
    </div>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

// Import Swiper Vue.js components
import { Swiper } from 'vue-awesome-swiper'

// Import Swiper styles
import 'swiper/swiper-bundle.css'
import 'swiper/modules/navigation/navigation.css'
import 'swiper/modules/pagination/pagination.css'

// Import Swiper styles
export default {
  components: {
    Swiper
  },
  setup () {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y]
    }
  }
}
</script>
