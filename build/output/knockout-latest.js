// Knockout JavaScript library v1.3.0rc
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function(window,undefined){
function l(z){throw z;}var m=void 0,o=true,p=null,q=false;
function B(z){function D(a,c){a&&typeof a=="object"?c=a:(c=c||{},c.read=a||c.read);typeof c.read!="function"&&l("Pass a function that returns the value of the dependentObservable");return c}function C(b,c,d){d&&c!==a.h.q(b)&&a.h.T(b,c);c!==a.h.q(b)&&a.a.ta(b,"change")}var a={b:function(b,c){for(var d=b.split("."),e=typeof z!=="undefined"?z:a,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=c},l:function(a,c,d){a[c]=d}};a.a=new function(){function b(a,b){if(a.tagName!="INPUT"||!a.type)return q;if(b.toLowerCase()!=
"click")return q;var e=a.type.toLowerCase();return e=="checkbox"||e=="radio"}var c=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,d={},e={};d[/Firefox\/2/i.test(navigator.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];d.MouseEvents="click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave".split(",");for(var f in d){var h=d[f];if(h.length)for(var g=0,i=h.length;g<i;g++)e[h[g]]=f}d=function(){for(var a=3,b=document.createElement("div"),e=b.getElementsByTagName("i");b.innerHTML=
"<\!--[if gt IE "+ ++a+"]><i></i><![endif]--\>",e[0];);return a>4?a:m}();return{Ca:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],n:function(a,b){for(var e=0,c=a.length;e<c;e++)b(a[e])},k:function(a,b){if(typeof Array.prototype.indexOf=="function")return Array.prototype.indexOf.call(a,b);for(var e=0,c=a.length;e<c;e++)if(a[e]===b)return e;return-1},Wa:function(a,b,e){for(var c=0,f=a.length;c<f;c++)if(b.call(e,a[c]))return a[c];return p},ca:function(b,e){var c=a.a.k(b,e);c>=0&&b.splice(c,
1)},za:function(b){for(var b=b||[],e=[],c=0,f=b.length;c<f;c++)a.a.k(e,b[c])<0&&e.push(b[c]);return e},ba:function(a,b){for(var a=a||[],e=[],c=0,f=a.length;c<f;c++)e.push(b(a[c]));return e},aa:function(a,b){for(var a=a||[],e=[],c=0,f=a.length;c<f;c++)b(a[c])&&e.push(a[c]);return e},J:function(a,b){for(var e=0,c=b.length;e<c;e++)a.push(b[e]);return a},extend:function(a,b){for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);return a},V:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},pa:function(b,
e){a.a.V(b);e&&a.a.n(e,function(a){b.appendChild(a)})},Ka:function(b,e){var c=b.nodeType?[b]:b;if(c.length>0){for(var f=c[0],d=f.parentNode,h=0,g=e.length;h<g;h++)d.insertBefore(e[h],f);h=0;for(g=c.length;h<g;h++)a.removeNode(c[h])}},Ma:function(a,b){navigator.userAgent.indexOf("MSIE 6")>=0?a.setAttribute("selected",b):a.selected=b},w:function(a){return(a||"").replace(c,"")},Db:function(b,e){for(var c=[],f=(b||"").split(e),d=0,h=f.length;d<h;d++){var g=a.a.w(f[d]);g!==""&&c.push(g)}return c},Cb:function(a,
b){a=a||"";return b.length>a.length?q:a.substring(0,b.length)===b},hb:function(a){for(var b=Array.prototype.slice.call(arguments,1),e="return ("+a+")",c=0;c<b.length;c++)b[c]&&typeof b[c]=="object"&&(e="with(sc["+c+"]) { "+e+" } ");return(new Function("sc",e))(b)},fb:function(a,b){if(b.compareDocumentPosition)return(b.compareDocumentPosition(a)&16)==16;for(;a!=p;){if(a==b)return o;a=a.parentNode}return q},ga:function(b){return a.a.fb(b,document)},s:function(a,e,c){if(typeof jQuery!="undefined"){if(b(a,
e))var f=c,c=function(a,b){var e=this.checked;if(b)this.checked=b.Ya!==o;f.call(this,a);this.checked=e};jQuery(a).bind(e,c)}else typeof a.addEventListener=="function"?a.addEventListener(e,c,q):typeof a.attachEvent!="undefined"?a.attachEvent("on"+e,function(b){c.call(a,b)}):l(Error("Browser doesn't support addEventListener or attachEvent"))},ta:function(a,c){(!a||!a.nodeType)&&l(Error("element must be a DOM node when calling triggerEvent"));if(typeof jQuery!="undefined"){var f=[];b(a,c)&&f.push({Ya:a.checked});
jQuery(a).trigger(c,f)}else if(typeof document.createEvent=="function")typeof a.dispatchEvent=="function"?(f=document.createEvent(e[c]||"HTMLEvents"),f.initEvent(c,o,o,window,0,0,0,0,0,q,q,q,q,0,a),a.dispatchEvent(f)):l(Error("The supplied element doesn't support dispatchEvent"));else if(typeof a.fireEvent!="undefined"){if(c=="click"&&a.tagName=="INPUT"&&(a.type.toLowerCase()=="checkbox"||a.type.toLowerCase()=="radio"))a.checked=a.checked!==o;a.fireEvent("on"+c)}else l(Error("Browser doesn't support triggering events"))},
d:function(b){return a.W(b)?b():b},eb:function(b,e){return a.a.k((b.className||"").split(/\s+/),e)>=0},Qa:function(b,e,c){var f=a.a.eb(b,e);if(c&&!f)b.className=(b.className||"")+" "+e;else if(f&&!c){for(var c=(b.className||"").split(/\s+/),f="",d=0;d<c.length;d++)c[d]!=e&&(f+=c[d]+" ");b.className=a.a.w(f)}},outerHTML:function(a){var b=a.outerHTML;if(typeof b=="string")return b;b=window.document.createElement("div");b.appendChild(a.cloneNode(o));return b.innerHTML},yb:function(b,e){for(var b=a.a.d(b),
e=a.a.d(e),c=[],f=b;f<=e;f++)c.push(f);return c},ka:function(a){for(var b=[],e=0,c=a.length;e<c;e++)b.push(a[e]);return b},ob:d===6,pb:d===7,Da:function(b,e){for(var c=a.a.ka(b.getElementsByTagName("INPUT")).concat(a.a.ka(b.getElementsByTagName("TEXTAREA"))),f=typeof e=="string"?function(a){return a.name===e}:function(a){return e.test(a.name)},d=[],h=c.length-1;h>=0;h--)f(c[h])&&d.push(c[h]);return d},vb:function(b){return typeof b=="string"&&(b=a.a.w(b))?window.JSON&&window.JSON.parse?window.JSON.parse(b):
(new Function("return "+b))():p},ra:function(b){(typeof JSON=="undefined"||typeof JSON.stringify=="undefined")&&l(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"));return JSON.stringify(a.a.d(b))},wb:function(b,e,c){var c=c||{},f=c.params||{},d=c.includeFields||this.Ca,h=b;if(typeof b=="object"&&b.tagName=="FORM")for(var h=b.action,g=d.length-
1;g>=0;g--)for(var i=a.a.Da(b,d[g]),v=i.length-1;v>=0;v--)f[i[v].name]=i[v].value;var e=a.a.d(e),u=document.createElement("FORM");u.style.display="none";u.action=h;u.method="post";for(var y in e)b=document.createElement("INPUT"),b.name=y,b.value=a.a.ra(a.a.d(e[y])),u.appendChild(b);for(y in f)b=document.createElement("INPUT"),b.name=y,b.value=f[y],u.appendChild(b);document.body.appendChild(u);c.submitter?c.submitter(u):u.submit();setTimeout(function(){u.parentNode.removeChild(u)},0)}}};a.b("utils",
a.a);a.b("utils.arrayForEach",a.a.n);a.b("utils.arrayFirst",a.a.Wa);a.b("utils.arrayFilter",a.a.aa);a.b("utils.arrayGetDistinctValues",a.a.za);a.b("utils.arrayIndexOf",a.a.k);a.b("utils.arrayMap",a.a.ba);a.b("utils.arrayPushAll",a.a.J);a.b("utils.arrayRemoveItem",a.a.ca);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Ca);a.b("utils.getFormFields",a.a.Da);a.b("utils.postJson",a.a.wb);a.b("utils.parseJson",a.a.vb);a.b("utils.registerEventHandler",a.a.s);a.b("utils.stringifyJson",
a.a.ra);a.b("utils.range",a.a.yb);a.b("utils.toggleDomNodeCssClass",a.a.Qa);a.b("utils.triggerEvent",a.a.ta);a.b("utils.unwrapObservable",a.a.d);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this,d=Array.prototype.slice.call(arguments),a=d.shift();return function(){return c.apply(a,d.concat(Array.prototype.slice.call(arguments)))}});a.a.e=new function(){var b=0,c="__ko__"+(new Date).getTime(),d={};return{get:function(b,c){var d=a.a.e.getAll(b,q);return d===m?m:d[c]},set:function(b,
c,d){d===m&&a.a.e.getAll(b,q)===m||(a.a.e.getAll(b,o)[c]=d)},getAll:function(a,f){var h=a[c];if(!(h&&h!=="null")){if(!f)return;h=a[c]="ko"+b++;d[h]={}}return d[h]},clear:function(a){var b=a[c];b&&(delete d[b],a[c]=p)}}};a.b("utils.domData",a.a.e);a.b("utils.domData.clear",a.a.e.clear);a.a.z=new function(){function b(b,c){var h=a.a.e.get(b,d);h===m&&c&&(h=[],a.a.e.set(b,d,h));return h}function c(e){var c=b(e,q);if(c)for(var c=c.slice(0),d=0;d<c.length;d++)c[d](e);a.a.e.clear(e);typeof jQuery=="function"&&
typeof jQuery.cleanData=="function"&&jQuery.cleanData([e])}var d="__ko_domNodeDisposal__"+(new Date).getTime();return{wa:function(a,c){typeof c!="function"&&l(Error("Callback must be a function"));b(a,o).push(c)},Ja:function(e,c){var h=b(e,q);h&&(a.a.ca(h,c),h.length==0&&a.a.e.set(e,d,m))},F:function(b){if(!(b.nodeType!=1&&b.nodeType!=9)){c(b);var f=[];a.a.J(f,b.getElementsByTagName("*"));for(var b=0,d=f.length;b<d;b++)c(f[b])}},removeNode:function(b){a.F(b);b.parentNode&&b.parentNode.removeChild(b)}}};
a.F=a.a.z.F;a.removeNode=a.a.z.removeNode;a.b("cleanNode",a.F);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.z);a.b("utils.domNodeDisposal.addDisposeCallback",a.a.z.wa);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.z.Ja);(function(){a.a.na=function(b){var c;if(typeof jQuery!="undefined")c=jQuery.clean([b]);else{var d=a.a.w(b).toLowerCase();c=document.createElement("div");d=d.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!d.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||
(!d.indexOf("<td")||!d.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];b="ignored<div>"+d[1]+b+d[2]+"</div>";for(typeof window.innerShiv=="function"?c.appendChild(window.innerShiv(b)):c.innerHTML=b;d[0]--;)c=c.lastChild;c=a.a.ka(c.lastChild.childNodes)}return c};a.a.Z=function(b,c){a.a.V(b);if(c!==p&&c!==m)if(typeof c!="string"&&(c=c.toString()),typeof jQuery!="undefined")jQuery(b).html(c);else for(var d=a.a.na(c),e=0;e<d.length;e++)b.appendChild(d[e])}})();a.b("utils.parseHtmlFragment",
a.a.na);a.b("utils.setHtml",a.a.Z);a.r=function(){function b(){return((1+Math.random())*4294967296|0).toString(16).substring(1)}function c(b,f){if(b)if(b.nodeType==8){var d=a.r.Ha(b.nodeValue);d!=p&&f.push({cb:b,tb:d})}else if(b.nodeType==1)for(var d=0,g=b.childNodes,i=g.length;d<i;d++)c(g[d],f)}var d={};return{la:function(a){typeof a!="function"&&l(Error("You can only pass a function to ko.memoization.memoize()"));var c=b()+b();d[c]=a;return"<\!--[ko_memo:"+c+"]--\>"},Ra:function(a,b){var c=d[a];
c===m&&l(Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized."));try{return c.apply(p,b||[]),o}finally{delete d[a]}},Sa:function(b,d){var h=[];c(b,h);for(var g=0,i=h.length;g<i;g++){var j=h[g].cb,k=[j];d&&a.a.J(k,d);a.r.Ra(h[g].tb,k);j.nodeValue="";j.parentNode&&j.parentNode.removeChild(j)}},Ha:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:p}}}();a.b("memoization",a.r);a.b("memoization.memoize",a.r.la);a.b("memoization.unmemoize",a.r.Ra);a.b("memoization.parseMemoText",
a.r.Ha);a.b("memoization.unmemoizeDomNodeAndDescendants",a.r.Sa);a.Ba={throttle:function(b,c){b.throttleEvaluation=c;var d=p;return a.i({read:b,write:function(a){clearTimeout(d);d=setTimeout(function(){b(a)},c)}})}};a.b("extenders",a.Ba);a.Oa=function(b,c){this.da=b;this.bb=c;a.l(this,"dispose",this.v)};a.Oa.prototype.v=function(){this.nb=o;this.bb()};a.S=function(){this.u={};a.a.extend(this,a.S.fn);a.l(this,"subscribe",this.sa);a.l(this,"extend",this.extend);a.l(this,"notifySubscribers",this.N);
a.l(this,"getSubscriptionsCount",this.kb)};a.S.fn={sa:function(b,c,d){var d=d||"change",b=c?b.bind(c):b,e=new a.Oa(b,function(){a.a.ca(this.u[d],e)}.bind(this));this.u[d]||(this.u[d]=[]);this.u[d].push(e);return e},N:function(b,c){c=c||"change";this.u[c]&&a.a.n(this.u[c].slice(0),function(a){a&&a.nb!==o&&a.da(b)})},kb:function(){var a=0,c;for(c in this.u)this.u.hasOwnProperty(c)&&(a+=this.u[c].length);return a},extend:function(b){var c=this;if(b)for(var d in b){var e=a.Ba[d];typeof e=="function"&&
(c=e(c,b[d]))}return c}};a.Fa=function(a){return typeof a.sa=="function"&&typeof a.N=="function"};a.b("subscribable",a.S);a.b("isSubscribable",a.Fa);a.U=function(){var b=[];return{Xa:function(a){b.push({da:a,Aa:[]})},end:function(){b.pop()},Ia:function(c){a.Fa(c)||l("Only subscribable things can act as dependencies");if(b.length>0){var d=b[b.length-1];a.a.k(d.Aa,c)>=0||(d.Aa.push(c),d.da(c))}}}}();var E={undefined:o,"boolean":o,number:o,string:o};a.A=function(b){function c(){if(arguments.length>0){if(!c.equalityComparer||
!c.equalityComparer(d,arguments[0]))c.H(),d=arguments[0],c.G();return this}else return a.U.Ia(c),d}var d=b;a.S.call(c);c.G=function(){c.N(d)};c.H=function(){c.N(d,"beforeChange")};a.a.extend(c,a.A.fn);a.l(c,"valueHasMutated",c.G);a.l(c,"valueWillMutate",c.H);return c};a.A.fn={B:a.A,equalityComparer:function(a,c){return a===p||typeof a in E?a===c:q}};a.W=function(b){return b===p||b===m||b.B===m?q:b.B===a.A?o:a.W(b.B)};a.Q=function(b){return typeof b=="function"&&b.B===a.A?o:typeof b=="function"&&b.B===
a.i&&b.lb?o:q};a.b("observable",a.A);a.b("isObservable",a.W);a.b("isWriteableObservable",a.Q);a.R=function(b){arguments.length==0&&(b=[]);b!==p&&b!==m&&!("length"in b)&&l(Error("The argument passed when initializing an observable array must be an array, or null, or undefined."));var c=new a.A(b);a.a.extend(c,a.R.fn);a.l(c,"remove",c.remove);a.l(c,"removeAll",c.zb);a.l(c,"destroy",c.fa);a.l(c,"destroyAll",c.ab);a.l(c,"indexOf",c.indexOf);a.l(c,"replace",c.replace);return c};a.R.fn={remove:function(a){for(var c=
this(),d=[],e=typeof a=="function"?a:function(c){return c===a},f=0;f<c.length;f++){var h=c[f];e(h)&&(d.length===0&&this.H(),d.push(h),c.splice(f,1),f--)}d.length&&this.G();return d},zb:function(b){if(b===m){var c=this(),d=c.slice(0);this.H();c.splice(0,c.length);this.G();return d}return!b?[]:this.remove(function(c){return a.a.k(b,c)>=0})},fa:function(a){var c=this(),d=typeof a=="function"?a:function(c){return c===a};this.H();for(var e=c.length-1;e>=0;e--)d(c[e])&&(c[e]._destroy=o);this.G()},ab:function(b){return b===
m?this.fa(function(){return o}):!b?[]:this.fa(function(c){return a.a.k(b,c)>=0})},indexOf:function(b){var c=this();return a.a.k(c,b)},replace:function(a,c){var d=this.indexOf(a);d>=0&&(this.H(),this()[d]=c,this.G())}};a.a.n("pop,push,reverse,shift,sort,splice,unshift".split(","),function(b){a.R.fn[b]=function(){var a=this();this.H();a=a[b].apply(a,arguments);this.G();return a}});a.a.n(["slice"],function(b){a.R.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.b("observableArray",a.R);
a.i=function(b,c,d){function e(){a.a.n(s,function(a){a.v()});s=[]}function f(){var a=g.throttleEvaluation;a&&a>=0?(clearTimeout(w),w=setTimeout(h,a)):h()}function h(){if(j&&typeof d.disposeWhen=="function"&&d.disposeWhen())g.v();else{try{e();a.U.Xa(function(a){s.push(a.sa(f))});var b=d.read.call(d.owner||c);g.N(i,"beforeChange");i=b}finally{a.U.end()}g.N(i);j=o}}function g(){if(arguments.length>0)typeof d.write==="function"?d.write.apply(d.owner||c,arguments):l("Cannot write a value to a dependentObservable unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
else return j||h(),a.U.Ia(g),i}var i,j=q,d=D(b,d),k=typeof d.disposeWhenNodeIsRemoved=="object"?d.disposeWhenNodeIsRemoved:p,n=p;if(k){n=function(){g.v()};a.a.z.wa(k,n);var t=d.disposeWhen;d.disposeWhen=function(){return!a.a.ga(k)||typeof t=="function"&&t()}}var s=[],w=p;g.jb=function(){return s.length};g.lb=typeof d.write==="function";g.v=function(){k&&a.a.z.Ja(k,n);e()};a.S.call(g);a.a.extend(g,a.i.fn);d.deferEvaluation!==o&&h();a.l(g,"dispose",g.v);a.l(g,"getDependenciesCount",g.jb);return g};
a.i.fn={B:a.i};a.i.B=a.A;a.b("dependentObservable",a.i);a.b("computed",a.i);(function(){function b(a,f,h){h=h||new d;a=f(a);if(!(typeof a=="object"&&a!==p&&a!==m&&!(a instanceof Date)))return a;var g=a instanceof Array?[]:{};h.save(a,g);c(a,function(c){var d=f(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":g[c]=d;break;case "object":case "undefined":var k=h.get(d);g[c]=k!==m?k:b(d,f,h)}});return g}function c(a,b){if(a instanceof Array)for(var c=0;c<a.length;c++)b(c);
else for(c in a)b(c)}function d(){var b=[],c=[];this.save=function(d,g){var i=a.a.k(b,d);i>=0?c[i]=g:(b.push(d),c.push(g))};this.get=function(d){d=a.a.k(b,d);return d>=0?c[d]:m}}a.Pa=function(c){arguments.length==0&&l(Error("When calling ko.toJS, pass the object you want to convert."));return b(c,function(b){for(var c=0;a.W(b)&&c<10;c++)b=b();return b})};a.toJSON=function(b){b=a.Pa(b);return a.a.ra(b)}})();a.b("toJS",a.Pa);a.b("toJSON",a.toJSON);(function(){a.h={q:function(b){return b.tagName=="OPTION"?
b.__ko__hasDomDataOptionValue__===o?a.a.e.get(b,a.c.options.ma):b.getAttribute("value"):b.tagName=="SELECT"?b.selectedIndex>=0?a.h.q(b.options[b.selectedIndex]):m:b.value},T:function(b,c){if(b.tagName=="OPTION")switch(typeof c){case "string":case "number":a.a.e.set(b,a.c.options.ma,m);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.e.set(b,a.c.options.ma,c),b.__ko__hasDomDataOptionValue__=o,b.value=""}else if(b.tagName=="SELECT")for(var d=b.options.length-
1;d>=0;d--){if(a.h.q(b.options[d])==c){b.selectedIndex=d;break}}else{if(c===p||c===m)c="";b.value=c}}}})();a.b("selectExtensions",a.h);a.b("selectExtensions.readValue",a.h.q);a.b("selectExtensions.writeValue",a.h.T);a.j=function(){function b(a,b){for(var e=p;a!=e;)e=a,a=a.replace(c,function(a,c){return b[c]});return a}var c=/\@ko_token_(\d+)\@/g,d=/^[\_$a-z][\_$a-z0-9]*(\[.*?\])*(\.[\_$a-z][\_$a-z0-9]*(\[.*?\])*)*$/i,e=["true","false"];return{D:[],Y:function(c){var e=a.a.w(c);if(e.length<3)return[];
e.charAt(0)==="{"&&(e=e.substring(1,e.length-1));for(var c=[],d=p,i,j=0;j<e.length;j++){var k=e.charAt(j);if(d===p)switch(k){case '"':case "'":case "/":d=j,i=k}else if(k==i&&e.charAt(j-1)!=="\\"){k=e.substring(d,j+1);c.push(k);var n="@ko_token_"+(c.length-1)+"@",e=e.substring(0,d)+n+e.substring(j+1);j-=k.length-n.length;d=p}}i=d=p;for(var t=0,s=p,j=0;j<e.length;j++){k=e.charAt(j);if(d===p)switch(k){case "{":d=j;s=k;i="}";break;case "(":d=j;s=k;i=")";break;case "[":d=j,s=k,i="]"}k===s?t++:k===i&&(t--,
t===0&&(k=e.substring(d,j+1),c.push(k),n="@ko_token_"+(c.length-1)+"@",e=e.substring(0,d)+n+e.substring(j+1),j-=k.length-n.length,d=p))}i=[];e=e.split(",");d=0;for(j=e.length;d<j;d++)t=e[d],s=t.indexOf(":"),s>0&&s<t.length-1?(k=t.substring(s+1),i.push({key:b(t.substring(0,s),c),value:b(k,c)})):i.push({unknown:b(t,c)});return i},ia:function(b){for(var c=typeof b==="string"?a.j.Y(b):b,g=[],b=[],i,j=0;i=c[j];j++)if(g.length>0&&g.push(","),i.key){var k;a:{k=i.key;var n=a.a.w(k);switch(n.length&&n.charAt(0)){case "'":case '"':break a;
default:k="'"+n+"'"}}i=i.value;g.push(k);g.push(":");g.push(i);n=a.a.w(i);if(a.a.k(e,a.a.w(n).toLowerCase())>=0?0:n.match(d)!==p)b.length>0&&b.push(", "),b.push(k+" : function(__ko_value) { "+i+" = __ko_value; }")}else i.unknown&&g.push(i.unknown);c=g.join("");b.length>0&&(c=c+", '_ko_property_writers' : { "+b.join("")+" } ");return c},rb:function(b,c){for(var e=0;e<b.length;e++)if(a.a.w(b[e].key)==c)return o;return q}}}();a.b("jsonExpressionRewriting",a.j);a.b("jsonExpressionRewriting.bindingRewriteValidators",
a.j.D);a.b("jsonExpressionRewriting.parseObjectLiteral",a.j.Y);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.j.ia);(function(){function b(a){return a.nodeType==8&&(f?a.text:a.nodeValue).match(h)}function c(a){return a.nodeType==8&&(f?a.text:a.nodeValue).match(g)}function d(a,e){for(var d=a,f=1,h=[];d=d.nextSibling;){if(c(d)&&(f--,f===0))return h;h.push(d);b(d)&&f++}e||l(Error("Cannot find closing comment tag to match: "+a.nodeValue));return p}function e(a,b){var c=d(a,b);return c?
c.length>0?c[c.length-1].nextSibling:a.nextSibling:p}var f=document.createComment("test").text==="<\!--test--\>",h=f?/^<\!--\s*ko\s+(.*\:.*)\s*--\>$/:/^\s*ko\s+(.*\:.*)\s*$/,g=f?/^<\!--\s*\/ko\s*--\>$/:/^\s*\/ko\s*$/,i={ul:o,ol:o};a.f={C:{},childNodes:function(a){return b(a)?d(a):a.childNodes},ha:function(c){if(b(c))for(var c=a.f.childNodes(c),e=0,d=c.length;e<d;e++)a.removeNode(c[e]);else a.a.V(c)},pa:function(c,e){if(b(c)){a.f.ha(c);for(var d=c.nextSibling,f=0,h=e.length;f<h;f++)d.parentNode.insertBefore(e[f],
d)}else a.a.pa(c,e)},xb:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},mb:function(a,c,e){b(a)?a.parentNode.insertBefore(c,e.nextSibling):e.nextSibling?a.insertBefore(c,e.nextSibling):a.appendChild(c)},nextSibling:function(a){return b(a)?e(a).nextSibling:a.nextSibling&&c(a.nextSibling)?m:a.nextSibling},ua:function(a){return(a=b(a))?a[1]:p},ib:function(b){if(a.f.ua(b)){var c;c=a.f.childNodes(b);for(var e=[],d=0,f=c.length;d<
f;d++)a.a.z.F(c[d]),e.push(a.a.outerHTML(c[d]));c=String.prototype.concat.apply("",e);a.f.ha(b);(new a.m.I(b)).text(c)}},Ga:function(a){if(i[a.tagName.toLowerCase()]){var d=a.firstChild;if(d){do if(d.nodeType===1){var f;f=d.firstChild;var h=p;if(f){do if(h)h.push(f);else if(b(f)){var g=e(f,o);g?f=g:h=[f]}else c(f)&&(h=[f]);while(f=f.nextSibling)}if(f=h){h=d.nextSibling;for(g=0;g<f.length;g++)h?a.insertBefore(f[g],h):a.appendChild(f[g])}}while(d=d.nextSibling)}}}}})();(function(){a.L=function(){};
a.a.extend(a.L.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind")!=p;case 8:return a.f.ua(b)!=p;default:return q}},getBindings:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c):p},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.f.ua(b);default:return p}},parseBindingsString:function(b,c){try{var d=c.$data,e=" { "+a.j.ia(b)+" } ";return a.a.hb(e,d===p?window:
d,c)}catch(f){l(Error("Unable to parse bindings.\nMessage: "+f+";\nBindings value: "+b))}}});a.L.instance=new a.L})();a.b("bindingProvider",a.L);(function(){function b(b,d){for(var h,g=d.childNodes[0];h=g;)g=a.f.nextSibling(h),c(b,h,q)}function c(c,f,h){var g=o,i=f.nodeType==1;i&&a.f.Ga(f);if(i&&h||a.L.instance.nodeHasBindings(f))g=d(f,p,c,h).Bb;i&&g&&b(c,f)}function d(b,c,d,g){function i(a){return function(){return n[a]}}function j(){return n}var k=0;a.f.ib(b);var n,t;new a.i(function(){var s=d&&
d instanceof a.K?d:new a.K(a.a.d(d)),w=s.$data;g&&a.Na(b,s);if(n=(typeof c=="function"?c():c)||a.L.instance.getBindings(b,s)){if(k===0){k=1;for(var r in n){var x=a.c[r];x&&b.nodeType===8&&!a.f.C[r]&&l(Error("The binding '"+r+"' cannot be used with virtual elements"));if(x&&typeof x.init=="function"&&(x=(0,x.init)(b,i(r),j,w,s))&&x.controlsDescendantBindings)t!==m&&l(Error("Multiple bindings ("+t+" and "+r+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")),
t=r}k=2}if(k===2)for(r in n)(x=a.c[r])&&typeof x.update=="function"&&(0,x.update)(b,i(r),j,w,s)}},p,{disposeWhenNodeIsRemoved:b});return{Bb:t===m}}a.c={};a.K=function(a,b){this.$data=a;b?(this.$parent=b.$data,this.$parents=(b.$parents||[]).slice(0),this.$parents.unshift(this.$parent),this.$root=b.$root):(this.$parents=[],this.$root=a)};a.K.prototype.createChildContext=function(b){return new a.K(b,this)};a.Na=function(b,c){if(arguments.length==2)a.a.e.set(b,"__ko_bindingContext__",c);else return a.a.e.get(b,
"__ko_bindingContext__")};a.ya=function(b,c,h){b.nodeType===1&&a.f.Ga(b);return d(b,c,h,o)};a.Ta=function(a,c){c.nodeType===1&&b(a,c)};a.xa=function(a,b){b&&b.nodeType!==1&&b.nodeType!==8&&l(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node"));b=b||window.document.body;c(a,b,o)};a.ea=function(b){switch(b.nodeType){case 1:case 8:var c=a.Na(b);if(c)return c;if(b.parentNode)return a.ea(b.parentNode)}};a.$a=function(b){return(b=a.ea(b))?b.$data:
m};a.b("bindingHandlers",a.c);a.b("applyBindings",a.xa);a.b("applyBindingsToDescendants",a.Ta);a.b("applyBindingsToNode",a.ya);a.b("contextFor",a.ea);a.b("dataFor",a.$a)})();a.a.n(["click"],function(b){a.c[b]={init:function(c,d,e,f){return a.c.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,f)}}});a.c.event={init:function(b,c,d,e){var f=c()||{},h;for(h in f)(function(){var f=h;typeof f=="string"&&a.a.s(b,f,function(a){var b,h=c()[f];if(h){var n=d();try{b=h.apply(e,arguments)}finally{if(b!==
o)a.preventDefault?a.preventDefault():a.returnValue=q}if(n[f+"Bubble"]===q)a.cancelBubble=o,a.stopPropagation&&a.stopPropagation()}})})()}};a.c.submit={init:function(b,c,d,e){typeof c()!="function"&&l(Error("The value for a submit binding must be a function to invoke on submit"));a.a.s(b,"submit",function(a){var d,g=c();try{d=g.call(e,b)}finally{if(d!==o)a.preventDefault?a.preventDefault():a.returnValue=q}})}};a.c.visible={update:function(b,c){var d=a.a.d(c()),e=b.style.display!="none";if(d&&!e)b.style.display=
"";else if(!d&&e)b.style.display="none"}};a.c.enable={update:function(b,c){var d=a.a.d(c());if(d&&b.disabled)b.removeAttribute("disabled");else if(!d&&!b.disabled)b.disabled=o}};a.c.disable={update:function(b,c){a.c.enable.update(b,function(){return!a.a.d(c())})}};a.c.value={init:function(b,c,d){var e=["change"],f=d().valueUpdate;f&&(typeof f=="string"&&(f=[f]),a.a.J(e,f),e=a.a.za(e));a.a.n(e,function(e){var f=q;a.a.Cb(e,"after")&&(f=o,e=e.substring(5));var i=f?function(a){setTimeout(a,0)}:function(a){a()};
a.a.s(b,e,function(){i(function(){var e=c(),f=a.h.q(b);a.Q(e)?e(f):(e=d(),e._ko_property_writers&&e._ko_property_writers.value&&e._ko_property_writers.value(f))})})})},update:function(b,c){var d=a.a.d(c()),e=a.h.q(b),f=d!=e;d===0&&e!==0&&e!=="0"&&(f=o);f&&(e=function(){a.h.T(b,d)},e(),b.tagName=="SELECT"&&setTimeout(e,0));b.tagName=="SELECT"&&b.length>0&&C(b,d,q)}};a.c.options={update:function(b,c,d){b.tagName!="SELECT"&&l(Error("options binding applies only to SELECT elements"));for(var e=b.length==
0,f=a.a.ba(a.a.aa(b.childNodes,function(a){return a.tagName&&a.tagName=="OPTION"&&a.selected}),function(b){return a.h.q(b)||b.innerText||b.textContent}),h=b.scrollTop,g=a.a.d(c());b.length>0;)a.F(b.options[0]),b.remove(0);if(g){d=d();typeof g.length!="number"&&(g=[g]);if(d.optionsCaption){var i=document.createElement("OPTION");a.a.Z(i,d.optionsCaption);a.h.T(i,m);b.appendChild(i)}for(var c=0,j=g.length;c<j;c++){var i=document.createElement("OPTION"),k=typeof d.optionsValue=="string"?g[c][d.optionsValue]:
g[c],k=a.a.d(k);a.h.T(i,k);var n=d.optionsText,k=typeof n=="function"?n(g[c]):typeof n=="string"?g[c][n]:k;if(k===p||k===m)k="";k=a.a.d(k).toString();typeof i.innerText=="string"?i.innerText=k:i.textContent=k;b.appendChild(i)}g=b.getElementsByTagName("OPTION");c=i=0;for(j=g.length;c<j;c++)a.a.k(f,a.h.q(g[c]))>=0&&(a.a.Ma(g[c],o),i++);if(h)b.scrollTop=h;e&&"value"in d&&C(b,a.a.d(d.value),o)}}};a.c.options.ma="__ko.bindingHandlers.options.optionValueDomData__";a.c.selectedOptions={Ea:function(b){for(var c=
[],b=b.childNodes,d=0,e=b.length;d<e;d++){var f=b[d];f.tagName=="OPTION"&&f.selected&&c.push(a.h.q(f))}return c},init:function(b,c,d){a.a.s(b,"change",function(){var b=c();a.Q(b)?b(a.c.selectedOptions.Ea(this)):(b=d(),b._ko_property_writers&&b._ko_property_writers.value&&b._ko_property_writers.value(a.c.selectedOptions.Ea(this)))})},update:function(b,c){b.tagName!="SELECT"&&l(Error("values binding applies only to SELECT elements"));var d=a.a.d(c());if(d&&typeof d.length=="number")for(var e=b.childNodes,
f=0,h=e.length;f<h;f++){var g=e[f];g.tagName=="OPTION"&&a.a.Ma(g,a.a.k(d,a.h.q(g))>=0)}}};a.c.text={update:function(b,c){var d=a.a.d(c());if(d===p||d===m)d="";typeof b.innerText=="string"?b.innerText=d:b.textContent=d}};a.c.html={init:function(){return{controlsDescendantBindings:o}},update:function(b,c){var d=a.a.d(c());a.a.Z(b,d)}};a.c.css={update:function(b,c){var d=a.a.d(c()||{}),e;for(e in d)if(typeof e=="string"){var f=a.a.d(d[e]);a.a.Qa(b,e,f)}}};a.c.style={update:function(b,c){var d=a.a.d(c()||
{}),e;for(e in d)if(typeof e=="string"){var f=a.a.d(d[e]);b.style[e]=f||""}}};a.c.uniqueName={init:function(b,c){if(c())b.name="ko_unique_"+ ++a.c.uniqueName.Za,(a.a.ob||a.a.pb)&&b.mergeAttributes(document.createElement("<input name='"+b.name+"'/>"),q)}};a.c.uniqueName.Za=0;a.c.checked={init:function(b,c,d){a.a.s(b,"click",function(){var e;if(b.type=="checkbox")e=b.checked;else if(b.type=="radio"&&b.checked)e=b.value;else return;var f=c();b.type=="checkbox"&&a.a.d(f)instanceof Array?(e=a.a.k(a.a.d(f),
b.value),b.checked&&e<0?f.push(b.value):!b.checked&&e>=0&&f.splice(e,1)):a.Q(f)?f()!==e&&f(e):(f=d(),f._ko_property_writers&&f._ko_property_writers.checked&&f._ko_property_writers.checked(e))});b.type=="radio"&&!b.name&&a.c.uniqueName.init(b,function(){return o})},update:function(b,c){var d=a.a.d(c());if(b.type=="checkbox")b.checked=d instanceof Array?a.a.k(d,b.value)>=0:d;else if(b.type=="radio")b.checked=b.value==d}};a.c.attr={update:function(b,c){var d=a.a.d(c())||{},e;for(e in d)if(typeof e==
"string"){var f=a.a.d(d[e]);f===q||f===p||f===m?b.removeAttribute(e):b.setAttribute(e,f.toString())}}};a.c.hasfocus={init:function(b,c,d){function e(b){var e=c();b!=a.a.d(e)&&(a.Q(e)?e(b):(e=d(),e._ko_property_writers&&e._ko_property_writers.hasfocus&&e._ko_property_writers.hasfocus(b)))}a.a.s(b,"focus",function(){e(o)});a.a.s(b,"focusin",function(){e(o)});a.a.s(b,"blur",function(){e(q)});a.a.s(b,"focusout",function(){e(q)})},update:function(b,c){var d=a.a.d(c());d?b.focus():b.blur();a.a.ta(b,d?"focusin":
"focusout")}};a.c["with"]={o:function(b){return function(){var c=b();return{"if":c,data:c,templateEngine:a.p.M}}},init:function(b,c){return a.c.template.init(b,a.c["with"].o(c))},update:function(b,c,d,e,f){return a.c.template.update(b,a.c["with"].o(c),d,e,f)}};a.j.D["with"]=q;a.f.C["with"]=o;a.c["if"]={o:function(b){return function(){return{"if":b(),templateEngine:a.p.M}}},init:function(b,c){return a.c.template.init(b,a.c["if"].o(c))},update:function(b,c,d,e,f){return a.c.template.update(b,a.c["if"].o(c),
d,e,f)}};a.j.D["if"]=q;a.f.C["if"]=o;a.c.ifnot={o:function(b){return function(){return{ifnot:b(),templateEngine:a.p.M}}},init:function(b,c){return a.c.template.init(b,a.c.ifnot.o(c))},update:function(b,c,d,e,f){return a.c.template.update(b,a.c.ifnot.o(c),d,e,f)}};a.j.D.ifnot=q;a.f.C.ifnot=o;a.c.foreach={o:function(b){return function(){var c=a.a.d(b());return!c||typeof c.length=="number"?{foreach:c,templateEngine:a.p.M}:{foreach:c.data,includeDestroyed:c.includeDestroyed,afterAdd:c.afterAdd,beforeRemove:c.beforeRemove,
afterRender:c.afterRender,templateEngine:a.p.M}}},init:function(b,c){return a.c.template.init(b,a.c.foreach.o(c))},update:function(b,c,d,e,f){return a.c.template.update(b,a.c.foreach.o(c),d,e,f)}};a.j.D.foreach=q;a.f.C.foreach=o;a.b("allowedVirtualElementBindings",a.f.C);a.t=function(){};a.t.prototype.renderTemplateSource=function(){l("Override renderTemplateSource in your ko.templateEngine subclass")};a.t.prototype.createJavaScriptEvaluatorBlock=function(){l("Override createJavaScriptEvaluatorBlock in your ko.templateEngine subclass")};
a.t.prototype.makeTemplateSource=function(b){if(typeof b=="string"){var c=document.getElementById(b);c||l(Error("Cannot find template with ID "+b));return new a.m.g(c)}else if(b.nodeType==1||b.nodeType==8)return new a.m.I(b);else l(Error("Unrecognised template type: "+b))};a.t.prototype.renderTemplate=function(a,c,d){return this.renderTemplateSource(this.makeTemplateSource(a),c,d)};a.t.prototype.isTemplateRewritten=function(a){return this.allowTemplateRewriting===q?o:this.X&&this.X[a]?o:this.makeTemplateSource(a).data("isRewritten")};
a.t.prototype.rewriteTemplate=function(a,c){var d=this.makeTemplateSource(a),e=c(d.text());d.text(e);d.data("isRewritten",o);if(typeof a=="string")this.X=this.X||{},this.X[a]=o};a.b("templateEngine",a.t);a.$=function(){function b(b,c,d){for(var b=a.j.Y(b),g=a.j.D,i=0;i<b.length;i++){var j=b[i].key;if(g.hasOwnProperty(j)){var k=g[j];typeof k==="function"?(j=k(b[i].value))&&l(Error(j)):k||l(Error("This template engine does not support the '"+j+"' binding within its templates"))}}b="ko.templateRewriting.applyMemoizedBindingsToNextSibling(function() {             return (function() { return { "+
a.j.ia(b)+" } })()         })";return d.createJavaScriptEvaluatorBlock(b)+c}var c=/(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi,d=/<\!--\s*ko\b\s*([\s\S]*?)\s*--\>/g;return{gb:function(b,c){c.isTemplateRewritten(b)||c.rewriteTemplate(b,function(b){return a.$.ub(b,c)})},ub:function(a,f){return a.replace(c,function(a,c,d,e,k,n,t){return b(t,c,f)}).replace(d,function(a,c){return b(c,"<\!-- ko --\>",f)})},Ua:function(b){return a.r.la(function(c,
d){c.nextSibling&&a.ya(c.nextSibling,b,d)})}}}();a.b("templateRewriting",a.$);a.b("templateRewriting.applyMemoizedBindingsToNextSibling",a.$.Ua);(function(){a.m={};a.m.g=function(a){this.g=a};a.m.g.prototype.text=function(){if(arguments.length==0)return this.g.tagName.toLowerCase()=="script"?this.g.text:this.g.innerHTML;else{var b=arguments[0];this.g.tagName.toLowerCase()=="script"?this.g.text=b:a.a.Z(this.g,b)}};a.m.g.prototype.data=function(b){if(arguments.length===1)return a.a.e.get(this.g,"templateSourceData_"+
b);else a.a.e.set(this.g,"templateSourceData_"+b,arguments[1])};a.m.I=function(a){this.g=a};a.m.I.prototype=new a.m.g;a.m.I.prototype.text=function(){if(arguments.length==0)return a.a.e.get(this.g,"__ko_anon_template__");else a.a.e.set(this.g,"__ko_anon_template__",arguments[0])};a.b("templateSources",a.m);a.b("templateSources.domElement",a.m.g);a.b("templateSources.anonymousTemplate",a.m.I)})();(function(){function b(a,b,c){for(var d=0;node=a[d];d++)node.parentNode===b&&(node.nodeType===1||node.nodeType===
8)&&c(node)}function c(b,c,h,g,i){var i=i||{},j=i.templateEngine||d;a.$.gb(h,j);h=j.renderTemplate(h,g,i);(typeof h.length!="number"||h.length>0&&typeof h[0].nodeType!="number")&&l("Template engine must return an array of DOM nodes");j=q;switch(c){case "replaceChildren":a.f.pa(b,h);j=o;break;case "replaceNode":a.a.Ka(b,h);j=o;break;case "ignoreTargetNode":break;default:l(Error("Unknown renderMode: "+c))}j&&(a.va(h,g),i.afterRender&&i.afterRender(h,g.$data));return h}var d;a.qa=function(b){b!=m&&!(b instanceof
a.t)&&l("templateEngine must inherit from ko.templateEngine");d=b};a.va=function(c,d){var h=a.a.J([],c),g=c.length>0?c[0].parentNode:p;b(h,g,function(b){a.xa(d,b)});b(h,g,function(b){a.r.Sa(b,[d])})};a.oa=function(b,f,h,g,i){h=h||{};(h.templateEngine||d)==m&&l("Set a template engine before calling renderTemplate");i=i||"replaceChildren";if(g){var j=g.nodeType?g:g.length>0?g[0]:p;return new a.i(function(){var d=f&&f instanceof a.K?f:new a.K(a.a.d(f)),n=typeof b=="function"?b(d.$data):b,d=c(g,i,n,d,
h);i=="replaceNode"&&(g=d,j=g.nodeType?g:g.length>0?g[0]:p)},p,{disposeWhen:function(){return!j||!a.a.ga(j)},disposeWhenNodeIsRemoved:j&&i=="replaceNode"?j.parentNode:j})}else return a.r.la(function(c){a.oa(b,f,h,c,"replaceNode")})};a.Ab=function(b,d,h,g,i){function j(b,c){var d=k(b);a.va(c,d);h.afterRender&&h.afterRender(c,d.$data)}function k(b){return i.createChildContext(a.a.d(b))}return new a.i(function(){var i=a.a.d(d)||[];typeof i.length=="undefined"&&(i=[i]);i=a.a.aa(i,function(b){return h.includeDestroyed||
b===m||b===p||!a.a.d(b._destroy)});a.a.La(g,i,function(a){var d=typeof b=="function"?b(a):b;return c(p,"ignoreTargetNode",d,k(a),h)},h,j)},p,{disposeWhenNodeIsRemoved:g})};a.c.template={init:function(b,c){var d=a.a.d(c());typeof d!="string"&&!d.name&&b.nodeType==1&&((new a.m.I(b)).text(b.innerHTML),a.a.V(b));return{controlsDescendantBindings:o}},update:function(b,c,d,g,i){c=a.a.d(c());g=o;typeof c=="string"?d=c:(d=c.name,"if"in c&&(g=g&&a.a.d(c["if"])),"ifnot"in c&&(g=g&&!a.a.d(c.ifnot)));var j=p;
typeof c.foreach!="undefined"?j=a.Ab(d||b,g&&c.foreach||[],c,b,i):g?(i=typeof c=="object"&&"data"in c?i.createChildContext(a.a.d(c.data)):i,j=a.oa(d||b,i,c,b)):a.f.ha(b);i=j;(c=a.a.e.get(b,"__ko__templateSubscriptionDomDataKey__"))&&typeof c.v=="function"&&c.v();a.a.e.set(b,"__ko__templateSubscriptionDomDataKey__",i)}};a.j.D.template=function(b){b=a.j.Y(b);return b.length==1&&b[0].unknown?p:a.j.rb(b,"name")?p:"This template engine does not support anonymous templates nested within its templates"};
a.f.C.template=o})();a.b("setTemplateEngine",a.qa);a.b("renderTemplate",a.oa);(function(){a.a.O=function(b,c,d){if(d===m)return a.a.O(b,c,1)||a.a.O(b,c,10)||a.a.O(b,c,Number.MAX_VALUE);else{for(var b=b||[],c=c||[],e=b,f=c,h=[],g=0;g<=f.length;g++)h[g]=[];for(var g=0,i=Math.min(e.length,d);g<=i;g++)h[0][g]=g;g=1;for(i=Math.min(f.length,d);g<=i;g++)h[g][0]=g;for(var i=e.length,j,k=f.length,g=1;g<=i;g++){j=Math.max(1,g-d);for(var n=Math.min(k,g+d);j<=n;j++)h[j][g]=e[g-1]===f[j-1]?h[j-1][g-1]:Math.min(h[j-
1][g]===m?Number.MAX_VALUE:h[j-1][g]+1,h[j][g-1]===m?Number.MAX_VALUE:h[j][g-1]+1)}d=b.length;e=c.length;f=[];g=h[e][d];if(g===m)h=p;else{for(;d>0||e>0;){i=h[e][d];k=e>0?h[e-1][d]:g+1;n=d>0?h[e][d-1]:g+1;j=e>0&&d>0?h[e-1][d-1]:g+1;if(k===m||k<i-1)k=g+1;if(n===m||n<i-1)n=g+1;j<i-1&&(j=g+1);k<=n&&k<j?(f.push({status:"added",value:c[e-1]}),e--):(n<k&&n<j?f.push({status:"deleted",value:b[d-1]}):(f.push({status:"retained",value:b[d-1]}),e--),d--)}h=f.reverse()}return h}}})();a.b("utils.compareArrays",
a.a.O);(function(){function b(a){if(a.length>2){for(var b=a[0],c=a[a.length-1],h=[b];b!==c;){b=b.nextSibling;if(!b)return;h.push(b)}Array.prototype.splice.apply(a,[0,a.length].concat(h))}}function c(c,e,f,h){var g=[],c=a.i(function(){var c=e(f)||[];g.length>0&&(b(g),a.a.Ka(g,c),h&&h(f,c));g.splice(0,g.length);a.a.J(g,c)},p,{disposeWhenNodeIsRemoved:c,disposeWhen:function(){return g.length==0||!a.a.ga(g[0])}});return{sb:g,i:c}}a.a.La=function(d,e,f,h,g){for(var e=e||[],h=h||{},i=a.a.e.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")===
m,j=a.a.e.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")||[],k=a.a.ba(j,function(a){return a.Va}),n=a.a.O(k,e),e=[],t=0,s=[],k=[],w=p,r=0,x=n.length;r<x;r++)switch(n[r].status){case "retained":var v=j[t];e.push(v);v.P.length>0&&(w=v.P[v.P.length-1]);t++;break;case "deleted":j[t].i.v();b(j[t].P);a.a.n(j[t].P,function(a){s.push({element:a,index:r,value:n[r].value});w=a});t++;break;case "added":var v=n[r].value,u=c(d,f,v,g),y=u.sb;e.push({Va:n[r].value,P:y,i:u.i});for(var u=0,z=y.length;u<
z;u++){var A=y[u];k.push({element:A,index:r,value:n[r].value});w==p?a.f.xb(d,A):a.f.mb(d,A,w);w=A}g&&g(v,y)}a.a.n(s,function(b){a.F(b.element)});f=q;if(!i){if(h.afterAdd)for(r=0;r<k.length;r++)h.afterAdd(k[r].element,k[r].index,k[r].value);if(h.beforeRemove){for(r=0;r<s.length;r++)h.beforeRemove(s[r].element,s[r].index,s[r].value);f=o}}f||a.a.n(s,function(b){a.removeNode(b.element)});a.a.e.set(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult",e)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",
a.a.La);a.p=function(){this.allowTemplateRewriting=q};a.p.prototype=new a.t;a.p.prototype.renderTemplateSource=function(b){b=b.text();return a.a.na(b)};a.p.M=new a.p;a.qa(a.p.M);a.b("nativeTemplateEngine",a.p);(function(){a.ja=function(){var a=this.qb=function(){if(typeof jQuery=="undefined"||!jQuery.tmpl)return 0;try{if(jQuery.tmpl.tag.tmpl.open.toString().indexOf("__")>=0)return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,e,f){f=f||{};a<2&&l(Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."));
var h=b.data("precompiled");h||(h=b.text()||"",h=jQuery.template(p,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=jQuery.extend({koBindingContext:e},f.templateOptions);e=jQuery.tmpl(h,b,e);e.appendTo(document.createElement("div"));jQuery.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){document.write("<script type='text/html' id='"+a+"'>"+b+"<\/script>")};
if(a>0)jQuery.tmpl.tag.ko_code={open:"__.push($1 || '');"},jQuery.tmpl.tag.ko_with={open:"with($1) {",close:"} "}};a.ja.prototype=new a.t;var b=new a.ja;b.qb>0&&a.qa(b);a.b("jqueryTmplTemplateEngine",a.ja)})()}typeof define==="function"&&define.amd?define("ko",["exports"],B):B(window.ko={});
})(window);
