!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).N2C=n()}(this,function(){"use strict";function t(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function c(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],e=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(e=(a=u.next()).done)&&(r.push(a.value),!n||r.length!==n);e=!0);}catch(t){i=!0,o=t}finally{try{e||null==u.return||u.return()}finally{if(i)throw o}}return r}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,l)}return t(l,"digits",["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"]),t(l,"radix",["","拾","佰","仟"]),t(l,"bigRadix",["","万","亿"]),t(l,"decimalsRadix",["角","分"]),t(l,"toChineseCharacters",function(t){var n=c((t+"").split("."),2),o=n[0],r=n[1],e=void 0===r?"":r,a=0,u="";f(o).forEach(function(t,n){var r=o.length-n-1,e=r/4,i=r%4;"0"===t?a++:(0!==a&&(u+=l.digits[0]),a=0,u+=l.digits[+t]+l.radix[i]),0==i&&a<4&&(u+=l.bigRadix[e])}),""===u&&(u=l.digits[0]),u+="元";var i=f(e).map(function(t,n){return"0"===t?l.digits[0]:l.digits[t]+l.decimalsRadix[n]}).join("");return u+(i||"整")}),l});
