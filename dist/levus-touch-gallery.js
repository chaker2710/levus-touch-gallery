(()=>{var e,t={597:()=>{function e(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw i}}}}function r(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a,o=document.querySelectorAll(".levus-touch-gallery"),i=document.getElementsByTagName("body")[0],l=t(o);try{var s=function(){var r=a.value;setTimeout((function(){r.classList.add("load")}),1500);for(var n=r.querySelector(".slides ul"),o=n.querySelectorAll("li"),l=n.querySelectorAll("img"),s=o.length,c=0;c<s;c++)o[c].dataset.id=c;for(var u="",d=0;d<s;d++){u+='<li data-id="'.concat(d,'"><img src="').concat(l[d].dataset.thumb,'" alt=""></li>')}var f=document.createElement("div");f.className="thumbs";var v=document.createElement("ul");v.innerHTML=u,f.append(v),r.append(f);var p=document.createElement("ul");p.className="dots";for(var m=0;m<s;m++){var y=document.createElement("li");y.dataset.id=m,0===m&&(y.className="active"),p.append(y)}r.append(p);var h=document.createElement("div");h.className="icon",r.prepend(h);var g=void 0,b=!1,E=void 0,L=void 0,S=void 0,A=0,w=1,x="",q=document.createElement("div");if(q.id="levus-lightbox",s>4){v.style.display="grid",v.style.left="-25%",v.style.gridTemplateColumns="repeat(".concat(s,",25%)");for(var N=0;N<2;N++){var k=v.lastElementChild;v.prepend(k)}}else{var T=v.querySelectorAll("li");v.style.display="flex",v.style.alignItems="center",v.style.justifyContent="center";var M,O=t(T);try{for(O.s();!(M=O.n()).done;){M.value.style.width="25%"}}catch(e){O.e(e)}finally{O.f()}}for(var X=[],C=0;C<s;C++)C===s-1?X.push(-100):0===C?X.push(0):X.push(100);B();for(var j=0;j<s;j++){var I=o[j];I.addEventListener("dragstart",(function(e){return e.preventDefault()})),I.addEventListener("pointerdown",H),I.addEventListener("pointermove",_),I.addEventListener("pointerup",R),I.addEventListener("pointercancel",R),I.addEventListener("pointerleave",R),I.addEventListener("click",(function(e){return e.preventDefault()}))}function H(e){g=!0,E=e.pageX}function _(e){g&&((L=e.pageX)-E<0&&(w=L-E,!1===b&&(b=!0)),L-E>0&&(w=Math.abs(E-L),!1===b&&(b=!0)),this.style.transform="translateX(".concat(2*w,"px)"),this.querySelector("a").className="grab")}function R(){if(g){if(L-E<0){var e=X.pop();X.unshift(e)}if(L-E>0){var t=X.shift();X.push(t)}B(),g=!1,b=!1,this.querySelector("a").className=""}}function D(e){if(!0===b){if(L-E<0){var t=X.pop();X.unshift(t)}if(L-E>0){var r=X.shift();X.push(r)}e.target.classList.remove("touch"),U(),B()}b=!1}function P(){setTimeout((function(){q.classList.remove("active")}),60),setTimeout((function(){q.remove()}),480),x=""}function U(){for(var e=document.querySelectorAll("#levus-lightbox picture"),t=0;t<s;t++)A=0===X[t]?1:0,e[t].style.transform="translateX(".concat(X[t],"%)"),e[t].style.opacity=A}function z(){var t=Math.max.apply(Math,e(e(l).map((function(e){return e.clientHeight}))));n.style.height="".concat(t,"px")}function B(){for(var e=0;e<s;e++)if(o[e].style.transform="translateX(".concat(X[e],"%)"),0===X[e]){o[e].style.opacity=1,S=o[e].dataset.id;for(var t=r.querySelectorAll(".thumbs li"),n=0;n<s;n++)t[n].dataset.id===S?t[n].className="active":t[n].className=""}else o[e].style.opacity=0;if(w>0){var a=v.lastElementChild;v.prepend(a),v.style.transition="none",v.style.transform="translateX(-25%)"}if(w<0){var i=v.firstElementChild;v.append(i),v.style.transition="none",v.style.transform="translateX(25%)"}setTimeout((function(){v.style.transform="translateX(0)",v.style.transition=".5s"}),60);for(var l=r.querySelectorAll(".dots li"),c=0;c<s;c++)l[c].className="";l[S].className="active",document.querySelector("#levus-lightbox-desc")&&$(S)}function $(e){var r,a=document.querySelector("#levus-lightbox-desc"),o=[],i=t(n.querySelectorAll("img"));try{for(i.s();!(r=i.n()).done;){var l=r.value;o.push(l.alt)}}catch(e){i.e(e)}finally{i.f()}a.innerHTML=o[e]}v.addEventListener("click",(function(e){var t=e.target.parentNode.dataset.id;if(S>t)for(var r=0;r<Math.abs(S-t);r++){var n=X.shift();X.push(n)}if(S<t)for(var a=0;a<Math.abs(S-t);a++){var o=X.pop();X.unshift(o)}B()})),p.addEventListener("click",(function(e){if("LI"===e.target.tagName){var t=e.target.dataset.id;if(S>t)for(var r=0;r<Math.abs(S-t);r++){var n=X.shift();X.push(n)}if(S<t)for(var a=0;a<Math.abs(S-t);a++){var o=X.pop();X.unshift(o)}B()}})),z(),window.addEventListener("resize",z),document.addEventListener("pointerdown",(function(e){e.target.classList.contains("levus-lightbox-picture")&&(b=!0,e.target.classList.add("touch"),E=e.pageX)})),document.addEventListener("pointermove",(function(e){if(e.target.classList.contains("levus-lightbox-picture")){var t=e.target.parentNode;!0===b&&((L=e.pageX)-E<0&&(w=L-E),L-E>0&&(w=Math.abs(E-L)),t.style.transform="translateX(".concat(w,"%)"))}})),document.addEventListener("pointerup",D),document.addEventListener("pointercancel",D),r.addEventListener("click",(function(e){if(e.target.classList.contains("icon")){for(var t=r.querySelectorAll(".slides a"),n=0;n<s;n++)A=0===X[n]?1:0,x+='\n                    <picture style="transform:translateX('.concat(X[n],"%);opacity:").concat(A,'">\n                        <img \n                            src="').concat(t[n].href,'" \n                            alt="').concat(t[n].title,'" \n                            draggable="false" \n                            class="levus-lightbox-picture">\n                    </picture>');q.innerHTML=x,q.innerHTML+='<div id="levus-lightbox-desc"></div>',i.append(q),setTimeout((function(){q.className="active"}),60),$(S)}})),q.addEventListener("click",(function(e){"PICTURE"===e.target.tagName&&P()})),document.addEventListener("keydown",(function(e){if("Escape"!==e.key&&"Escape"!==e.code||P(),"ArrowLeft"===e.key||"ArrowLeft"===e.code){var t=X.pop();X.unshift(t),document.querySelector("#levus-lightbox")&&U(),B()}if("ArrowRight"===e.key||"ArrowRight"===e.code){var r=X.shift();X.push(r),document.querySelector("#levus-lightbox")&&U(),B()}}))};for(l.s();!(a=l.n()).done;)s()}catch(e){l.e(e)}finally{l.f()}},88:()=>{}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,a,o]=e[u],l=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={468:0,210:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,l,s]=r,c=0;if(i.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var u=s(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[i[c]]=0;return n.O(u)},r=self.webpackChunklevus_touch_gallery=self.webpackChunklevus_touch_gallery||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.O(void 0,[210],(()=>n(597)));var a=n.O(void 0,[210],(()=>n(88)));a=n.O(a)})();