"use strict";(self.webpackChunkgetstream_chat=self.webpackChunkgetstream_chat||[]).push([[592],{4968:(C,u,n)=>{n.d(u,{R:()=>i});var s=n(8421),f=n(9751),M=n(5577),v=n(1144),E=n(576),e=n(3268);const o=["addListener","removeListener"],_=["addEventListener","removeEventListener"],l=["on","off"];function i(t,r,P,a){if((0,E.m)(P)&&(a=P,P=void 0),a)return i(t,r,P).pipe((0,e.Z)(a));const[c,R]=function D(t){return(0,E.m)(t.addEventListener)&&(0,E.m)(t.removeEventListener)}(t)?_.map(L=>T=>t[L](r,T,P)):function O(t){return(0,E.m)(t.addListener)&&(0,E.m)(t.removeListener)}(t)?o.map(d(t,r)):function m(t){return(0,E.m)(t.on)&&(0,E.m)(t.off)}(t)?l.map(d(t,r)):[];if(!c&&(0,v.z)(t))return(0,M.z)(L=>i(L,r,P))((0,s.Xf)(t));if(!c)throw new TypeError("Invalid event target");return new f.y(L=>{const T=(...K)=>L.next(1<K.length?K:K[0]);return c(T),()=>R(T)})}function d(t,r){return P=>a=>t[P](r,a)}},5963:(C,u,n)=>{n.d(u,{H:()=>E});var s=n(9751),f=n(4986),M=n(3532);function E(e=0,o,_=f.P){let l=-1;return null!=o&&((0,M.K)(o)?_=o:l=o),new s.y(i=>{let d=function v(e){return e instanceof Date&&!isNaN(e)}(e)?+e-_.now():e;d<0&&(d=0);let O=0;return _.schedule(function(){i.closed||(i.next(O++),0<=l?this.schedule(void 0,l):i.complete())},d)})}},8372:(C,u,n)=>{n.d(u,{b:()=>v});var s=n(4986),f=n(4482),M=n(5403);function v(E,e=s.z){return(0,f.e)((o,_)=>{let l=null,i=null,d=null;const O=()=>{if(l){l.unsubscribe(),l=null;const D=i;i=null,_.next(D)}};function m(){const D=d+E,t=e.now();if(t<D)return l=this.schedule(void 0,D-t),void _.add(l);O()}o.subscribe((0,M.x)(_,D=>{i=D,d=e.now(),l||(l=e.schedule(m,E),_.add(l))},()=>{O(),_.complete()},void 0,()=>{i=l=null}))})}},1884:(C,u,n)=>{n.d(u,{x:()=>v});var s=n(4671),f=n(4482),M=n(5403);function v(e,o=s.y){return e=e??E,(0,f.e)((_,l)=>{let i,d=!0;_.subscribe((0,M.x)(l,O=>{const m=o(O);(d||!e(i,m))&&(d=!1,i=m,l.next(O))}))})}function E(e,o){return e===o}},2722:(C,u,n)=>{n.d(u,{R:()=>E});var s=n(4482),f=n(5403),M=n(8421),v=n(5032);function E(e){return(0,s.e)((o,_)=>{(0,M.Xf)(e).subscribe((0,f.x)(_,()=>_.complete(),v.Z)),!_.closed&&o.subscribe(_)})}}}]);