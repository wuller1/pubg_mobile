(function(e){function t(t){for(var s,r,o=t[0],i=t[1],l=t[2],b=0,u=[];b<o.length;b++)r=o[b],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);d&&d(t);while(u.length)u.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],s=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(s=!1)}s&&(c.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},n={app:0},c=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=i;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1703:function(e,t,a){"use strict";a("ad0a")},"18ff":function(e,t,a){},"1b36":function(e,t,a){},"1f02":function(e,t,a){},"343a":function(e,t,a){"use strict";a("ebf6")},"3d93":function(e,t,a){"use strict";a("1b36")},"3e7d":function(e,t,a){"use strict";a("d101")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=c,e.exports=n,n.id="4678"},5157:function(e,t,a){"use strict";a("18ff")},"55f6":function(e,t,a){"use strict";a("d55b")},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("7a23"),n=a("3fd4");a("7dd6");const c=Object(s["hb"])("data-v-54417f81");Object(s["H"])("data-v-54417f81");const r={class:"card m-5",style:{width:"18rem"}},o={class:"card-body"},i={class:"card-title"},l={class:"card-text"},d=Object(s["n"])("button",{class:"btn btn-primary"}," Подробнее ",-1);Object(s["F"])();const b=c((e,t,a,n,b,u)=>{const j=Object(s["N"])("router-link");return Object(s["E"])(),Object(s["i"])("div",r,[Object(s["n"])("img",{src:a.image,class:"card-img-top"},null,8,["src"]),Object(s["n"])("div",o,[Object(s["n"])("h5",i,Object(s["R"])(a.title),1),Object(s["n"])("p",l,Object(s["R"])(a.description),1),Object(s["n"])(j,{to:"/tournaments/"+a.id},{default:c(()=>[d]),_:1},8,["to"])])])});var u={props:["title","image","description","id"]};a("3d93");u.render=b,u.__scopeId="data-v-54417f81";var j=u;const m=Object(s["hb"])("data-v-67d7bb2e");Object(s["H"])("data-v-67d7bb2e");const p={class:"card m-3",style:{width:"18rem"}},f={class:"card-body"},O={class:"card-title"},h={class:"card-text"},g={class:"center"},v=Object(s["n"])("a",{href:"/tournaments/add_user",class:"btn btn-info mb-3"},"Добавить пользователя",-1);Object(s["F"])();const y=m((e,t,a,n,c,r)=>(Object(s["E"])(),Object(s["i"])("div",p,[Object(s["n"])("img",{src:a.image,class:"card-img-top"},null,8,["src"]),Object(s["n"])("div",f,[Object(s["n"])("h5",O,Object(s["R"])(a.title),1),Object(s["n"])("p",h,Object(s["R"])(a.description),1),Object(s["n"])("div",g,[Object(s["n"])("a",{href:`/tournaments/${a.id}/edit`,class:"btn btn-warning mb-3"},"Редактировать",8,["href"]),v,Object(s["n"])("a",{onClick:t[1]||(t[1]=e=>r.delete_tournament(a.id)),class:"btn btn-danger mb-3"},"Удалить турнир")])])])));var k=a("bc3a"),w=a.n(k);const _="/api/v1/tournaments/";class I{static getTournaments(e){return new Promise(async(e,t)=>{try{const t=await w.a.get(_),a=t.data;e(a)}catch(a){t(a)}})}static getTournament(e){return new Promise(async(t,a)=>{try{const a=await w.a.get(`${_}${e}`),s=a.data;t(s)}catch(s){a(s)}})}static createTournament(e,t){return w()({method:"POST",url:"/api/v1/tournaments",data:e,headers:{Authorization:t}})}static updateTournament(e,t,a){return w()({method:"PUT",url:"/api/v1/tournaments/"+a,data:e,headers:{Authorization:t}})}static deleteTournament(e,t){return w()({method:"DELETE",url:"/api/v1/tournaments/"+e,headers:{Authorization:t}})}static login(e){return w()({method:"POST",url:"/api/v1/auth/login",data:e})}}var E=I,T={data(){return{token:this.$store.getters["auth/token"]}},props:["title","image","description","id"],methods:{async delete_tournament(e){await E.deleteTournament(e,this.token),this.$router.push({path:"/tournaments"})}}};a("3e7d");T.render=y,T.__scopeId="data-v-67d7bb2e";var x=T;function A(e,t,a,n,c,r){const o=Object(s["N"])("the-header"),i=Object(s["N"])("the-main"),l=Object(s["N"])("the-footer");return Object(s["E"])(),Object(s["i"])("div",null,[Object(s["n"])(o),Object(s["n"])(i),Object(s["n"])(l)])}const z=Object(s["hb"])("data-v-4e2b8ce4");Object(s["H"])("data-v-4e2b8ce4");const U={class:"navbar navbar-expand-lg navbar-light bg-light"},C={class:"container-fluid"},S=Object(s["m"])("PUBG mobile"),F=Object(s["n"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(s["n"])("span",{class:"navbar-toggler-icon"})],-1),P={class:"collapse navbar-collapse",id:"navbarNavAltMarkup",ref:"navbarNavAltMarkup"},$={class:"navbar-nav"},L=Object(s["m"])("Домой"),N=Object(s["m"])("Турниры"),V=Object(s["m"])("Админ"),M=Object(s["m"])("Войти"),H=Object(s["m"])("Выйти");Object(s["F"])();const R=z((e,t,a,n,c,r)=>{const o=Object(s["N"])("router-link");return Object(s["E"])(),Object(s["i"])("header",null,[Object(s["n"])("nav",U,[Object(s["n"])("div",C,[Object(s["n"])(o,{class:"navbar-brand",to:"/"},{default:z(()=>[S]),_:1}),F,Object(s["n"])("div",P,[Object(s["n"])("div",$,[Object(s["n"])(o,{onClick:r.toggle,class:"nav-link active","aria-current":"page",to:"/"},{default:z(()=>[L]),_:1},8,["onClick"]),Object(s["n"])(o,{onClick:r.toggle,class:"nav-link",to:"/tournaments"},{default:z(()=>[N]),_:1},8,["onClick"]),r.isAdmin||r.isPublisher?(Object(s["E"])(),Object(s["i"])(o,{key:0,onClick:r.toggle,class:"nav-link",to:"/admin"},{default:z(()=>[V]),_:1},8,["onClick"])):Object(s["j"])("",!0),r.isLoggedIn?(Object(s["E"])(),Object(s["i"])(o,{key:2,onClick:t[1]||(t[1]=e=>{r.toggle(),r.logout()}),class:"nav-link",to:"/tournaments"},{default:z(()=>[H]),_:1})):(Object(s["E"])(),Object(s["i"])(o,{key:1,onClick:r.toggle,class:"nav-link",to:"/login"},{default:z(()=>[M]),_:1},8,["onClick"]))])],512)])])])});var D={data(){return{userName:"",error:""}},computed:{isLoggedIn(){return this.$store.getters["auth/isAuthenticated"]},isAdmin(){return this.$store.getters["auth/isAdmin"]},isPublisher(){return this.$store.getters["auth/isPublisher"]}},methods:{toggle(){const e=this.$refs.navbarNavAltMarkup,t=new bootstrap.Collapse(e);t.toggle()},logout(){this.$store.dispatch("auth/logout")}},async created(){try{this.tournaments=await E.getTournaments()}catch(e){this.error=e.message}}};a("b14d");D.render=R,D.__scopeId="data-v-4e2b8ce4";var Z=D;function Y(e,t){const a=Object(s["N"])("router-view");return Object(s["E"])(),Object(s["i"])(a)}const q={};q.render=Y;var B=q;const G=Object(s["m"])("The Footer");function J(e,t){const a=Object(s["N"])("el-footer");return Object(s["E"])(),Object(s["i"])(a,null,{default:Object(s["db"])(()=>[G]),_:1})}a("1703");const K={};K.render=J;var Q=K,W={components:{TheHeader:Z,TheMain:B,TheFooter:Q},created(){this.$store.dispatch("auth/autoLogin")}};W.render=A;var X=W,ee=a("6c02");const te={class:"home"},ae=Object(s["n"])("h1",null,"Home Path",-1);function se(e,t,a,n,c,r){return Object(s["E"])(),Object(s["i"])("div",te,[ae])}var ne={name:"Home",components:{}};ne.render=se;var ce=ne;const re=Object(s["hb"])("data-v-506c037a");Object(s["H"])("data-v-506c037a");const oe={class:"container"},ie={key:0},le={key:1},de=Object(s["n"])("div",{class:"spinner-border",role:"status"},[Object(s["n"])("span",{class:"visually-hidden"},"Loading...")],-1),be={"aria-label":"Page navigation example"},ue={class:"pagination"},je=Object(s["n"])("li",{class:"page-item"},[Object(s["n"])("a",{class:"page-link",href:"#"},"Предыдущая")],-1),me={class:"page-link",href:"#"},pe=Object(s["n"])("li",{class:"page-item"},[Object(s["n"])("a",{class:"page-link",href:"#"},"Следующая")],-1);Object(s["F"])();const fe=re((e,t,a,n,c,r)=>{const o=Object(s["N"])("base-card");return Object(s["E"])(),Object(s["i"])("div",oe,[c.tournaments.data?(Object(s["E"])(),Object(s["i"])("div",ie,[(Object(s["E"])(!0),Object(s["i"])(s["b"],null,Object(s["L"])(c.tournaments.data,e=>(Object(s["E"])(),Object(s["i"])(o,{key:e._id,title:e.title,image:e.image,description:e.description,id:e._id},null,8,["title","image","description","id"]))),128))])):(Object(s["E"])(),Object(s["i"])("div",le,[de])),Object(s["n"])("nav",be,[Object(s["n"])("ul",ue,[je,(Object(s["E"])(!0),Object(s["i"])(s["b"],null,Object(s["L"])(r.pagesCount,e=>(Object(s["E"])(),Object(s["i"])("li",{key:e,class:"page-item"},[Object(s["n"])("a",me,Object(s["R"])(e),1)]))),128)),pe])])])});var Oe={data(){return{tournaments:{},error:"",page:""}},methods:{},computed:{pagesCount(){if(this.tournaments.pagination)return this.tournaments.pagination.numberOfPages}},async created(){try{this.tournaments=await E.getTournaments()}catch(e){this.error=e.message,console.log(this.error)}}};a("9a8f");Oe.render=fe,Oe.__scopeId="data-v-506c037a";var he=Oe;const ge=Object(s["hb"])("data-v-0b9e256f");Object(s["H"])("data-v-0b9e256f");const ve={class:"container"},ye=Object(s["l"])('<ul class="nav nav-tabs m-3" data-v-0b9e256f><li class="nav-item" data-v-0b9e256f><a class="nav-link active" aria-current="page" href="#" data-v-0b9e256f>Инфо</a></li><li class="nav-item" data-v-0b9e256f><a class="nav-link" href="#" data-v-0b9e256f>Игроки</a></li></ul>',1),ke={key:0},we=Object(s["m"])("Участвовать"),_e={key:1},Ie=Object(s["n"])("div",{class:"spinner-border",role:"status"},[Object(s["n"])("span",{class:"visually-hidden"},"Loading...")],-1);Object(s["F"])();const Ee=ge((e,t,a,n,c,r)=>{const o=Object(s["N"])("el-button");return Object(s["E"])(),Object(s["i"])("div",ve,[ye,c.tournamentInfo.data?(Object(s["E"])(),Object(s["i"])("div",ke,[Object(s["n"])("img",{src:c.tournamentInfo.data.image,alt:""},null,8,["src"]),Object(s["n"])("div",null,Object(s["R"])(c.tournamentInfo.data.title),1),Object(s["n"])(o,{type:"primary"},{default:ge(()=>[we]),_:1}),Object(s["n"])("div",null,Object(s["R"])(c.tournamentInfo.data.description),1)])):(Object(s["E"])(),Object(s["i"])("div",_e,[Ie]))])});var Te={data(){return{tournamentInfo:{data:null}}},methods:{},async created(){try{this.tournamentInfo=await E.getTournament(this.$route.params.id)}catch(e){this.error=e.message}}};a("55f6");Te.render=Ee,Te.__scopeId="data-v-0b9e256f";var xe=Te;const Ae=Object(s["m"])("Войти"),ze={key:0},Ue={key:1};function Ce(e,t,a,n,c,r){const o=Object(s["N"])("el-input"),i=Object(s["N"])("el-button");return Object(s["E"])(),Object(s["i"])("div",null,[Object(s["n"])(o,{placeholder:"email",modelValue:c.email,"onUpdate:modelValue":t[1]||(t[1]=e=>c.email=e),clearable:""},null,8,["modelValue"]),Object(s["n"])(o,{placeholder:"Пароль",modelValue:c.password,"onUpdate:modelValue":t[2]||(t[2]=e=>c.password=e),"show-password":""},null,8,["modelValue"]),Object(s["n"])(i,{onClick:t[3]||(t[3]=e=>r.signup()),type:"primary"},{default:Object(s["db"])(()=>[Ae]),_:1}),c.success?(Object(s["E"])(),Object(s["i"])("div",ze,"Успешно!")):Object(s["j"])("",!0),c.error?(Object(s["E"])(),Object(s["i"])("div",Ue,Object(s["R"])(c.error),1)):Object(s["j"])("",!0)])}var Se={data(){return{email:"",password:"",error:null,success:!1,isLoading:!1}},methods:{async signup(){this.isLoading=!0;try{await this.$store.dispatch("auth/signup",{email:this.email,password:this.password})}catch(e){this.error=e.message||"Failed to authenticate, try later"}this.isLoading=!1}},computed:{data(){return{}}}};Se.render=Ce;var Fe=Se;const Pe={class:"container"},$e={class:"mb-3"},Le=Object(s["n"])("label",{for:"email",class:"form-label"},"Email address",-1),Ne={class:"mb-3"},Ve=Object(s["n"])("label",{for:"password",class:"form-label"},"Password",-1),Me=Object(s["n"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1);function He(e,t,a,n,c,r){return Object(s["E"])(),Object(s["i"])("div",Pe,[Object(s["n"])("form",{onSubmit:t[3]||(t[3]=Object(s["gb"])((...e)=>r.signup&&r.signup(...e),["prevent"]))},[Object(s["n"])("div",$e,[Le,Object(s["eb"])(Object(s["n"])("input",{type:"email",class:"form-control",id:"email","aria-describedby":"emailHelp","onUpdate:modelValue":t[1]||(t[1]=e=>c.email=e)},null,512),[[s["Z"],c.email]])]),Object(s["n"])("div",Ne,[Ve,Object(s["eb"])(Object(s["n"])("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":t[2]||(t[2]=e=>c.password=e)},null,512),[[s["Z"],c.password]])]),Me],32)])}var Re={data(){return{email:"",password:"",error:null,success:!1,isLoading:!1}},methods:{async signup(){this.isLoading=!0;try{await this.$store.dispatch("auth/login",{email:this.email,password:this.password})}catch(e){this.error=e.message||"Failed to authenticate, try later"}this.isLoading=!1,this.$router.go(-1)}},computed:{userId(){return this.$store.state.token}}};Re.render=He;var De=Re;const Ze=Object(s["hb"])("data-v-605281af"),Ye=Ze((e,t,a,n,c,r)=>(Object(s["E"])(),Object(s["i"])("main",null,[Object(s["n"])("aside",null,[Object(s["n"])("nav",null,[Object(s["n"])("div",{class:"nav",onClick:t[1]||(t[1]=e=>r.setComponent("NewTournament"))}," Новый турнир "),Object(s["n"])("div",{class:"nav",onClick:t[2]||(t[2]=e=>r.setComponent("TournamentsActions"))}," Все турниры ")])]),Object(s["n"])("section",null,[(Object(s["E"])(),Object(s["i"])(Object(s["P"])(c.component)))])]))),qe=Object(s["hb"])("data-v-fa0bbcca");Object(s["H"])("data-v-fa0bbcca");const Be={class:"container"},Ge={class:"mb-3"},Je=Object(s["n"])("label",{for:"title",class:"form-label"},"Название",-1),Ke={class:"mb-3"},Qe=Object(s["n"])("label",{for:"type",class:"form-label"},"Тип турнира",-1),We=Object(s["n"])("option",{selected:"",value:"solo"},"Соло",-1),Xe=Object(s["n"])("option",{value:"duo"},"Дуо",-1),et=Object(s["n"])("option",{value:"squad"},"Сквад",-1),tt={class:"mb-3"},at=Object(s["n"])("label",{for:"datetime",class:"form-label"},"Время начала турнира",-1),st={class:"mb-3"},nt=Object(s["n"])("label",{for:"formFile",class:"form-label"},"Изображение турнира",-1),ct={class:"image"},rt=Object(s["n"])("label",{for:"description",class:"form-label"},"Описание турнира",-1),ot={class:"mb-3"},it=Object(s["n"])("div",{class:"mb-3"},[Object(s["n"])("button",{type:"submit",class:"btn btn-primary"},"Добавить")],-1);Object(s["F"])();const lt=qe((e,t,a,n,c,r)=>(Object(s["E"])(),Object(s["i"])("main",Be,[Object(s["n"])("form",{onSubmit:t[6]||(t[6]=Object(s["gb"])((...e)=>r.createTournament&&r.createTournament(...e),["prevent"]))},[Object(s["n"])("div",Ge,[Je,Object(s["eb"])(Object(s["n"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[1]||(t[1]=e=>c.title=e)},null,512),[[s["Z"],c.title]])]),Object(s["n"])("div",Ke,[Qe,Object(s["eb"])(Object(s["n"])("select",{id:"type",class:"form-select","aria-label":"Default select example","onUpdate:modelValue":t[2]||(t[2]=e=>c.type=e)},[We,Xe,et],512),[[s["Y"],c.type]])]),Object(s["n"])("div",tt,[at,Object(s["eb"])(Object(s["n"])("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>c.startsAt=e),type:"datetime-local",id:"datetime",class:"form-control"},null,512),[[s["Z"],c.startsAt]])]),Object(s["n"])("div",st,[nt,Object(s["n"])("input",{class:"form-control",type:"file",id:"formFile",accept:"image/*",onChange:t[4]||(t[4]=(...e)=>r.handleFileUpload&&r.handleFileUpload(...e)),ref:"file"},null,544)]),Object(s["n"])("div",ct,[Object(s["n"])("img",{src:c.image},null,8,["src"])]),rt,Object(s["n"])("div",ot,[Object(s["eb"])(Object(s["n"])("textarea",{"onUpdate:modelValue":t[5]||(t[5]=e=>c.description=e),class:"form-control",id:"description"},null,512),[[s["Z"],c.description]])]),it],32)])));var dt={data(){return{title:"",type:"",startsAt:"",description:"",token:this.$store.getters["auth/token"],file:"",image:""}},computed:{},methods:{handleFileUpload(){this.file=this.$refs.file.files[0];const e=event.target.files[0];this.image=URL.createObjectURL(e)},async createTournament(e){const t={title:this.title,type:this.type,startsAt:this.startsAt,description:this.description},a=new FormData;a.append("file",this.file);try{const e=await E.createTournament(t,this.token),s=e.data.data._id;await fetch(`/api/v1/tournaments/${s}/photo`,{method:"PUT",headers:{Authorization:this.token},body:a})}catch(s){this.error=s.message}this.$router.push({path:"/tournaments"})}}};a("343a");dt.render=lt,dt.__scopeId="data-v-fa0bbcca";var bt=dt;const ut=Object(s["hb"])("data-v-36a86f0d");Object(s["H"])("data-v-36a86f0d");const jt={key:0},mt={key:1},pt=Object(s["n"])("div",{class:"spinner-border",role:"status"},[Object(s["n"])("span",{class:"visually-hidden"},"Loading...")],-1);Object(s["F"])();const ft=ut((e,t,a,n,c,r)=>{const o=Object(s["N"])("base-card-admin");return c.tournaments.data?(Object(s["E"])(),Object(s["i"])("div",jt,[(Object(s["E"])(!0),Object(s["i"])(s["b"],null,Object(s["L"])(c.tournaments.data,e=>(Object(s["E"])(),Object(s["i"])(o,{key:e._id,title:e.title,image:e.image,description:e.description,id:e._id},null,8,["title","image","description","id"]))),128))])):(Object(s["E"])(),Object(s["i"])("div",mt,[pt]))});var Ot={data(){return{tournaments:{},error:""}},methods:{},async created(){try{this.tournaments=await E.getTournaments()}catch(e){this.error=e.message}}};a("5157");Ot.render=ft,Ot.__scopeId="data-v-36a86f0d";var ht=Ot,gt={data(){return{component:""}},components:{NewTournament:bt,TournamentsActions:ht},methods:{setComponent(e){this.component=e}}};a("b9c1");gt.render=Ye,gt.__scopeId="data-v-605281af";var vt=gt;const yt=Object(s["hb"])("data-v-c1a971a8");Object(s["H"])("data-v-c1a971a8");const kt={class:"container"},wt={key:0},_t={class:"mb-3"},It=Object(s["n"])("label",{for:"title",class:"form-label"},"Название",-1),Et={class:"mb-3"},Tt=Object(s["n"])("label",{for:"type",class:"form-label"},"Тип турнира",-1),xt=Object(s["n"])("option",{selected:"",value:"solo"},"Соло",-1),At=Object(s["n"])("option",{value:"duo"},"Дуо",-1),zt=Object(s["n"])("option",{value:"squad"},"Сквад",-1),Ut={class:"mb-3"},Ct=Object(s["n"])("label",{for:"datetime",class:"form-label"},"Время начала турнира",-1),St={class:"mb-3"},Ft=Object(s["n"])("label",{for:"formFile",class:"form-label"},"Изображение турнира",-1),Pt={class:"mb-3 image"},$t=Object(s["n"])("label",{for:"description",class:"form-label"},"Описание турнира",-1),Lt={class:"mb-3"},Nt=Object(s["n"])("div",{class:"mb-3"},[Object(s["n"])("button",{type:"submit",class:"btn btn-primary"},"Редактировать")],-1),Vt={key:1,class:"spinner-border",role:"status"},Mt=Object(s["n"])("span",{class:"visually-hidden"},"Loading...",-1);Object(s["F"])();const Ht=yt((e,t,a,n,c,r)=>(Object(s["E"])(),Object(s["i"])("main",kt,[c.title?(Object(s["E"])(),Object(s["i"])("div",wt,[Object(s["n"])("form",{onSubmit:t[6]||(t[6]=Object(s["gb"])((...e)=>r.updateTournament&&r.updateTournament(...e),["prevent"]))},[Object(s["n"])("div",_t,[It,Object(s["eb"])(Object(s["n"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[1]||(t[1]=e=>c.title=e)},null,512),[[s["Z"],c.title]])]),Object(s["n"])("div",Et,[Tt,Object(s["eb"])(Object(s["n"])("select",{id:"type",class:"form-select","aria-label":"Default select example","onUpdate:modelValue":t[2]||(t[2]=e=>c.type=e)},[xt,At,zt],512),[[s["Y"],c.type]])]),Object(s["n"])("div",Ut,[Ct,Object(s["eb"])(Object(s["n"])("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>c.startsAt=e),type:"datetime-local",id:"datetime",class:"form-control"},null,512),[[s["Z"],c.startsAt]])]),Object(s["n"])("div",St,[Ft,Object(s["n"])("input",{class:"form-control",type:"file",id:"formFile",accept:"image/*",onChange:t[4]||(t[4]=(...e)=>r.onFileChange&&r.onFileChange(...e)),ref:"file"},null,544)]),Object(s["n"])("div",Pt,[Object(s["n"])("img",{src:c.image,alt:""},null,8,["src"])]),$t,Object(s["n"])("div",Lt,[Object(s["eb"])(Object(s["n"])("textarea",{"onUpdate:modelValue":t[5]||(t[5]=e=>c.description=e),class:"form-control",id:"description"},null,512),[[s["Z"],c.description]])]),Nt],32)])):(Object(s["E"])(),Object(s["i"])("div",Vt,[Mt]))]))),Rt=a("c1df");var Dt={data(){return{title:"",type:"",startsAt:"",description:"",token:this.$store.getters["auth/token"],file:"",image:"",id:""}},computed:{},methods:{onFileChange(e){this.file=this.$refs.file.files[0];const t=e.target.files[0];this.image=URL.createObjectURL(t)},async updateTournament(e){const t={title:this.title,type:this.type,startsAt:this.startsAt,description:this.description};try{await E.updateTournament(t,this.token,this.id);if(console.log("updated successfully"),this.file){const e=new FormData;e.append("file",this.file),await fetch(`/api/v1/tournaments/${this.id}/photo`,{method:"PUT",headers:{Authorization:this.token},body:e})}this.$router.push("/admin")}catch(a){console.log(a),this.error=a.message}},async getData(){try{const e=await fetch("/api/v1/tournaments/"+id,{method:"GET"});console.log(await e.json())}catch(e){this.error=e.message}}},async created(){try{const e=await fetch("/api/v1/tournaments/"+this.$route.params.id,{method:"GET"}),t=await e.json(),a=t.data;this.title=a.title,this.type=a.type,this.startsAt=Rt(a.startsAt).format("YYYY-MM-DDThh:mm"),this.description=a.description,this.image=a.image,this.id=a._id}catch(e){this.error=e.message}}};a("9ce2");Dt.render=Ht,Dt.__scopeId="data-v-c1a971a8";var Zt=Dt;const Yt=[{path:"/",component:ce},{path:"/tournaments",component:he},{path:"/tournaments/:id",component:xe},{path:"/register",component:Fe},{path:"/login",component:De},{path:"/admin",component:vt},{path:"/tournaments/:id/edit",component:Zt}],qt=Object(ee["a"])({history:Object(ee["b"])("/"),routes:Yt});var Bt=qt,Gt=a("5502"),Jt={namespaced:!0,state(){return{tournamentsData:{}}},mutations:{},actions:{async login(e){await E.login({email:e.email,password:e.password})},signup(e,t){}},getters:{}},Kt={namespaced:!0,state(){return{userId:null,token:null,role:null,expires:null,email:null}},mutations:{setUser(e,t){e.token=t.token,e.userId=t.userId,e.role=t.role,e.expires=t.expires,e.email=t.email}},actions:{login(e,t){return e.dispatch("auth",{...t,mode:"login"})},signup(e,t){return e.dispatch("auth",{...t,mode:"signup"})},autoLogin(e){const t=localStorage.getItem("token"),a=localStorage.getItem("userId"),s=localStorage.getItem("role"),n=localStorage.getItem("email"),c=localStorage.getItem("expires");t&&a&&e.commit("setUser",{token:t,userId:a,role:s,email:n,expires:c})},logout(e){localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("role"),localStorage.removeItem("email"),localStorage.removeItem("expires"),e.commit("setUser",{token:null,userId:null,role:null,email:null,expires:null})},async auth(e,t){const a=t.mode;let s="/api/v1/auth/login";"signup"===a&&(s="/api/v1/auth/register");const n=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.email,password:t.password})}),c=await n.json();if(!n.ok){const e=new Error(c.message||"Failed to authenticate");throw e}localStorage.setItem("token",c.token),localStorage.setItem("userId",c.id),localStorage.setItem("role",c.role),localStorage.setItem("email",c.email),localStorage.setItem("expires",c.expires),e.commit("setUser",{token:c.token,userId:c.id,role:c.role,email:c.email,expires:c.expires})}},getters:{userId(e){return e.userId},token(e){return"Bearer "+e.token},isAuthenticated(e){return!!e.token},isAdmin(e){if("admin"===e.role)return!0},isPublisher(e){if("publisher"===e.role)return!0}}},Qt=Object(Gt["a"])({modules:{tournaments:Jt,auth:Kt}});const Wt=Object(s["h"])(X);Wt.use(Qt),Wt.use(Bt),Wt.use(n["a"]),Wt.component("BaseCard",j),Wt.component("BaseCardAdmin",x),Wt.mount("#app")},"57bc":function(e,t,a){},9768:function(e,t,a){},"9a8f":function(e,t,a){"use strict";a("a75a")},"9ce2":function(e,t,a){"use strict";a("1f02")},a75a:function(e,t,a){},ad0a:function(e,t,a){},b14d:function(e,t,a){"use strict";a("57bc")},b9c1:function(e,t,a){"use strict";a("9768")},d101:function(e,t,a){},d55b:function(e,t,a){},ebf6:function(e,t,a){}});
//# sourceMappingURL=app.9e6fe661.js.map