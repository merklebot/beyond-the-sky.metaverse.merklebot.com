(function(t){function e(e){for(var a,r,c=e[0],i=e[1],u=e[2],l=0,p=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s={app:0},o=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-1de48638":"fa461673","chunk-3aa17dd8":"cb5afb6b","chunk-a41c70ae":"d6265dfa","chunk-34995a90":"1d85883f","chunk-675cd95a":"a793afb4","chunk-d618418c":"82f35c6e"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-1de48638":1,"chunk-3aa17dd8":1,"chunk-a41c70ae":1,"chunk-34995a90":1,"chunk-675cd95a":1,"chunk-d618418c":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-1de48638":"98a70818","chunk-3aa17dd8":"ad8fe492","chunk-a41c70ae":"66af501d","chunk-34995a90":"9a0bfc5a","chunk-675cd95a":"21488fd9","chunk-d618418c":"92be9d0b"}[t]+".css",s=i.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===a||l===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],d.parentNode.removeChild(d),n(o)},d.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}s[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var d=l;o.push([1,"chunk-vendors"]),n()})({0:function(t,e){},"034f":function(t,e,n){"use strict";n("85ec")},1:function(t,e,n){t.exports=n("56d7")},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},2:function(t,e){},3:function(t,e){},3977:function(t,e,n){"use strict";n("3ab7")},"3ab7":function(t,e,n){},4:function(t,e){},"4e73":function(t,e,n){},5:function(t,e){},"51e2":function(t,e,n){"use strict";n("e187")},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("b85c"),r=n("1da1"),s=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("96cf"),n("2b0e")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("router-view")],1)},c=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fragment",[n("Header"),n("main",{attrs:{role:"main"}},[t._t("default")],2)],1)},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header",attrs:{role:"banner"}},[n("router-link",{staticClass:"toplink",attrs:{to:{name:"checkout"}}},[t._v("Online telescope")]),n("nav",{staticClass:"nav-g"},[n("details",{staticClass:"nav-expand",attrs:{tabindex:"0"}},[n("summary",{staticClass:"icon"},[t._v("?")]),n("div",{staticClass:"nav-expand-content"},[n("h4",[t._v("Have a question?")]),n("p",[t._v("Please contact us by "),n("a",{attrs:{href:t.$discord,target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord")]),t._v(".")])])]),t._m(0)])],1)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("details",{staticClass:"nav-expand",attrs:{tabindex:"0"}},[n("summary",{staticClass:"icon"},[t._v("i")]),n("div",{staticClass:"nav-expand-content"},[n("h4",[t._v("First Beyond the Sky")]),n("p",[t._v("This digital experience explores the interconnection of realverse and metaverse. ")]),n("p",[n("a",{attrs:{href:"https://medium.com/merklebot/mint-nfts-with-telescope-in-chile-371eb773189",target:"_blank",rel:"noopener noreferrer"}},[t._v("Learn more")])]),n("h4",[t._v("Technologies used")]),n("p",[t._v("Blockchain, "),n("a",{attrs:{href:"https://robonomics.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Robonomics")]),t._v(", "),n("a",{attrs:{href:"https://kusama.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kusama")]),t._v(", "),n("a",{attrs:{href:"https://ipfs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IPFS")]),t._v(", "),n("a",{attrs:{href:"https://www.rmrk.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RMRK")])])])])}],d=(n("159b"),{mounted:function(){document.body.onclick=function(t){var e=t.target.closest('details[tabindex="0"]');document.body.querySelectorAll('details[tabindex="0"]').forEach((function(t){t!==e&&(t.open=!1)}))}}}),f=d,h=(n("9881"),n("2877")),m=Object(h["a"])(f,l,p,!1,null,"ba65339c",null),v=m.exports,b={name:"Layout",components:{Header:v}},g=b,_=Object(h["a"])(g,i,u,!1,null,null,null),k=_.exports,y={name:"App",components:{Layout:k}},S=y,w=(n("034f"),Object(h["a"])(S,o,c,!1,null,null,null)),x=w.exports,C=n("8c4f"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",{staticStyle:{"text-align":"center"}},[n("Spot"),n("h1",[t._v("Your payment is successfull!")]),n("p",[t._v("Now you may book 1 hour-long remote session with Boston Dynamics Spot robot")]),n("router-link",{staticClass:"button",attrs:{to:{name:"checkout"}}},[t._v("Rent Spot")])],1)},O=[],T=(n("3977"),{}),j=Object(h["a"])(T,E,O,!1,null,"713c3d26",null),R=j.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",{staticStyle:{"text-align":"center"}},[n("h1",{staticClass:"red"},[t._v("Transaction was cancelled")]),n("p",[t._v("Your payment was cancelled, would you like to "),n("router-link",{attrs:{to:{name:"checkout"}}},[t._v("begin the process again")]),t._v("?")],1)])},N=[],$={},A=Object(h["a"])($,P,N,!1,null,null,null),I=A.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"banner",class:t.service.status},[n("div",{staticClass:"banner-top",class:t.dayTimeClass},[n("div",{staticClass:"banner-top-content"},[n("h1",[t._v("Connecting Universe to Metaverse!")]),t._m(0),"start"===t.$store.state.app.status?[n("span",{staticClass:"loader"})]:"start clicked"===t.$store.state.app.status||"extension error"===t.$store.state.app.status?[n("Button",{nativeOn:{click:function(e){return t.jump("#start")}}},[t._v("Start")])]:t.$store.state.app.account?[n("div",[n("Button",{attrs:{size:"medium",color:"orange"},nativeOn:{click:function(e){return t.jump("#step-2")}}},[t._v("Buy NFT")])],1),n("div",[t._v("or")]),n("div",[n("Button",{attrs:{href:"https://singular.rmrk.app/space/"+t.$store.state.app.account+"?tab=owned&owner=yes",size:"medium",color:"green",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Check your NFT ")])],1)]:t._e(),t._m(1)],2),n("div",{staticClass:"banner-top-art",attrs:{"aria-hidden":"true"}},[n("Stars"),n("img",{staticClass:"cloud cloud-1",attrs:{"aria-hidden":"true",src:"i/cloud-1.png"}}),n("img",{staticClass:"cloud cloud-2",attrs:{"aria-hidden":"true",src:"i/cloud-2.png"}}),n("img",{staticClass:"cloud cloud-3",attrs:{"aria-hidden":"true",src:"i/cloud-3.png"}}),n("div",{staticClass:"banner-grass"}),n("img",{staticClass:"banner-stone",attrs:{"aria-hidden":"true",src:"i/banner-stone.png"}}),n("img",{staticClass:"banner-sights",attrs:{"aria-hidden":"true",src:"i/banner-sights.png"}})],1)]),n("div",{staticClass:"banner-bottom"},[n("div",{staticClass:"layout-narrow"},[n("div",{staticClass:"service-status"},[t._v("Telescope "+t._s(t.service.status))]),n("div",{staticClass:"service-message"},[t._v(t._s(t.service.message))])])])]),t._m(2),n("section",{staticClass:"section-blue-mid",attrs:{id:"step-1"}},[n("div",{staticClass:"layout-narrow"},[n("h3",[t._v("1. Create or choose your account")]),t._m(3),"start"===t.$store.state.app.status?n("section",[n("Button",{nativeOn:{click:function(e){return t.$store.commit("setAppStatus","start clicked")}}},[t._v("Connect account")])],1):n("section",["start clicked"===t.$store.state.app.status?[n("span",{staticClass:"loader"}),n("i",[t._v("Checking Polkadot.js extension")])]:t._e(),"extension error"===t.$store.state.app.status?[n("p",{staticClass:"error-title"},[t._v(t._s(t.$store.state.polkadot.message))]),n("p",{staticClass:"error-text"},["NOT_FOUND_EXTENSION"===t.$store.state.polkadot.message?[t._v(" Please install "),n("a",{attrs:{href:"https://polkadot.js.org/extension/",target:"_blank"}},[t._v("Polkadot.js extension")]),t._v(", create and add Web3 account. Then reload this page. ")]:"accounts not found"===t.$store.state.polkadot.message?[t._v(" Please create an account or switch on account's visibility in "),n("a",{attrs:{href:"https://polkadot.js.org/extension/",target:"_blank"}},[t._v("Polkadot.js extension")]),t._v(". Then reload this page. ")]:[t._v(" Polkadot.js extension error, please try to reload page, if error still occurs "),n("a",{attrs:{href:t.$discord,target:"_blank",rel:"noopener noreferrer"}},[t._v("contact us")])]],2)]:t._e(),"extension ready"===t.$store.state.app.status?[n("form",[n("p",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],staticClass:"container-full",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.account=e.target.multiple?n:n[0]}}},t._l(t.$store.state.polkadot.accounts,(function(e,a){return n("option",{key:a,domProps:{value:e.address}},[t._v(" "+t._s(e.meta.name)+" – "+t._s(t.addressShort(e.address))+" ")])})),0)])])]:t._e()],2)])]),n("section",{staticClass:"section-blue-dark p-b-0",attrs:{id:"step-2"}},[t._m(4),n("section",{staticClass:"tokenSection layout-sm"},[n("div",{staticClass:"tokenSection-info"},[n("h4",[t._v(" Your balance "),n("span",{class:{"text-green":t.$store.state.app.balance>0}},[t._v(t._s(t.$store.state.app.balance)+" $STRGZN")]),"success"===t.checkoutComplite?n("div",{staticClass:"text-green"},[t._v("Payment successful")]):t._e(),"error"===t.checkoutComplite?n("div",{staticClass:"text-red"},[t._v("Payment error, please "),n("a",{attrs:{href:t.$discord,target:"_blank",rel:"noopener noreferrer"}},[t._v("contact us")])]):t._e()]),n("p",[t._v("1 $STRGZN = "+t._s(t.pricePerToken)+" USD")]),n("p",[t._v("1 space NFT = 25 $STRGZN")])]),n("div",{staticClass:"tokenSection-form"},[n("h4",[t._v("Purchase tokens")]),"extension ready"!==t.$store.state.app.status?n("p",{staticClass:"error-title text-small"},[t._v(" Please "),n("a",{attrs:{href:"#step-1"},on:{click:function(e){return e.preventDefault(),t.jump("#step-1")}}},[t._v("connect your Polkadot account")])]):t._e(),n("form",{class:{disabled:"extension ready"!==t.$store.state.app.status},on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[n("div",{staticClass:"inputNumbers m-b-space"},[n("div",{staticClass:"less",on:{click:function(e){return t.setQuantity(-t.pricePerNftInUsd)}}},[t._v("-")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"quantity",modifiers:{number:!0}}],attrs:{type:"number",value:"quantity",required:""},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),n("div",{staticClass:"more",on:{click:function(e){return t.setQuantity(t.pricePerNftInUsd)}}},[t._v("+")])]),n("h5",[t._v("Total: "+t._s(t.totalPaymentUSD)+" USD")]),n("Button",{staticClass:"container-full",attrs:{size:"medium",disabled:!t.checkoutStatus}},[n("span",{staticClass:"text"},[t._v("Pay with")]),n("img",{staticClass:"label",attrs:{alt:"Stripe",src:"i/stripe.svg"}})])],1)])])]),n("astronomicalObjectCard")],1)},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-narrow"},[n("p",[t._v("Connect to our autonomous telescope in the dark night of Atacama desert in Chile, select an astronomical object and mint unique NFTs in a few clicks.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner-telescope",attrs:{"aria-hidden":"true"}},[n("img",{staticClass:"banner-telescope-pod-1",attrs:{"aria-hidden":"true",src:"i/banner-telescope-pod-1.png"}}),n("img",{staticClass:"banner-telescope-pod-2",attrs:{"aria-hidden":"true",src:"i/banner-telescope-pod-2.png"}}),n("img",{staticClass:"banner-telescope-head",attrs:{"aria-hidden":"true",src:"i/banner-telescope-head.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-blue",attrs:{id:"start"}},[n("div",{staticClass:"layout-narrow"},[n("h2",[t._v("Follow the steps and mint your nft Of astronomical object")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"hyphens"},[t._v(" We use "),n("a",{attrs:{href:"https://polkadot.js.org/extension/",target:"_blank"}},[t._v("Polkadot.js extension")]),t._v(" to manage user accounts. Here is the "),n("a",{attrs:{href:"https://medium.com/merklebot/how-to-create-an-account-using-polkadot-js-extension-bd02a0953946",target:"_blank"}},[t._v("initial setup guide.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-narrow"},[n("h3",[t._v("2. Get telescope tokens")]),n("p",{staticClass:"hyphens"},[t._v(" Our telescope only accepts special $STRGZN tokens and you can buy them below using your credit card. ")])])}],D=(n("3ca3"),n("ddb0"),n("b680"),n("fb6a"),n("caad"),n("2532"),n("7424")),q=n("db49"),F=Stripe(q["a"].STRIPE_KEY),M=F,L={components:{astronomicalObjectCard:function(){return n.e("chunk-1de48638").then(n.bind(null,"d4e6"))},Button:function(){return n.e("chunk-a41c70ae").then(n.bind(null,"e0dab"))},Stars:function(){return n.e("chunk-3aa17dd8").then(n.bind(null,"09be"))}},data:function(){return{error:null,pricePerToken:(q["a"].PRICE_PER_STRGZN_CENTS/100).toFixed(),quantity:2*q["a"].PRICE_PER_NFT_STRGZNS,pricePerNftInUsd:q["a"].PRICE_PER_NFT_STRGZNS*q["a"].PRICE_PER_STRGZN_CENTS/100,dayTimeClass:null,checkoutStatus:!0,checkoutComplite:!1}},computed:{service:function(){return this.$store.state.service},totalPaymentUSD:function(){return(this.quantity*this.pricePerToken).toFixed(2)},account:{get:function(){return this.$store.state.app.account},set:function(t){this.$store.dispatch("setAccountActive",t)}}},methods:{setQuantity:function(t){if(this.quantity+t>=q["a"].MIN_TOKENS_BUY&&this.quantity+t<=q["a"].MAX_TOKENS_BUY)return this.quantity+=t},addressShort:function(t){return t.slice(0,6)+"..."+t.slice(-4)},handleSubmit:function(){this.checkoutStatus=!1,this.account&&this.checkout(this.account,this.quantity)},checkout:function(t,e){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.proccess=!0,a.prev=1,a.next=4,Object(D["a"])({account:t,quantity:e});case 4:return r=a.sent,a.next=7,M.redirectToCheckout({sessionId:r.id});case 7:s=a.sent,s.error&&console.error(s.error.message),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](1),console.log("Checkout error:",a.t0);case 14:n.proccess=!1,n.checkoutStatus=!0;case 16:case"end":return a.stop()}}),a,null,[[1,11]])})))()},jump:function(t){window.scrollTo({top:document.querySelector(t).offsetTop,behavior:"smooth"})},dayTime:function(){if(this.service.message){if(this.service.message.includes("Daytime"))return"day";if(this.service.message.includes("Night"))return"night";if(this.service.message.includes("cloudy"))return"cloudy"}}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("watchApiData"),t.dayTimeClass=t.dayTime(),t.$route.query.checkout&&(t.checkoutComplite=t.$route.query.checkout,setTimeout((function(){"success"===t.checkoutComplite&&(t.checkoutComplite=!1)}),1e4));case 3:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){this.$store.dispatch("stopApiData")},watch:{service:function(){this.dayTimeClass=this.dayTime()}}},G=L,z=(n("8a1c"),Object(h["a"])(G,U,B,!1,null,"6493f884",null)),Z=z.exports;s["a"].use(C["a"]);var K=new C["a"]({routes:[{path:"/",name:"checkout",component:Z},{path:"/success",name:"success",component:R},{path:"/cancel",name:"cancel",component:I},{path:"*",redirect:"/"}]}),H=(n("4de4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:[{"container-full":t.fullWidth},t.size?"btn-"+t.size:null,"btn-"+t.color],on:{click:function(e){return t.$emit("click",e)}}},[t._t("default")],2)}),V=[],Y={props:{fullWidth:{type:Boolean,default:!1},size:{type:String,validator:function(t){return["big","sm"].includes(t)},require:!1},color:{type:String,validator:function(t){return["green","blue"].includes(t)},default:"blue"}}},W=Y,X=Object(h["a"])(W,H,V,!1,null,null,null),J=X.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{on:{click:function(e){return t.up(!t.flag)}}},[t.flag?[t._v("–")]:[t._v("+")]],2)},tt=[],et={model:{prop:"value",event:"toggle"},props:{value:{type:Boolean,default:!0},id:String},data:function(){return{flag:this.value}},created:function(){if(this.id){var t=localStorage.getItem("toogle:".concat(this.id));"true"===t?this.up(!0):"false"===t&&this.up(!1)}},methods:{up:function(t){this.flag=t,this.$emit("toggle",this.flag),this.id&&localStorage.setItem("toogle:".concat(this.id),this.flag)}}},nt=et,at=Object(h["a"])(nt,Q,tt,!1,null,null,null),rt=at.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-light"},[t._t("default")],2)},ot=[],ct={},it=Object(h["a"])(ct,st,ot,!1,null,null,null),ut=it.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",[n("div",{staticClass:"window-head"},[n("span",{domProps:{innerHTML:t._s(t.title)}}),n("Toggle",{staticClass:"window-head-toggle",attrs:{id:t.id},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"window-content"},[t._t("default")],2)])},pt=[],dt={props:["title","id"],components:{Card:ut,Toggle:rt},data:function(){return{isShow:!0}}},ft=dt,ht=Object(h["a"])(ft,lt,pt,!1,null,null,null),mt=ht.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"form-section-title"},[t._v(t._s(t.title))]),t._t("default")],2)},bt=[],gt={props:{title:String}},_t=gt,kt=Object(h["a"])(_t,vt,bt,!1,null,null,null),yt=kt.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-item form-line-label"},[t._t("default")],2)},wt=[],xt={},Ct=Object(h["a"])(xt,St,wt,!1,null,null,null),Et=Ct.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[t._t("default"),t._v(": "),t.isError?n("span",{staticClass:"input-msg"},[t._v(t._s(t.msgError))]):t._e()],2)},Tt=[],jt={props:{msgError:{type:String,default:"Check if data correct, please."},isError:{type:Boolean,default:!1}}},Rt=jt,Pt=Object(h["a"])(Rt,Ot,Tt,!1,null,null,null),Nt=Pt.exports,$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.paginatedData,(function(e,a){return n("div",{key:a},[t._t("default",null,{item:e})],2)})),n("div",{staticClass:"pagination"},[n("button",{attrs:{disabled:0===t.pageNumber},on:{click:t.prevPage}},[t._v("Previous")]),n("b",[t._v(t._s(t.pageCount>0?t.pageNumber+1:0)+" / "+t._s(t.pageCount))]),n("button",{attrs:{disabled:t.pageNumber>=t.pageCount-1},on:{click:t.nextPage}},[t._v(" Next ")])])],2)},At=[],It=(n("a9e3"),{props:{listData:{type:Array,required:!0},currentPage:{type:Number,required:!1,default:0},size:{type:Number,required:!1,default:1}},data:function(){return{pageNumber:this.currentPage}},watch:{currentPage:function(t){this.pageNumber=t}},computed:{pageCount:function(){var t=this.listData.length,e=this.size;return Math.ceil(t/e)},paginatedData:function(){var t=this.pageNumber*this.size,e=t+this.size;return this.listData.slice(t,e)}},methods:{nextPage:function(){this.pageNumber++,this.$emit("page",this.pageNumber)},prevPage:function(){this.pageNumber--,this.$emit("page",this.pageNumber)}}}),Ut=It,Bt=(n("51e2"),Object(h["a"])(Ut,$t,At,!1,null,"f5fce9e0",null)),Dt=Bt.exports,qt=(n("99af"),function(t){return t.slice(0,6)+"..."+t.slice(-4)});function Ft(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"address",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a="etherscan.io";""===e&&(e="address");var r="";return 4===n&&(r="rinkeby."),a=r+a,"https://".concat(a,"/").concat(e,"/").concat(t)}function Mt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ipfs",n="ipfs.io";return""===e&&(e="ipfs"),"https://".concat(n,"/").concat(e,"/").concat(t)}s["a"].component("Button",J),s["a"].component("Toggle",rt),s["a"].component("Card",ut),s["a"].component("CardToggle",mt),s["a"].component("FormSection",yt),s["a"].component("FormField",Et),s["a"].component("FormFieldLabel",Nt),s["a"].component("Pagination",Dt),s["a"].filter("labelAddress",qt),s["a"].filter("urlChainExplorer",Ft),s["a"].filter("urlIpfsExplorer",Mt);var Lt=n("3f08"),Gt=n("2f62"),zt=n("342d"),Zt=n.n(zt),Kt=n("bc3a"),Ht=n.n(Kt),Vt=n("ef36");s["a"].use(Lt["a"].Plugin),s["a"].use(Gt["a"]),s["a"].use(Zt.a);var Yt=new Gt["a"].Store({state:{service:{message:null,status:null},telescope:[],astronomicalObjects:[],watcherApiData:null,polkadot:{message:"init",api:null,accounts:null},app:{status:"start",account:localStorage.account?localStorage.account:null,balance:0,balanceUnsubscribe:null,email:localStorage.email?localStorage.email:null}},mutations:{getTelescope:function(t){Ht.a.get("https://api.merklebot.com/beyond-the-sky/telescopes/{telescope_id}/is_free").then((function(e){t.telescope=e.data}))},setEmail:function(t,e){t.app.email=e,localStorage.setItem("email",t.app.email)},setAppStatus:function(t,e){t.app.status=e},setServiceStatus:function(t,e){t.service=e,console.log("[Vuex setServiceStatus]:",{status:t.service.status,message:t.service.message})},setAstronomicalObjects:function(t,e){t.astronomicalObjects=e,console.log("[Vuex setAstronomicalObjects]:",e)}},actions:{watchApiData:function(t){return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.state,a=t.commit,r=t.dispatch,a("getTelescope"),r("polkadotConnect"),n.watcherApiData=setInterval((function(){a("getTelescope")}),1e4);case 4:case"end":return e.stop()}}),e)})))()},stopApiData:function(t){var e=t.state;clearInterval(e.watcherApiData),e.app.balanceUnsubscribe&&e.app.balanceUnsubscribe()},setAccountActive:function(t,e){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,s,o,c,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.state,s=!1,r.polkadot.accounts){o=Object(a["a"])(r.polkadot.accounts);try{for(o.s();!(c=o.n()).done;)i=c.value,i.address==e&&(s=!0)}catch(u){o.e(u)}finally{o.f()}}if(!s){n.next=10;break}return r.app.account=e,localStorage.setItem("account",r.app.account),r.app.balanceUnsubscribe&&r.app.balanceUnsubscribe(),n.next=9,r.polkadot.api.query.assets.account(q["a"].ID_ASSET,r.app.account,(function(t){var e=t.balance;r.app.balance=e.toNumber()}));case 9:r.app.balanceUnsubscribe=n.sent;case 10:case"end":return n.stop()}}),n)})))()},polkadotConnect:function(t){return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,a=t.dispatch,e.prev=1,r=Object(Vt["c"])(),r.on("error",(function(){n.polkadot.message="provider not connected",n.app.status="extension error"})),r.on("connect",(function(){n.polkadot.message="provider connected"})),e.next=7,Object(Vt["b"])();case 7:return n.polkadot.api=e.sent,n.polkadot.api?n.polkadot.message="api connected":(n.polkadot.message="api not connected",n.app.status="extension error"),e.next=11,Object(Vt["a"])(n.polkadot.api);case 11:n.polkadot.accounts=e.sent,n.polkadot.accounts.length>0?n.polkadot.message="accounts found":(n.polkadot.message="accounts not found",n.app.status="extension error"),e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](1),n.polkadot.message=e.t0.message,n.app.status="extension error";case 19:return e.prev=19,"extension error"!==n.app.status&&(n.app.status="extension ready"),n.app.account?a("setAccountActive",n.app.account):a("setAccountActive",n.polkadot.accounts[0].address),e.finish(19);case 23:case"end":return e.stop()}}),e,null,[[1,15,19,23]])})))()},setServiceStatus:function(t,e){var n=t.commit;n("setServiceStatus",e)},setAstronomicalObjects:function(t,e){var n=t.commit;n("setAstronomicalObjects",e)}}});s["a"].config.productionTip=!1,s["a"].prototype.$discord="https://discord.com/invite/5UWNGNaAUf",new s["a"]({router:K,render:function(t){return t(x)},store:Yt,created:function(){var t=this,e=function(){var n=Object(r["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(D["e"])(t.$store.state.service.status,t.$store.state.service.message,q["a"].API_SERVER_LONG_POLLING_TIMEOUT);case 2:return a=n.sent,t.$store.dispatch("setServiceStatus",a),n.next=6,new Promise((function(t){return setTimeout(t,5e3)}));case 6:return n.next=8,e();case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();e(),Object(D["d"])().then((function(e){t.$store.dispatch("setAstronomicalObjects",e)}));var n=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(D["d"])(q["a"].API_SERVER_LONG_POLLING_TIMEOUT);case 2:return a=e.sent,t.$store.dispatch("setAstronomicalObjects",a),e.next=6,new Promise((function(t){return setTimeout(t,5e3)}));case 6:return e.next=8,n();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n()}}).$mount("#app")},6:function(t,e){},7:function(t,e){},7424:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return p})),n.d(e,"c",(function(){return f})),n.d(e,"b",(function(){return m}));var a=n("1da1"),r=(n("96cf"),n("bc3a")),s=n.n(r),o=n("db49");function c(t){return i.apply(this,arguments)}function i(){return i=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("".concat(o["a"].API_SERVER,"/checkout"),e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)}))),i.apply(this,arguments)}function u(){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,n,a,r,c=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:null,n=c.length>1&&void 0!==c[1]?c[1]:null,a=c.length>2&&void 0!==c[2]?c[2]:6e5,a/=1e3,t.next=6,s.a.get("".concat(o["a"].API_SERVER,"/status/update"),{params:{status_known:e,message_known:n,timeout:a}});case 6:return r=t.sent,t.abrupt("return",r.data);case 8:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function p(){return d.apply(this,arguments)}function d(){return d=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,n,a=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:0,e/=1e3,t.next=4,s.a.get("".concat(o["a"].API_SERVER,"/catalogs/beyond-the-sky"),{params:{timeout:e},headers:{Prefer:"wait=".concat(e)}});case 4:return n=t.sent,t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return h=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("https://api.merklebot.com/beyond-the-sky/price");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)}))),h.apply(this,arguments)}function m(t,e){return v.apply(this,arguments)}function v(){return v=Object(a["a"])(regeneratorRuntime.mark((function t(e,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("".concat(o["a"].API_SERVER,"/nft/orders"),{customer:{account_address:e},astronomical_object:{catalog_name:n}});case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}},8:function(t,e){},"85ec":function(t,e,n){},"8a1c":function(t,e,n){"use strict";n("4e73")},9:function(t,e){},"945d":function(t,e,n){},9881:function(t,e,n){"use strict";n("945d")},db49:function(t,e,n){"use strict";var a;e["a"]={API_SERVER:"https://api.merklebot.com/beyond-the-sky",API_SERVER_LONG_POLLING_TIMEOUT:null!==(a=6e8)&&void 0!==a?a:6e5,STRIPE_KEY:"pk_live_51IvSZKJXrK78CsUSfSb5Jyjo3AkjZ2k6ZMr0c8miMMIcWcQiBKtCapD5ho2Bk45MjMh3QTlpLamkrOiG9gMJzMh100iGhW3ehO",TYPEFORM_ID:"qiVH1bjz",PRICE_PER_STRGZN_CENTS:parseInt("100"),PRICE_PER_NFT_STRGZNS:parseInt("25"),ID_ASSET:"1607",SUBSTRATE:{url:"wss://statemine-rpc.polkadot.io",types:{},keyring:{isDevelopment:!1,type:"sr25519"}},ACCESS_TOKEN_RECV_ACCOUNT:"Gecm9tRWX5sFzttHLB2j6PurJBeNM3oLHABvztnqXCnmHwZ",MIN_TOKENS_BUY:1,MAX_TOKENS_BUY:1e3}},e187:function(t,e,n){},ef36:function(t,e,n){"use strict";n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return _})),n.d(e,"d",(function(){return k}));var a=n("5530"),r=(n("d4ec"),n("bee2"),n("1da1")),s=(n("96cf"),n("d3b7"),n("b64b"),n("99af"),n("d81d"),n("159b"),n("25f0"),n("ec14")),o=n("22a5"),c=n("0b67"),i=n("077d"),u=(n("26af"),n("db49")),l=null,p=null;function d(){return l||(l=new s["a"](u["a"].SUBSTRATE.url),l)}function f(){return h.apply(this,arguments)}function h(){return h=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!p){t.next=2;break}return t.abrupt("return",p);case 2:return t.next=4,o["a"].create({provider:d(),types:u["a"].SUBSTRATE.types});case 4:return p=t.sent,t.abrupt("return",p);case 6:case"end":return t.stop()}}),t)}))),h.apply(this,arguments)}function m(){return new Promise((function(t,e){var n=setTimeout((function(){return clearTimeout(n),clearInterval(a),e(new Error("NOT_FOUND_EXTENSION"))}),3e3),a=setInterval((function(){if(Object.keys(window.injectedWeb3).length>0)return clearTimeout(n),clearInterval(a),t()}),100)}))}var v=!1;function b(t){return g.apply(this,arguments)}function g(){return g=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return t.next=4,Object(i["b"])("robonomics");case 4:if(n=t.sent,0!==n.length){t.next=7;break}throw new Error("NOT_FOUND_EXTENSION");case 7:return t.next=9,Object(i["a"])();case 9:return r=t.sent,s=r.map((function(t){var e=t.address,n=t.meta;return{address:e,meta:n}})),c["a"].loadAll(Object(a["a"])({genesisHash:e.genesisHash,ss58Format:e.registry.chainSS58},u["a"].SUBSTRATE.keyring),s),v=!0,t.abrupt("return",c["a"].getPairs());case 14:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}function _(t){return v?c["a"].getPairs():b(t)}function k(t,e,n,a){return y.apply(this,arguments)}function y(){return y=Object(r["a"])(regeneratorRuntime.mark((function t(e,n,a,r){var s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["c"])(e);case 2:return s=t.sent,o=p.tx.utility.batch([p.tx.assets.transfer(a,n,r)]),t.prev=4,t.next=7,o.signAndSend(e,{signer:s.signer},(function(t){t.status.isInBlock?t.events.forEach((function(e){var n=e.event,a=n.method,r=n.section;"system"===r&&"ExtrinsicFailed"===a?console.log("ExtrinsicFailed",{block:t.status.asInBlock.toString(),tx:o.hash.toString()}):"system"===r&&"ExtrinsicSuccess"===a&&console.log(null,{block:t.status.asInBlock.toString(),tx:o.hash.toString()})})):t.status.isFinalized&&console.log("Asset send tx is finalized")}));case 7:return t.abrupt("return",!0);case 10:t.prev=10,t.t0=t["catch"](4),console.log("Asset send error:",t.t0);case 13:return t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t,null,[[4,10]])}))),y.apply(this,arguments)}}});
//# sourceMappingURL=app.9fd913eb.js.map