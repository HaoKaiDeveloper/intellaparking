"use strict";(self["webpackChunkintella_parking"]=self["webpackChunkintella_parking"]||[]).push([[596],{9596:function(e,n,a){a.r(n),a.d(n,{default:function(){return D}});var l=a(3396),c=a(7139);const t=e=>((0,l.dD)("data-v-72fbec3a"),e=e(),(0,l.Cn)(),e),i={key:0,class:"success"},s={class:"icon"},u=t((()=>(0,l._)("p",null,"付款成功",-1))),o=t((()=>(0,l._)("p",null,"發票將寄送至您指定工具",-1))),r={class:"msg"},p=t((()=>(0,l._)("span",null,"謝謝使用",-1))),f=t((()=>(0,l._)("button",null,"確認",-1))),m={key:1,class:"fail"},_={class:"icon"},v=t((()=>(0,l._)("p",null,"付款失敗",-1))),d=t((()=>(0,l._)("p",null,"將回到首頁",-1)));function k(e,n,a,t,k,g){const w=(0,l.up)("icon"),h=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("section",null,[t.result?((0,l.wg)(),(0,l.iD)("main",i,[(0,l._)("div",null,[(0,l._)("span",s,[(0,l.Wm)(w,{icon:"fa-solid fa-check"})]),u,o]),(0,l._)("p",r,[(0,l.Uk)("請於"+(0,c.zw)(t.leavaLimTime)+"分鐘內離場 ",1),p]),(0,l.Wm)(h,{to:"/",onClick:t.goHomePage},{default:(0,l.w5)((()=>[f])),_:1},8,["onClick"])])):((0,l.wg)(),(0,l.iD)("main",m,[(0,l._)("div",null,[(0,l._)("span",_,[(0,l.Wm)(w,{icon:"fa-solid fa-exclamation"})]),v,d])]))])}var g=a(4870),w=a(2483),h=a(65),y={setup(){const e=(0,g.iH)(!0),n=(0,g.iH)("15"),a=(0,w.yj)(),l=(0,w.tv)(),c=(0,h.oR)(),t=a.query.payment;async function i(){if(t.length<1||!t)return void l.replace("/");const a=await c.dispatch("checkPaymentSuccess",t);console.log(a),"0000"===a.status?(e.value=!0,n.value=a.result.leaveLimtTime):(e.value=!1,setTimeout((()=>{s(),l.replace("/")}),1e4))}function s(){localStorage.clear()}function u(){s()}return i(),{result:e,leavaLimTime:n,goHomePage:u}}},b=a(89);const C=(0,b.Z)(y,[["render",k],["__scopeId","data-v-72fbec3a"]]);var D=C}}]);
//# sourceMappingURL=596.'0.1.0'.1679725206702.js.map