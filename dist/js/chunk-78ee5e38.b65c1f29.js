(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78ee5e38"],{"1dde":function(t,e,c){var a=c("d039"),o=c("b622"),n=c("2d00"),l=o("species");t.exports=function(t){return n>=51||!a((function(){var e=[],c=e.constructor={};return c[l]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"76db":function(t,e,c){"use strict";c.r(e);c("b0c0");var a=c("7a23"),o={class:"container"},n={class:"row mt-4"},l={class:"col-md-7"},s={class:"table align-middle"},r=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",null,"圖片"),Object(a["h"])("th",null,"商品名稱"),Object(a["h"])("th",null,"價格"),Object(a["h"])("th")])],-1),i={style:{width:"200px"}},u={href:"#",class:"text-dark"},d={key:0,class:"h5"},b={key:1,class:"h6"},h={key:2,class:"h5"},j={class:"btn-group btn-group-sm"},p=["onClick"],O=["onClick","disabled"],f={key:0,class:"spinner-grow spinner-grow-sm text-danger",role:"status"},m=Object(a["h"])("span",{class:"visually-hidden"},"Loading...",-1),g=[m],v=Object(a["j"])(" 加到購物車 "),y={class:"col-md-5"},k={class:"sticky-top"},x={class:"table align-middle"},C=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th"),Object(a["h"])("th",null,"品名"),Object(a["h"])("th",{style:{width:"110px"}},"數量"),Object(a["h"])("th",null,"單價")])],-1),w=["disabled","onClick"],V=Object(a["h"])("i",{class:"bi bi-x"},null,-1),_=[V],z={key:0,class:"text-success"},I={class:"input-group input-group-sm"},M=["onUpdate:modelValue","onChange","disabled"],$={class:"input-group-text"},U={class:"text-end"},q={key:0,class:"text-success"},L=Object(a["h"])("td",{colspan:"3",class:"text-end"},"總計",-1),E={class:"text-end"},J={key:0},S=Object(a["h"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),P={class:"text-end text-success"},F={class:"input-group mb-3 input-group-sm"},Q={class:"input-group-append"},T={class:"my-5 row justify-content-center"},H={class:"mb-3"},A=Object(a["h"])("label",{for:"email",class:"form-label"},"Email",-1),B={class:"mb-3"},X=Object(a["h"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),D={class:"mb-3"},G=Object(a["h"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),K={class:"mb-3"},N=Object(a["h"])("label",{for:"address",class:"form-label"},"收件人地址",-1),R={class:"mb-3"},W=Object(a["h"])("label",{for:"message",class:"form-label"},"留言",-1),Y=Object(a["h"])("div",{class:"text-end"},[Object(a["h"])("button",{class:"btn btn-danger"},"送出訂單")],-1);function Z(t,e,c,m,V,Z){var tt=this,et=Object(a["J"])("Loading"),ct=Object(a["J"])("Field"),at=Object(a["J"])("ErrorMessage"),ot=Object(a["J"])("Form");return Object(a["z"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(et,{active:t.isLoading},null,8,["active"]),Object(a["h"])("div",o,[Object(a["h"])("div",n,[Object(a["h"])("div",l,[Object(a["h"])("table",s,[r,Object(a["h"])("tbody",null,[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["H"])(V.products,(function(t){return Object(a["z"])(),Object(a["g"])("tr",{key:t.id},[Object(a["h"])("td",i,[Object(a["h"])("div",{style:Object(a["t"])([{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:"url(".concat(t.imageUrl,")")}])},null,4)]),Object(a["h"])("td",null,[Object(a["h"])("a",u,Object(a["M"])(t.title),1)]),Object(a["h"])("td",null,[t.price?Object(a["f"])("",!0):(Object(a["z"])(),Object(a["g"])("div",d,Object(a["M"])(t.origin_price)+" 元 ",1)),t.price?(Object(a["z"])(),Object(a["g"])("del",b,"原價 "+Object(a["M"])(t.origin_price)+" 元",1)):Object(a["f"])("",!0),t.price?(Object(a["z"])(),Object(a["g"])("div",h," 現在只要 "+Object(a["M"])(t.price)+" 元 ",1)):Object(a["f"])("",!0)]),Object(a["h"])("td",null,[Object(a["h"])("div",j,[Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(e){return Z.getProduct(t.id)}}," 查看更多 ",8,p),Object(a["h"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(e){return Z.addCart(t.id)},disabled:tt.status.loadingItem===t.id},[tt.status.loadingItem===t.id?(Object(a["z"])(),Object(a["g"])("div",f,g)):Object(a["f"])("",!0),v],8,O)])])])})),128))])])]),Object(a["h"])("div",y,[Object(a["h"])("div",k,[Object(a["h"])("table",x,[C,Object(a["h"])("tbody",null,[V.cart.carts?(Object(a["z"])(!0),Object(a["g"])(a["a"],{key:0},Object(a["H"])(V.cart.carts,(function(e){return Object(a["z"])(),Object(a["g"])("tr",{key:e.id},[Object(a["h"])("td",null,[Object(a["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:V.status.loadingItem===e.id,onClick:function(t){return Z.removeCartItem(e.id)}},_,8,w)]),Object(a["h"])("td",null,[Object(a["j"])(Object(a["M"])(e.product.title)+" ",1),e.coupon?(Object(a["z"])(),Object(a["g"])("div",z," 已套用優惠券 ")):Object(a["f"])("",!0)]),Object(a["h"])("td",null,[Object(a["h"])("div",I,[Object(a["V"])(Object(a["h"])("input",{type:"number",class:"form-control","onUpdate:modelValue":function(t){return e.qty=t},onChange:function(t){return Z.updateCart(e)},disabled:V.status.loadingItem===e.id,min:"1"},null,40,M),[[a["Q"],e.qty,void 0,{number:!0}]]),Object(a["h"])("div",$," / "+Object(a["M"])(e.product.unit),1)])]),Object(a["h"])("td",U,[V.cart.final_total!==V.cart.total?(Object(a["z"])(),Object(a["g"])("small",q,"折扣價：")):Object(a["f"])("",!0),Object(a["j"])(" "+Object(a["M"])(t.$filters.currency(e.final_total)),1)])])})),128)):Object(a["f"])("",!0)]),Object(a["h"])("tfoot",null,[Object(a["h"])("tr",null,[L,Object(a["h"])("td",E,Object(a["M"])(t.$filters.currency(V.cart.total)),1)]),V.cart.final_total!==V.cart.total?(Object(a["z"])(),Object(a["g"])("tr",J,[S,Object(a["h"])("td",P,Object(a["M"])(t.$filters.currency(V.cart.final_total)),1)])):Object(a["f"])("",!0)])]),Object(a["h"])("div",F,[Object(a["V"])(Object(a["h"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=function(t){return V.coupon_code=t}),placeholder:"請輸入優惠碼"},null,512),[[a["Q"],V.coupon_code]]),Object(a["h"])("div",Q,[Object(a["h"])("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[1]||(e[1]=function(){return Z.addCouponCode&&Z.addCouponCode.apply(Z,arguments)})}," 套用優惠碼 ")])])])])]),Object(a["h"])("div",T,[Object(a["k"])(ot,{class:"col-md-6",onSubmit:Z.createOrder},{default:Object(a["U"])((function(t){var c=t.errors;return[Object(a["h"])("div",H,[A,Object(a["k"])(ct,{id:"email",name:"email",type:"email",class:Object(a["s"])(["form-control",{"is-invalid":c["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:V.form.user.email,"onUpdate:modelValue":e[2]||(e[2]=function(t){return V.form.user.email=t})},null,8,["class","modelValue"]),Object(a["k"])(at,{name:"email",class:"invalid-feedback"})]),Object(a["h"])("div",B,[X,Object(a["k"])(ct,{id:"name",name:"姓名",type:"text",class:Object(a["s"])(["form-control",{"is-invalid":c["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:V.form.user.name,"onUpdate:modelValue":e[3]||(e[3]=function(t){return V.form.user.name=t})},null,8,["class","modelValue"]),Object(a["k"])(at,{name:"姓名",class:"invalid-feedback"})]),Object(a["h"])("div",D,[G,Object(a["k"])(ct,{id:"tel",name:"電話",type:"tel",class:Object(a["s"])(["form-control",{"is-invalid":c["電話"]}]),placeholder:"請輸入電話",rules:"required",modelValue:V.form.user.tel,"onUpdate:modelValue":e[4]||(e[4]=function(t){return V.form.user.tel=t})},null,8,["class","modelValue"]),Object(a["k"])(at,{name:"電話",class:"invalid-feedback"})]),Object(a["h"])("div",K,[N,Object(a["k"])(ct,{id:"address",name:"地址",type:"text",class:Object(a["s"])(["form-control",{"is-invalid":c["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:V.form.user.address,"onUpdate:modelValue":e[5]||(e[5]=function(t){return V.form.user.address=t})},null,8,["class","modelValue"]),Object(a["k"])(at,{name:"地址",class:"invalid-feedback"})]),Object(a["h"])("div",R,[W,Object(a["V"])(Object(a["h"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[6]||(e[6]=function(t){return V.form.message=t})},null,512),[[a["Q"],V.form.message]])]),Y]})),_:1},8,["onSubmit"])])])],64)}c("99af");var tt={data:function(){return{products:[],product:{},status:{loadingItem:""},cart:{},coupon_code:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("abow-api","/products/all");this.isLoading=!0,this.$http.get(e).then((function(e){t.products=e.data.products,console.log("products:",e),t.isLoading=!1}))},getProduct:function(t){this.$router.push("product/".concat(t))},addCart:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("abow-api","/cart");this.status.loadingItem=t;var a={product_id:t,qty:1};this.$http.post(c,{data:a}).then((function(t){e.status.loadingItem="",console.log(t),e.getCart()}))},getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("abow-api","/cart");this.isLoading=!0,this.$http.get(e).then((function(e){console.log(e),t.cart=e.data.data,t.isLoading=!1}))},updateCart:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("abow-api","/cart/").concat(t.id);this.isLoading=!0,this.status.loadingItem=t.id;var a={product_id:t.product_id,qty:t.qty};this.$http.put(c,{data:a}).then((function(t){e.status.loadingItem="",console.log(t),e.getCart()}))},removeCartItem:function(t){var e=this,c=t,a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("abow-api","/cart/").concat(c);this.$http.delete(a).then((function(t){console.log(t),e.getCart()}))},addCouponCode:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("abow-api","/coupon"),c={code:this.coupon_code};this.$http.post(e,{data:c}).then((function(e){console.log(e),t.getCart()}))},createOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("abow-api","/order"),c=this.form;this.$http.post(e,{data:c}).then((function(e){console.log(e),t.getCart()}))}},created:function(){this.getProducts(),this.getCart()}},et=c("6b0d"),ct=c.n(et);const at=ct()(tt,[["render",Z]]);e["default"]=at},8418:function(t,e,c){"use strict";var a=c("a04b"),o=c("9bf2"),n=c("5c6c");t.exports=function(t,e,c){var l=a(e);l in t?o.f(t,l,n(0,c)):t[l]=c}},"99af":function(t,e,c){"use strict";var a=c("23e7"),o=c("d039"),n=c("e8b5"),l=c("861d"),s=c("7b0b"),r=c("50c4"),i=c("8418"),u=c("65f0"),d=c("1dde"),b=c("b622"),h=c("2d00"),j=b("isConcatSpreadable"),p=9007199254740991,O="Maximum allowed index exceeded",f=h>=51||!o((function(){var t=[];return t[j]=!1,t.concat()[0]!==t})),m=d("concat"),g=function(t){if(!l(t))return!1;var e=t[j];return void 0!==e?!!e:n(t)},v=!f||!m;a({target:"Array",proto:!0,forced:v},{concat:function(t){var e,c,a,o,n,l=s(this),d=u(l,0),b=0;for(e=-1,a=arguments.length;e<a;e++)if(n=-1===e?l:arguments[e],g(n)){if(o=r(n.length),b+o>p)throw TypeError(O);for(c=0;c<o;c++,b++)c in n&&i(d,b,n[c])}else{if(b>=p)throw TypeError(O);i(d,b++,n)}return d.length=b,d}})},b0c0:function(t,e,c){var a=c("83ab"),o=c("5e77").EXISTS,n=c("9bf2").f,l=Function.prototype,s=l.toString,r=/^\s*function ([^ (]*)/,i="name";a&&!o&&n(l,i,{configurable:!0,get:function(){try{return s.call(this).match(r)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-78ee5e38.b65c1f29.js.map