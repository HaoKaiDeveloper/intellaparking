"use strict";(self["webpackChunkintella_parking"]=self["webpackChunkintella_parking"]||[]).push([[445],{9445:function(e,n,l){l.r(n),l.d(n,{default:function(){return b}});var a=l(3396),t=l(7139);const c=e=>((0,a.dD)("data-v-d686c330"),e=e(),(0,a.Cn)(),e),s={key:0,class:"success"},i={class:"icon"},u=c((()=>(0,a._)("p",null,"付款成功",-1))),o=c((()=>(0,a._)("p",null,"發票將寄送至您指定工具",-1))),r={class:"msg"},p=c((()=>(0,a._)("span",null,"謝謝使用",-1))),m=c((()=>(0,a._)("button",null,"確認",-1))),d={key:1,class:"fail"},_={class:"icon"},f=c((()=>(0,a._)("p",null,"付款失敗",-1))),v=c((()=>(0,a._)("p",null,"將回到首頁",-1)));function k(e,n,l,c,k,g){const w=(0,a.up)("icon"),h=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("section",null,[c.result?((0,a.wg)(),(0,a.iD)("main",s,[(0,a._)("div",null,[(0,a._)("span",i,[(0,a.Wm)(w,{icon:"fa-solid fa-check"})]),u,o]),(0,a._)("p",r,[(0,a.Uk)("請於"+(0,t.zw)(c.leavaLimTime)+"分鐘內離場 ",1),p]),(0,a.Wm)(h,{to:"/"},{default:(0,a.w5)((()=>[m])),_:1})])):((0,a.wg)(),(0,a.iD)("main",d,[(0,a._)("div",null,[(0,a._)("span",_,[(0,a.Wm)(w,{icon:"fa-solid fa-exclamation"})]),f,v])]))])}var g=l(4870),w=l(2483),h=l(65),y={setup(){const e=(0,g.iH)(!0),n=(0,g.iH)("15"),l=(0,w.yj)(),a=(0,w.tv)(),t=(0,h.oR)(),c=l.query.payment;async function s(){if(c.length<1||!c)return void a.replace("/");const l=await t.dispatch("checkPaymentSuccess",c);console.log(l),"0000"===l.status?(e.value=!0,n.value=l.result.leaveLimtTime,setTimeout((()=>{i(),a.replace("/")}),4500)):(e.value=!1,setTimeout((()=>{i(),a.replace("/")}),4500))}function i(){localStorage.clear()}return s(),{result:e,leavaLimTime:n}}},T=l(89);const D=(0,T.Z)(y,[["render",k],["__scopeId","data-v-d686c330"]]);var b=D}}]);
//# sourceMappingURL=445.'0.1.0'.1679475923568.js.map