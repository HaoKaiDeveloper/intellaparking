"use strict";(self["webpackChunkintella_parking"]=self["webpackChunkintella_parking"]||[]).push([[89],{9089:function(t,e,r){r.r(e),r.d(e,{default:function(){return ft}});var n=r(3396),o=r(7139);const i=t=>((0,n.dD)("data-v-0801f53c"),t=t(),(0,n.Cn)(),t),a=i((()=>(0,n._)("h1",null,"確認您的繳費資訊",-1))),u={class:"payment_info"},s={class:"text"},l={class:"total"},h=i((()=>(0,n._)("p",null,"停車時間: 1小時23分",-1))),f=i((()=>(0,n._)("h1",null,"請點擊QR Code 付款",-1))),g={class:"qrcode_box"},c=["href"],d=["src"],m=i((()=>(0,n._)("button",null,"上一頁",-1)));function v(t,e,r,i,v,p){const A=(0,n.up)("QrcodeVue"),C=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("section",null,[(0,n._)("main",null,[a,(0,n._)("div",u,[(0,n._)("div",s,[(0,n._)("p",l,"待繳金額 $"+(0,o.zw)(i.carInfo.amount),1),(0,n._)("p",null,"車牌號碼 : "+(0,o.zw)(i.carInfo.licensePlate),1),(0,n._)("p",null," 入場時間 : "+(0,o.zw)(i.carInfo.entryTime),1),h,(0,n._)("p",null,"應繳金額: "+(0,o.zw)(i.carInfo.amount),1)])])]),f,(0,n._)("div",g,[(0,n._)("a",{href:i.paymentUrl},[(0,n.Wm)(A,{value:i.paymentUrl,size:200,level:"H"},null,8,["value"]),(0,n._)("img",{src:i.finger,alt:"icon"},null,8,d)],8,c)]),(0,n.Wm)(C,{to:"/steps/carSelect"},{default:(0,n.w5)((()=>[m])),_:1})])}r(7658);var p=r(4870),A=function(){return A=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r],e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},A.apply(this,arguments)},C={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},T=C;function w(t){this.mode=T.MODE_8BIT_BYTE,this.data=t}w.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}};var B=w,E={L:1,M:0,Q:3,H:2},L=E;function N(t,e){this.totalCount=t,this.dataCount=e}N.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],N.getRSBlocks=function(t,e){var r=N.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,o=new Array,i=0;i<n;i++)for(var a=r[3*i+0],u=r[3*i+1],s=r[3*i+2],l=0;l<a;l++)o.push(new N(u,s));return o},N.getRsBlockTable=function(t,e){switch(e){case L.L:return N.RS_BLOCK_TABLE[4*(t-1)+0];case L.M:return N.RS_BLOCK_TABLE[4*(t-1)+1];case L.Q:return N.RS_BLOCK_TABLE[4*(t-1)+2];case L.H:return N.RS_BLOCK_TABLE[4*(t-1)+3];default:return}};var O=N;function y(){this.buffer=new Array,this.length=0}y.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};for(var P=y,R={glog:function(t){if(t<1)throw new Error("glog("+t+")");return R.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return R.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},b=0;b<8;b++)R.EXP_TABLE[b]=1<<b;for(b=8;b<256;b++)R.EXP_TABLE[b]=R.EXP_TABLE[b-4]^R.EXP_TABLE[b-5]^R.EXP_TABLE[b-6]^R.EXP_TABLE[b-8];for(b=0;b<255;b++)R.LOG_TABLE[R.EXP_TABLE[b]]=b;var k=R,M=k;function D(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var r=0;while(r<t.length&&0==t[r])r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}D.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var n=0;n<t.getLength();n++)e[r+n]^=M.gexp(M.glog(this.get(r))+M.glog(t.get(n)));return new D(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=M.glog(this.get(0))-M.glog(t.get(0)),r=new Array(this.getLength()),n=0;n<this.getLength();n++)r[n]=this.get(n);for(n=0;n<t.getLength();n++)r[n]^=M.gexp(M.glog(t.get(n))+e);return new D(r,0).mod(t)}};var S=D,F=C,I=S,H=k,K={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},W={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(W.getBCHDigit(e)-W.getBCHDigit(W.G15)>=0)e^=W.G15<<W.getBCHDigit(e)-W.getBCHDigit(W.G15);return(t<<10|e)^W.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(W.getBCHDigit(e)-W.getBCHDigit(W.G18)>=0)e^=W.G18<<W.getBCHDigit(e)-W.getBCHDigit(W.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return W.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case K.PATTERN000:return(e+r)%2==0;case K.PATTERN001:return e%2==0;case K.PATTERN010:return r%3==0;case K.PATTERN011:return(e+r)%3==0;case K.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case K.PATTERN101:return e*r%2+e*r%3==0;case K.PATTERN110:return(e*r%2+e*r%3)%2==0;case K.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new I([1],0),r=0;r<t;r++)e=e.multiply(new I([1,H.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case F.MODE_NUMBER:return 10;case F.MODE_ALPHA_NUM:return 9;case F.MODE_8BIT_BYTE:return 8;case F.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case F.MODE_NUMBER:return 12;case F.MODE_ALPHA_NUM:return 11;case F.MODE_8BIT_BYTE:return 16;case F.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case F.MODE_NUMBER:return 14;case F.MODE_ALPHA_NUM:return 13;case F.MODE_8BIT_BYTE:return 16;case F.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var o=0;o<e;o++){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u++)if(!(n+u<0||e<=n+u))for(var s=-1;s<=1;s++)o+s<0||e<=o+s||0==u&&0==s||a==t.isDark(n+u,o+s)&&i++;i>5&&(r+=3+i-5)}for(n=0;n<e-1;n++)for(o=0;o<e-1;o++){var l=0;t.isDark(n,o)&&l++,t.isDark(n+1,o)&&l++,t.isDark(n,o+1)&&l++,t.isDark(n+1,o+1)&&l++,0!=l&&4!=l||(r+=3)}for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(r+=40);for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(r+=40);var h=0;for(o=0;o<e;o++)for(n=0;n<e;n++)t.isDark(n,o)&&h++;var f=Math.abs(100*h/e/e-50)/5;return r+=10*f,r}},V=W,x=B,Y=O,X=P,J=V,G=S;function U(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var Q=U.prototype;Q.addData=function(t){var e=new x(t);this.dataList.push(e),this.dataCache=null},Q.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},Q.getModuleCount=function(){return this.moduleCount},Q.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=Y.getRSBlocks(t,this.errorCorrectLevel),r=new X,n=0,o=0;o<e.length;o++)n+=e[o].dataCount;for(o=0;o<this.dataList.length;o++){var i=this.dataList[o];r.put(i.mode,4),r.put(i.getLength(),J.getLengthInBits(i.mode,t)),i.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},Q.makeImpl=function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=U.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},Q.setupPositionProbePattern=function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+r][e+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},Q.getBestMaskPattern=function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=J.getLostPoint(this);(0==r||t>n)&&(t=n,e=r)}return e},Q.createMovieClip=function(t,e,r){var n=t.createEmptyMovieClip(e,r),o=1;this.make();for(var i=0;i<this.modules.length;i++)for(var a=i*o,u=0;u<this.modules[i].length;u++){var s=u*o,l=this.modules[i][u];l&&(n.beginFill(0,100),n.moveTo(s,a),n.lineTo(s+o,a),n.lineTo(s+o,a+o),n.lineTo(s,a+o),n.endFill())}return n},Q.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},Q.setupPositionAdjustPattern=function(){for(var t=J.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],o=t[r];if(null==this.modules[n][o])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[n+i][o+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},Q.setupTypeNumber=function(t){for(var e=J.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++){n=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},Q.setupTypeInfo=function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=J.getBCHTypeInfo(r),o=0;o<15;o++){var i=!t&&1==(n>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(o=0;o<15;o++){i=!t&&1==(n>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!t},Q.mapData=function(t,e){for(var r=-1,n=this.moduleCount-1,o=7,i=0,a=this.moduleCount-1;a>0;a-=2){6==a&&a--;while(1){for(var u=0;u<2;u++)if(null==this.modules[n][a-u]){var s=!1;i<t.length&&(s=1==(t[i]>>>o&1));var l=J.getMask(e,n,a-u);l&&(s=!s),this.modules[n][a-u]=s,o--,-1==o&&(i++,o=7)}if(n+=r,n<0||this.moduleCount<=n){n-=r,r=-r;break}}}},U.PAD0=236,U.PAD1=17,U.createData=function(t,e,r){for(var n=Y.getRSBlocks(t,e),o=new X,i=0;i<r.length;i++){var a=r[i];o.put(a.mode,4),o.put(a.getLength(),J.getLengthInBits(a.mode,t)),a.write(o)}var u=0;for(i=0;i<n.length;i++)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*u+")");o.getLengthInBits()+4<=8*u&&o.put(0,4);while(o.getLengthInBits()%8!=0)o.putBit(!1);while(1){if(o.getLengthInBits()>=8*u)break;if(o.put(U.PAD0,8),o.getLengthInBits()>=8*u)break;o.put(U.PAD1,8)}return U.createBytes(o,n)},U.createBytes=function(t,e){for(var r=0,n=0,o=0,i=new Array(e.length),a=new Array(e.length),u=0;u<e.length;u++){var s=e[u].dataCount,l=e[u].totalCount-s;n=Math.max(n,s),o=Math.max(o,l),i[u]=new Array(s);for(var h=0;h<i[u].length;h++)i[u][h]=255&t.buffer[h+r];r+=s;var f=J.getErrorCorrectPolynomial(l),g=new G(i[u],f.getLength()-1),c=g.mod(f);a[u]=new Array(f.getLength()-1);for(h=0;h<a[u].length;h++){var d=h+c.getLength()-a[u].length;a[u][h]=d>=0?c.get(d):0}}var m=0;for(h=0;h<e.length;h++)m+=e[h].totalCount;var v=new Array(m),p=0;for(h=0;h<n;h++)for(u=0;u<e.length;u++)h<i[u].length&&(v[p++]=i[u][h]);for(h=0;h<o;h++)for(u=0;u<e.length;u++)h<a[u].length&&(v[p++]=a[u][h]);return v};var q=U,z="H",Z=function(){try{(new Path2D).addPath(new Path2D)}catch(t){return!1}return!0}();function j(t,e){var r=E[e],n=new q(-1,r);return n.addData($(t)),n.make(),n}function _(t){return t in E}function $(t){for(var e="",r=0;r<t.length;r++){var n=t.charCodeAt(r);n<128?e+=String.fromCharCode(n):n<2048?(e+=String.fromCharCode(192|n>>6),e+=String.fromCharCode(128|63&n)):n<55296||n>=57344?(e+=String.fromCharCode(224|n>>12),e+=String.fromCharCode(128|n>>6&63),e+=String.fromCharCode(128|63&n)):(r++,n=65536+((1023&n)<<10|1023&t.charCodeAt(r)),e+=String.fromCharCode(240|n>>18),e+=String.fromCharCode(128|n>>12&63),e+=String.fromCharCode(128|n>>6&63),e+=String.fromCharCode(128|63&n))}return e}function tt(t,e){void 0===e&&(e=0);var r=[];return t.forEach((function(t,n){var o=null;t.forEach((function(i,a){if(!i&&null!==o)return r.push("M".concat(o+e," ").concat(n+e,"h").concat(a-o,"v1H").concat(o+e,"z")),void(o=null);if(a!==t.length-1)i&&null===o&&(o=a);else{if(!i)return;null===o?r.push("M".concat(a+e,",").concat(n+e," h1v1H").concat(a+e,"z")):r.push("M".concat(o+e,",").concat(n+e," h").concat(a+1-o,"v1H").concat(o+e,"z"))}}))})),r.join("")}var et={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:z,validator:function(t){return _(t)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},rt=A(A({},et),{renderAs:{type:String,required:!1,default:"canvas",validator:function(t){return["canvas","svg"].indexOf(t)>-1}}}),nt=(0,n.aZ)({name:"QRCodeSvg",props:et,setup:function(t){var e=(0,p.iH)(0),r=(0,p.iH)(""),o=function(){var n=t.value,o=t.level,i=t.margin,a=j(n,o).modules;e.value=a.length+2*i,r.value=tt(a,i)};return o(),(0,n.ic)(o),function(){return(0,n.h)("svg",{width:t.size,height:t.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(e.value," ").concat(e.value)},[(0,n.h)("path",{fill:t.background,d:"M0,0 h".concat(e.value,"v").concat(e.value,"H0z")}),(0,n.h)("path",{fill:t.foreground,d:r.value})])}}}),ot=(0,n.aZ)({name:"QRCodeCanvas",props:et,setup:function(t){var e=(0,p.iH)(null),r=function(){var r=t.value,n=t.level,o=t.size,i=t.margin,a=t.background,u=t.foreground,s=j(r,n).modules,l=s.length+2*i,h=e.value;if(h){var f=h.getContext("2d");if(f){var g=window.devicePixelRatio||1,c=o/l*g;h.height=h.width=o*g,f.scale(c,c),f.fillStyle=a,f.fillRect(0,0,l,l),f.fillStyle=u,Z?f.fill(new Path2D(tt(s,i))):s.forEach((function(t,e){t.forEach((function(t,r){t&&f.fillRect(r+i,e+i,1,1)}))}))}}};return(0,n.bv)(r),(0,n.ic)(r),function(){return(0,n.h)("canvas",{ref:e,style:{width:"".concat(t.size,"px"),height:"".concat(t.size,"px")}})}}}),it=(0,n.aZ)({name:"Qrcode",render:function(){var t=this.$props,e=t.renderAs,r=t.value,o=t.size,i=t.margin,a=t.level,u=t.background,s=t.foreground,l=o>>>0,h=i>>>0,f=_(a)?a:z;return(0,n.h)("svg"===e?nt:ot,{value:r,size:l,margin:h,level:f,background:u,foreground:s})},props:rt}),at="data:image/png;base64,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",ut=r(2483),st={components:{QrcodeVue:it},setup(){const t=JSON.parse(localStorage.getItem("allCarsInfo")),e=JSON.parse(localStorage.getItem("paymentUrl")).paymentUrl,r=(0,ut.yj)(),n=(0,ut.tv)(),{licensePlate:o}=r.params,i=(0,p.iH)({}),a=t.filter((t=>t.licensePlate===o));if(!(a.length<1))return i.value=a[0],{carInfo:i,paymentUrl:e,finger:at};n.push("/")}},lt=r(89);const ht=(0,lt.Z)(st,[["render",v],["__scopeId","data-v-0801f53c"]]);var ft=ht}}]);
//# sourceMappingURL=89.'0.1.0'.1679725206702.js.map