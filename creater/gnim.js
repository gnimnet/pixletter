/*
 * Gnim JS library v0.1.2
 * By Ming
 * http://gnim.net
 */
(function(){function d(a){return a.isGnim?a:new q(arguments)}function m(){if(document.readyState=="complete")for(;readyArray.length!=0;)readyArray.pop()()}function F(a){if(typeof a=="string")return(a=document.getElementById(a))?[a]:[];return[a]}function G(a,b){b=b||document;if(b.getElementsByClassName)return b.getElementsByClassName(a);for(var c=b.getElementsByTagName("*"),e=[],h=RegExp("(^|\\s)"+a+"(\\s|$)"),g=0;g<c.length;g++)h.test(c[g].className)&&e.push(c[g]);return e}function H(a,b){b=b||document;
return b.getElementsByTagName(a)}function z(a){return a.replace(/-(\w)/g,function(b,c){return c.toUpperCase()})}function A(a,b,c){if(a.addEventListener){a.addEventListener(b,c,false);return true}else if(a.attachEvent){a.attachEvent("on"+b,c);return true}return false}function B(a,b,c){if(a.removeEventListener){a.removeEventListener(b,c,false);return true}else if(a.detachEvent){a.detachEvent("on"+b,c);return true}return false}function r(a,b){a.firstChild?a.insertBefore(b,a.firstChild):a.appendChild(b)}
function s(a,b){for(var c=a.parentNode.childNodes,e=0;e<c.length;e++)if(c.item(e)===a&&c.item(e+1)){n(c.item(e+1),b);return}a.parentNode.appendChild(b)}function n(a,b){a.parentNode.insertBefore(b,a)}function o(a,b){if(RegExp("(^|\\s)"+b+"(\\s|$)").test(a.className))return true;return false}function C(a,b){o(a,b)||(a.className+=" "+b)}function D(a,b){var c=RegExp("(^|\\s)"+b+"(\\s|$)");a.className=a.className.replace(c," ")}function E(a){a.parentNode.removeChild(a)}function t(a){for(;a.firstChild;)a.removeChild(a.firstChild)}
function u(a){var b=[],c=document.createElement("div");for(c.innerHTML=a;c.firstChild;){b.push(c.firstChild);c.removeChild(c.firstChild)}return b}function v(a,b){if(typeof b==="string"){if(b==="opacity")return d.IE?a.style.filter&&a.style.filter.indexOf("opacity=")>=0?parseFloat(a.style.filter.match(/opacity=([^)]*)/)[1])/100:1:a.style.opacity?parseFloat(a.style.opacity):1;return a.style[z(b)]}else for(name in b)if(name=="opacity")if(d.IE)if(b[name]||typeof b[name]=="number"){a.style.filter="alpha(opacity="+
b[name]*100+");";a.style.zoom=1}else{a.style.filter="";a.style.zoom=""}else a.style.opacity=b[name]==1?"":b[name];else a.style[z(name)]=b[name]}function q(a){this.isGnim=true;selector=a[0];if(typeof selector=="string")if(selector.charAt(0)=="<"){a=u(selector);this.length=a.length;for(var b=0;b<a.length;b++)this[b]=a[b]}else I.apply(this,a);else if(typeof selector.length=="number"){this.length=selector.length;for(b=0;b<selector.length;b++)this[b]=selector[b]}else{this.length=1;this[0]=selector}}function I(a,
b){b=b||document;for(var c=/(#|\.|\s|^)(.*?)(#|\.|\s|$)/,e=0,h=a.split(","),g=0;g<h.length;g++){for(var i=[],f=[b],k,p,w=h[g].replace(/^\s+|\s+$/g,"");w!="";){i=f;f=[];w=w.replace(c,function(O,J,K,L){k=J;p=K;return L}).replace(/^\s+|\s+$/g,"");for(var j=0;j<i.length;j++){var l=[];switch(k){case "#":l=F(p);break;case ".":l=G(p,i[j]);break;case "":l=H(p,i[j]);break}for(var x=0;x<l.length;x++)f.push(l[x])}}for(j=0;j<f.length;j++)this[e++]=f[j]}this.length=e}function M(){try{return new XMLHttpRequest}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(b){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(c){}return null}
function y(a){var b=d.ajaxSetting,c=a.url?a.url:b.url,e=a.type?a.type:b.type,h=a.contentType?a.contentType:b.contentType,g=a.dataType?a.dataType:b.dataType,i,f=M();if(!f)return f;f.onreadystatechange=function(){if(f.readyState==4){i&&clearTimeout(i);if(f.status==200){if(a.success){var k=f.responseText;if(g=="text")k=f.responseText;else if(g=="json")k=eval("("+f.responseText+")");else if(g=="xml")k=f.responseXML;a.success(k)}}else f.status!=0&&a.error&&a.error(f,f.status,"error")}};if(typeof a.timeout==
"number")i=setTimeout(function(){f.abort();a.error&&a.error(null,null,"timeout")},a.timeout);f.open(e,c,true);a.data&&f.setRequestHeader("Content-Type",h);f.send(N(a.data)||null);return f}function N(a){var b=[],c=/%20/g;for(var e in a){var h=a[e]!=null?a[e].toString():null;h=encodeURIComponent(e).replace(c,"+")+"="+encodeURIComponent(h).replace(c,"+");b.push(h)}return b.join("&")}readyArray=[];if(document.addEventListener){document.addEventListener("DOMContentLoaded",m,false);window.addEventListener("load",
m,false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",m);window.attachEvent("onload",m)}d.IE=false;d.ready=function(a){document.readyState=="complete"?a():readyArray.push(a)};d.addEvent=A;d.removeEvent=B;d.append=function(a,b){a.appendChild(b)};d.prepend=r;d.before=n;d.after=s;d.hasClass=o;d.addClass=C;d.removeClass=D;d.remove=E;d.empty=t;d.build=u;d.css=v;d.noBubble=function(a){if(a.stopPropagation)a.stopPropagation();else a.cancelBubble=true};d.core=q;q.prototype={each:function(a){for(var b=
0;b<this.length;b++)a(this[b]);return this},html:function(a){if(typeof a!="undefined"){for(var b=0;b<this.length;b++)try{this[b].innerHTML=a}catch(c){t(this[b]);a=u(a);for(var e=0;e<a.length;e++)this[b].appendChild(a[e])}return this}else if(this.length>0)return this[0].innerHTML},append:function(a){if(this.length>0){a=d(a);for(var b=0;b<a.length;b++)this[this.length-1].appendChild(a[b])}return this},appendTo:function(a){a=d(a);if(a.length>0)for(var b=0;b<this.length;b++)a[a.length-1].appendChild(this[b]);
return this},prepend:function(a){if(this.length>0){a=d(a);for(var b=0;b<a.length;b++)r(this[this.length-1],a[b])}return this},prependTo:function(a){a=d(a);if(a.length>0)for(var b=0;b<this.length;b++)r(a[a.length-1],this[b]);return this},after:function(a){if(this.length>0){a=d(a);for(var b=0;b<a.length;b++)s(this[this.length-1],a[b])}return this},insertAfter:function(a){a=d(a);if(a.length>0)for(var b=0;b<this.length;b++)s(a[a.length-1],this[b]);return this},before:function(a){if(this.length>0){a=d(a);
for(var b=0;b<a.length;b++)n(this[this.length-1],a[b])}return this},insertBefore:function(a){a=d(a);if(a.length>0)for(var b=0;b<this.length;b++)n(a[a.length-1],this[b]);return this},remove:function(){for(var a=0;a<this.length;a++)E(this[a]);return this},empty:function(){for(var a=0;a<this.length;a++)t(this[a]);return this},css:function(a){if(typeof a==="string"){if(this.length>0)return v(this[0],a)}else{for(var b=0;b<this.length;b++)v(this[b],a);return this}},attr:function(){if(arguments.length==
1){var a=arguments[0];if(typeof a=="string"){if(this.length>0)return this[0].getAttribute(a)}else for(aname in a)for(var b=0;b<this.length;b++)this[b].setAttribute(aname,a[aname])}else for(b=0;b<this.length;b++)this[b].setAttribute(arguments[0],arguments[1]);return this},removeAttr:function(a){for(var b=0;b<this.length;b++)this[b].removeAttribute(a);return this},hasClass:function(a){return this.length>0?o(this[0],a):false},addClass:function(a){for(var b=0;b<this.length;b++)C(this[b],a);return this},
removeClass:function(a){for(var b=0;b<this.length;b++)D(this[b],a);return this},toggleClass:function(a){for(var b=0;b<this.length;b++)if(o(this[b],a)){var c=RegExp("(^|\\s)"+a+"(\\s|$)");this[b].className=this[b].className.replace(c,"")}else this[b].className+=" "+a;return this},bind:function(a,b){for(var c=0;c<this.length;c++)A(this[c],a,b);return this},unbind:function(a,b){for(var c=0;c<this.length;c++)B(this[c],a,b);return this},blur:function(a){return this.bind("blur",a)},change:function(a){return this.bind("change",
a)},click:function(a){return this.bind("click",a)},dblclick:function(a){return this.bind("dblclick",a)},error:function(a){return this.bind("error",a)},focus:function(a){return this.bind("focus",a)},keydown:function(a){return this.bind("keydown",a)},keypress:function(a){return this.bind("keypress",a)},keyup:function(a){return this.bind("keyup",a)},load:function(a){return this.bind("load",a)},mousedown:function(a){return this.bind("mousedown",a)},mousemove:function(a){return this.bind("mousemove",a)},
mouseout:function(a){return this.bind("mouseout",a)},mouseover:function(a){return this.bind("mouseover",a)},mouseup:function(a){return this.bind("mouseover",a)},resize:function(a){return this.bind("resize",a)},scroll:function(a){return this.bind("scroll",a)},select:function(a){return this.bind("select",a)},submit:function(a){return this.bind("submit",a)},unload:function(a){return this.bind("unload",a)},hover:function(a,b){this.bind("mouseover",a).bind("mouseout",b)}};d.Object={extend:function(a,b){b||
(b={});for(var c in b)a[c]=b[c];return a},hook:function(){d.Object.extend(Object.prototype,{extend:function(a){return d.Object.extend(this,a)}})}};d.String={trim:function(a){return a.replace(/^\s+|\s+$/g,"")},ltrim:function(a){return a.replace(/^\s+/g,"")},rtrim:function(a){return a.replace(/\s+$/g,"")},left:function(a,b){return a.substring(0,b)},right:function(a,b){return a.substring(a.length-b,a.length)},mid:function(a,b,c){return c<0?"":a.substring(b,b+c)},len:function(a){return a.length},lcase:function(a){return a.toLowerCase()},
ucase:function(a){return a.toUpperCase()},hook:function(){d.Object.extend(String.prototype,{trim:function(){return d.String.trim(this)},ltrim:function(){return d.String.ltrim(this)},rtrim:function(){return d.String.rtrim(this)},left:function(a){return d.String.left(this,a)},right:function(a){return d.String.right(this,a)},mid:function(a,b){return d.String.mid(this,a,b)},len:function(){return d.String.len(this)},lcase:function(){return d.String.lcase(this)},ucase:function(){return d.String.ucase(this)}})}};
d.Function={delay:function(a,b){return setTimeout(a,b)},repeat:function(a,b){return setInterval(a,b)},hook:function(){d.Object.extend(Function.prototype,{delay:function(a){return d.Function.delay(this,a)},repeat:function(a){return d.Function.repeat(this,a)}})}};d.ajaxSetting={url:location.href,type:"GET",contentType:"application/x-www-form-urlencoded",dataType:"text"};d.ajax=y;d.post=function(a,b,c,e){return y({type:"post",url:a,data:b,success:c,dataType:e})};d.get=function(a,b,c){return y({type:"get",
url:a,data:b,success:c})};window.$=window.Gnim=d})();