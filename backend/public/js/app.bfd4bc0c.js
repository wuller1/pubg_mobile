(function(e){function t(t){for(var s,r,o=t[0],i=t[1],l=t[2],b=0,m=[];b<o.length;b++)r=o[b],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);d&&d(t);while(m.length)m.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],s=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(s=!1)}s&&(c.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},n={app:0},c=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=i;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1396:function(e,t,a){"use strict";a("862b")},1703:function(e,t,a){"use strict";a("ad0a")},"18ff":function(e,t,a){},"1b36":function(e,t,a){},"3d93":function(e,t,a){"use strict";a("1b36")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=c,e.exports=n,n.id="4678"},5157:function(e,t,a){"use strict";a("18ff")},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("7a23"),n=a("3fd4");a("7dd6");const c=Object(s["gb"])("data-v-54417f81");Object(s["G"])("data-v-54417f81");const r={class:"card m-5",style:{width:"18rem"}},o={class:"card-body"},i={class:"card-title"},l={class:"card-text"},d=Object(s["m"])("button",{class:"btn btn-primary"}," Подробнее ",-1);Object(s["E"])();const b=c((e,t,a,n,b,m)=>{const u=Object(s["M"])("router-link");return Object(s["D"])(),Object(s["i"])("div",r,[Object(s["m"])("img",{src:a.image,class:"card-img-top"},null,8,["src"]),Object(s["m"])("div",o,[Object(s["m"])("h5",i,Object(s["Q"])(a.title),1),Object(s["m"])("p",l,Object(s["Q"])(a.description),1),Object(s["m"])(u,{to:"/tournaments/"+a.id},{default:c(()=>[d]),_:1},8,["to"])])])});var m={props:["title","image","description","id"]};a("3d93");m.render=b,m.__scopeId="data-v-54417f81";var u=m;const j=Object(s["gb"])("data-v-ed0a929e");Object(s["G"])("data-v-ed0a929e");const f={class:"card",style:{width:"18rem"}},p={class:"card-body"},O={class:"card-title"},h={class:"card-text"},g={class:"center"},v=Object(s["m"])("a",{href:"/tournaments/add_user",class:"btn btn-info mb-3"},"Добавить пользователя",-1);Object(s["E"])();const y=j((e,t,a,n,c,r)=>(Object(s["D"])(),Object(s["i"])("div",f,[Object(s["m"])("img",{src:a.image,class:"card-img-top"},null,8,["src"]),Object(s["m"])("div",p,[Object(s["m"])("h5",O,Object(s["Q"])(a.title),1),Object(s["m"])("p",h,Object(s["Q"])(a.description),1),Object(s["m"])("div",g,[Object(s["m"])("a",{href:`/tournaments/${a.id}/edit`,class:"btn btn-warning mb-3"},"Редактировать",8,["href"]),v,Object(s["m"])("a",{onClick:t[1]||(t[1]=e=>r.delete_tournament(a.id)),class:"btn btn-danger mb-3"},"Удалить турнир")])])])));var k=a("bc3a"),w=a.n(k);const I="/api/v1/tournaments/";class _{static getTournaments(){return new Promise(async(e,t)=>{try{const t=await w.a.get(I),a=t.data;e(a)}catch(a){t(a)}})}static getTournament(e){return new Promise(async(t,a)=>{try{const a=await w.a.get(`${I}${e}`),s=a.data;t(s)}catch(s){a(s)}})}static createTournament(e,t){return w()({method:"POST",url:"/api/v1/tournaments",data:e,headers:{Authorization:t}})}static updateTournament(e,t,a){return w()({method:"PUT",url:"/api/v1/tournaments/"+a,data:e,headers:{Authorization:t}})}static deleteTournament(e,t){return w()({method:"DELETE",url:"/api/v1/tournaments/"+e,headers:{Authorization:t}})}static login(e){return w()({method:"POST",url:"/api/v1/auth/login",data:e})}}var D=_,T={data(){return{token:this.$store.getters["auth/token"]}},props:["title","image","description","id"],methods:{async delete_tournament(e){await D.deleteTournament(e,this.token)}}};a("c33d");T.render=y,T.__scopeId="data-v-ed0a929e";var x=T;function A(e,t,a,n,c,r){const o=Object(s["M"])("the-header"),i=Object(s["M"])("the-main"),l=Object(s["M"])("the-footer");return Object(s["D"])(),Object(s["i"])("div",null,[Object(s["m"])(o),Object(s["m"])(i),Object(s["m"])(l)])}const z=Object(s["gb"])("data-v-1f4b5fca");Object(s["G"])("data-v-1f4b5fca");const U={class:"navbar navbar-expand-lg navbar-light bg-light"},S={class:"container-fluid"},C=Object(s["l"])("PUBG mobile"),M=Object(s["m"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(s["m"])("span",{class:"navbar-toggler-icon"})],-1),P={class:"collapse navbar-collapse",id:"navbarNavAltMarkup",ref:"navbarNavAltMarkup"},$={class:"navbar-nav"},L=Object(s["l"])("Домой"),F=Object(s["l"])("Турниры"),E=Object(s["l"])("Админ"),V=Object(s["l"])("Войти"),Y=Object(s["l"])("Выйти");Object(s["E"])();const G=z((e,t,a,n,c,r)=>{const o=Object(s["M"])("router-link");return Object(s["D"])(),Object(s["i"])("header",null,[Object(s["m"])("nav",U,[Object(s["m"])("div",S,[Object(s["m"])(o,{class:"navbar-brand",to:"/"},{default:z(()=>[C]),_:1}),M,Object(s["m"])("div",P,[Object(s["m"])("div",$,[Object(s["m"])(o,{onClick:r.toggle,class:"nav-link active","aria-current":"page",to:"/"},{default:z(()=>[L]),_:1},8,["onClick"]),Object(s["m"])(o,{onClick:r.toggle,class:"nav-link",to:"/tournaments"},{default:z(()=>[F]),_:1},8,["onClick"]),r.isAdmin||r.isPublisher?(Object(s["D"])(),Object(s["i"])(o,{key:0,onClick:r.toggle,class:"nav-link",to:"/admin"},{default:z(()=>[E]),_:1},8,["onClick"])):Object(s["j"])("",!0),r.isLoggedIn?(Object(s["D"])(),Object(s["i"])(o,{key:2,onClick:t[1]||(t[1]=e=>(r.toggle,r.logout)),class:"nav-link",to:"/tournaments"},{default:z(()=>[Y]),_:1})):(Object(s["D"])(),Object(s["i"])(o,{key:1,onClick:r.toggle,class:"nav-link",to:"/login"},{default:z(()=>[V]),_:1},8,["onClick"]))])],512)])])])});var N={data(){return{loggedIn:!1,isAdmin:!1,isPublisher:!1,userName:"",error:""}},computed:{isLoggedIn(){return this.$store.getters["auth/isAuthenticated"]},isAdmin(){return this.$store.getters["auth/isAdmin"]},isPublisher(){return this.$store.getters["auth/isPublisher"]}},methods:{toggle(){const e=this.$refs.navbarNavAltMarkup;console.log(e);const t=new bootstrap.Collapse(e);t.toggle()},logout(){this.$store.dispatch("auth/logout")}},async created(){try{this.tournaments=await D.getTournaments()}catch(e){this.error=e.message}}};a("d386");N.render=G,N.__scopeId="data-v-1f4b5fca";var Q=N;function q(e,t){const a=Object(s["M"])("router-view");return Object(s["D"])(),Object(s["i"])(a)}const B={};B.render=q;var H=B;const R=Object(s["l"])("The Footer");function J(e,t){const a=Object(s["M"])("el-footer");return Object(s["D"])(),Object(s["i"])(a,null,{default:Object(s["cb"])(()=>[R]),_:1})}a("1703");const K={};K.render=J;var X=K,W={components:{TheHeader:Q,TheMain:H,TheFooter:X},created(){this.$store.dispatch("auth/autoLogin")}};W.render=A;var Z=W,ee=a("6c02");const te={class:"home"},ae=Object(s["m"])("h1",null,"Home Path",-1);function se(e,t,a,n,c,r){return Object(s["D"])(),Object(s["i"])("div",te,[ae])}var ne={name:"Home",components:{}};ne.render=se;var ce=ne;const re=Object(s["gb"])("data-v-86ef3c14");Object(s["G"])("data-v-86ef3c14");const oe={class:"container"},ie={key:0},le={key:1},de=Object(s["m"])("div",{class:"spinner-border",role:"status"},[Object(s["m"])("span",{class:"visually-hidden"},"Loading...")],-1);Object(s["E"])();const be=re((e,t,a,n,c,r)=>{const o=Object(s["M"])("base-card");return Object(s["D"])(),Object(s["i"])("div",oe,[c.tournaments.data?(Object(s["D"])(),Object(s["i"])("div",ie,[(Object(s["D"])(!0),Object(s["i"])(s["b"],null,Object(s["K"])(c.tournaments.data,e=>(Object(s["D"])(),Object(s["i"])(o,{key:e._id,title:e.title,image:e.image,description:e.description,id:e._id},null,8,["title","image","description","id"]))),128))])):(Object(s["D"])(),Object(s["i"])("div",le,[de]))])});var me={data(){return{tournaments:{},error:""}},methods:{},async created(){try{this.tournaments=await D.getTournaments()}catch(e){this.error=e.message}}};a("c69f");me.render=be,me.__scopeId="data-v-86ef3c14";var ue=me;const je=Object(s["gb"])("data-v-3718ef8a");Object(s["G"])("data-v-3718ef8a");const fe={key:0},pe=Object(s["l"])("Участвовать"),Oe={key:1},he=Object(s["m"])("div",{class:"spinner-border",role:"status"},[Object(s["m"])("span",{class:"visually-hidden"},"Loading...")],-1);Object(s["E"])();const ge=je((e,t,a,n,c,r)=>{const o=Object(s["M"])("el-button");return c.tournamentInfo.data?(Object(s["D"])(),Object(s["i"])("div",fe,[Object(s["m"])("img",{src:c.tournamentInfo.data.image,alt:""},null,8,["src"]),Object(s["m"])("div",null,Object(s["Q"])(c.tournamentInfo.data.title),1),Object(s["m"])(o,{type:"primary"},{default:je(()=>[pe]),_:1}),Object(s["m"])("div",null,Object(s["Q"])(c.tournamentInfo.data.description),1)])):(Object(s["D"])(),Object(s["i"])("div",Oe,[he]))});var ve={data(){return{tournamentInfo:{data:null}}},methods:{},async created(){try{this.tournamentInfo=await D.getTournament(this.$route.params.id)}catch(e){this.error=e.message}}};a("69c6");ve.render=ge,ve.__scopeId="data-v-3718ef8a";var ye=ve;const ke=Object(s["l"])("Войти"),we={key:0},Ie={key:1};function _e(e,t,a,n,c,r){const o=Object(s["M"])("el-input"),i=Object(s["M"])("el-button");return Object(s["D"])(),Object(s["i"])("div",null,[Object(s["m"])(o,{placeholder:"email",modelValue:c.email,"onUpdate:modelValue":t[1]||(t[1]=e=>c.email=e),clearable:""},null,8,["modelValue"]),Object(s["m"])(o,{placeholder:"Пароль",modelValue:c.password,"onUpdate:modelValue":t[2]||(t[2]=e=>c.password=e),"show-password":""},null,8,["modelValue"]),Object(s["m"])(i,{onClick:t[3]||(t[3]=e=>r.signup()),type:"primary"},{default:Object(s["cb"])(()=>[ke]),_:1}),c.success?(Object(s["D"])(),Object(s["i"])("div",we,"Успешно!")):Object(s["j"])("",!0),c.error?(Object(s["D"])(),Object(s["i"])("div",Ie,Object(s["Q"])(c.error),1)):Object(s["j"])("",!0)])}var De={data(){return{email:"",password:"",error:null,success:!1,isLoading:!1}},methods:{async signup(){this.isLoading=!0;try{await this.$store.dispatch("auth/signup",{email:this.email,password:this.password})}catch(e){this.error=e.message||"Failed to authenticate, try later"}this.isLoading=!1}},computed:{data(){return{}}}};De.render=_e;var Te=De;const xe={class:"container"},Ae={class:"mb-3"},ze=Object(s["m"])("label",{for:"email",class:"form-label"},"Email address",-1),Ue={class:"mb-3"},Se=Object(s["m"])("label",{for:"password",class:"form-label"},"Password",-1),Ce=Object(s["m"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1);function Me(e,t,a,n,c,r){return Object(s["D"])(),Object(s["i"])("div",xe,[Object(s["m"])("form",{onSubmit:t[3]||(t[3]=Object(s["fb"])((...e)=>r.signup&&r.signup(...e),["prevent"]))},[Object(s["m"])("div",Ae,[ze,Object(s["db"])(Object(s["m"])("input",{type:"email",class:"form-control",id:"email","aria-describedby":"emailHelp","onUpdate:modelValue":t[1]||(t[1]=e=>c.email=e)},null,512),[[s["Y"],c.email]])]),Object(s["m"])("div",Ue,[Se,Object(s["db"])(Object(s["m"])("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":t[2]||(t[2]=e=>c.password=e)},null,512),[[s["Y"],c.password]])]),Ce],32)])}var Pe={data(){return{email:"",password:"",error:null,success:!1,isLoading:!1}},methods:{async signup(){this.isLoading=!0;try{await this.$store.dispatch("auth/login",{email:this.email,password:this.password})}catch(e){this.error=e.message||"Failed to authenticate, try later"}this.isLoading=!1}},computed:{userId(){return this.$store.state.token}}};Pe.render=Me;var $e=Pe;const Le=Object(s["gb"])("data-v-605281af"),Fe=Le((e,t,a,n,c,r)=>(Object(s["D"])(),Object(s["i"])("main",null,[Object(s["m"])("aside",null,[Object(s["m"])("nav",null,[Object(s["m"])("div",{class:"nav",onClick:t[1]||(t[1]=e=>r.setComponent("NewTournament"))}," Новый турнир "),Object(s["m"])("div",{class:"nav",onClick:t[2]||(t[2]=e=>r.setComponent("TournamentsActions"))}," Все турниры ")])]),Object(s["m"])("section",null,[(Object(s["D"])(),Object(s["i"])(Object(s["O"])(c.component)))])]))),Ee=Object(s["gb"])("data-v-995c7b20");Object(s["G"])("data-v-995c7b20");const Ve={class:"container"},Ye={class:"mb-3"},Ge=Object(s["m"])("label",{for:"title",class:"form-label"},"Название",-1),Ne={class:"mb-3"},Qe=Object(s["m"])("label",{for:"type",class:"form-label"},"Тип турнира",-1),qe=Object(s["m"])("option",{selected:"",value:"solo"},"Соло",-1),Be=Object(s["m"])("option",{value:"duo"},"Дуо",-1),He=Object(s["m"])("option",{value:"squad"},"Сквад",-1),Re={class:"mb-3"},Je=Object(s["m"])("label",{for:"datetime",class:"form-label"},"Время начала турнира",-1),Ke={class:"mb-3"},Xe=Object(s["m"])("label",{for:"formFile",class:"form-label"},"Изображение турнира",-1),We={class:"image"},Ze=Object(s["m"])("label",{for:"description",class:"form-label"},"Описание турнира",-1),et={class:"mb-3"},tt=Object(s["m"])("div",{class:"mb-3"},[Object(s["m"])("button",{type:"submit",class:"btn btn-primary"},"Добавить")],-1);Object(s["E"])();const at=Ee((e,t,a,n,c,r)=>(Object(s["D"])(),Object(s["i"])("main",Ve,[Object(s["m"])("form",{onSubmit:t[6]||(t[6]=Object(s["fb"])((...e)=>r.createTournament&&r.createTournament(...e),["prevent"]))},[Object(s["m"])("div",Ye,[Ge,Object(s["db"])(Object(s["m"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[1]||(t[1]=e=>c.title=e)},null,512),[[s["Y"],c.title]])]),Object(s["m"])("div",Ne,[Qe,Object(s["db"])(Object(s["m"])("select",{id:"type",class:"form-select","aria-label":"Default select example","onUpdate:modelValue":t[2]||(t[2]=e=>c.type=e)},[qe,Be,He],512),[[s["X"],c.type]])]),Object(s["m"])("div",Re,[Je,Object(s["db"])(Object(s["m"])("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>c.startsAt=e),type:"datetime-local",id:"datetime",class:"form-control"},null,512),[[s["Y"],c.startsAt]])]),Object(s["m"])("div",Ke,[Xe,Object(s["m"])("input",{class:"form-control",type:"file",id:"formFile",accept:"image/*",onChange:t[4]||(t[4]=(...e)=>r.handleFileUpload&&r.handleFileUpload(...e)),ref:"file"},null,544)]),Object(s["m"])("div",We,[Object(s["m"])("img",{src:c.image},null,8,["src"])]),Ze,Object(s["m"])("div",et,[Object(s["db"])(Object(s["m"])("textarea",{"onUpdate:modelValue":t[5]||(t[5]=e=>c.description=e),class:"form-control",id:"description"},null,512),[[s["Y"],c.description]])]),tt],32)])));var st={data(){return{title:"",type:"",startsAt:"",description:"",token:this.$store.getters["auth/token"],file:"",image:""}},computed:{},methods:{handleFileUpload(){this.file=this.$refs.file.files[0];const e=event.target.files[0];this.image=URL.createObjectURL(e)},async createTournament(e){const t={title:this.title,type:this.type,startsAt:this.startsAt,description:this.description},a=new FormData;a.append("file",this.file);try{const e=await D.createTournament(t,this.token),s=e.data.data._id,n=await fetch(`/api/v1/tournaments/${s}/photo`,{method:"PUT",headers:{Authorization:this.token},body:a});console.log(await n.json())}catch(s){this.error=s.message}}}};a("95b1");st.render=at,st.__scopeId="data-v-995c7b20";var nt=st;const ct=Object(s["gb"])("data-v-36a86f0d");Object(s["G"])("data-v-36a86f0d");const rt={key:0},ot={key:1},it=Object(s["m"])("div",{class:"spinner-border",role:"status"},[Object(s["m"])("span",{class:"visually-hidden"},"Loading...")],-1);Object(s["E"])();const lt=ct((e,t,a,n,c,r)=>{const o=Object(s["M"])("base-card-admin");return c.tournaments.data?(Object(s["D"])(),Object(s["i"])("div",rt,[(Object(s["D"])(!0),Object(s["i"])(s["b"],null,Object(s["K"])(c.tournaments.data,e=>(Object(s["D"])(),Object(s["i"])(o,{key:e._id,title:e.title,image:e.image,description:e.description,id:e._id},null,8,["title","image","description","id"]))),128))])):(Object(s["D"])(),Object(s["i"])("div",ot,[it]))});var dt={data(){return{tournaments:{},error:""}},methods:{},async created(){try{this.tournaments=await D.getTournaments()}catch(e){this.error=e.message}}};a("5157");dt.render=lt,dt.__scopeId="data-v-36a86f0d";var bt=dt,mt={data(){return{component:""}},components:{NewTournament:nt,TournamentsActions:bt},methods:{setComponent(e){this.component=e}}};a("b9c1");mt.render=Fe,mt.__scopeId="data-v-605281af";var ut=mt;const jt=Object(s["gb"])("data-v-1e6539e4");Object(s["G"])("data-v-1e6539e4");const ft={class:"container"},pt={key:0},Ot={class:"mb-3"},ht=Object(s["m"])("label",{for:"title",class:"form-label"},"Название",-1),gt={class:"mb-3"},vt=Object(s["m"])("label",{for:"type",class:"form-label"},"Тип турнира",-1),yt=Object(s["m"])("option",{selected:"",value:"solo"},"Соло",-1),kt=Object(s["m"])("option",{value:"duo"},"Дуо",-1),wt=Object(s["m"])("option",{value:"squad"},"Сквад",-1),It={class:"mb-3"},_t=Object(s["m"])("label",{for:"datetime",class:"form-label"},"Время начала турнира",-1),Dt={class:"mb-3"},Tt=Object(s["m"])("label",{for:"formFile",class:"form-label"},"Изображение турнира",-1),xt={class:"mb-3 image"},At=Object(s["m"])("label",{for:"description",class:"form-label"},"Описание турнира",-1),zt={class:"mb-3"},Ut=Object(s["m"])("div",{class:"mb-3"},[Object(s["m"])("button",{type:"submit",class:"btn btn-primary"},"Редактировать")],-1),St={key:1,class:"spinner-border",role:"status"},Ct=Object(s["m"])("span",{class:"visually-hidden"},"Loading...",-1);Object(s["E"])();const Mt=jt((e,t,a,n,c,r)=>(Object(s["D"])(),Object(s["i"])("main",ft,[c.title?(Object(s["D"])(),Object(s["i"])("div",pt,[Object(s["m"])("form",{onSubmit:t[6]||(t[6]=Object(s["fb"])((...e)=>r.updateTournament&&r.updateTournament(...e),["prevent"]))},[Object(s["m"])("div",Ot,[ht,Object(s["db"])(Object(s["m"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[1]||(t[1]=e=>c.title=e)},null,512),[[s["Y"],c.title]])]),Object(s["m"])("div",gt,[vt,Object(s["db"])(Object(s["m"])("select",{id:"type",class:"form-select","aria-label":"Default select example","onUpdate:modelValue":t[2]||(t[2]=e=>c.type=e)},[yt,kt,wt],512),[[s["X"],c.type]])]),Object(s["m"])("div",It,[_t,Object(s["db"])(Object(s["m"])("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>c.startsAt=e),type:"datetime-local",id:"datetime",class:"form-control"},null,512),[[s["Y"],c.startsAt]])]),Object(s["m"])("div",Dt,[Tt,Object(s["m"])("input",{class:"form-control",type:"file",id:"formFile",accept:"image/*",onChange:t[4]||(t[4]=(...e)=>r.onFileChange&&r.onFileChange(...e)),ref:"file"},null,544)]),Object(s["m"])("div",xt,[Object(s["m"])("img",{src:c.image,alt:""},null,8,["src"])]),At,Object(s["m"])("div",zt,[Object(s["db"])(Object(s["m"])("textarea",{"onUpdate:modelValue":t[5]||(t[5]=e=>c.description=e),class:"form-control",id:"description"},null,512),[[s["Y"],c.description]])]),Ut],32)])):(Object(s["D"])(),Object(s["i"])("div",St,[Ct]))]))),Pt=a("c1df");var $t={data(){return{title:"",type:"",startsAt:"",description:"",token:this.$store.getters["auth/token"],file:"",image:"",id:""}},computed:{},methods:{onFileChange(e){this.file=this.$refs.file.files[0];const t=e.target.files[0];this.image=URL.createObjectURL(t)},async updateTournament(e){const t={title:this.title,type:this.type,startsAt:this.startsAt,description:this.description};try{await D.updateTournament(t,this.token,this.id);if(console.log("updated successfully"),this.file){const e=new FormData;e.append("file",this.file),await fetch(`/api/v1/tournaments/${this.id}/photo`,{method:"PUT",headers:{Authorization:this.token},body:e})}}catch(a){console.log(a),this.error=a.message}},async getData(){try{const e=await fetch("/api/v1/tournaments/"+id,{method:"GET"});console.log(await e.json())}catch(e){this.error=e.message}}},async created(){try{const e=await fetch("/api/v1/tournaments/"+this.$route.params.id,{method:"GET"}),t=await e.json(),a=t.data;this.title=a.title,this.type=a.type,this.startsAt=Pt(a.startsAt).format("YYYY-MM-DDThh:mm"),this.description=a.description,this.image=a.image,this.id=a._id}catch(e){this.error=e.message}}};a("1396");$t.render=Mt,$t.__scopeId="data-v-1e6539e4";var Lt=$t;const Ft=[{path:"/",component:ce},{path:"/tournaments",component:ue},{path:"/tournaments/:id",component:ye},{path:"/register",component:Te},{path:"/login",component:$e},{path:"/admin",component:ut},{path:"/tournaments/:id/edit",component:Lt}],Et=Object(ee["a"])({history:Object(ee["b"])("/"),routes:Ft});var Vt=Et,Yt=a("5502"),Gt={namespaced:!0,state(){return{tournamentsData:{}}},mutations:{},actions:{async login(e){await D.login({email:e.email,password:e.password})},signup(e,t){}},getters:{}},Nt={namespaced:!0,state(){return{userId:null,token:null,role:null,expires:null,email:null}},mutations:{setUser(e,t){e.token=t.token,e.userId=t.userId,e.role=t.role,e.expires=t.expires,e.email=t.email}},actions:{login(e,t){return e.dispatch("auth",{...t,mode:"login"})},signup(e,t){return e.dispatch("auth",{...t,mode:"signup"})},autoLogin(e){const t=localStorage.getItem("token"),a=localStorage.getItem("userId"),s=localStorage.getItem("role"),n=localStorage.getItem("email"),c=localStorage.getItem("expires");t&&a&&e.commit("setUser",{token:t,userId:a,role:s,email:n,expires:c})},logout(e){localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("role"),localStorage.removeItem("email"),localStorage.removeItem("expires"),e.commit("setUser",{token:null,userId:null,role:null,email:null,expires:null})},async auth(e,t){const a=t.mode;let s="/api/v1/auth/login";"signup"===a&&(s="/api/v1/auth/register");const n=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.email,password:t.password})}),c=await n.json();if(console.log(c),!n.ok){const e=new Error(c.message||"Failed to authenticate");throw e}localStorage.setItem("token",c.token),localStorage.setItem("userId",c.id),localStorage.setItem("role",c.role),localStorage.setItem("email",c.email),localStorage.setItem("expires",c.expires),e.commit("setUser",{token:c.token,userId:c.id,role:c.role,email:c.email,expires:c.expires})}},getters:{userId(e){return e.userId},token(e){return"Bearer "+e.token},isAuthenticated(e){return!!e.token},isAdmin(e){if("admin"===e.role)return!0},isPublisher(e){if("publisher"===e.role)return!0}}},Qt=Object(Yt["a"])({modules:{tournaments:Gt,auth:Nt}});const qt=Object(s["h"])(Z);qt.use(Qt),qt.use(Vt),qt.use(n["a"]),qt.component("BaseCard",u),qt.component("BaseCardAdmin",x),qt.mount("#app")},"69c6":function(e,t,a){"use strict";a("8de3")},"85f7":function(e,t,a){},"862b":function(e,t,a){},"8de3":function(e,t,a){},"95b1":function(e,t,a){"use strict";a("85f7")},9768:function(e,t,a){},a4f2:function(e,t,a){},ad0a:function(e,t,a){},afda:function(e,t,a){},b9c1:function(e,t,a){"use strict";a("9768")},c0f1:function(e,t,a){},c33d:function(e,t,a){"use strict";a("a4f2")},c69f:function(e,t,a){"use strict";a("afda")},d386:function(e,t,a){"use strict";a("c0f1")}});
//# sourceMappingURL=app.bfd4bc0c.js.map