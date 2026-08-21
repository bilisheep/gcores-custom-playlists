// ==UserScript==
// @name         机核自定义播单
// @namespace    https://www.gcores.com/
// @version      0.8.0
// @description  独立多播单、本地封面、断点进度、专辑批量加入、二维码分享与时间轴评论弹幕
// @author       Codex
// @match        https://www.gcores.com/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addValueChangeListener
// @run-at       document-idle
// ==/UserScript==
// Embedded qrcode-generator 1.4.4 by Kazuhiko Arase.
// Copyright (c) 2009 Kazuhiko Arase; MIT License.
// Source: https://github.com/kazuhikoarase/qrcode-generator
/**
 * Minified by jsDelivr using Terser v5.37.0.
 * Original file: /npm/qrcode-generator@1.4.4/qrcode.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var qrcode=function(){var t=function(t,r){var e=t,n=g[r],o=null,i=0,a=null,u=[],f={},c=function(t,r){o=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(i=4*e+17),l(0,0),l(i-7,0),l(0,i-7),s(),h(),d(t,r),e>=7&&v(t),null==a&&(a=p(e,n,u)),w(a,r)},l=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||i<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||i<=r+n||(o[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},h=function(){for(var t=8;t<i-8;t+=1)null==o[t][6]&&(o[t][6]=t%2==0);for(var r=8;r<i-8;r+=1)null==o[6][r]&&(o[6][r]=r%2==0)},s=function(){for(var t=B.getPatternPosition(e),r=0;r<t.length;r+=1)for(var n=0;n<t.length;n+=1){var i=t[r],a=t[n];if(null==o[i][a])for(var u=-2;u<=2;u+=1)for(var f=-2;f<=2;f+=1)o[i+u][a+f]=-2==u||2==u||-2==f||2==f||0==u&&0==f}},v=function(t){for(var r=B.getBCHTypeNumber(e),n=0;n<18;n+=1){var a=!t&&1==(r>>n&1);o[Math.floor(n/3)][n%3+i-8-3]=a}for(n=0;n<18;n+=1){a=!t&&1==(r>>n&1);o[n%3+i-8-3][Math.floor(n/3)]=a}},d=function(t,r){for(var e=n<<3|r,a=B.getBCHTypeInfo(e),u=0;u<15;u+=1){var f=!t&&1==(a>>u&1);u<6?o[u][8]=f:u<8?o[u+1][8]=f:o[i-15+u][8]=f}for(u=0;u<15;u+=1){f=!t&&1==(a>>u&1);u<8?o[8][i-u-1]=f:u<9?o[8][15-u-1+1]=f:o[8][15-u-1]=f}o[i-8][8]=!t},w=function(t,r){for(var e=-1,n=i-1,a=7,u=0,f=B.getMaskFunction(r),c=i-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var g=0;g<2;g+=1)if(null==o[n][c-g]){var l=!1;u<t.length&&(l=1==(t[u]>>>a&1)),f(n,c-g)&&(l=!l),o[n][c-g]=l,-1==(a-=1)&&(u+=1,a=7)}if((n+=e)<0||i<=n){n-=e,e=-e;break}}},p=function(t,r,e){for(var n=A.getRSBlocks(t,r),o=b(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var u=0;for(i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),u=0;u<r.length;u+=1){var f=r[u].dataCount,c=r[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,c),i[u]=new Array(f);for(var g=0;g<i[u].length;g+=1)i[u][g]=255&t.getBuffer()[g+e];e+=f;var l=B.getErrorCorrectPolynomial(c),h=k(i[u],l.getLength()-1).mod(l);for(a[u]=new Array(l.getLength()-1),g=0;g<a[u].length;g+=1){var s=g+h.getLength()-a[u].length;a[u][g]=s>=0?h.getAt(s):0}}var v=0;for(g=0;g<r.length;g+=1)v+=r[g].totalCount;var d=new Array(v),w=0;for(g=0;g<n;g+=1)for(u=0;u<r.length;u+=1)g<i[u].length&&(d[w]=i[u][g],w+=1);for(g=0;g<o;g+=1)for(u=0;u<r.length;u+=1)g<a[u].length&&(d[w]=a[u][g],w+=1);return d}(o,n)};f.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=M(t);break;case"Alphanumeric":e=x(t);break;case"Byte":e=m(t);break;case"Kanji":e=L(t);break;default:throw"mode:"+r}u.push(e),a=null},f.isDark=function(t,r){if(t<0||i<=t||r<0||i<=r)throw t+","+r;return o[t][r]},f.getModuleCount=function(){return i},f.make=function(){if(e<1){for(var t=1;t<40;t++){for(var r=A.getRSBlocks(t,n),o=b(),i=0;i<u.length;i++){var a=u[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var g=0;for(i=0;i<r.length;i++)g+=r[i].dataCount;if(o.getLengthInBits()<=8*g)break}e=t}c(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){c(!0,e);var n=B.getLostPoint(f);(0==e||t>n)&&(t=n,r=e)}return r}())},f.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<f.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<f.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=f.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},f.createSvgTag=function(t,r,e,n){var o={};"object"==typeof arguments[0]&&(t=(o=arguments[0]).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,c,g=f.getModuleCount()*t+2*r,l="";for(c="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",l+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',l+=o.scalable?"":' width="'+g+'px" height="'+g+'px"',l+=' viewBox="0 0 '+g+" "+g+'" ',l+=' preserveAspectRatio="xMinYMin meet"',l+=n.text||e.text?' role="img" aria-labelledby="'+y([n.id,e.id].join(" ").trim())+'"':"",l+=">",l+=n.text?'<title id="'+y(n.id)+'">'+y(n.text)+"</title>":"",l+=e.text?'<description id="'+y(e.id)+'">'+y(e.text)+"</description>":"",l+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',l+='<path d="',a=0;a<f.getModuleCount();a+=1)for(u=a*t+r,i=0;i<f.getModuleCount();i+=1)f.isDark(a,i)&&(l+="M"+(i*t+r)+","+u+c);return l+='" stroke="transparent" fill="black"/>',l+="</svg>"},f.createDataURL=function(t,r){t=t||2,r=void 0===r?4*t:r;var e=f.getModuleCount()*t+2*r,n=r,o=e-r;return I(e,e,(function(r,e){if(n<=r&&r<o&&n<=e&&e<o){var i=Math.floor((r-n)/t),a=Math.floor((e-n)/t);return f.isDark(a,i)?0:1}return 1}))},f.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=f.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=f.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=y(e),o+='"'),o+="/>"};var y=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r};return f.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var r,e,n,o,i,a=1*f.getModuleCount()+2*t,u=t,c=a-t,g={"██":"█","█ ":"▀"," █":"▄","  ":" "},l={"██":"▀","█ ":"▀"," █":" ","  ":" "},h="";for(r=0;r<a;r+=2){for(n=Math.floor((r-u)/1),o=Math.floor((r+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<c&&u<=r&&r<c&&f.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<c&&u<=r+1&&r+1<c&&f.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",h+=t<1&&r+1>=c?l[i]:g[i];h+="\n"}return a%2&&t>0?h.substring(0,h.length-a-1)+Array(a+1).join("▀"):h.substring(0,h.length-1)}(r);t-=1,r=void 0===r?2*t:r;var e,n,o,i,a=f.getModuleCount()*t+2*r,u=r,c=a-r,g=Array(t+1).join("██"),l=Array(t+1).join("  "),h="",s="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/t),s="",n=0;n<a;n+=1)i=1,u<=n&&n<c&&u<=e&&e<c&&f.isDark(o,Math.floor((n-u)/t))&&(i=0),s+=i?g:l;for(o=0;o<t;o+=1)h+=s+"\n"}return h.substring(0,h.length-1)},f.renderTo2dContext=function(t,r){r=r||2;for(var e=f.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=f.isDark(n,o)?"black":"white",t.fillRect(n*r,o*r,r,r)},f};t.stringToBytes=(t.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,t.createStringToBytes=function(t,r){var e=function(){for(var e=S(t),n=function(){var t=e.read();if(-1==t)throw"eof";return t},o=0,i={};;){var a=e.read();if(-1==a)break;var u=n(),f=n()<<8|n();i[String.fromCharCode(a<<8|u)]=f,o+=1}if(o!=r)throw o+" != "+r;return i}(),n="?".charCodeAt(0);return function(t){for(var r=[],o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)r.push(i);else{var a=e[t.charAt(o)];"number"==typeof a?(255&a)==a?r.push(a):(r.push(a>>>8),r.push(255&a)):r.push(n)}}return r}};var r,e,n,o,i,a=1,u=2,f=4,c=8,g={L:1,M:0,Q:3,H:2},l=0,h=1,s=2,v=3,d=4,w=5,p=6,y=7,B=(r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,n=7973,i=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r},(o={}).getBCHTypeInfo=function(t){for(var r=t<<10;i(r)-i(e)>=0;)r^=e<<i(r)-i(e);return 21522^(t<<10|r)},o.getBCHTypeNumber=function(t){for(var r=t<<12;i(r)-i(n)>=0;)r^=n<<i(r)-i(n);return t<<12|r},o.getPatternPosition=function(t){return r[t-1]},o.getMaskFunction=function(t){switch(t){case l:return function(t,r){return(t+r)%2==0};case h:return function(t,r){return t%2==0};case s:return function(t,r){return r%3==0};case v:return function(t,r){return(t+r)%3==0};case d:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case w:return function(t,r){return t*r%2+t*r%3==0};case p:return function(t,r){return(t*r%2+t*r%3)%2==0};case y:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},o.getErrorCorrectPolynomial=function(t){for(var r=k([1],0),e=0;e<t;e+=1)r=r.multiply(k([1,C.gexp(e)],0));return r},o.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case a:return 10;case u:return 9;case f:case c:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case a:return 12;case u:return 11;case f:return 16;case c:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case a:return 14;case u:return 13;case f:return 16;case c:return 12;default:throw"mode:"+t}}},o.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);var g=0;for(o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(g+=1);return e+=Math.abs(100*g/r/r-50)/5*10},o),C=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;e<255;e+=1)r[t[e]]=e;var n={glog:function(t){if(t<1)throw"glog("+t+")";return r[t]},gexp:function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t[r]}};return n}();function k(t,r){if(void 0===t.length)throw t.length+"/"+r;var e=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var n=new Array(t.length-e+r),o=0;o<t.length-e;o+=1)n[o]=t[o+e];return n}(),n={getAt:function(t){return e[t]},getLength:function(){return e.length},multiply:function(t){for(var r=new Array(n.getLength()+t.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<t.getLength();o+=1)r[e+o]^=C.gexp(C.glog(n.getAt(e))+C.glog(t.getAt(o)));return k(r,0)},mod:function(t){if(n.getLength()-t.getLength()<0)return n;for(var r=C.glog(n.getAt(0))-C.glog(t.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<t.getLength();o+=1)e[o]^=C.gexp(C.glog(t.getAt(o))+r);return k(e,0).mod(t)}};return n}var A=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},e={};return e.getRSBlocks=function(e,n){var o=function(r,e){switch(e){case g.L:return t[4*(r-1)+0];case g.M:return t[4*(r-1)+1];case g.Q:return t[4*(r-1)+2];case g.H:return t[4*(r-1)+3];default:return}}(e,n);if(void 0===o)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+n;for(var i=o.length/3,a=[],u=0;u<i;u+=1)for(var f=o[3*u+0],c=o[3*u+1],l=o[3*u+2],h=0;h<f;h+=1)a.push(r(c,l));return a},e}(),b=function(){var t=[],r=0,e={getBuffer:function(){return t},getAt:function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},put:function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},getLengthInBits:function(){return r},putBit:function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1}};return e},M=function(t){var r=a,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+2<r.length;)t.put(o(r.substring(n,n+3)),10),n+=3;n<r.length&&(r.length-n==1?t.put(o(r.substring(n,n+1)),4):r.length-n==2&&t.put(o(r.substring(n,n+2)),7))}},o=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+i(t.charAt(e));return r},i=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return n},x=function(t){var r=u,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+1<r.length;)t.put(45*o(r.charAt(n))+o(r.charAt(n+1)),11),n+=2;n<r.length&&t.put(o(r.charAt(n)),6)}},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return n},m=function(r){var e=f,n=t.stringToBytes(r),o={getMode:function(){return e},getLength:function(t){return n.length},write:function(t){for(var r=0;r<n.length;r+=1)t.put(n[r],8)}};return o},L=function(r){var e=c,n=t.stringToBytesFuncs.SJIS;if(!n)throw"sjis not supported.";!function(){var t=n("友");if(2!=t.length||38726!=(t[0]<<8|t[1]))throw"sjis not supported."}();var o=n(r),i={getMode:function(){return e},getLength:function(t){return~~(o.length/2)},write:function(t){for(var r=o,e=0;e+1<r.length;){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return i},D=function(){var t=[],r={writeByte:function(r){t.push(255&r)},writeShort:function(t){r.writeByte(t),r.writeByte(t>>>8)},writeBytes:function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},writeString:function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+="]"}};return r},S=function(t){var r=t,e=0,n=0,o=0,i={read:function(){for(;o<8;){if(e>=r.length){if(0==o)return-1;throw"unexpected end of file./"+o}var t=r.charAt(e);if(e+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|a(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return i},I=function(t,r,e){for(var n=function(t,r){var e=t,n=r,o=new Array(t*r),i={setPixel:function(t,r,n){o[r*e+t]=n},write:function(t){t.writeString("GIF87a"),t.writeShort(e),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(e),t.writeShort(n),t.writeByte(0);var r=a(2);t.writeByte(2);for(var o=0;r.length-o>255;)t.writeByte(255),t.writeBytes(r,o,255),o+=255;t.writeByte(r.length-o),t.writeBytes(r,o,r.length-o),t.writeByte(0),t.writeString(";")}},a=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,i=u(),a=0;a<r;a+=1)i.add(String.fromCharCode(a));i.add(String.fromCharCode(r)),i.add(String.fromCharCode(e));var f,c,g,l=D(),h=(f=l,c=0,g=0,{write:function(t,r){if(t>>>r!=0)throw"length over";for(;c+r>=8;)f.writeByte(255&(t<<c|g)),r-=8-c,t>>>=8-c,g=0,c=0;g|=t<<c,c+=r},flush:function(){c>0&&f.writeByte(g)}});h.write(r,n);var s=0,v=String.fromCharCode(o[s]);for(s+=1;s<o.length;){var d=String.fromCharCode(o[s]);s+=1,i.contains(v+d)?v+=d:(h.write(i.indexOf(v),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(v+d)),v=d)}return h.write(i.indexOf(v),n),h.write(e,n),h.flush(),l.toByteArray()},u=function(){var t={},r=0,e={add:function(n){if(e.contains(n))throw"dup key:"+n;t[n]=r,r+=1},size:function(){return r},indexOf:function(r){return t[r]},contains:function(r){return void 0!==t[r]}};return e};return i}(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=D();n.write(a);for(var u=function(){var t=0,r=0,e=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return o.writeByte=function(n){for(t=t<<8|255&n,r+=8,e+=1;r>=6;)i(t>>>r-6),r-=6},o.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o}(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return t}();qrcode.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||n>=57344?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)},function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports&&(module.exports=t())}((function(){return qrcode}));
//# sourceMappingURL=/sm/26b4b0d0b1e283d6b3ec9857ac597d7a60c76ac17be1ef4c965f03086de426bb.map

(() => {
  'use strict';

  const STORAGE_KEY = 'gcores-custom-playlists-v1';
  const PLAYBACK_KEY = 'gcores-custom-playlists-playing-v1';
  const VOLUME_KEY = 'gcores-custom-playlists-volume-v1';
  const DANMAKU_KEY = 'gcores-custom-playlists-danmaku-enabled-v1';
  const API_ROOT = '/gapi/v1';
  const SAVE_INTERVAL_SECONDS = 5;
  const MAX_SHARE_ITEMS = 200;
  const MAX_SHARE_LINK_BYTES = 2800;
  const MAX_SHARE_ENCODED_LENGTH = 4000;
  const MAX_COVER_FILE_BYTES = 8 * 1024 * 1024;
  const MAX_COVER_DATA_LENGTH = 400 * 1024;
  const COVER_SIZE = 320;
  const DANMAKU_LANES = 4;
  const DANMAKU_DURATION_MS = 8000;
  const DANMAKU_PAGE_SIZE = 100;

  const uid = () => globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const TAB_ID = uid();
  const cleanText = (value, fallback = '') => typeof value === 'string' && value.trim() ? value.trim() : fallback;
  const cleanCover = (value) => typeof value === 'string' && value.length <= MAX_COVER_DATA_LENGTH && /^data:image\/(?:jpeg|png|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(value) ? value : '';
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]);

  function freshState() {
    const id = uid();
    return { version: 1, activeId: id, playlists: [{ id, name: '我的播单', cover: '', direction: 'asc', items: [], cursor: { itemId: null, time: 0 } }] };
  }

  function normalizeState(raw) {
    if (!raw || typeof raw !== 'object' || !Array.isArray(raw.playlists)) return freshState();
    const seen = new Set();
    const playlists = raw.playlists.map((list) => {
      if (!list || typeof list !== 'object') return null;
      const id = cleanText(list.id, uid());
      const itemIds = new Set();
      const items = Array.isArray(list.items) ? list.items.map((item) => {
        const itemId = cleanText(item?.id);
        if (!/^\d{1,12}$/.test(itemId) || itemIds.has(itemId)) return null;
        itemIds.add(itemId);
        return {
          id: itemId,
          title: cleanText(item.title, `节目 ${itemId}`),
          cover: cleanText(item.cover),
          duration: Number.isFinite(Number(item.duration)) ? Math.max(0, Number(item.duration)) : 0,
        };
      }).filter(Boolean) : [];
      const direction = list.direction === 'desc' ? 'desc' : 'asc';
      const cursorId = itemIds.has(list.cursor?.itemId) ? list.cursor.itemId : (direction === 'desc' ? items.at(-1) : items[0])?.id || null;
      return {
        id,
        name: cleanText(list.name, '未命名播单'),
        cover: cleanCover(list.cover),
        direction,
        items,
        cursor: {
          itemId: cursorId,
          time: cursorId && Number.isFinite(Number(list.cursor?.time)) ? Math.max(0, Number(list.cursor.time)) : 0,
        },
      };
    }).filter((list) => list && !seen.has(list.id) && seen.add(list.id));
    if (!playlists.length) return freshState();
    return { version: 1, activeId: playlists.some((list) => list.id === raw.activeId) ? raw.activeId : playlists[0].id, playlists };
  }

  function moveItem(items, index, offset) {
    const target = index + offset;
    if (index < 0 || target < 0 || target >= items.length) return items;
    const copy = [...items];
    [copy[index], copy[target]] = [copy[target], copy[index]];
    return copy;
  }

  function newItemsForPlaylist(list, items) {
    const seen = new Set(list.items.map((item) => item.id));
    return items.filter((item) => !seen.has(item.id) && seen.add(item.id));
  }

  function orderedItems(list) {
    return list.direction === 'desc' ? [...list.items].reverse() : list.items;
  }

  function playlistCover(list) {
    return list.cover || orderedItems(list)[0]?.cover || '';
  }

  function moveVisibleItem(list, itemId, offset) {
    const index = list.items.findIndex((item) => item.id === itemId);
    const mappedOffset = list.direction === 'desc' ? -offset : offset;
    if (index >= 0) list.items = moveItem(list.items, index, mappedOffset);
  }

  function cleanDanmakuText(body) {
    const text = cleanText(body)
      .replace(/^\s*[\[（(]?\d{1,3}[:：]\d{2}(?:[:：]\d{2})?[\]）)]?\s*/, '')
      .replace(/\s+/g, ' ')
      .trim();
    const characters = [...text];
    return characters.length > 80 ? `${characters.slice(0, 79).join('')}…` : text;
  }

  function commentIndexAfter(comments, time) {
    let low = 0;
    let high = comments.length;
    while (low < high) {
      const middle = Math.floor((low + high) / 2);
      if (comments[middle].timestamp <= time) low = middle + 1;
      else high = middle;
    }
    return low;
  }

  function encodeSharePayload(payload) {
    const bytes = new TextEncoder().encode(JSON.stringify(payload));
    return btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  function decodeSharePayload(encoded) {
    if (typeof encoded !== 'string' || !new RegExp(`^[A-Za-z0-9_-]{1,${MAX_SHARE_ENCODED_LENGTH}}$`).test(encoded)) throw new Error('分享数据过长或包含无效字符');
    const base64 = encoded.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - encoded.length % 4) % 4);
    const payload = JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(base64), (char) => char.charCodeAt(0))));
    if (payload?.v !== 1 || typeof payload.n !== 'string' || !Array.isArray(payload.i) || !payload.i.length || payload.i.length > MAX_SHARE_ITEMS) throw new Error('分享数据格式不受支持');
    const ids = [...new Set(payload.i.map(String))];
    if (!ids.length || ids.length > MAX_SHARE_ITEMS || ids.some((id) => !/^\d{1,12}$/.test(id))) throw new Error(`分享播单必须包含 1–${MAX_SHARE_ITEMS} 个有效节目`);
    return { name: cleanText(payload.n, '导入的播单').slice(0, 80), ids };
  }

  function selfCheck() {
    const state = normalizeState({ activeId: 'x', playlists: [{ id: 'x', name: ' X ', cover: 'data:image/jpeg;base64,AAAA', items: [
      { id: '1', title: 'A', duration: -1 }, { id: '1', title: '重复项' }, { id: '2', title: 'B' },
    ], cursor: { itemId: '2', time: 12 } }] });
    if (state.playlists[0].name !== 'X' || state.playlists[0].cover !== 'data:image/jpeg;base64,AAAA' || state.playlists[0].items.length !== 2) throw new Error('normalizeState failed');
    if (normalizeState({ playlists: [{ id: 'bad', cover: 'javascript:alert(1)' }] }).playlists[0].cover) throw new Error('playlist cover validation failed');
    if (moveItem(state.playlists[0].items, 0, 1)[0].id !== '2') throw new Error('moveItem failed');
    if (newItemsForPlaylist(state.playlists[0], [{ id: '2' }, { id: '3' }, { id: '3' }]).length !== 1) throw new Error('playlist deduplication failed');
    const descending = { direction: 'desc', items: [{ id: '1' }, { id: '2' }, { id: '3' }] };
    if (orderedItems(descending).map((item) => item.id).join(',') !== '3,2,1') throw new Error('playlist direction failed');
    const normalizedDescending = normalizeState({ activeId: 'd', playlists: [{ id: 'd', direction: 'desc', items: [{ id: '1' }, { id: '2' }], cursor: {} }] });
    if (normalizedDescending.playlists[0].cursor.itemId !== '2') throw new Error('descending cursor fallback failed');
    moveVisibleItem(descending, '2', -1);
    if (orderedItems(descending).map((item) => item.id).join(',') !== '2,3,1') throw new Error('visible move failed');
    if (cleanDanmakuText('01:15  这是一条评论') !== '这是一条评论') throw new Error('danmaku text cleanup failed');
    if (commentIndexAfter([{ timestamp: 10 }, { timestamp: 20 }], 10) !== 1) throw new Error('danmaku cursor failed');
    let invalidRadioRejected = false;
    try { parseRadio({ data: { id: 'not-an-id', type: 'radios', attributes: {} } }); } catch (_) { invalidRadioRejected = true; }
    if (!invalidRadioRejected) throw new Error('radio ID validation failed');
    const shared = decodeSharePayload(encodeSharePayload({ v: 1, n: '测试播单', i: ['1', '2', '2'] }));
    if (shared.name !== '测试播单' || shared.ids.length !== 2) throw new Error('share codec failed');
    const code = qrcode(0, 'L');
    code.addData('https://www.gcores.com/radios#gcpl=test', 'Byte');
    code.make();
    if (!code.createDataURL().startsWith('data:image/gif;base64,')) throw new Error('QR generation failed');
    return true;
  }

  if (globalThis.__GCPL_TEST__) {
    globalThis.__GCPL_TEST_RESULT__ = selfCheck();
    return;
  }

  if (document.querySelector('#gcpl-root')) return;

  let state = normalizeState(GM_getValue(STORAGE_KEY, null));
  let playback = null;
  let pendingSeek = 0;
  let shouldAutoplay = false;
  let lastSavedSecond = -Infinity;
  let scanQueued = false;
  let albumPageType = { id: '', isRadio: null };
  let albumPageRequest = 0;
  let currentShare = null;
  let importingShare = false;
  let expectedAudioUrl = '';
  let playbackLoading = false;
  let playbackError = '';
  let playbackRequest = 0;
  let volumePopoverOpen = false;
  let miniSeekDragging = false;
  let stateRevision = 0;
  let pageStatus = '';
  let catalogDelayTimer = 0;
  // ponytail: 机核未暴露 hydration 完成信号；先等待 1.5 秒，未来有稳定信号时替换。
  const catalogReadyAt = Date.now() + 1500;
  let danmakuEnabled = GM_getValue(DANMAKU_KEY, true) !== false;
  let danmakuSession = null;
  let danmakuRequest = 0;

  const audio = new Audio();
  audio.preload = 'metadata';
  const savedVolume = Number(GM_getValue(VOLUME_KEY, 0.8));
  audio.volume = Number.isFinite(savedVolume) ? Math.min(1, Math.max(0, savedVolume)) : 0.8;

  const save = () => { stateRevision += 1; GM_setValue(STORAGE_KEY, state); };
  const activePlaylist = () => state.playlists.find((list) => list.id === state.activeId) || state.playlists[0];
  const playlistById = (id) => state.playlists.find((list) => list.id === id);
  const currentItem = () => playback && playlistById(playback.playlistId)?.items.find((item) => item.id === playback.itemId);
  const currentAudioSeekable = () => !!playback && !!expectedAudioUrl && audio.src === new URL(expectedAudioUrl, location.href).href && Number.isFinite(audio.duration) && audio.duration > 0 && !playbackLoading && !playbackError;

  function imageUrl(path) {
    if (!path) return '';
    if (/^https?:\/\//i.test(path)) return path;
    return `https://image.gcores.com/${path}?x-oss-process=image/resize,limit_1,m_fill,w_160,h_160/quality,q_90/format,webp`;
  }

  async function api(path) {
    const response = await fetch(`${API_ROOT}${path}`, { credentials: 'include' });
    if (!response.ok) throw new Error(response.status === 401 || response.status === 403 ? '请先登录机核，并确认你有权播放该节目' : `机核接口请求失败（${response.status}）`);
    return response.json();
  }

  function coverDataFromFile(file) {
    if (!file?.type?.startsWith('image/')) return Promise.reject(new Error('请选择图片文件'));
    if (file.size > MAX_COVER_FILE_BYTES) return Promise.reject(new Error('封面原图不能超过 8 MiB'));
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const image = new Image();
      const done = (callback) => { URL.revokeObjectURL(url); callback(); };
      image.onload = () => done(() => {
        try {
          if (!image.naturalWidth || !image.naturalHeight) throw new Error('无法读取这张图片');
          const canvas = document.createElement('canvas');
          canvas.width = COVER_SIZE;
          canvas.height = COVER_SIZE;
          const context = canvas.getContext('2d');
          if (!context) throw new Error('浏览器无法处理这张图片');
          const side = Math.min(image.naturalWidth, image.naturalHeight);
          context.drawImage(image, (image.naturalWidth - side) / 2, (image.naturalHeight - side) / 2, side, side, 0, 0, COVER_SIZE, COVER_SIZE);
          const data = canvas.toDataURL('image/jpeg', 0.82);
          if (!cleanCover(data)) throw new Error('压缩后的封面仍然过大');
          resolve(data);
        } catch (error) {
          reject(error);
        }
      });
      image.onerror = () => done(() => reject(new Error('无法读取这张图片')));
      image.src = url;
    });
  }

  function parseRadio(data) {
    const radio = data?.data;
    if (!radio?.id || radio.type !== 'radios') throw new Error('节目数据格式无法识别');
    const radioId = String(radio.id);
    if (!/^\d{1,12}$/.test(radioId)) throw new Error('节目 ID 格式无法识别');
    const mediaId = radio.relationships?.media?.data?.id;
    const media = data.included?.find((item) => item.type === 'medias' && item.id === mediaId);
    return {
      item: {
        id: radioId,
        title: cleanText(radio.attributes?.title, `节目 ${radio.id}`),
        cover: imageUrl(radio.attributes?.cover || radio.attributes?.thumb),
        duration: Math.max(0, Number(radio.attributes?.duration || media?.attributes?.duration || 0)),
      },
      vendorSrc: cleanText(radio.attributes?.['vendor-src']),
      media: media?.attributes || null,
    };
  }

  async function radioData(id) {
    return parseRadio(await api(`/radios/${encodeURIComponent(id)}?include=category,user,djs,media,albums&ctrlfields[radios]=-content`));
  }

  async function playableUrl(id) {
    const radio = await radioData(id);
    if (radio.vendorSrc) return { ...radio, url: radio.vendorSrc };
    if (!radio.media) throw new Error('这个节目没有可播放的音频');
    if (radio.media['media-type'] === 'protected_audio') {
      const auth = await api(`/medias/protected/radios/${encodeURIComponent(id)}?format=json`);
      const url = auth?.payload?.origin?.url || auth?.url;
      if (!url) throw new Error('未能取得音频授权地址');
      return { ...radio, url };
    }
    const source = cleanText(radio.media.audio || radio.media['original-src']);
    if (!source) throw new Error('这个节目没有可播放的音频');
    return { ...radio, url: /^https?:\/\//i.test(source) ? source : `https://alioss.gcores.com/uploads/audio/${source}` };
  }

  const host = document.createElement('div');
  host.id = 'gcpl-root';
  const shadow = host.attachShadow({ mode: 'open' });
  document.documentElement.append(host);

  shadow.innerHTML = `
    <style>
      :host{position:fixed;left:50%;bottom:max(18px,env(safe-area-inset-bottom));width:min(720px,calc(100vw - 24px));transform:translateX(-50%);z-index:1040;color:#eee;font:14px/1.4 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
      *{box-sizing:border-box}button,select,input{font:inherit}button{cursor:pointer;transition:transform 140ms cubic-bezier(.23,1,.32,1),background-color 140ms ease}button:active{transform:scale(.97)}button:focus-visible,select:focus-visible,input:focus-visible,.miniCoverLink:focus-visible{outline:2px solid #ff7868;outline-offset:2px}
      #mini{display:grid;grid-template-columns:minmax(0,1fr) auto 44px;grid-template-rows:48px 26px;align-items:center;column-gap:16px;row-gap:2px;height:88px;padding:6px 12px 6px 10px;background:rgba(20,20,20,.62);border:1px solid #ffffff2e;border-radius:18px;box-shadow:0 12px 36px #0007,inset 0 1px #ffffff16;backdrop-filter:saturate(160%) blur(22px);-webkit-backdrop-filter:saturate(160%) blur(22px)}
      .miniInfo{display:grid;grid-template-columns:46px minmax(0,1fr);align-items:center;gap:10px;min-width:0}.miniCoverLink{display:block;width:46px;height:46px;border-radius:11px;transition:transform 140ms cubic-bezier(.23,1,.32,1)}.miniCoverLink:active{transform:scale(.96)}.miniCover,.miniPlaceholder{width:46px;height:46px;border-radius:11px;object-fit:cover;background:#303030}.miniPlaceholder{display:grid;place-items:center;color:#bbb}.miniPlaceholder svg{width:20px}.miniText{display:block;min-width:0;width:100%;padding:5px 7px;border:0;border-radius:8px;background:transparent;color:inherit;text-align:left}.miniText:hover{background:#ffffff0a}.miniTitle,.miniSub{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.miniTitle{font-weight:700}.miniSub{margin-top:2px;color:#bbb;font-size:11px}
      .miniControls{display:flex;align-items:center;gap:8px}.miniControl{display:grid;place-items:center;width:38px;height:38px;padding:0;border:1px solid #ffffff1f;border-radius:999px;background:#292929;color:#fff}.miniControl.primaryControl{width:42px;height:42px;background:#e05241;border-color:#e05241}.miniControl.primaryControl:hover{background:#ef5b48}.miniControl:disabled{cursor:default;opacity:.35}.miniControl svg{width:15px;height:15px}
      .miniVolumeWrap{position:relative;display:grid;place-items:center}.miniVolumeButton svg{width:17px;height:17px}.miniVolumePopover{position:absolute;right:50%;bottom:50px;z-index:4;display:flex;width:56px;height:162px;transform:translateX(50%);flex-direction:column;align-items:center;gap:6px;padding:10px 8px;border:1px solid #ffffff2e;border-radius:16px;background:rgba(20,20,20,.82);box-shadow:0 12px 30px #0008;backdrop-filter:blur(18px) saturate(150%);-webkit-backdrop-filter:blur(18px) saturate(150%)}.miniVolumeValue{color:#ddd;font-size:10px;font-variant-numeric:tabular-nums}.miniVolumeSlider{width:32px;height:120px;margin:0;accent-color:#e05241;cursor:ns-resize;direction:rtl;touch-action:none;writing-mode:vertical-lr;-webkit-appearance:slider-vertical}.miniProgress{grid-column:1/-1;display:grid;grid-template-columns:42px minmax(0,1fr) 42px;align-items:center;gap:8px;min-width:0;color:#ccc;font-size:11px;font-variant-numeric:tabular-nums}.miniProgress span:last-child{text-align:right}.miniProgress input{width:100%;height:24px;margin:0;accent-color:#e05241;cursor:pointer}.miniProgress input:disabled{cursor:default;opacity:.45}.miniProgressEmpty{grid-column:1/-1}
      #share[hidden]{display:none}#share{position:absolute;left:50%;bottom:100px;z-index:5;width:min(390px,calc(100vw - 24px));max-height:calc(100vh - 128px);overflow:auto;transform:translateX(-50%);padding:14px;border:1px solid #ffffff1f;border-radius:16px;background:#111e;box-shadow:0 18px 60px #0009}.shareCard{padding:16px;border-radius:13px;background:#202020;text-align:center}.shareCard img{display:block;width:min(100%,330px);margin:0 auto 12px;border-radius:8px;background:#fff}.shareCard p{margin:7px 0;color:#aaa;font-size:12px}.shareActions{display:flex;gap:8px;margin-top:12px}.shareActions button{flex:1;border:1px solid #ffffff24;border-radius:8px;background:#292929;color:#eee;padding:7px 9px}
      @media(max-width:520px){:host{bottom:max(10px,env(safe-area-inset-bottom));width:calc(100vw - 20px)}#mini{grid-template-columns:minmax(0,1fr) auto 40px;grid-template-rows:44px 26px;column-gap:8px;height:84px;padding:6px 8px}.miniInfo{grid-template-columns:42px minmax(0,1fr);gap:8px}.miniCoverLink,.miniCover,.miniPlaceholder{width:42px;height:42px}.miniSub{display:none}.miniControl{width:34px;height:34px}.miniControl.primaryControl{width:38px;height:38px}.miniVolumePopover{bottom:44px}.miniProgress{grid-template-columns:38px minmax(0,1fr) 38px;gap:5px}#share{bottom:94px}}
      @media(prefers-reduced-motion:reduce){button,.miniCoverLink{transition:none}button:active,.miniCoverLink:active{transform:none}}
    </style>
    <div id="mini" aria-label="自定义播单播放器"></div>
    <div id="share" hidden></div>`;

  const style = document.createElement('style');
  style.id = 'gcpl-site-style';
  style.textContent = `.gcpl-catalogToolbar{display:flex;align-items:center;justify-content:space-between;gap:16px;margin:18px 0}.gcpl-catalogToolbar strong{font-size:16px}.gcpl-local-card{position:relative}.gcpl-local-card .coverShowcase{width:100%;text-align:left}.gcpl-local-card .coverShowcase_img{position:relative;display:grid;place-items:center;overflow:hidden;background:var(--gray-block-lighten-bg,#f7f7f8);color:var(--gray-side-list-icon,#81858d)}.gcpl-local-card .coverShowcase_img img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.gcpl-local-card .coverShowcase_img svg{position:absolute;top:36%;left:36%;width:28%;max-width:52px}.gcpl-cardMeta{margin-top:-4px;color:var(--gray-info,#8e8e93);font-size:12px}.gcpl-selfBadge{position:absolute;top:8px;left:8px;z-index:2;padding:3px 7px;border-radius:999px;background:#141414b8;color:#fff;font-size:11px}.gcpl-coverAction{position:absolute;top:8px;right:8px;z-index:2;display:grid;width:32px;height:32px;place-items:center;border:0;border-radius:999px;background:#141414b8;color:#fff;cursor:pointer;overflow:hidden}.gcpl-coverAction svg{width:15px}.gcpl-coverInput{position:absolute;inset:0;width:100%;height:100%;opacity:0;cursor:pointer}.gcpl-coverAction:focus-within,.gcpl-inlineCover:focus-within{outline:2px solid var(--bs-highlight,#478cfe);outline-offset:2px}.gcpl-inlineCover{position:relative;overflow:hidden}.gcpl-removeCover{top:46px}.gcpl-pageStatus{min-height:20px;margin:10px 0;color:var(--bs-danger,#ff3d1d);font-size:13px}.gcpl-detailBack{margin:18px 0}.gcpl-detailHero{display:grid;grid-template-columns:minmax(160px,220px) minmax(0,1fr);gap:28px;align-items:start}.gcpl-detailCover{display:grid;aspect-ratio:1;place-items:center;overflow:hidden;border-radius:6px;background:var(--gray-block-lighten-bg,#f7f7f8);color:var(--gray-side-list-icon,#81858d)}.gcpl-detailCover img{width:100%;height:100%;object-fit:cover}.gcpl-detailCover svg{width:30%}.gcpl-detailInfo h1{margin:0 0 8px;font-size:28px}.gcpl-detailInfo p{color:var(--gray-info,#8e8e93)}.gcpl-detailActions{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}.gcpl-detailItems{margin-top:30px}.gcpl-detailItem{display:grid;grid-template-columns:64px minmax(0,1fr) auto;gap:14px;align-items:center;padding:12px 0;border-top:1px solid var(--gray-separator,#f0f0f0)}.gcpl-detailItem img,.gcpl-detailItemPlaceholder{width:64px;height:64px;border-radius:6px;object-fit:cover;background:var(--gray-block-lighten-bg,#f7f7f8)}.gcpl-detailItemTitle{overflow:hidden;font-weight:700;text-overflow:ellipsis;white-space:nowrap}.gcpl-itemActions{display:flex;gap:4px}.gcpl-itemActions button{min-width:34px}.gcpl-playing .gcpl-detailItemTitle{color:var(--bs-gcores,#f83055)}@media(max-width:700px){.gcpl-detailHero{grid-template-columns:110px minmax(0,1fr);gap:16px}.gcpl-detailInfo h1{font-size:21px}.gcpl-detailItem{grid-template-columns:48px minmax(0,1fr)}.gcpl-detailItem img,.gcpl-detailItemPlaceholder{width:48px;height:48px}.gcpl-itemActions{grid-column:1/-1}}.gcpl-add-card{position:absolute!important;top:8px;right:44px;z-index:4;display:flex;width:28px;height:28px;align-items:center;justify-content:center;border:0;border-radius:4px;padding:0;background:#0003;color:#fff;cursor:pointer}.gcpl-add-card svg{width:15px;height:15px}.gcpl-add-card:hover{background:#e34d3b}.gcpl-add-card:disabled{opacity:.6}.gcpl-add-user-radios{display:block!important;width:100%;margin-top:10px}.original_imgArea{position:relative}.gcpl-danmaku-host{position:relative!important}.gcpl-danmaku-layer{position:absolute;inset:0;z-index:8;overflow:hidden;pointer-events:none}.gcpl-danmaku-item{position:absolute;left:0;display:inline-block;max-width:80vw;overflow:hidden;padding:7px 13px;border:1px solid #ffffff2e;border-radius:999px;background:rgba(14,14,14,.58);box-shadow:0 5px 18px #0006;color:#fff;font:600 15px/1.25 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;letter-spacing:.01em;text-overflow:ellipsis;text-shadow:0 1px 2px #000;white-space:nowrap;will-change:transform,opacity;backdrop-filter:blur(12px) saturate(150%);-webkit-backdrop-filter:blur(12px) saturate(150%)}.gcpl-danmaku-item-static{left:50%;transform:translateX(-50%);max-width:min(760px,80vw)}.gcpl-danmaku-toggle{margin-left:8px!important}.gcpl-danmaku-toggle[aria-pressed="true"]{color:#fff!important;background:#ffffff24!important}@media(prefers-reduced-transparency:reduce){.gcpl-danmaku-item{background:#1b1b1bf2;backdrop-filter:none;-webkit-backdrop-filter:none}}@media(prefers-contrast:more){.gcpl-danmaku-item{background:#000;border-color:#fff}}`;
  document.head.append(style);

  function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return '00:00';
    const value = Math.floor(seconds);
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor(value % 3600 / 60);
    const secs = value % 60;
    return hours ? `${hours}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}` : `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function catalogRoute() {
    if (location.pathname !== '/albums') return null;
    const params = new URLSearchParams(location.search);
    if (['gcores', 'join'].includes(params.get('filter'))) return null;
    return { playlistId: cleanText(params.get('gcpl')) };
  }

  function navigateCatalog(playlistId = '') {
    const url = new URL('/albums', location.origin);
    if (playlistId) url.searchParams.set('gcpl', playlistId);
    if (location.pathname !== '/albums') { location.href = url.href; return; }
    history.pushState(history.state, '', url);
    window.scrollTo({ top: 0, behavior: 'auto' });
    queueScan();
  }

  function restoreOfficialCatalog(section) {
    section?.querySelectorAll(':scope > [data-gcpl-official-hidden]').forEach((node) => { node.hidden = node.dataset.gcplOfficialHidden === '1'; delete node.dataset.gcplOfficialHidden; });
    section?.querySelector(':scope > #gcpl-page-root')?.remove();
  }

  function localCoverMarkup(cover) {
    return cover ? `<img src="${escapeHtml(cover)}" alt="">` : '<svg aria-hidden="true" viewBox="0 0 16 16"><path fill="currentColor" d="M12.5 2v7.4a2.6 2.6 0 1 1-1.5-2.35V4.4L6.5 5.5v5.9A2.6 2.6 0 1 1 5 9.05V4.3z"/></svg>';
  }

  function renderCatalogRoot(root, playlistId = '') {
    const playlist = playlistId && playlistById(playlistId);
    if (playlistId && !playlist) {
      history.replaceState(history.state, '', new URL('/albums', location.origin));
      playlistId = '';
    }
    if (!playlistId) {
      root.innerHTML = `<div class="gcpl-catalogToolbar"><strong>保存在本机的播单</strong><button class="btn btn-primary" data-action="new-list">新建播单</button></div>
        <div class="gcpl-pageStatus" role="status" aria-live="polite">${escapeHtml(pageStatus)}</div>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 o_equalHeightRow">${state.playlists.map((list) => {
          const cover = playlistCover(list);
          const current = list.id === state.activeId;
          return `<div class="col"><article class="gcpl-local-card">
            <span class="gcpl-selfBadge">自建</span>
            <button class="coverShowcase o_plainButton" data-action="open-list" data-id="${escapeHtml(list.id)}" aria-label="打开播单：${escapeHtml(list.name)}"><div class="albumGolden albumGolden-hideGolden"><div class="coverShowcase_img">${localCoverMarkup(cover)}</div></div><h3>${escapeHtml(list.name)}</h3><p class="gcpl-cardMeta">${list.items.length} 期${current ? ' · 当前播单' : ''}</p></button>
            <label class="gcpl-coverAction" aria-label="${list.cover ? '更换' : '设置'}封面：${escapeHtml(list.name)}"><svg aria-hidden="true" viewBox="0 0 16 16"><path fill="currentColor" d="M5.2 3 6 1.8h4L10.8 3H14a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 14 14H2a1.5 1.5 0 0 1-1.5-1.5v-8A1.5 1.5 0 0 1 2 3zm2.8 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m0-1.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4"/></svg><input class="gcpl-coverInput" type="file" accept="image/*" data-id="${escapeHtml(list.id)}" aria-label="${list.cover ? '更换' : '设置'}封面：${escapeHtml(list.name)}"></label>
            ${list.cover ? `<button class="gcpl-coverAction gcpl-removeCover" data-action="remove-cover" data-id="${escapeHtml(list.id)}" aria-label="移除封面：${escapeHtml(list.name)}">×</button>` : ''}
          </article></div>`;
        }).join('')}</div>`;
      return;
    }
    const cover = playlistCover(playlist);
    const visibleItems = orderedItems(playlist);
    root.innerHTML = `<button class="btn btn-secondary gcpl-detailBack" data-action="open-library">← 我的播单</button>
      <section class="gcpl-detailHero"><div class="gcpl-detailCover">${localCoverMarkup(cover)}</div><div class="gcpl-detailInfo"><span class="gcpl-selfBadge" style="position:static;display:inline-block">自建播单</span><h1>${escapeHtml(playlist.name)}</h1><p>${playlist.items.length} 期 · 排序：${playlist.direction === 'desc' ? '倒序' : '正序'}${playlist.cursor.time ? ` · 断点 ${formatTime(playlist.cursor.time)}` : ''}</p><div class="gcpl-detailActions"><button class="btn btn-primary" data-action="play-list"${playlist.items.length ? '' : ' disabled'}>从断点播放</button><button class="btn btn-secondary" data-action="toggle-order">切换为${playlist.direction === 'desc' ? '正序' : '倒序'}</button><button class="btn btn-secondary" data-action="rename-list">修改名字</button><label class="btn btn-secondary gcpl-inlineCover">${playlist.cover ? '更换封面' : '设置封面'}<input class="gcpl-coverInput" type="file" accept="image/*" data-id="${escapeHtml(playlist.id)}" aria-label="${playlist.cover ? '更换' : '设置'}封面：${escapeHtml(playlist.name)}"></label>${playlist.cover ? `<button class="btn btn-secondary" data-action="remove-cover" data-id="${escapeHtml(playlist.id)}">移除封面</button>` : ''}<button class="btn btn-secondary" data-action="share-list"${playlist.items.length ? '' : ' disabled'}>二维码分享</button><button class="btn btn-danger" data-action="delete-list">删除播单</button></div></div></section>
      <div class="gcpl-pageStatus" role="status" aria-live="polite">${escapeHtml(pageStatus)}</div>
      <section class="gcpl-detailItems"><h2>节目</h2>${visibleItems.length ? visibleItems.map((item) => `<article class="gcpl-detailItem ${playback?.playlistId === playlist.id && playback.itemId === item.id ? 'gcpl-playing' : ''}">${item.cover ? `<img src="${escapeHtml(item.cover)}" alt="">` : '<span class="gcpl-detailItemPlaceholder"></span>'}<div><div class="gcpl-detailItemTitle">${escapeHtml(item.title)}</div><div class="gcpl-cardMeta">${formatTime(item.duration)}${playlist.cursor.itemId === item.id && playlist.cursor.time ? ` · 断点 ${formatTime(playlist.cursor.time)}` : ''}</div></div><div class="gcpl-itemActions"><button class="btn btn-secondary" data-action="play-item" data-id="${item.id}" aria-label="播放：${escapeHtml(item.title)}">▶</button><button class="btn btn-secondary" data-action="move-up" data-id="${item.id}" aria-label="上移：${escapeHtml(item.title)}">↑</button><button class="btn btn-secondary" data-action="move-down" data-id="${item.id}" aria-label="下移：${escapeHtml(item.title)}">↓</button><button class="btn btn-danger" data-action="remove-item" data-id="${item.id}" aria-label="移除：${escapeHtml(item.title)}">×</button></div></article>`).join('') : '<p>还没有节目。可从节目卡片或用户页批量添加。</p>'}</section>`;
  }

  function scanCatalogPage(force = false) {
    if (Date.now() < catalogReadyAt) {
      if (!catalogDelayTimer) catalogDelayTimer = setTimeout(() => { catalogDelayTimer = 0; queueScan(); }, catalogReadyAt - Date.now());
      return;
    }
    const filters = document.querySelector('.labelFilters ul');
    const section = filters?.closest('.ah_section');
    if (location.pathname !== '/albums' || !filters || !section) return;
    let mine = filters.querySelector('.gcpl-mine-filter');
    if (!mine) {
      mine = document.createElement('li');
      mine.className = 'gcpl-mine-filter';
      mine.innerHTML = '<a data-key="mine" href="/albums">我的</a>';
      mine.querySelector('a').addEventListener('click', (event) => { event.preventDefault(); navigateCatalog(); });
      filters.prepend(mine);
    }
    const route = catalogRoute();
    mine.classList.toggle('is_active', !!route);
    if (!route) {
      const filter = new URLSearchParams(location.search).get('filter') || 'gcores';
      [...filters.children].forEach((item) => { if (item !== mine) item.classList.toggle('is_active', item.querySelector('a')?.dataset.key === filter); });
      restoreOfficialCatalog(section);
      return;
    }
    [...filters.children].forEach((item) => { if (item !== mine) item.classList.remove('is_active'); });
    const title = filters.closest('.ah_title');
    let root = section.querySelector(':scope > #gcpl-page-root');
    [...section.children].forEach((node) => { if (node !== title && node !== root) { if (!('gcplOfficialHidden' in node.dataset)) node.dataset.gcplOfficialHidden = node.hidden ? '1' : '0'; node.hidden = true; } });
    if (!root) { root = document.createElement('div'); root.id = 'gcpl-page-root'; title.insertAdjacentElement('afterend', root); }
    const key = `${route.playlistId}|${stateRevision}|${playback?.playlistId || ''}:${playback?.itemId || ''}:${audio.paused}|${pageStatus}`;
    if (!force && root.dataset.renderKey === key) return;
    root.dataset.renderKey = key;
    renderCatalogRoot(root, route.playlistId);
  }

  function render() {
    pageStatus = '';
    renderMini();
    scanCatalogPage(true);
  }

  function renderPlayer(message = '') {
    pageStatus = message;
    renderMini();
    scanCatalogPage(true);
  }

  function renderMini() {
    miniSeekDragging = false;
    const item = currentItem();
    const list = playback ? playlistById(playback.playlistId) : activePlaylist();
    const visibleItems = list ? orderedItems(list) : [];
    const displayItem = item || visibleItems.find((entry) => entry.id === list.cursor.itemId) || visibleItems[0];
    const index = visibleItems.findIndex((entry) => entry.id === (playback?.itemId || list?.cursor.itemId));
    const canStart = !playbackLoading && (!!item || !!list?.items.length);
    const canNext = !playbackLoading && index >= 0 && index + 1 < visibleItems.length;
    const sourceReady = !!item && currentAudioSeekable();
    const duration = sourceReady ? audio.duration : Math.max(0, Number(displayItem?.duration || 0));
    const savedTime = displayItem && list?.cursor.itemId === displayItem.id ? list.cursor.time : 0;
    const currentTime = duration > 0 ? Math.min(duration, sourceReady && Number.isFinite(audio.currentTime) ? audio.currentTime : savedTime) : 0;
    const playIcon = '<svg aria-hidden="true" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2.5v11l9-5.5z"/></svg>';
    const pauseIcon = '<svg aria-hidden="true" viewBox="0 0 16 16"><path fill="currentColor" d="M3.5 2.5h3v11h-3zm6 0h3v11h-3z"/></svg>';
    const nextIcon = '<svg aria-hidden="true" viewBox="0 0 16 16"><path fill="currentColor" d="M2.5 3v10L10 8zm8 0h3v10h-3z"/></svg>';
    const musicIcon = '<svg aria-hidden="true" viewBox="0 0 16 16"><path fill="currentColor" d="M12.5 2v7.4a2.6 2.6 0 1 1-1.5-2.35V4.4L6.5 5.5v5.9A2.6 2.6 0 1 1 5 9.05V4.3z"/></svg>';
    const volumeIcon = '<svg aria-hidden="true" viewBox="0 0 16 16"><path fill="currentColor" d="M2 6h3l3-2.5v9L5 10H2zm8.2-.9a4.2 4.2 0 0 1 0 5.8l-1-1.1a2.7 2.7 0 0 0 0-3.6zm2-2a7 7 0 0 1 0 9.8l-1-1.1a5.5 5.5 0 0 0 0-7.6z"/></svg>';
    shadow.querySelector('#mini').innerHTML = `
      <span class="miniInfo">
        ${displayItem ? `<a class="miniCoverLink" href="/radios/${escapeHtml(displayItem.id)}" target="_blank" rel="noopener noreferrer" aria-label="打开节目详情：${escapeHtml(displayItem.title)}">${displayItem.cover ? `<img class="miniCover" src="${escapeHtml(displayItem.cover)}" alt="">` : `<span class="miniPlaceholder">${musicIcon}</span>`}</a>` : `<span class="miniPlaceholder">${musicIcon}</span>`}
        <button class="miniText" data-action="open-current-list" data-id="${escapeHtml(list?.id || '')}" aria-label="打开播单详情：${escapeHtml(list?.name || '我的播单')}"><span class="miniTitle">${escapeHtml(displayItem?.title || '播单为空')}</span><span class="miniSub">${escapeHtml(playbackLoading ? `${list?.name || '我的播单'} · 正在加载…` : playbackError ? `${list?.name || '我的播单'} · 加载失败，点击重试` : item ? `${list?.name || '我的播单'} · ${audio.paused ? '已暂停' : '正在播放'}` : displayItem ? `${list?.name || '我的播单'} · 从断点播放` : `${list?.name || '我的播单'} · 点击管理`)}</span></button>
      </span>
      <span class="miniControls"><button class="miniControl primaryControl" data-action="mini-toggle" aria-label="${playbackLoading ? '正在加载' : item && !audio.paused ? '暂停' : playbackError ? '重试播放' : '播放'}"${canStart ? '' : ' disabled'}>${item && !audio.paused ? pauseIcon : playIcon}</button><button class="miniControl" data-action="mini-next" aria-label="下一期"${canNext ? '' : ' disabled'}>${nextIcon}</button></span>
      <span class="miniVolumeWrap"><button class="miniControl miniVolumeButton" data-action="toggle-volume" aria-label="调节音量" aria-expanded="${volumePopoverOpen}" aria-controls="miniVolumePopover">${volumeIcon}</button>${volumePopoverOpen ? `<span class="miniVolumePopover" id="miniVolumePopover" role="dialog" aria-label="音量调节"><span class="miniVolumeValue">${Math.round(audio.volume * 100)}%</span><input class="miniVolumeSlider" id="miniVolumeSlider" type="range" min="0" max="1" step="0.05" value="${audio.volume}" orient="vertical" aria-label="音量"></span>` : ''}</span>
      ${displayItem ? `<span class="miniProgress"><span id="miniElapsed">${formatTime(currentTime)}</span><input id="miniSeek" type="range" min="0" max="${Math.max(1, duration)}" step="1" value="${Math.min(currentTime, duration || currentTime)}" aria-label="播放进度"${sourceReady ? '' : ' disabled'}><span id="miniDuration">${formatTime(duration)}</span></span>` : '<span class="miniProgressEmpty"></span>'}`;
  }

  function setStatus(message) {
    pageStatus = message;
    const node = document.querySelector('#gcpl-page-root .gcpl-pageStatus');
    if (node) node.textContent = message;
  }

  function setMiniVolume(value, persist = false) {
    const volume = Math.min(1, Math.max(0, Number(value)));
    if (!Number.isFinite(volume)) return;
    audio.volume = volume;
    const slider = shadow.querySelector('#miniVolumeSlider');
    const label = shadow.querySelector('.miniVolumeValue');
    if (slider) slider.value = String(volume);
    if (label) label.textContent = `${Math.round(volume * 100)}%`;
    if (persist) GM_setValue(VOLUME_KEY, volume);
  }

  function shareLink(list) {
    // ponytail: 单个二维码最多 200 期且链接不超过 2800 字节；需要更大播单时再做分片二维码。
    if (!list.items.length || list.items.length > MAX_SHARE_ITEMS) throw new Error(`单个二维码只能分享 1–${MAX_SHARE_ITEMS} 期节目`);
    const encoded = encodeSharePayload({ v: 1, n: list.name, i: orderedItems(list).map((item) => item.id) });
    const link = `${location.origin}/radios#gcpl=${encoded}`;
    if (new TextEncoder().encode(link).length > MAX_SHARE_LINK_BYTES) throw new Error('播单数据超过单个二维码容量，请减少节目数量或缩短名称');
    return link;
  }

  function showShare(list) {
    try {
      const link = shareLink(list);
      const code = qrcode(0, 'L');
      code.addData(link, 'Byte');
      code.make();
      currentShare = { link, image: code.createDataURL(5, 20), name: list.name };
      const modal = shadow.querySelector('#share');
      modal.innerHTML = `<div class="shareCard"><h3>${escapeHtml(list.name)}</h3><img src="${currentShare.image}" alt="播单分享二维码"><p>扫码打开机核后，已安装本脚本的用户可确认导入。</p><p>二维码仅包含播单名称和节目 ID。</p><div class="shareActions"><button data-action="download-qr">下载二维码</button><button data-action="copy-link">复制链接</button><button data-action="close-share">关闭</button></div></div>`;
      modal.hidden = false;
    } catch (error) {
      setStatus(String(error?.message || error).replace(/^code length overflow.*$/i, '播单数据超过单个二维码容量'));
    }
  }

  function clearShareHash() {
    if (!location.hash.startsWith('#gcpl=')) return;
    const url = new URL(location.href);
    url.hash = '';
    history.replaceState(history.state, '', url);
  }

  async function importSharedPlaylist() {
    if (importingShare || !location.hash.startsWith('#gcpl=')) return;
    importingShare = true;
    try {
    let shared;
    try {
      shared = decodeSharePayload(location.hash.slice(6));
    } catch (error) {
      alert(error?.message || '无法识别分享播单');
      clearShareHash();
      return;
    }
    if (!confirm(`导入播单「${shared.name}」（${shared.ids.length} 期）？`)) {
      clearShareHash();
      return;
    }
    const items = [];
    let failed = 0;
    for (let index = 0; index < shared.ids.length; index += 6) {
      setStatus(`正在导入 ${Math.min(index + 6, shared.ids.length)}/${shared.ids.length}…`);
      const batch = await Promise.allSettled(shared.ids.slice(index, index + 6).map((id) => radioData(id)));
      batch.forEach((result) => result.status === 'fulfilled' ? items.push(result.value.item) : failed += 1);
    }
    clearShareHash();
    if (!items.length) return alert('导入失败：未能取得任何节目资料');
    state = normalizeState(GM_getValue(STORAGE_KEY, state));
    const id = uid();
    state.playlists.push({ id, name: shared.name, cover: '', direction: 'asc', items, cursor: { itemId: items[0].id, time: 0 } });
    state.activeId = id;
    save();
    pageStatus = `已导入 ${items.length} 期${failed ? `，${failed} 期获取失败` : ''}`;
    navigateCatalog(id);
    } finally {
      importingShare = false;
    }
  }

  function persistProgress(force = false) {
    if (!playback || !expectedAudioUrl || audio.src !== new URL(expectedAudioUrl, location.href).href || !Number.isFinite(audio.currentTime)) return;
    const second = Math.floor(audio.currentTime);
    if (!force && Math.abs(second - lastSavedSecond) < SAVE_INTERVAL_SECONDS) return;
    state = normalizeState(GM_getValue(STORAGE_KEY, state));
    const list = playlistById(playback.playlistId);
    if (!list) return;
    if (!list.items.some((item) => item.id === playback.itemId)) return;
    list.cursor = { itemId: playback.itemId, time: second };
    lastSavedSecond = second;
    save();
  }

  async function startItem(list, itemId, resume = false) {
    const request = ++playbackRequest;
    const listId = list.id;
    if (!playbackError) persistProgress(true);
    audio.pause();
    audio.removeAttribute('src');
    audio.load();
    expectedAudioUrl = '';
    list = playlistById(listId);
    const item = list?.items.find((entry) => entry.id === itemId);
    if (!item) return;
    playback = { playlistId: listId, itemId };
    playbackLoading = true;
    playbackError = '';
    pendingSeek = resume && list.cursor.itemId === itemId ? list.cursor.time : 0;
    shouldAutoplay = true;
    lastSavedSecond = -Infinity;
    document.querySelectorAll('audio,video').forEach((media) => media.pause());
    render();
    setStatus('正在取得音频地址…');
    try {
      const resolved = await playableUrl(itemId);
      if (request !== playbackRequest || playback?.playlistId !== listId || playback.itemId !== itemId) return;
      Object.assign(item, resolved.item);
      expectedAudioUrl = resolved.url;
      audio.src = resolved.url;
      audio.load();
      save();
      render();
    } catch (error) {
      if (request !== playbackRequest) return;
      shouldAutoplay = false;
      playbackLoading = false;
      playbackError = error?.message || '播放失败';
      expectedAudioUrl = '';
      renderPlayer(playbackError);
    }
  }

  function adjacent(direction) {
    if (!playback) return;
    const list = playlistById(playback.playlistId);
    const visibleItems = list ? orderedItems(list) : [];
    const index = visibleItems.findIndex((item) => item.id === playback.itemId);
    const next = visibleItems[index + direction];
    if (next) startItem(list, next.id, false);
  }

  function toggleCurrentPlayback(fallbackList = activePlaylist()) {
    if (playbackLoading) return;
    if (playback) {
      const list = playlistById(playback.playlistId);
      if (playbackError || !expectedAudioUrl) return list && startItem(list, playback.itemId, true);
      return audio.paused ? audio.play().catch((error) => setStatus(error.message)) : audio.pause();
    }
    if (fallbackList.items.length) startItem(fallbackList, fallbackList.cursor.itemId || orderedItems(fallbackList)[0].id, true);
  }

  async function addRadio(id, button) {
    state = normalizeState(GM_getValue(STORAGE_KEY, state));
    const list = activePlaylist();
    const listId = list.id;
    if (list.items.some((item) => item.id === id)) return setStatus('该节目已在当前播单中');
    if (button) button.disabled = true;
    try {
      const { item } = await radioData(id);
      state = normalizeState(GM_getValue(STORAGE_KEY, state));
      const list = playlistById(listId);
      if (!list) throw new Error('目标播单已被删除');
      if (list.items.some((entry) => entry.id === id)) return setStatus('该节目已在目标播单中');
      list.items.push(item);
      if (!list.cursor.itemId) list.cursor = { itemId: orderedItems(list)[0].id, time: 0 };
      save();
      render();
      setStatus(`已加入「${list.name}」`);
    } catch (error) {
      setStatus(error?.message || '添加失败');
    } finally {
      if (button) button.disabled = false;
    }
  }

  async function userParticipatedRadios(userId, onProgress) {
    const pageSize = 100;
    const items = new Map();
    let offset = 0;
    let total = null;
    const pageSignatures = new Set();
    do {
      const query = new URLSearchParams({
        type: 'radios',
        'filter[dj-ids]': userId,
        'order-by': 'time',
        'page[limit]': String(pageSize),
        'page[offset]': String(offset),
        'fields[radios]': 'title,cover,thumb,duration',
      });
      const result = await api(`/search?${query}`);
      const page = Array.isArray(result.data) ? result.data : [];
      const signature = page.map((resource) => `${resource.type}:${resource.id}`).join(',');
      if (page.length && pageSignatures.has(signature)) throw new Error('机核接口返回了重复分页，请稍后重试');
      if (page.length) pageSignatures.add(signature);
      for (const resource of page) {
        try { const item = parseRadio({ data: resource }).item; items.set(item.id, item); } catch (_) {}
      }
      const recordCount = Number(result.meta?.['record-count']);
      if (Number.isFinite(recordCount) && recordCount >= 0) total = recordCount;
      offset += page.length;
      onProgress?.(items.size, total);
      if (!page.length) break;
    } while (total === null ? offset % pageSize === 0 : offset < total);
    return [...items.values()];
  }

  async function addUserRadios(userId, button) {
    state = normalizeState(GM_getValue(STORAGE_KEY, state));
    const target = activePlaylist();
    const targetId = target.id;
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = '正在读取参与节目…';
    try {
      const items = await userParticipatedRadios(userId, (loaded, total) => { button.textContent = `正在读取 ${loaded}${total === null ? '' : `/${total}`}…`; });
      state = normalizeState(GM_getValue(STORAGE_KEY, state));
      const list = playlistById(targetId);
      if (!list) throw new Error('目标播单已被删除');
      if (!items.length) { button.textContent = '未找到该用户参与的节目'; return; }
      const additions = newItemsForPlaylist(list, items);
      const wasEmpty = !list.items.length;
      list.items.push(...additions);
      if (wasEmpty && additions.length) list.cursor = { itemId: orderedItems(list)[0].id, time: 0 };
      save();
      render();
      const skipped = items.length - additions.length;
      button.textContent = additions.length ? `已加入 ${additions.length} 期${skipped ? `，跳过 ${skipped} 期` : ''}` : '参与节目已全部在播单中';
    } catch (error) {
      button.textContent = error?.message || '批量加入失败';
    } finally {
      setTimeout(() => { if (button.isConnected) { button.disabled = false; button.textContent = originalText; } }, 2500);
    }
  }

  async function albumRadios(albumId, onProgress) {
    const album = await api(`/albums/${encodeURIComponent(albumId)}`);
    const attributes = album?.data?.attributes;
    if (album?.data?.type !== 'albums' || attributes?.['content-type'] !== 'radio') throw new Error('这个专辑不是音频播单');
    const relation = attributes['is-free'] ? 'published-radios' : 'published-audiobooks';
    const pageSize = 20;
    const items = new Map();
    const pageSignatures = new Set();
    let offset = 0;
    let total = null;
    do {
      const query = new URLSearchParams({
        'page[limit]': String(pageSize),
        'page[offset]': String(offset),
        sort: attributes['is-free'] ? '-published-at' : 'published-at',
        'fields[radios]': 'title,cover,thumb,duration,published-at',
      });
      const result = await api(`/albums/${encodeURIComponent(albumId)}/${relation}?${query}`);
      const page = Array.isArray(result.data) ? result.data : [];
      const signature = page.map((resource) => `${resource.type}:${resource.id}`).join(',');
      if (page.length && pageSignatures.has(signature)) throw new Error('机核接口返回了重复专辑分页');
      if (page.length) pageSignatures.add(signature);
      for (const resource of page) {
        const item = parseRadio({ data: resource }).item;
        items.set(item.id, item);
      }
      const recordCount = Number(result.meta?.['record-count']);
      if (Number.isFinite(recordCount) && recordCount >= 0) total = recordCount;
      offset += page.length;
      onProgress?.(items.size, total);
      if (!page.length) break;
    } while (total === null ? offset % pageSize === 0 : offset < total);
    if (total !== null && items.size !== total) throw new Error(`专辑节目数量不完整（${items.size}/${total}）`);
    return { items: [...items.values()] };
  }

  async function addAlbumRadios(albumId, button) {
    state = normalizeState(GM_getValue(STORAGE_KEY, state));
    const target = activePlaylist();
    const targetId = target.id;
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = '正在读取专辑…';
    try {
      const result = await albumRadios(albumId, (loaded, total) => { button.textContent = `正在读取 ${loaded}${total === null ? '' : `/${total}`}…`; });
      state = normalizeState(GM_getValue(STORAGE_KEY, state));
      const list = playlistById(targetId);
      if (!list) throw new Error('目标播单已被删除');
      const additions = newItemsForPlaylist(list, result.items);
      const wasEmpty = !list.items.length;
      list.items.push(...additions);
      if (wasEmpty && additions.length) list.cursor = { itemId: orderedItems(list)[0].id, time: 0 };
      save();
      render();
      const skipped = result.items.length - additions.length;
      button.textContent = additions.length ? `已加入 ${additions.length} 期${skipped ? `，跳过 ${skipped} 期` : ''}` : '专辑节目已全部在播单中';
    } catch (error) {
      button.textContent = error?.message || '专辑加入失败';
    } finally {
      setTimeout(() => { if (button.isConnected) { button.disabled = false; button.textContent = originalText; } }, 2500);
    }
  }

  async function timedComments(radioId) {
    const comments = new Map();
    const pageSignatures = new Set();
    let offset = 0;
    let total = null;
    do {
      const query = new URLSearchParams({
        'page[limit]': String(DANMAKU_PAGE_SIZE),
        'page[offset]': String(offset),
        sort: 'radio-timestamp',
        'filter[timed]': '1',
        'fields[comments]': 'body,radio-timestamp',
      });
      const result = await api(`/radios/${encodeURIComponent(radioId)}/comments?${query}`);
      const page = Array.isArray(result.data) ? result.data : [];
      const signature = page.map((resource) => `${resource.type}:${resource.id}`).join(',');
      if (page.length && pageSignatures.has(signature)) throw new Error('机核接口返回了重复评论分页');
      if (page.length) pageSignatures.add(signature);
      for (const resource of page) {
        const timestamp = Number(resource?.attributes?.['radio-timestamp']);
        const text = cleanDanmakuText(resource?.attributes?.body);
        if (resource?.type === 'comments' && /^\d{1,12}$/.test(resource.id) && Number.isFinite(timestamp) && timestamp >= 0 && text) {
          comments.set(resource.id, { id: resource.id, timestamp, text });
        }
      }
      const recordCount = Number(result.meta?.['record-count']);
      if (Number.isFinite(recordCount) && recordCount >= 0) total = recordCount;
      offset += page.length;
      if (!page.length) break;
    } while (total === null ? offset % DANMAKU_PAGE_SIZE === 0 : offset < total);
    return [...comments.values()].sort((left, right) => left.timestamp - right.timestamp || Number(left.id) - Number(right.id));
  }

  function clearDanmaku(session = danmakuSession) {
    if (!session) return;
    for (const lane of session.lanes) {
      if (!lane) continue;
      lane.animation.onfinish = null;
      lane.animation.cancel();
      lane.node.remove();
    }
    session.lanes = Array(DANMAKU_LANES).fill(null);
    session.root.replaceChildren();
  }

  function resetDanmaku(session, time = session.audio.currentTime) {
    clearDanmaku(session);
    const safeTime = Number.isFinite(time) ? Math.max(0, time) : 0;
    session.cursor = commentIndexAfter(session.comments, safeTime);
    session.lastTime = safeTime;
  }

  function syncDanmakuAnimations(session, action) {
    for (const lane of session.lanes) {
      if (!lane) continue;
      if (action === 'play') lane.animation.play();
      if (action === 'pause') lane.animation.pause();
      if (action === 'rate') lane.animation.playbackRate = Math.min(4, Math.max(0.25, session.audio.playbackRate || 1));
    }
  }

  function spawnDanmaku(session, comment) {
    if (!danmakuEnabled || session !== danmakuSession || !session.root.isConnected) return;
    const laneIndex = session.lanes.findIndex((lane) => !lane);
    if (laneIndex < 0) return;
    const node = document.createElement('span');
    node.className = 'gcpl-danmaku-item';
    node.textContent = comment.text;
    node.dataset.commentId = comment.id;
    node.dataset.timestamp = String(comment.timestamp);
    node.style.top = `${18 + laneIndex * 45}px`;
    session.root.append(node);
    if (typeof node.animate !== 'function') { node.remove(); return; }
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animation;
    if (reducedMotion) {
      node.classList.add('gcpl-danmaku-item-static');
      animation = node.animate([
        { opacity: 0 },
        { opacity: 1, offset: 0.12 },
        { opacity: 1, offset: 0.78 },
        { opacity: 0 },
      ], { duration: 4000, easing: 'linear', fill: 'forwards' });
    } else {
      const rootWidth = session.root.getBoundingClientRect().width;
      const nodeWidth = node.getBoundingClientRect().width;
      if (!(rootWidth > 0 && nodeWidth > 0)) { node.remove(); return; }
      animation = node.animate([
        { transform: `translateX(${rootWidth}px)` },
        { transform: `translateX(${-nodeWidth}px)` },
      ], { duration: DANMAKU_DURATION_MS, easing: 'linear', fill: 'forwards' });
    }
    animation.playbackRate = Math.min(4, Math.max(0.25, session.audio.playbackRate || 1));
    if (session.audio.paused) animation.pause();
    const lane = { animation, node };
    session.lanes[laneIndex] = lane;
    animation.onfinish = () => {
      if (session.lanes[laneIndex] === lane) session.lanes[laneIndex] = null;
      node.remove();
    };
  }

  function handleDanmakuTime(session) {
    if (!danmakuEnabled || !session.loaded || session.seeking || session !== danmakuSession) return;
    const currentTime = session.audio.currentTime;
    if (!Number.isFinite(currentTime)) return;
    if (!Number.isFinite(session.lastTime) || currentTime < session.lastTime) {
      resetDanmaku(session, currentTime);
      return;
    }
    while (session.cursor < session.comments.length && session.comments[session.cursor].timestamp <= currentTime) {
      const comment = session.comments[session.cursor];
      if (comment.timestamp > session.lastTime) spawnDanmaku(session, comment);
      session.cursor += 1;
    }
    session.lastTime = currentTime;
  }

  function updateDanmakuToggle(session) {
    const button = session.button;
    if (!button?.isConnected) return;
    button.setAttribute('aria-pressed', String(danmakuEnabled));
    button.disabled = false;
    button.textContent = session.loading
      ? '弹幕：加载中'
      : session.error && danmakuEnabled
        ? '弹幕：重试'
        : danmakuEnabled
          ? `弹幕：开${session.loaded ? ` ${session.comments.length}` : ''}`
          : '弹幕：关';
  }

  async function loadDanmakuComments(session) {
    if (session.loading || session !== danmakuSession) return;
    const request = ++danmakuRequest;
    session.loading = true;
    session.error = false;
    updateDanmakuToggle(session);
    try {
      const comments = await timedComments(session.radioId);
      if (request !== danmakuRequest || session !== danmakuSession || !danmakuEnabled) return;
      session.comments = comments;
      session.loaded = true;
      resetDanmaku(session);
    } catch (_) {
      if (request === danmakuRequest && session === danmakuSession) {
        session.error = true;
        session.loaded = false;
      }
    } finally {
      if (request === danmakuRequest && session === danmakuSession) {
        session.loading = false;
        updateDanmakuToggle(session);
      }
    }
  }

  function setDanmakuEnabled(enabled, session = danmakuSession) {
    danmakuEnabled = enabled;
    if (!session) return;
    if (!enabled) {
      danmakuRequest += 1;
      session.loading = false;
      resetDanmaku(session);
    } else if (session.loaded) {
      resetDanmaku(session);
    } else {
      loadDanmakuComments(session);
    }
    updateDanmakuToggle(session);
  }

  function ensureDanmakuToggle(session) {
    if (session.button?.isConnected) return;
    const actions = document.querySelector('.playerFullscreenHeader_actions');
    if (!actions) return;
    const oldButton = document.querySelector('.gcpl-danmaku-toggle');
    oldButton?.remove();
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-opacity fa-sm rounded-max gcpl-danmaku-toggle';
    button.addEventListener('click', () => {
      if (session.error && danmakuEnabled) {
        session.error = false;
        loadDanmakuComments(session);
        return;
      }
      const next = !danmakuEnabled;
      GM_setValue(DANMAKU_KEY, next);
      setDanmakuEnabled(next, session);
    });
    actions.append(button);
    session.button = button;
    updateDanmakuToggle(session);
  }

  function teardownDanmaku() {
    const session = danmakuSession;
    if (!session) return;
    danmakuRequest += 1;
    for (const [event, handler] of Object.entries(session.handlers)) session.audio.removeEventListener(event, handler);
    clearDanmaku(session);
    session.button?.remove();
    session.root.remove();
    session.body.classList.remove('gcpl-danmaku-host');
    danmakuSession = null;
  }

  function scanDanmaku() {
    const radioId = location.pathname.match(/^\/radios\/(\d+)\/timelines/)?.[1];
    const body = document.querySelector('.playerFullscreenTimelineBody');
    const officialAudio = document.querySelector('audio');
    if (!radioId || !body || !officialAudio) { teardownDanmaku(); return; }
    if (danmakuSession?.radioId === radioId && danmakuSession.body === body && danmakuSession.audio === officialAudio && danmakuSession.root.isConnected && danmakuSession.root.parentElement === body) {
      body.classList.add('gcpl-danmaku-host');
      ensureDanmakuToggle(danmakuSession);
      return;
    }
    teardownDanmaku();
    body.classList.add('gcpl-danmaku-host');
    const root = document.createElement('div');
    root.className = 'gcpl-danmaku-layer';
    root.setAttribute('aria-hidden', 'true');
    body.append(root);
    const session = {
      radioId,
      body,
      root,
      audio: officialAudio,
      button: null,
      comments: [],
      cursor: 0,
      lastTime: Number.isFinite(officialAudio.currentTime) ? officialAudio.currentTime : 0,
      lanes: Array(DANMAKU_LANES).fill(null),
      loaded: false,
      loading: false,
      error: false,
      seeking: false,
      handlers: {},
    };
    session.handlers = {
      timeupdate: () => handleDanmakuTime(session),
      seeking: () => { session.seeking = true; clearDanmaku(session); },
      seeked: () => { session.seeking = false; resetDanmaku(session); },
      play: () => syncDanmakuAnimations(session, 'play'),
      pause: () => syncDanmakuAnimations(session, 'pause'),
      ratechange: () => syncDanmakuAnimations(session, 'rate'),
      ended: () => resetDanmaku(session, 0),
    };
    for (const [event, handler] of Object.entries(session.handlers)) officialAudio.addEventListener(event, handler);
    danmakuSession = session;
    ensureDanmakuToggle(session);
    if (danmakuEnabled) loadDanmakuComments(session);
  }

  function scanCards() {
    scanQueued = false;
    document.querySelectorAll('.original:not([data-gcpl-ready])').forEach((card) => {
      const id = card.querySelector('a[href^="/radios/"]')?.getAttribute('href')?.match(/^\/radios\/(\d+)/)?.[1];
      const area = card.querySelector('.original_imgArea');
      const officialButton = area?.querySelector('.original_imgArea_addRadio');
      if (!id || !officialButton) return;
      card.dataset.gcplReady = '1';
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'gcpl-add-card';
      button.title = '加入我的播单';
      button.setAttribute('aria-label', '加入我的播单');
      button.innerHTML = '<svg aria-hidden="true" viewBox="0 0 16 16"><path fill="currentColor" d="M1.5 2.5h8v1.5h-8zm0 4h6v1.5h-6zm0 4h6v1.5h-6zM11 7.5h1.5V10H15v1.5h-2.5V14H11v-2.5H8.5V10H11z"/></svg>';
      button.addEventListener('click', (event) => { event.preventDefault(); event.stopPropagation(); addRadio(id, button); });
      officialButton.insertAdjacentElement('beforebegin', button);
    });
  }

  function scanUserPage() {
    const userId = location.pathname.match(/^\/users\/(\d+)/)?.[1];
    const actions = document.querySelector('.profilePage_sidebar_actions');
    const existing = document.querySelector('.gcpl-add-user-radios');
    if (!userId || !actions) return existing?.remove();
    if (existing?.dataset.userId === userId) return;
    existing?.remove();
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-secondary gcpl-add-user-radios';
    button.dataset.userId = userId;
    button.textContent = '将参与节目加入当前播单';
    button.addEventListener('click', () => addUserRadios(userId, button));
    actions.insertAdjacentElement('afterend', button);
  }

  async function scanAlbumPage() {
    const albumId = location.pathname.match(/^\/albums\/(\d+)/)?.[1];
    const existing = document.querySelector('.gcpl-add-album');
    if (!albumId) { existing?.remove(); albumPageType = { id: '', isRadio: null }; return; }
    if (albumPageType.id !== albumId) {
      const request = ++albumPageRequest;
      albumPageType = { id: albumId, isRadio: null };
      existing?.remove();
      try {
        const album = await api(`/albums/${encodeURIComponent(albumId)}`);
        if (request !== albumPageRequest || location.pathname !== `/albums/${albumId}`) return;
        albumPageType.isRadio = album?.data?.type === 'albums' && album.data.attributes?.['content-type'] === 'radio';
      } catch (_) {
        if (request !== albumPageRequest) return;
        albumPageType.isRadio = false;
      }
      scanAlbumPage();
      return;
    }
    const playAll = [...document.querySelectorAll('.albumDetail_actions button')].find((button) => button.textContent.trim() === '播放全部');
    if (!playAll || albumPageType.isRadio !== true) { existing?.remove(); return; }
    if (existing?.dataset.albumId === albumId) return;
    existing?.remove();
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-lg btn-secondary btn-ellipse gcpl-add-album';
    button.dataset.albumId = albumId;
    button.textContent = '加入当前播单';
    button.addEventListener('click', () => addAlbumRadios(albumId, button));
    playAll.insertAdjacentElement('afterend', button);
  }

  function queueScan() {
    if (scanQueued) return;
    scanQueued = true;
    requestAnimationFrame(() => { scanCards(); scanCatalogPage(); scanUserPage(); scanAlbumPage(); scanDanmaku(); });
  }

  function handleAction(button) {
    const action = button.dataset.action;
    if (!['close', 'toggle', 'previous', 'next', 'close-share', 'download-qr', 'copy-link'].includes(action)) state = normalizeState(GM_getValue(STORAGE_KEY, state));
    const list = playlistById(catalogRoute()?.playlistId) || activePlaylist();
    if (action === 'open-current-list') navigateCatalog(button.dataset.id || list.id);
    if (action === 'open-library') navigateCatalog();
    if (action === 'open-list') {
      const target = playlistById(button.dataset.id);
      if (target) { state.activeId = target.id; save(); navigateCatalog(target.id); }
    }
    if (action === 'remove-cover') {
      const target = playlistById(button.dataset.id);
      if (target?.cover) { target.cover = ''; save(); render(); setStatus('已恢复自动封面'); }
    }
    if (action === 'toggle-volume') {
      volumePopoverOpen = !volumePopoverOpen;
      renderMini();
      queueMicrotask(() => shadow.querySelector(volumePopoverOpen ? '#miniVolumeSlider' : '[data-action="toggle-volume"]')?.focus());
    }
    if (action === 'new-list') {
      const name = cleanText(prompt('新播单名称：'));
      if (name) { const id = uid(); state.playlists.push({ id, name, cover: '', direction: 'asc', items: [], cursor: { itemId: null, time: 0 } }); state.activeId = id; save(); navigateCatalog(id); }
    }
    if (action === 'rename-list') {
      const name = cleanText(prompt('播单名称：', list.name));
      if (name) { list.name = name; save(); render(); }
    }
    if (action === 'delete-list' && confirm(`删除播单「${list.name}」？`)) {
      state.playlists = state.playlists.filter((item) => item.id !== list.id);
      if (!state.playlists.length) state = freshState();
      else state.activeId = state.playlists[0].id;
      if (playback?.playlistId === list.id) { playbackRequest += 1; audio.pause(); audio.removeAttribute('src'); expectedAudioUrl = ''; playbackLoading = false; playbackError = ''; playback = null; }
      save(); navigateCatalog();
    }
    if (action === 'share-list') showShare(list);
    if (action === 'toggle-order') { list.direction = list.direction === 'desc' ? 'asc' : 'desc'; save(); render(); }
    if (action === 'close-share') shadow.querySelector('#share').hidden = true;
    if (action === 'download-qr' && currentShare) {
      const link = document.createElement('a');
      link.href = currentShare.image;
      link.download = `${currentShare.name.replace(/[\\/:*?"<>|]/g, '_') || '机核播单'}.gif`;
      shadow.append(link);
      link.click();
      link.remove();
    }
    if (action === 'copy-link' && currentShare) {
      if (!navigator.clipboard?.writeText) setStatus('当前浏览器不支持复制，请使用二维码分享');
      else navigator.clipboard.writeText(currentShare.link).then(() => setStatus('分享链接已复制')).catch(() => setStatus('复制失败，请使用二维码分享'));
    }
    if (action === 'play-list' && list.items.length) startItem(list, list.cursor.itemId || orderedItems(list)[0].id, true);
    if (action === 'play-item') startItem(list, button.dataset.id, list.cursor.itemId === button.dataset.id);
    if (action === 'remove-item') {
      const visibleIndex = orderedItems(list).findIndex((item) => item.id === button.dataset.id);
      list.items = list.items.filter((item) => item.id !== button.dataset.id);
      if (list.cursor.itemId === button.dataset.id) {
        const remaining = orderedItems(list);
        list.cursor = { itemId: remaining[Math.min(visibleIndex, remaining.length - 1)]?.id || null, time: 0 };
      }
      if (playback?.playlistId === list.id && playback.itemId === button.dataset.id) { playbackRequest += 1; audio.pause(); audio.removeAttribute('src'); expectedAudioUrl = ''; playbackLoading = false; playbackError = ''; playback = null; }
      save(); render();
    }
    if (action === 'move-up' || action === 'move-down') { moveVisibleItem(list, button.dataset.id, action === 'move-up' ? -1 : 1); save(); render(); }
    if (action === 'toggle') toggleCurrentPlayback(list);
    if (action === 'mini-toggle') toggleCurrentPlayback(list);
    if (action === 'mini-next') {
      const miniList = playback ? playlistById(playback.playlistId) : list;
      const visibleItems = miniList ? orderedItems(miniList) : [];
      const index = visibleItems.findIndex((item) => item.id === (playback?.itemId || miniList?.cursor.itemId));
      const next = visibleItems[index + 1];
      if (next) startItem(miniList, next.id, false);
    }
    if (action === 'previous') adjacent(-1);
    if (action === 'next') adjacent(1);
  }

  shadow.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action]');
    if (button) handleAction(button);
  });
  document.addEventListener('click', (event) => {
    const button = event.target.closest('#gcpl-page-root [data-action]');
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    handleAction(button);
  });

  async function handleCoverChange(input) {
    const file = input.files?.[0];
    const targetId = input.dataset.id;
    if (!file || !targetId) return;
    setStatus('正在处理封面…');
    try {
      const cover = await coverDataFromFile(file);
      state = normalizeState(GM_getValue(STORAGE_KEY, state));
      const target = playlistById(targetId);
      if (!target) throw new Error('目标播单已被删除');
      target.cover = cover;
      save();
      render();
      setStatus('封面已保存到本机');
    } catch (error) {
      setStatus(error?.message || '封面处理失败');
    } finally {
      input.value = '';
    }
  }

  document.addEventListener('change', (event) => { if (event.target?.classList?.contains('gcpl-coverInput')) handleCoverChange(event.target); });
  shadow.addEventListener('change', (event) => {
    if (event.target.id === 'miniSeek' && currentAudioSeekable()) persistProgress(true);
    if (event.target.id === 'miniVolumeSlider') setMiniVolume(event.target.value, true);
  });
  shadow.addEventListener('input', (event) => {
    if (event.target.id === 'miniSeek' && currentAudioSeekable()) {
      const time = Math.min(audio.duration, Math.max(0, Number(event.target.value)));
      if (Number.isFinite(time)) {
        audio.currentTime = time;
        const elapsed = shadow.querySelector('#miniElapsed');
        if (elapsed) elapsed.textContent = formatTime(time);
      }
    }
    if (event.target.id === 'miniVolumeSlider') {
      setMiniVolume(event.target.value);
    }
  });
  shadow.addEventListener('pointerdown', (event) => { if (event.target.id === 'miniSeek') miniSeekDragging = true; });
  shadow.addEventListener('pointerup', (event) => { if (event.target.id === 'miniSeek') { miniSeekDragging = false; if (currentAudioSeekable()) persistProgress(true); } });
  shadow.addEventListener('pointercancel', (event) => { if (event.target.id === 'miniSeek') miniSeekDragging = false; });
  shadow.addEventListener('keydown', (event) => {
    if (event.target.id !== 'miniVolumeSlider') return;
    const changes = { ArrowUp: 0.05, ArrowRight: 0.05, ArrowDown: -0.05, ArrowLeft: -0.05 };
    if (event.key === 'Home' || event.key === 'End' || Object.prototype.hasOwnProperty.call(changes, event.key)) {
      event.preventDefault();
      const value = event.key === 'Home' ? 0 : event.key === 'End' ? 1 : Math.round((audio.volume + changes[event.key]) * 20) / 20;
      setMiniVolume(value, true);
    }
  });
  addEventListener('click', (event) => {
    const insideVolume = event.composedPath().some((node) => node?.classList?.contains?.('miniVolumeWrap'));
    if (volumePopoverOpen && !insideVolume) { volumePopoverOpen = false; renderMini(); }
  });
  addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && volumePopoverOpen) {
      volumePopoverOpen = false;
      renderMini();
      queueMicrotask(() => shadow.querySelector('[data-action="toggle-volume"]')?.focus());
    }
  });

  audio.addEventListener('loadedmetadata', () => {
    if (!expectedAudioUrl || audio.src !== new URL(expectedAudioUrl, location.href).href) return;
    playbackLoading = false;
    playbackError = '';
    audio.currentTime = Math.min(Math.max(0, pendingSeek), Math.max(0, audio.duration - 1));
    pendingSeek = 0;
    if (shouldAutoplay) audio.play().catch((error) => setStatus(error.message));
    shouldAutoplay = false;
    renderPlayer();
  });
  audio.addEventListener('play', () => { playbackLoading = false; playbackError = ''; GM_setValue(PLAYBACK_KEY, { owner: TAB_ID, at: Date.now() }); document.querySelectorAll('audio,video').forEach((media) => media.pause()); renderPlayer(); });
  audio.addEventListener('pause', () => { persistProgress(true); renderPlayer(); });
  audio.addEventListener('timeupdate', () => {
    if (!miniSeekDragging) persistProgress();
    const miniSeek = shadow.querySelector('#miniSeek');
    const miniElapsed = shadow.querySelector('#miniElapsed');
    if (miniSeek && !miniSeek.disabled) miniSeek.value = String(audio.currentTime);
    if (miniElapsed && !miniSeek?.disabled) miniElapsed.textContent = formatTime(audio.currentTime);
  });
  audio.addEventListener('ended', () => {
    state = normalizeState(GM_getValue(STORAGE_KEY, state));
    const list = playback && playlistById(playback.playlistId);
    const visibleItems = list ? orderedItems(list) : [];
    const index = visibleItems.findIndex((item) => item.id === playback?.itemId);
    if (visibleItems[index + 1]) startItem(list, visibleItems[index + 1].id, false);
    else if (list) { list.cursor = { itemId: visibleItems[0]?.id || null, time: 0 }; playback = null; expectedAudioUrl = ''; playbackLoading = false; playbackError = ''; save(); renderPlayer('播单已播放完毕'); }
  });
  audio.addEventListener('error', () => { if (expectedAudioUrl) { playbackLoading = false; playbackError = '音频加载失败，请重新播放或检查登录状态'; renderPlayer(playbackError); } });
  document.addEventListener('play', (event) => { if (event.target !== audio && event.target instanceof HTMLMediaElement) audio.pause(); }, true);
  addEventListener('pagehide', () => persistProgress(true));
  addEventListener('pagehide', teardownDanmaku);
  addEventListener('pageshow', queueScan);

  if ('mediaSession' in navigator) [
    ['play', () => audio.play()],
    ['pause', () => audio.pause()],
    ['nexttrack', () => adjacent(1)],
    ['previoustrack', () => adjacent(-1)],
    ['seekto', ({ seekTime }) => { if (Number.isFinite(seekTime)) audio.currentTime = seekTime; }],
  ].forEach(([action, handler]) => { try { navigator.mediaSession.setActionHandler(action, handler); } catch (_) {} });

  new MutationObserver(queueScan).observe(document.body, { childList: true, subtree: true });
  GM_addValueChangeListener(STORAGE_KEY, (_key, _oldValue, newValue, remote) => {
    if (!remote) return;
    stateRevision += 1;
    state = normalizeState(newValue);
    if (playback && !playlistById(playback.playlistId)?.items.some((item) => item.id === playback.itemId)) {
      audio.pause();
      audio.removeAttribute('src');
      expectedAudioUrl = '';
      playbackLoading = false;
      playbackError = '';
      playbackRequest += 1;
      playback = null;
    }
    render();
  });
  GM_addValueChangeListener(PLAYBACK_KEY, (_key, _oldValue, newValue, remote) => {
    if (!remote || newValue?.owner === TAB_ID) return;
    if (playbackLoading) {
      playbackRequest += 1;
      playbackLoading = false;
      playbackError = '';
      shouldAutoplay = false;
      expectedAudioUrl = '';
      playback = null;
      renderPlayer();
    }
    if (!audio.paused) audio.pause();
  });
  GM_addValueChangeListener(VOLUME_KEY, (_key, _oldValue, newValue, remote) => {
    const volume = Number(newValue);
    if (remote && Number.isFinite(volume)) { audio.volume = Math.min(1, Math.max(0, volume)); renderMini(); }
  });
  GM_addValueChangeListener(DANMAKU_KEY, (_key, _oldValue, newValue, remote) => {
    if (remote) setDanmakuEnabled(newValue !== false);
  });
  addEventListener('hashchange', importSharedPlaylist);
  addEventListener('popstate', queueScan);
  queueScan();
  render();
  setTimeout(importSharedPlaylist, 0);
})();
