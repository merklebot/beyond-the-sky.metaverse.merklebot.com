(function(e){function t(t){for(var a,r,o=t[0],i=t[1],u=t[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s={app:0},c=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-05707da5":"d3f3ab59","chunk-1139f2d1":"4fba07b9","chunk-43b717ef":"b5edfb4d"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-05707da5":1,"chunk-1139f2d1":1,"chunk-43b717ef":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-05707da5":"4865088e","chunk-1139f2d1":"277a034e","chunk-43b717ef":"d38e1f3b"}[e]+".css",s=i.p+a,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var u=c[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===a||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}s[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/beyond-the-sky/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([1,"chunk-vendors"]),n()})({0:function(e,t){},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t,n){e.exports=n("56d7")},10:function(e,t){},11:function(e,t){},12:function(e,t){},12996:function(e,t,n){"use strict";n("8be7")},13:function(e,t){},2:function(e,t){},3:function(e,t){},"3df5":function(e,t,n){},4:function(e,t){},4084:function(e,t,n){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="4678"},5:function(e,t){},"51e2":function(e,t,n){"use strict";n("e187")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("caad"),n("2532"),n("ac1f"),n("5319");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("router-view")],1)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("Header"),n("main",{attrs:{role:"main"}},[e._t("default")],2)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header",attrs:{role:"banner"}},[n("router-link",{staticClass:"toplink",attrs:{to:{name:"home"}}},[e._v("Online telescope")]),e._m(0)],1)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"nav-g"},[n("details",{staticClass:"nav-expand",attrs:{tabindex:"0"}},[n("summary",{staticClass:"icon"},[e._v("?")]),n("div",{staticClass:"nav-expand-content"},[n("h4",[e._v("Have a question?")]),n("p",[e._v("Please contact us by "),n("a",{attrs:{href:"#"}},[e._v("Discord")]),e._v(" or "),n("a",{attrs:{href:"#"}},[e._v("Email")])])])]),n("details",{staticClass:"nav-expand",attrs:{tabindex:"0"}},[n("summary",{staticClass:"icon"},[e._v("i")]),n("div",{staticClass:"nav-expand-content"},[n("h4",[e._v("Metaverse project experiment")]),n("p",[e._v("This project is experiment within online metaverse experiment by "),n("a",{attrs:{href:"#"}},[e._v("Merklebot")]),e._v(". It aims to ....")]),n("h4",[e._v("Uses technologies")]),n("p",[e._v("Blockchain, "),n("a",{attrs:{href:"#"}},[e._v("Robonomics")]),e._v(", "),n("a",{attrs:{href:"#"}},[e._v("Polkadot")]),e._v(", "),n("a",{attrs:{href:"#"}},[e._v("IPFS")]),e._v(", "),n("a",{attrs:{href:"#"}},[e._v("RMRK")])])])])])}],l=(n("d3b7"),n("159b"),{mounted:function(){document.body.onclick=function(e){var t=e.target.parentNode;document.body.querySelectorAll("details").forEach((function(e){e!==t&&(e.open=!1)}))}}}),d=l,f=(n("5f12"),n("2877")),h=Object(f["a"])(d,i,u,!1,null,"076a7f56",null),p=h.exports,b={name:"Layout",components:{Header:p}},m=b,v=Object(f["a"])(m,c,o,!1,null,null,null),g=v.exports,j={name:"App",components:{Layout:g}},_=j,y=(n("034f"),Object(f["a"])(_,r,s,!1,null,null,null)),k=y.exports,w=n("8c4f"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Card",{staticStyle:{"text-align":"center"}},[n("Spot"),n("h1",[e._v("Your payment is successfull!")]),n("p",[e._v("Now you may book 1 hour-long remote session with Boston Dynamics Spot robot")]),n("router-link",{staticClass:"button",attrs:{to:{name:"checkout"}}},[e._v("Rent Spot")])],1)},S=[],C=(n("3ca3"),n("ddb0"),{components:{Spot:function(){return n.e("chunk-1139f2d1").then(n.bind(null,"6412"))}}}),E=C,O=(n("12996"),Object(f["a"])(E,x,S,!1,null,"3b6aaa7a",null)),A=O.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Card",{staticStyle:{"text-align":"center"}},[n("h1",{staticClass:"red"},[e._v("Transaction was cancelled")]),n("p",[e._v("Your payment was cancelled, would you like to "),n("router-link",{attrs:{to:{name:"checkout"}}},[e._v("begin the process again")]),e._v("?")],1)])},T=[],N={},P=Object(f["a"])(N,R,T,!1,null,null,null),$=P.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"banner"},[n("div",{staticClass:"banner-top",class:e.bannerClasses},[n("div",{staticClass:"banner-top-content"},[n("h1",[e._v("Connecting the Universe to the Metaverse!")]),e._m(0),n("Button",{nativeOn:{click:function(t){return e.start.apply(null,arguments)}}},[e._v("Start")])],1),e._m(1)]),n("div",{staticClass:"banner-bottom"},[e.telescopeOn()?e._e():n("div",{staticClass:"telecopePause layout-narrow"},[e.isNight()?e._e():n("div",{staticClass:"telecopePause-content"},[n("p",{staticClass:"telecopePause-title"},[e._v("Telescope is Waiting for night…")]),n("p",[e._v(e._s(e.time)+" left")])])])])]),e._m(2),n("section",{staticClass:"section-blue-mid"},[n("div",{staticClass:"layout-narrow"},[n("h3",[e._v("1. Create or choose your crypto account")]),e._m(3),n("section",[e.isReady?[e.accounts.length>0?[n("form",[n("p",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.account=t.target.multiple?n:n[0]}}},e._l(e.accounts,(function(t,a){return n("option",{key:a,domProps:{value:t.address}},[e._v(" "+e._s(t.meta.name)+" – "+e._s(e.addressShort(t.address))+" ")])})),0)]),n("p",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedAccount,expression:"checkedAccount"}],attrs:{type:"checkbox",name:"checkedAccount"},domProps:{checked:Array.isArray(e.checkedAccount)?e._i(e.checkedAccount,null)>-1:e.checkedAccount},on:{change:function(t){var n=e.checkedAccount,a=t.target,r=!!a.checked;if(Array.isArray(n)){var s=null,c=e._i(n,s);a.checked?c<0&&(e.checkedAccount=n.concat([s])):c>-1&&(e.checkedAccount=n.slice(0,c).concat(n.slice(c+1)))}else e.checkedAccount=r}}}),e._v(" I wrote down seed phrase, keep it safe and have access to this account ")])])])]:[e._m(4)]]:null===e.error?[n("span",{staticClass:"loader"}),n("i",{staticClass:"text-mid"},[e._v("Checking Polkadot.js extension")])]:["NOT_FOUND_EXTENSION"===e.error?[e._m(5)]:!e.accounts||e.accounts.length<1?[e._m(6)]:[n("div",{staticClass:"red"},[e._v(" Error: "),n("b",[e._v(e._s(e.error))])])]]],2)])]),n("section",{staticClass:"section-blue-dark"},[n("div",{staticClass:"layout-narrow"},[n("h3",[e._v("2. Get telescope tokens")]),n("p",{staticClass:"hyphens"},[e._v(" Our fully autonomous telescope lives in the Chile desert in Atacama, where we have some of the darkest skies in the world! The telescope works only with the STRGZN tokens, which you can purchase conveniently through Stripe below. ")]),n("section",[n("ul",{staticClass:"dashed"},[n("li",[e._v("1 picture with NFT minting = 1 $STRGZN")]),n("li",[e._v("1 $STRGZN = "+e._s(e.pricePerToken)+" USD")]),n("li",[e._v("Your balance is: "+e._s(e.balance)+" $STRGZN")]),n("li",[e._v(" You buy: "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.quantityRaw,expression:"quantityRaw",modifiers:{number:!0}}],attrs:{value:"quantity"},domProps:{value:e.quantityRaw},on:{input:function(t){t.target.composing||(e.quantityRaw=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._v(" $STRGZN ")])])]),n("form",{class:{disabled:!e.checkedAccount||e.accounts.length<1||!e.isReady},on:{onChange:e.onChange,submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[n("p",[n("Button",{staticClass:"container-full"},[n("span",{staticClass:"text"},[e._v("Pay "+e._s(e.pricePerToken)+" * "+e._s(e.quantity)+" = "+e._s(e.totalPaymentUSD)+" USD")]),n("img",{staticClass:"label",attrs:{alt:"with Stripe",src:"i/stripe.svg"}})])],1)])])]),n("div",[n("astronomicalObjectCard",{attrs:{checkedAccount:this.checkedAccount,accounts:this.accounts,isReady:this.isReady}})],1)])},D=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-narrow"},[n("p",[e._v("Connect to our autonomous telescope in the dark night of Atacama desert in Chile, select any real constellation or star, and mint one of the very first fully autonomous NFTs taken by a robot from the Sky!")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"banner-top-art"},[n("div",{staticClass:"banner-grass"}),n("img",{staticClass:"banner-stone",attrs:{"aria-hidden":"true",src:"i/banner-stone.png"}}),n("img",{staticClass:"banner-clouds",attrs:{"aria-hidden":"true",src:"i/banner-clouds.png"}}),n("img",{staticClass:"banner-sights",attrs:{"aria-hidden":"true",src:"i/banner-sights.png"}}),n("div",{staticClass:"banner-telescope"},[n("img",{staticClass:"banner-telescope-pod-1",attrs:{"aria-hidden":"true",src:"i/banner-telescope-pod-1.png"}}),n("img",{staticClass:"banner-telescope-pod-2",attrs:{"aria-hidden":"true",src:"i/banner-telescope-pod-2.png"}}),n("img",{staticClass:"banner-telescope-head",attrs:{"aria-hidden":"true",src:"i/banner-telescope-head.png"}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section-blue",attrs:{id:"start"}},[n("div",{staticClass:"layout-narrow"},[n("h2",[e._v("Follow the steps and mint your nft Of astronomical object")]),n("p",[e._v("* If you already have the STRGZN token, please proceed to the 3rd step. Otherwise please continue to the 2nd step.")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"hyphens"},[e._v(" We use "),n("a",{attrs:{href:"https://polkadot.js.org/extension/",target:"_blank"}},[e._v("Polkadot.js extension")]),e._v(" and Kusama Relay Chain to manage user account. Don't worry if you haven't it yet. Just follow the official instructions and than get your telescope tokens with an old familiar credit card here in the next step. ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"red"},[e._v("Please create an account or switch on account's visibility in "),n("a",{attrs:{href:"https://polkadot.js.org/extension/",target:"_blank"}},[e._v("Polkadot.js extension")]),e._v(". Then reload this page.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"red"},[e._v("Please install "),n("a",{attrs:{href:"https://polkadot.js.org/extension/",target:"_blank"}},[e._v("Polkadot.js extension")]),e._v(", create and add Web3 account. Then reload this page.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"red"},[n("label",{staticClass:"red"},[e._v("You currently don't have any accounts. Please create an account or switch on account's visibility in "),n("a",{attrs:{href:"https://polkadot.js.org/extension/",target:"_blank"}},[e._v("Polkadot.js extension")]),e._v(". Then reload this page.")])])}],I=n("ade3"),q=n("1da1"),B=(n("96cf"),n("b680"),n("130f"),n("fb6a"),n("b0c0"),n("7424")),F=n("db49"),H=Stripe(F["a"].STRIPE_KEY),M=H,U=n("ef36");function L(e){return new Promise((function(t,n){var a=document.createElement("script");a.src=e,a.onload=t,a.onerror=n,document.body.appendChild(a)}))}var G=n("7f45"),Z=n.n(G),K={components:{astronomicalObjectCard:function(){return n.e("chunk-05707da5").then(n.bind(null,"d4e6"))},Button:function(){return n.e("chunk-43b717ef").then(n.bind(null,"e0dab"))}},data:function(){return{isReady:!1,error:null,api:null,unsubscribe:null,balance:0,accounts:[],accountDefault:"",status:!1,serviceStatus:{status:void 0,message:""},quantity:1,quantityRaw:1,pricePerToken:(F["a"].PRICE_PER_LESSON_CENTS/100).toFixed(2),time:"test"}},created:function(){var e=this;return Object(q["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,setImmediate(Object(q["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(B["d"])();case 2:e.serviceStatus=t.sent;case 3:case"end":return t.stop()}}),t)})))),setInterval(Object(q["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(B["d"])();case 2:e.serviceStatus=t.sent,console.log(e.serviceStatus);case 4:case"end":return t.stop()}}),t)}))),1e4),n=Object(U["c"])(),n.on("error",(function(){e.error="Disconnected provider",e.isReady=!1})),n.on("connect",(function(){e.isReady=!0})),t.next=8,Object(U["b"])();case 8:return e.api=t.sent,t.next=11,Object(U["a"])(e.api);case 11:return e.accounts=t.sent,e.accounts&&(e.accountDefault=e.accounts[0].address),0===e.accounts.length&&(e.error="Not found account"),e.isReady=!0,e.status=!0,t.next=18,e.api.query.assets.account(F["a"].ID_ASSET,e.account,(function(t){var n=t.balance;e.balance=n.toNumber()}));case 18:e.unsubscribe=t.sent,t.next=24;break;case 21:t.prev=21,t.t0=t["catch"](0),e.error=t.t0.message;case 24:case"end":return t.stop()}}),t,null,[[0,21]])})))()},mounted:function(){this.time=this.countdown(Date.now());var e=this;setInterval((function(){e.time=e.countdown(Date.now())}),1e3)},destroyed:function(){this.unsubscribe&&this.unsubscribe()},watch:{quantityRaw:function(e){e&&e>=1&&e<=100?this.quantity=e.toFixed(0):e>100&&(this.quantity=100)},status:function(){var e=Object(q["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!1!==n||!0!==t){e.next=3;break}return e.next=3,L("https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js");case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),account:function(e,t){this.onChange({name:"account",newValue:e,oldValue:t})}},computed:{totalPaymentUSD:{get:function(){return(this.quantity*this.pricePerToken).toFixed(2)}},checkedAccount:{get:function(){return this.$store.state.checkedAccounts.includes(this.$store.state.accountActive)},set:function(e){this.$store.commit("setAccountChecked",e)}},account:{get:function(){return this.$store.state.accountActive?this.$store.state.accountActive:this.accountDefault},set:function(e){this.$store.commit("setAccountActive",e)}},email:{get:function(){return this.$store.state.email},set:function(e){this.$store.commit("setEmail",e)}},bannerClasses:function(){var e;return e={},Object(I["a"])(e,"is-day",this.isDay()),Object(I["a"])(e,"is-night",this.isNight()),Object(I["a"])(e,"is-dawn",this.isDawn()),Object(I["a"])(e,"is-sunset",this.isSunset()),Object(I["a"])(e,"on",this.telescopeOn()),e}},methods:{addressShort:function(e){return e.slice(0,6)+"..."+e.slice(-4)},onChange:function(e){var t=this;return Object(q["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.name,r=e.newValue,"account"!==a){n.next=6;break}return t.unsubscribe&&t.unsubscribe(),n.next=5,t.api.query.assets.account(F["a"].ID_ASSET,r,(function(e){var n=e.balance;t.balance=n.toNumber()}));case 5:t.unsubscribe=n.sent;case 6:case"end":return n.stop()}}),n)})))()},handleSubmit:function(){this.account&&this.checkout(this.account,this.quantity)},checkout:function(e,t){var n=this;return Object(q["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.proccess=!0,a.prev=1,a.next=4,Object(B["b"])({account:e,quantity:t});case 4:return r=a.sent,a.next=7,M.redirectToCheckout({sessionId:r.id});case 7:s=a.sent,s.error&&console.error(s.error.message),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](1),console.log(a.t0);case 14:n.proccess=!1;case 15:case"end":return a.stop()}}),a,null,[[1,11]])})))()},start:function(){window.scrollTo({top:document.querySelector("#start").offsetTop,behavior:"smooth"})},currentHour:function(){return Z()(Date.now()).zone("-03:00").format("HH")},countdown:function(e){var t=Z.a.duration(Z()(e).zone("-03:00").format("HH:MM:SS")),n=Z.a.duration("17:00:00"),a=n.subtract(t);return a.hours()+":"+a.minutes()+":"+a.seconds()},isDay:function(){return this.currentHour()>=10&&this.currentHour()<16},isNight:function(){return this.currentHour()>=17||this.currentHour()<=10},isDawn:function(){return this.currentHour()>9&&this.currentHour()<=10},isSunset:function(){return this.currentHour()>=16&&this.currentHour()<17},telescopeOn:function(){if(this.isNight())return!0}}},W=K,J=(n("943f"),Object(f["a"])(W,z,D,!1,null,"4a62357c",null)),Y=J.exports;a["a"].use(w["a"]);var V=new w["a"]({routes:[{path:"/",name:"checkout",component:Y},{path:"/success",name:"success",component:A},{path:"/cancel",name:"cancel",component:$},{path:"*",redirect:"/"}]}),X=(n("4de4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:[{"container-full":e.fullWidth},e.size?"btn-"+e.size:null,"btn-"+e.color],on:{click:function(t){return e.$emit("click",t)}}},[e._t("default")],2)}),Q=[],ee={props:{fullWidth:{type:Boolean,default:!1},size:{type:String,validator:function(e){return["big","sm"].includes(e)},require:!1},color:{type:String,validator:function(e){return["green","blue"].includes(e)},default:"blue"}}},te=ee,ne=Object(f["a"])(te,X,Q,!1,null,null,null),ae=ne.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{on:{click:function(t){return e.up(!e.flag)}}},[e.flag?[e._v("–")]:[e._v("+")]],2)},se=[],ce={model:{prop:"value",event:"toggle"},props:{value:{type:Boolean,default:!0},id:String},data:function(){return{flag:this.value}},created:function(){if(this.id){var e=localStorage.getItem("toogle:".concat(this.id));"true"===e?this.up(!0):"false"===e&&this.up(!1)}},methods:{up:function(e){this.flag=e,this.$emit("toggle",this.flag),this.id&&localStorage.setItem("toogle:".concat(this.id),this.flag)}}},oe=ce,ie=Object(f["a"])(oe,re,se,!1,null,null,null),ue=ie.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section-light"},[e._t("default")],2)},de=[],fe={},he=Object(f["a"])(fe,le,de,!1,null,null,null),pe=he.exports,be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Card",[n("div",{staticClass:"window-head"},[n("span",{domProps:{innerHTML:e._s(e.title)}}),n("Toggle",{staticClass:"window-head-toggle",attrs:{id:e.id},model:{value:e.isShow,callback:function(t){e.isShow=t},expression:"isShow"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"window-content"},[e._t("default")],2)])},me=[],ve={props:["title","id"],components:{Card:pe,Toggle:ue},data:function(){return{isShow:!0}}},ge=ve,je=Object(f["a"])(ge,be,me,!1,null,null,null),_e=je.exports,ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"form-section-title"},[e._v(e._s(e.title))]),e._t("default")],2)},ke=[],we={props:{title:String}},xe=we,Se=Object(f["a"])(xe,ye,ke,!1,null,null,null),Ce=Se.exports,Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-item form-line-label"},[e._t("default")],2)},Oe=[],Ae={},Re=Object(f["a"])(Ae,Ee,Oe,!1,null,null,null),Te=Re.exports,Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[e._t("default"),e._v(": "),e.isError?n("span",{staticClass:"input-msg"},[e._v(e._s(e.msgError))]):e._e()],2)},Pe=[],$e={props:{msgError:{type:String,default:"Check if data correct, please."},isError:{type:Boolean,default:!1}}},ze=$e,De=Object(f["a"])(ze,Ne,Pe,!1,null,null,null),Ie=De.exports,qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.paginatedData,(function(t,a){return n("div",{key:a},[e._t("default",null,{item:t})],2)})),n("div",{staticClass:"pagination"},[n("button",{attrs:{disabled:0===e.pageNumber},on:{click:e.prevPage}},[e._v("Previous")]),n("b",[e._v(e._s(e.pageCount>0?e.pageNumber+1:0)+" / "+e._s(e.pageCount))]),n("button",{attrs:{disabled:e.pageNumber>=e.pageCount-1},on:{click:e.nextPage}},[e._v(" Next ")])])],2)},Be=[],Fe=(n("a9e3"),{props:{listData:{type:Array,required:!0},currentPage:{type:Number,required:!1,default:0},size:{type:Number,required:!1,default:1}},data:function(){return{pageNumber:this.currentPage}},watch:{currentPage:function(e){this.pageNumber=e}},computed:{pageCount:function(){var e=this.listData.length,t=this.size;return Math.ceil(e/t)},paginatedData:function(){var e=this.pageNumber*this.size,t=e+this.size;return this.listData.slice(e,t)}},methods:{nextPage:function(){this.pageNumber++,this.$emit("page",this.pageNumber)},prevPage:function(){this.pageNumber--,this.$emit("page",this.pageNumber)}}}),He=Fe,Me=(n("51e2"),Object(f["a"])(He,qe,Be,!1,null,"f5fce9e0",null)),Ue=Me.exports,Le=(n("99af"),function(e){return e.slice(0,6)+"..."+e.slice(-4)});function Ge(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"address",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a="etherscan.io";""===t&&(t="address");var r="";return 4===n&&(r="rinkeby."),a=r+a,"https://".concat(a,"/").concat(t,"/").concat(e)}function Ze(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ipfs",n="ipfs.io";return""===t&&(t="ipfs"),"https://".concat(n,"/").concat(t,"/").concat(e)}a["a"].component("Button",ae),a["a"].component("Toggle",ue),a["a"].component("Card",pe),a["a"].component("CardToggle",_e),a["a"].component("FormSection",Ce),a["a"].component("FormField",Te),a["a"].component("FormFieldLabel",Ie),a["a"].component("Pagination",Ue),a["a"].filter("labelAddress",Le),a["a"].filter("urlChainExplorer",Ge),a["a"].filter("urlIpfsExplorer",Ze);var Ke=n("3f08"),We=n("2f62"),Je=n("5d95"),Ye=n("342d"),Ve=n.n(Ye),Xe=n("2ead"),Qe=n.n(Xe);a["a"].use(Ke["a"].Plugin),a["a"].use(We["a"]),a["a"].use(Ve.a),a["a"].use(Qe.a,{moment:Z.a});var et=new We["a"].Store({state:{accountActive:localStorage.accountActive?localStorage.accountActive:"",checkedAccounts:localStorage.checkedAccounts?localStorage.checkedAccounts:"",email:localStorage.email?localStorage.email:""},mutations:{setAccountActive:function(e,t){Object(Je["a"])(t,2)[0]&&(e.accountActive=t,localStorage.setItem("accountActive",e.accountActive))},setEmail:function(e,t){e.email=t,localStorage.setItem("email",e.email)},setAccountChecked:function(e,t){t?e.checkedAccounts.includes(e.accountActive)||(e.checkedAccounts+=" "+e.accountActive):e.checkedAccounts.includes(e.accountActive)&&(e.checkedAccounts=e.checkedAccounts.replace(e.accountActive,"")),localStorage.setItem("checkedAccounts",e.checkedAccounts)}}});a["a"].config.productionTip=!1,new a["a"]({router:V,render:function(e){return e(k)},store:et}).$mount("#app")},"5f12":function(e,t,n){"use strict";n("3df5")},6:function(e,t){},7:function(e,t){},7424:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return h}));var a=n("1da1"),r=(n("96cf"),n("bc3a")),s=n.n(r),c=n("db49");function o(e){return i.apply(this,arguments)}function i(){return i=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat(c["a"].API_SERVER,"/checkout"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function u(){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("https://api.merklebot.com/beyond-the-sky/astronomical-objects/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function d(){return f.apply(this,arguments)}function f(){return f=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("https://api.merklebot.com/beyond-the-sky/status/");case 2:return t=e.sent,e.abrupt("return",{status:t.data.status,message:t.data.message});case 4:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function h(e,t){return p.apply(this,arguments)}function p(){return p=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("https://api.merklebot.com/beyond-the-sky/nft",{params:{name:t,sender:n,block_number:0,block_hash:"0x00"}});case 2:a=e.sent,console.log("createNFT:",a);case 4:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}},8:function(e,t){},"85ec":function(e,t,n){},"8be7":function(e,t,n){},9:function(e,t){},"943f":function(e,t,n){"use strict";n("4084")},db49:function(e,t,n){"use strict";var a,r,s;t["a"]={API_SERVER:null!==(a="https://api.merklebot.com/beyond-the-sky")&&void 0!==a?a:"https://checkout.spot-sdk.education",STRIPE_KEY:null!==(r="pk_live_51IvSZKJXrK78CsUSfSb5Jyjo3AkjZ2k6ZMr0c8miMMIcWcQiBKtCapD5ho2Bk45MjMh3QTlpLamkrOiG9gMJzMh100iGhW3ehO")&&void 0!==r?r:"pk_................",PRICE_PER_LESSON_CENTS:null!==(s="100")&&void 0!==s?s:2e3,ID_ASSET:"1607",SUBSTRATE:{url:"wss://statemine-rpc.polkadot.io",types:{},keyring:{isDevelopment:!1,type:"sr25519"}},ACCESS_TOKEN_RECV_ACCOUNT:"Gecm9tRWX5sFzttHLB2j6PurJBeNM3oLHABvztnqXCnmHwZ"}},e187:function(e,t,n){},ef36:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return j})),n.d(t,"d",(function(){return _}));var a=n("5530"),r=(n("d4ec"),n("bee2"),n("1da1")),s=(n("96cf"),n("d3b7"),n("b64b"),n("99af"),n("d81d"),n("159b"),n("25f0"),n("ec14")),c=n("22a5"),o=n("0b67"),i=n("077d"),u=(n("26af"),n("db49")),l=null,d=null;function f(){return l||(l=new s["a"](u["a"].SUBSTRATE.url),l)}function h(){return p.apply(this,arguments)}function p(){return p=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!d){e.next=2;break}return e.abrupt("return",d);case 2:return e.next=4,c["a"].create({provider:f(),types:u["a"].SUBSTRATE.types});case 4:return d=e.sent,e.abrupt("return",d);case 6:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function b(){return new Promise((function(e,t){var n=setTimeout((function(){return clearTimeout(n),clearInterval(a),t(new Error("NOT_FOUND_EXTENSION"))}),3e3),a=setInterval((function(){if(Object.keys(window.injectedWeb3).length>0)return clearTimeout(n),clearInterval(a),e()}),100)}))}var m=!1;function v(e){return g.apply(this,arguments)}function g(){return g=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:return e.next=4,Object(i["b"])("robonomics");case 4:if(n=e.sent,0!==n.length){e.next=7;break}throw new Error("NOT_FOUND_EXTENSION");case 7:return e.next=9,Object(i["a"])();case 9:return r=e.sent,s=r.map((function(e){var t=e.address,n=e.meta;return{address:t,meta:n}})),o["a"].loadAll(Object(a["a"])({genesisHash:t.genesisHash,ss58Format:t.registry.chainSS58},u["a"].SUBSTRATE.keyring),s),m=!0,e.abrupt("return",o["a"].getPairs());case 14:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function j(e){return m?o["a"].getPairs():v(e)}function _(e,t,n,a){return y.apply(this,arguments)}function y(){return y=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,a,r){var s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["c"])(t);case 2:return s=e.sent,c=d.tx.utility.batch([d.tx.assets.transfer(a,n,r)]),e.prev=4,e.next=7,c.signAndSend(t,{signer:s.signer},(function(e){e.status.isInBlock?e.events.forEach((function(t){var n=t.event,a=n.method,r=n.section;"system"===r&&"ExtrinsicFailed"===a?console.log("ExtrinsicFailed",{block:e.status.asInBlock.toString(),tx:c.hash.toString()}):"system"===r&&"ExtrinsicSuccess"===a&&console.log(null,{block:e.status.asInBlock.toString(),tx:c.hash.toString()})})):e.status.isFinalized&&console.log("isFinalized")}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](4),console.log("Error:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[4,9]])}))),y.apply(this,arguments)}}});
//# sourceMappingURL=app.e849bdb9.js.map