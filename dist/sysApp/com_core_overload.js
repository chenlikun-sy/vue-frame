"use strict";define(function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=new Object(e),r=1;r<arguments.length;r++){var n=arguments[r];if(null!==n||void 0!==n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}}),Array.prototype.equals=function(e){if(!e)return!1;if(this.length!==e.length)return!1;for(var t=0,r=this.length;t<r;t++)if(this[t]instanceof Array&&e[t]instanceof Array){if(!this[t].equals(e[t]))return!1}else if(this[t]!==e[t])return!1;return!0},Object.defineProperty(Array.prototype,"equals",{enumerable:!1,writable:!0,configurable:!0}),Object.defineProperty(Number.prototype,"toNumber",{value:function(){return this},enumerable:!1,writable:!0,configurable:!0}),Object.defineProperty(String.prototype,"format",{value:function(){var r=arguments;return this.replace(/\{(\d+)\}/g,function(e,t){return r[t]})},enumerable:!1,writable:!0,configurable:!0}),Object.defineProperties(Date.prototype,{Format:{value:function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var r in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+r+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?t[r]:("00"+t[r]).substr((""+t[r]).length)));return e},enumerable:!1,writable:!0,configurable:!0},add:{value:function(e,t,r){var n,a;if(1===arguments.length)return new Date(this.getTime()+24*e*3600*1e3);switch(n=r?"[object Date]"===Object.prototype.toString.call(r)?r.getTime():Date.parse(r)?Date.parse(r):Date.now():this.getTime(),t){case"y":case"Y":return e=Math.round(e),a=(n=new Date(n)).getFullYear(),n.setFullYear(a+e),n;case"M":return e=Math.round(e),a=(n=new Date(n)).getMonth(),n.setMonth(a+e),n;case"d":case"D":return new Date(n+24*e*3600*1e3);case"h":case"H":return new Date(n+3600*e*1e3);case"m":return new Date(n+60*e*1e3);case"s":return new Date(n+1e3*e)}},enumerable:!1,writable:!0,configurable:!0}})});