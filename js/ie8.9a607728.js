!function(a){"use strict";var b=function(){var a=document.createElement("div");return a.style.cssText="font-size: 1rem;",/rem/.test(a.style.fontSize)},c=function(){for(var a=document.getElementsByTagName("link"),b=[],c=0;c<a.length;c++)"stylesheet"===a[c].rel.toLowerCase()&&null===a[c].getAttribute("data-norem")&&b.push(a[c].href);return b},d=function(){for(var a=0;a<m.length;a++)j(m[a],e)},e=function(a,b){if(q.push(a.responseText),r.push(b),r.length===m.length){for(var c=0;c<r.length;c++)f(q[c],r[c]);(m=n.slice(0)).length>0?(r=[],q=[],n=[],d()):g()}},f=function(a,b){for(var c,d=k(a).replace(/\/\*[\s\S]*?\*\//g,""),e=/[\w\d\s\-\/\\\[\]:,.'"*()<>+~%#^$_=|@]+\{[\w\d\s\-\/\\%#:!;,.'"*()]+\d*\.?\d+rem[\w\d\s\-\/\\%#:!;,.'"*()]*\}/g,f=d.match(e),g=/\d*\.?\d+rem/g,h=d.match(g),i=/(.*\/)/,j=i.exec(b)[0],l=/@import (?:url\()?['"]?([^'\)"]*)['"]?\)?[^;]*/gm;null!==(c=l.exec(a));)n.push(j+c[1]);null!==f&&0!==f.length&&(o=o.concat(f),p=p.concat(h))},g=function(){for(var a=/[\w\d\s\-\/\\%#:,.'"*()]+\d*\.?\d+rem[\w\d\s\-\/\\%#:!,.'"*()]*[;}]/g,b=0;b<o.length;b++){l+=o[b].substr(0,o[b].indexOf("{")+1);for(var c=o[b].match(a),d=0;d<c.length;d++)l+=c[d],d===c.length-1&&"}"!==l[l.length-1]&&(l+="\n}")}h()},h=function(){for(var a=0;a<p.length;a++)s[a]=Math.round(parseFloat(p[a].substr(0,p[a].length-3)*t))+"px";i()},i=function(){for(var a=0;a<s.length;a++)s[a]&&(l=l.replace(p[a],s[a]));var b=document.createElement("style");b.setAttribute("type","text/css"),b.id="remReplace",document.getElementsByTagName("head")[0].appendChild(b),b.styleSheet?b.styleSheet.cssText=l:b.appendChild(document.createTextNode(l))},j=function(b,c){try{var d=a.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP")||new ActiveXObject("Msxml2.XMLHTTP"):new XMLHttpRequest;d.open("GET",b,!0),d.onreadystatechange=function(){4===d.readyState&&c(d,b)},d.send(null)}catch(e){if(a.XDomainRequest){var f=new XDomainRequest;f.open("get",b),f.onload=function(){c(f,b)},f.onerror=function(){return!1},f.send()}}},k=function(b){return a.matchMedia||a.msMatchMedia||(b=b.replace(/@media[\s\S]*?\}\s*\}/g,"")),b};if(!b()){var l="",m=c(),n=[],o=[],p=[],q=[],r=[],s=[],t="";t=function(){var a,b=document,c=b.documentElement,d=b.body||b.createElement("body"),e=!b.body,f=b.createElement("div"),g=d.style.fontSize;return e&&c.appendChild(d),f.style.cssText="width:1em; position:absolute; visibility:hidden; padding: 0;",d.style.fontSize="1em",d.appendChild(f),a=f.offsetWidth,e?c.removeChild(d):(d.removeChild(f),d.style.fontSize=g),a}(),d()}}(window),function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.2",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b)}(this,document),function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){u(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))};if(c.ajax=f,c.queue=d,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var g,h,i,j=a.document,k=j.documentElement,l=[],m=[],n=[],o={},p=30,q=j.getElementsByTagName("head")[0]||k,r=j.getElementsByTagName("base")[0],s=q.getElementsByTagName("link"),t=function(){var a,b=j.createElement("div"),c=j.body,d=k.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=j.createElement("body"),c.style.background="none"),k.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&k.insertBefore(c,k.firstChild),a=b.offsetWidth,f?k.removeChild(c):c.removeChild(b),k.style.fontSize=d,e&&(c.style.fontSize=e),a=i=parseFloat(a)},u=function(b){var c="clientWidth",d=k[c],e="CSS1Compat"===j.compatMode&&d||j.body[c]||d,f={},o=s[s.length-1],r=(new Date).getTime();if(b&&g&&p>r-g)return a.clearTimeout(h),void(h=a.setTimeout(u,p));g=r;for(var v in l)if(l.hasOwnProperty(v)){var w=l[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?i||t():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?i||t():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(m[w.rules]))}for(var C in n)n.hasOwnProperty(C)&&n[C]&&n[C].parentNode===q&&q.removeChild(n[C]);n.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=j.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,q.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(j.createTextNode(F)),n.push(E)}},v=function(a,b,d){var e=a.replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var g=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},h=!f&&d;b.length&&(b+="/"),h&&(f=1);for(var i=0;f>i;i++){var j,k,n,o;h?(j=d,m.push(g(a))):(j=e[i].match(c.regex.findStyles)&&RegExp.$1,m.push(RegExp.$2&&g(RegExp.$2))),n=j.split(","),o=n.length;for(var p=0;o>p;p++)k=n[p],l.push({media:k.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:m.length-1,hasquery:k.indexOf("(")>-1,minw:k.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:k.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},w=function(){if(d.length){var b=d.shift();f(b.href,function(c){v(c,b.href,b.media),o[b.href]=!0,a.setTimeout(function(){w()},0)})}},x=function(){for(var b=0;b<s.length;b++){var c=s[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!o[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(v(c.styleSheet.rawCssText,e,f),o[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!r||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}w()};x(),c.update=x,c.getEmValue=t,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this),function(a){return}(this),function(a,b){"object"==typeof module&&"object"==typeof exports?module.exports=function(a){var c={};return b(a,c),c}:(a.NW||(a.NW={}),a.NW.Dom||(a.NW.Dom={}),b(a,a.NW.Dom))}(this,function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p=b,q=a.document,r=q.documentElement,s=[].slice,t={}.toString,u="[#.:]?",v="([~*^$|!]?={1})",w="[\\x20\\t\\n\\r\\f]*",x="[\\x20]|[>+~][^>+~]",y="(?:[-+]?\\d*n)?[-+]?\\d*",z="\"[^\"]*\"|'[^']*'",A="\\([^()]+\\)|\\(.*\\)",B="\\{[^{}]+\\}|\\{.*\\}",C="\\[[^[\\]]*\\]|\\[.*\\]",D="\\[.*\\]|\\(.*\\)|\\{.*\\}",E="(?:[-\\w]|[^\\x00-\\xa0]|\\\\.)",F="(?:-?[_a-zA-Z]{1}[-\\w]*|[^\\x00-\\xa0]+|\\\\.+)+",G="("+z+"|"+F+")",H=w+"("+E+"*:?"+E+"+)"+w+"(?:"+v+w+G+")?"+w,I=H.replace(G,"([\\x22\\x27]*)((?:\\\\?.)*?)\\3"),J="((?:"+y+"|"+z+"|"+u+"|"+E+"+|\\["+H+"\\]|\\(.+\\)|"+w+"|,)+)",K=".+",L="(?=[\\x20\\t\\n\\r\\f]*[^>+~(){}<>])(\\*|(?:"+u+F+")|"+x+"|\\["+H+"\\]|\\("+J+"\\)|\\{"+K+"\\}|(?:,|"+w+"))+",M=L.replace(J,".*"),N=new RegExp(L,"g"),O=new RegExp("^"+w+"|"+w+"$","g"),P=new RegExp("^((?!:not)("+u+"|"+F+"|\\([^()]*\\))+|\\["+H+"\\])$"),Q=new RegExp("([^,\\\\()[\\]]+|"+C+"|"+A+"|"+B+"|\\\\.)+","g"),R=new RegExp("(\\["+H+"\\]|\\("+J+"\\)|\\\\.|[^\\x20\\t\\r\\n\\f>+~])+","g"),S=/[\x20\t\n\r\f]+/g,T=new RegExp(F+"|^$"),U=function(){var a=(q.appendChild+"").replace(/appendChild/g,"");return function(b,c){var d=b&&b[c]||!1;return d&&"string"!=typeof d&&a==(d+"").replace(new RegExp(c,"g"),"")}}(),V=U(q,"hasFocus"),W=U(q,"querySelector"),X=U(q,"getElementById"),Y=U(r,"getElementsByTagName"),Z=U(r,"getElementsByClassName"),$=U(r,"getAttribute"),_=U(r,"hasAttribute"),ab=function(){var a=!1,b=r.id;r.id="length";try{a=!!s.call(q.childNodes,0)[0]}catch(c){}return r.id=b,a}(),bb="nextElementSibling"in r&&"previousElementSibling"in r,cb=X?function(){var a=!0,b="x"+String(+new Date),c=q.createElementNS?"a":'<a name="'+b+'">';return(c=q.createElement(c)).name=b,r.insertBefore(c,r.firstChild),a=!!q.getElementById(b),r.removeChild(c),a}():!0,db=Y?function(){var a=q.createElement("div");return a.appendChild(q.createComment("")),!!a.getElementsByTagName("*")[0]}():!0,eb=Z?function(){var a,b=q.createElement("div"),c="台北";return b.appendChild(q.createElement("span")).setAttribute("class",c+"abc "+c),b.appendChild(q.createElement("span")).setAttribute("class","x"),a=!b.getElementsByClassName(c)[0],b.lastChild.className=c,a||2!=b.getElementsByClassName(c).length}():!0,fb=$?function(){var a=q.createElement("input");return a.setAttribute("value",5),5!=a.defaultValue}():!0,gb=_?function(){var a=q.createElement("option");return a.setAttribute("selected","selected"),!a.hasAttribute("selected")}():!0,hb=function(){var a=q.createElement("select");return a.appendChild(q.createElement("option")),!a.firstChild.selected}(),ib=/opera/i.test(t.call(a.opera)),jb=ib&&parseFloat(opera.version())>=11,kb=W?function(){var a,b=[],c=q.createElement("div"),d=function(a,b,c,d){var e=!1;b.appendChild(c);try{e=b.querySelectorAll(a).length==d}catch(f){}for(;b.firstChild;)b.removeChild(b.firstChild);return e};return a=q.createElement("p"),a.setAttribute("class",""),d('[class^=""]',c,a,1)&&b.push("[*^$]=[\\x20\\t\\n\\r\\f]*(?:\"\"|'')"),a=q.createElement("option"),a.setAttribute("selected","selected"),d(":checked",c,a,0)&&b.push(":checked"),a=q.createElement("input"),a.setAttribute("type","hidden"),d(":enabled",c,a,0)&&b.push(":enabled",":disabled"),a=q.createElement("link"),a.setAttribute("href","x"),d(":link",c,a,1)||b.push(":link"),gb&&b.push("\\[[\\x20\\t\\n\\r\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),b.length?new RegExp(b.join("|")):{test:function(){return!1}}}():!0,lb=new RegExp("(?:\\[[\\x20\\t\\n\\r\\f]*class\\b|\\."+F+")"),mb=new RegExp(db&&eb?"^#?-?[_a-zA-Z]{1}"+E+"*$":ib?"^(?:\\*|#-?[_a-zA-Z]{1}"+E+"*)$":"^(?:\\*|[.#]?-?[_a-zA-Z]{1}"+E+"*)$"),nb={a:1,A:1,area:1,AREA:1,link:1,LINK:1},ob={checked:1,disabled:1,ismap:1,multiple:1,readonly:1,selected:1},pb={value:"defaultValue",checked:"defaultChecked",selected:"defaultSelected"},qb={action:2,cite:2,codebase:2,data:2,href:2,longdesc:2,lowsrc:2,src:2,usemap:2},rb={"class":0,accept:1,"accept-charset":1,align:1,alink:1,axis:1,bgcolor:1,charset:1,checked:1,clear:1,codetype:1,color:1,compact:1,declare:1,defer:1,dir:1,direction:1,disabled:1,enctype:1,face:1,frame:1,hreflang:1,"http-equiv":1,lang:1,language:1,link:1,media:1,method:1,multiple:1,nohref:1,noresize:1,noshade:1,nowrap:1,readonly:1,rel:1,rev:1,rules:1,scope:1,scrolling:1,selected:1,shape:1,target:1,text:1,type:1,valign:1,valuetype:1,vlink:1},sb={accept:1,"accept-charset":1,alink:1,axis:1,bgcolor:1,charset:1,codetype:1,color:1,enctype:1,face:1,hreflang:1,"http-equiv":1,lang:1,language:1,link:1,media:1,rel:1,rev:1,target:1,text:1,type:1,vlink:1},tb={},ub={"=":"n=='%m'","^=":"n.indexOf('%m')==0","*=":"n.indexOf('%m')>-1","|=":"(n+'-').indexOf('%m-')==0","~=":"(' '+n+' ').indexOf(' %m ')>-1","$=":"n.substr(n.length-'%m'.length)=='%m'"},vb={ID:new RegExp("^\\*?#("+E+"+)|"+D),TAG:new RegExp("^("+E+"+)|"+D),CLASS:new RegExp("^\\*?\\.("+E+"+$)|"+D)},wb={spseudos:/^\:(root|empty|(?:first|last|only)(?:-child|-of-type)|nth(?:-last)?(?:-child|-of-type)\(\s*(even|odd|(?:[-+]{0,1}\d*n\s*)?[-+]{0,1}\s*\d*)\s*\))?(.*)/i,dpseudos:/^\:(link|visited|target|active|focus|hover|checked|disabled|enabled|selected|lang\(([-\w]{2,})\)|not\(([^()]*|.*)\))?(.*)/i,attribute:new RegExp("^\\["+I+"\\](.*)"),children:/^[\x20\t\n\r\f]*\>[\x20\t\n\r\f]*(.*)/,adjacent:/^[\x20\t\n\r\f]*\+[\x20\t\n\r\f]*(.*)/,relative:/^[\x20\t\n\r\f]*\~[\x20\t\n\r\f]*(.*)/,ancestor:/^[\x20\t\n\r\f]+(.*)/,universal:/^\*(.*)/,id:new RegExp("^#("+E+"+)(.*)"),tagName:new RegExp("^("+E+"+)(.*)"),className:new RegExp("^\\.("+E+"+)(.*)")},xb=function(a,b){var c,d=-1;if(!a.length&&Array.slice)return Array.slice(b);for(;c=b[++d];)a[a.length]=c;return a},yb=function(a,b,c){for(var d,e=-1;(d=b[++e])&&!1!==c(a[a.length]=d););return a},zb=function(a,b){var c,d=q;f=a,q=a.ownerDocument||a,(b||d!==q)&&(r=q.documentElement,o="DiV"==q.createElement("DiV").nodeName,n=o||"string"!=typeof q.compatMode?function(){var a=q.createElement("div").style;return a&&(a.width=1)&&"1px"==a.width}():q.compatMode.indexOf("CSS")<0,c=q.createElement("div"),c.appendChild(q.createElement("p")).setAttribute("class","xXx"),c.appendChild(q.createElement("p")).setAttribute("class","xxx"),l=!o&&Z&&n&&(2!=c.getElementsByClassName("xxx").length||2!=c.getElementsByClassName("xXx").length),m=!o&&W&&n&&(2!=c.querySelectorAll("[class~=xxx]").length||2!=c.querySelectorAll(".xXx").length),Tb.CACHING&&p.setCache(!0,q))},Ab=function(a,b){for(var c=-1,d=null;(d=b[++c])&&d.getAttribute("id")!=a;);return d},Bb=cb?function(a,b){var c=null;return a=a.replace(/\\([^\\]{1})/g,"$1"),o||9!=b.nodeType?Ab(a,b.getElementsByTagName("*")):(c=b.getElementById(a))&&c.name==a&&b.getElementsByName?Ab(a,b.getElementsByName(a)):c}:function(a,b){return a=a.replace(/\\([^\\]{1})/g,"$1"),b.getElementById&&b.getElementById(a)||Ab(a,b.getElementsByTagName("*"))},Cb=function(a,b){return b||(b=q),f!==b&&zb(b),Bb(a,b)},Db=function(a,b){var c="*"==a,d=b,e=[],f=d.firstChild;for(c||(a=a.toUpperCase());d=f;)if(d.tagName>"@"&&(c||d.tagName.toUpperCase()==a)&&(e[e.length]=d),!(f=d.firstChild||d.nextSibling))for(;!f&&(d=d.parentNode)&&d!==b;)f=d.nextSibling;return e},Eb=!db&&ab?function(a,b){return o||11==b.nodeType?Db(a,b):s.call(b.getElementsByTagName(a),0)}:function(a,b){var c,d=-1,e=d,f=[],g=b.getElementsByTagName(a);if("*"==a)for(;c=g[++d];)c.nodeName>"@"&&(f[++e]=c);else for(;c=g[++d];)f[d]=c;return f},Fb=function(a,b){return b||(b=q),f!==b&&zb(b),Eb(a,b)},Gb=function(a,b){return $b('[name="'+a.replace(/\\([^\\]{1})/g,"$1")+'"]',b)},Hb=function(a,b){var c,d,e=-1,f=e,g=[],h=Eb("*",b);for(a=" "+(n?a.toLowerCase():a).replace(/\\([^\\]{1})/g,"$1")+" ";c=h[++e];)d=o?c.getAttribute("class"):c.className,d&&d.length&&(" "+(n?d.toLowerCase():d).replace(S," ")+" ").indexOf(a)>-1&&(g[++f]=c);return g},Ib=function(a,b){return eb||l||o||!b.getElementsByClassName?Hb(a,b):s.call(b.getElementsByClassName(a.replace(/\\([^\\]{1})/g,"$1")),0)},Jb=function(a,b){return b||(b=q),f!==b&&zb(b),Ib(a,b)},Kb="compareDocumentPosition"in r?function(a,b){return 16==(16&a.compareDocumentPosition(b))}:"contains"in r?function(a,b){return a!==b&&a.contains(b)}:function(a,b){for(;b=b.parentNode;)if(b===a)return!0;return!1},Lb=fb?function(a,b){return b=b.toLowerCase(),"object"==typeof a[b]?a.attributes[b]&&a.attributes[b].value||"":"type"==b?a.getAttribute(b)||"":qb[b]?a.getAttribute(b,2)||"":ob[b]?a.getAttribute(b)?b:"false":(a=a.getAttributeNode(b))&&a.value||""}:function(a,b){return a.getAttribute(b)||""},Mb=gb?function(a,b){return b=b.toLowerCase(),pb[b]?!!a[pb[b]]:(a=a.getAttributeNode(b),!(!a||!a.specified))}:function(a,b){return o?!!a.getAttribute(b):a.hasAttribute(b)},Nb=function(a){for(a=a.firstChild;a;){if(3==a.nodeType||a.nodeName>"@")return!1;a=a.nextSibling}return!0},Ob=function(a){return Mb(a,"href")&&nb[a.nodeName]},Pb=function(a,b){for(var c=1,d=b?"nextSibling":"previousSibling";a=a[d];)a.nodeName>"@"&&++c;return c},Qb=function(a,b){for(var c=1,d=b?"nextSibling":"previousSibling",e=a.nodeName;a=a[d];)a.nodeName==e&&++c;return c},Rb=function(a){if("string"==typeof a)return Tb[a];if("object"!=typeof a)return!1;for(var b in a)Tb[b]=!!a[b],"SIMPLENOT"==b?(ac={},bc={},cc={},dc={},Tb.USE_QSAPI=!1):"USE_QSAPI"==b&&(Tb[b]=!!a[b]&&W);return N=new RegExp(Tb.SIMPLENOT?L:M,"g"),!0},Sb=function(b){if(Tb.VERBOSITY)throw new Error(b);a.console&&a.console.log&&a.console.log(b)},Tb={CACHING:!1,SHORTCUTS:!1,SIMPLENOT:!0,UNIQUE_ID:!0,USE_HTML5:!0,USE_QSAPI:W,VERBOSITY:!0},Ub="r[r.length]=c[k];if(f&&false===f(c[k]))break main;else continue main;",Vb=function(a,b,c){var d="string"==typeof a?a.match(Q):a;if("string"==typeof b||(b=""),1==d.length)b+=Xb(d[0],c?Ub:"f&&f(k);return true;",c);else for(var e,f=-1,g={};e=d[++f];)e=e.replace(O,""),!g[e]&&(g[e]=!0)&&(b+=Xb(e,c?Ub:"f&&f(k);return true;",c));return c?new Function("c,s,r,d,h,g,f,v","var N,n,x=0,k=-1,e;main:while((e=c[++k])){"+b+"}return r;"):new Function("e,s,r,d,h,g,f,v","var N,n,x=0,k=e;"+b+"return false;")},Wb="var z=v[@]||(v[@]=[]),l=z.length-1;while(l>=0&&z[l]!==e)--l;if(l!==-1){break;}z[z.length]=e;",Xb=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m=0;a;){if(m++,h=a.match(wb.universal))g="";else if(h=a.match(wb.id))b="if("+(o?'s.getAttribute(e,"id")':'(e.submit?s.getAttribute(e,"id"):e.id)')+'=="'+h[1]+'"){'+b+"}";else if(h=a.match(wb.tagName))b="if(e.nodeName"+(o?'=="'+h[1]+'"':'.toUpperCase()=="'+h[1].toUpperCase()+'"')+"){"+b+"}";else if(h=a.match(wb.className))b="if((n="+(o?'s.getAttribute(e,"class")':"e.className")+')&&n.length&&(" "+'+(n?"n.toLowerCase()":"n")+".replace("+S+'," ")+" ").indexOf(" '+(n?h[1].toLowerCase():h[1])+' ")>-1){'+b+"}";else if(h=a.match(wb.attribute)){if(g=h[1].split(":"),g=2==g.length?g[1]:g[0]+"",h[2]&&!ub[h[2]])return Sb('Unsupported operator in attribute selectors "'+a+'"'),"";k=!1,l="false",h[2]&&h[4]&&(l=ub[h[2]])?(rb["class"]=n?1:0,h[4]=h[4].replace(/(\x22|\x27)/g,"\\$1"),h[4]=h[4].replace(/\\([0-9a-f]{2,2})/g,"\\x$1"),k=(o?sb:rb)[g.toLowerCase()],l=l.replace(/\%m/g,k?h[4].toLowerCase():h[4])):("!="==h[2]||"="==h[2])&&(h[4]=h[4].replace(/(\x22|\x27)/g,"\\$1"),l="n"+h[2]+'="'+h[4]+'"'),g="n=s."+(h[2]?"get":"has")+'Attribute(e,"'+h[1]+'")'+(k?".toLowerCase();":";"),b=g+"if("+(h[2]?l:"n")+"){"+b+"}"}else if(h=a.match(wb.adjacent))b=(c?"":Wb.replace(/@/g,m))+b,b=bb?"var N"+m+"=e;while(e&&(e=e.previousElementSibling)){"+b+"break;}e=N"+m+";":"var N"+m+'=e;while(e&&(e=e.previousSibling)){if(e.nodeName>"@"){'+b+"break;}}e=N"+m+";";else if(h=a.match(wb.relative))b=(c?"":Wb.replace(/@/g,m))+b,b=bb?"var N"+m+"=e;e=e.parentNode.firstElementChild;while(e&&e!==N"+m+"){"+b+"e=e.nextElementSibling;}e=N"+m+";":"var N"+m+"=e;e=e.parentNode.firstChild;while(e&&e!==N"+m+'){if(e.nodeName>"@"){'+b+"}e=e.nextSibling;}e=N"+m+";";else if(h=a.match(wb.children))b=(c?"":Wb.replace(/@/g,m))+b,b="var N"+m+"=e;while(e&&e!==h&&e!==g&&(e=e.parentNode)){"+b+"break;}e=N"+m+";";else if(h=a.match(wb.ancestor))b=(c?"":Wb.replace(/@/g,m))+b,b="var N"+m+"=e;while(e&&e!==h&&e!==g&&(e=e.parentNode)){"+b+"}e=N"+m+";";else if((h=a.match(wb.spseudos))&&h[1])switch(h[1]){case"root":b=h[3]?"if(e===h||s.contains(h,e)){"+b+"}":"if(e===h){"+b+"}";break;case"empty":b="if(s.isEmpty(e)){"+b+"}";break;default:if(h[1]&&h[2]){if("n"==h[2]){b="if(e!==h){"+b+"}";break}"even"==h[2]?(d=2,e=0):"odd"==h[2]?(d=2,e=1):(e=(f=h[2].match(/(-?\d+)$/))?parseInt(f[1],10):0,d=(f=h[2].match(/(-?\d*)n/i))?parseInt(f[1],10):0,f&&"-"==f[1]&&(d=-1)),k=d>1?/last/i.test(h[1])?"(n-("+e+"))%"+d+"==0":"n>="+e+"&&(n-("+e+"))%"+d+"==0":-1>d?/last/i.test(h[1])?"(n-("+e+"))%"+d+"==0":"n<="+e+"&&(n-("+e+"))%"+d+"==0":0===d?"n=="+e:/last/i.test(h[1])?-1==d?"n>="+e:"n<="+e:-1==d?"n<="+e:"n>="+e,b="if(e!==h){n=s["+(/-of-type/i.test(h[1])?'"nthOfType"':'"nthElement"')+"](e,"+(/last/i.test(h[1])?"true":"false")+");if("+k+"){"+b+"}}"}else d=/first/i.test(h[1])?"previous":"next",f=/only/i.test(h[1])?"previous":"next",e=/first|last/i.test(h[1]),l=/-of-type/i.test(h[1])?"&&n.nodeName!=e.nodeName":'&&n.nodeName<"@"',b="if(e!==h){"+("n=e;while((n=n."+d+"Sibling)"+l+");if(!n){"+(e?b:"n=e;while((n=n."+f+"Sibling)"+l+");if(!n){"+b+"}")+"}")+"}"}else if((h=a.match(wb.dpseudos))&&h[1])switch(h[1].match(/^\w+/)[0]){case"not":if(g=h[3].replace(O,""),Tb.SIMPLENOT&&!P.test(g))return Sb('Negation pseudo-class only accepts simple selectors "'+a+'"'),"";b="compatMode"in q?"if(!"+Vb(g,"",!1)+"(e,s,r,d,h,g)){"+b+"}":'if(!s.match(e, "'+g.replace(/\x22/g,'\\"')+'",g)){'+b+"}";break;case"checked":b='if((typeof e.form!=="undefined"&&(/^(?:radio|checkbox)$/i).test(e.type)&&e.checked)'+(Tb.USE_HTML5?"||(/^option$/i.test(e.nodeName)&&(e.selected||e.checked))":"")+"){"+b+"}";break;case"disabled":b='if(((typeof e.form!=="undefined"'+(Tb.USE_HTML5?"":"&&!(/^hidden$/i).test(e.type)")+")||s.isLink(e))&&e.disabled===true){"+b+"}";break;case"enabled":b='if(((typeof e.form!=="undefined"'+(Tb.USE_HTML5?"":"&&!(/^hidden$/i).test(e.type)")+")||s.isLink(e))&&e.disabled===false){"+b+"}";break;case"lang":k="",h[2]&&(k=h[2].substr(0,2)+"-"),b='do{(n=e.lang||"").toLowerCase();if((n==""&&h.lang=="'+h[2].toLowerCase()+'")||(n&&(n=="'+h[2].toLowerCase()+'"||n.substr(0,3)=="'+k.toLowerCase()+'"))){'+b+"break;}}while((e=e.parentNode)&&e!==g);";break;case"target":f=q.location?q.location.hash:"",f&&(b='if(e.id=="'+f.slice(1)+'"){'+b+"}");break;case"link":b="if(s.isLink(e)&&!e.visited){"+b+"}";break;case"visited":b="if(s.isLink(e)&&e.visited){"+b+"}";break;case"active":if(o)break;b="if(e===d.activeElement){"+b+"}";break;case"hover":if(o)break;b="if(e===d.hoverElement){"+b+"}";break;case"focus":if(o)break;b=V?"if(e===d.activeElement&&d.hasFocus()&&(e.type||e.href||!isNaN(e.tabIndex))){"+b+"}":"if(e===d.activeElement&&(e.type||e.href)){"+b+"}";break;case"selected":g=hb?"||(n=e.parentNode)&&n.options[n.selectedIndex]===e":"",b="if(/^option$/i.test(e.nodeName)&&(e.selected||e.checked"+g+")){"+b+"}"}else{g=!1,j=!1;for(g in tb)if((h=a.match(tb[g].Expression))&&h[1]&&(i=tb[g].Callback(h,b),b=i.source,j=i.status))break;if(!j)return Sb('Unknown pseudo-class selector "'+a+'"'),"";if(!g)return Sb('Unknown token in selector "'+a+'"'),""}if(!h)return Sb('Invalid syntax in selector "'+a+'"'),"";a=h&&h[h.length-1]}return b},Yb=function(a,b,d,e){var g;if(!(a&&a.nodeName>"@"))return Sb("Invalid element argument"),!1;if("string"!=typeof b)return Sb("Invalid selector argument"),!1;if(d&&1==d.nodeType&&!Kb(d,a))return!1;if(f!==d&&zb(d||(d=a.ownerDocument)),b=b.replace(O,""),Tb.SHORTCUTS&&(b=NW.Dom.shortcuts(b,a,d)),h!=b){if(!(g=b.match(N))||g[0]!=b)return Sb('The string "'+b+'", is not a valid CSS selector'),!1;c=(g=b.match(Q)).length<2,h=b,j=g}else g=j;return bc[b]&&ac[b]===d||(bc[b]=Vb(c?[b]:g,"",!1),ac[b]=d),bc[b](a,ec,[],q,r,d,e,{})},Zb=function(a,b){return $b(a,b,function(){return!1})[0]||null},$b=function(a,b,c){var h,j,l,n,t,u,v=a;if(0===arguments.length)return Sb("Not enough arguments"),[];if("string"!=typeof a)return[];if(b&&!/1|9|11/.test(b.nodeType))return Sb("Invalid or illegal context element"),[];if(f!==b&&zb(b||(b=q)),Tb.CACHING&&(n=p.loadResults(v,b,q,r)))return c?yb([],n,c):n;if(!jb&&mb.test(a))switch(a.charAt(0)){case"#":Tb.UNIQUE_ID&&(n=(l=Bb(a.slice(1),b))?[l]:[]);break;case".":n=Ib(a.slice(1),b);break;default:n=Eb(a,b)}else if(!(o||!Tb.USE_QSAPI||m&&lb.test(a)||kb.test(a)))try{n=b.querySelectorAll(a)}catch(w){}if(n)return n=c?yb([],n,c):ab?s.call(n):xb([],n),Tb.CACHING&&p.saveResults(v,b,q,n),n;if(a=a.replace(O,""),Tb.SHORTCUTS&&(a=NW.Dom.shortcuts(a,b)),j=i!=a){if(!(t=a.match(N))||t[0]!=a)return Sb('The string "'+a+'", is not a valid CSS selector'),[];d=(t=a.match(Q)).length<2,i=a,k=t}else t=k;if(11==b.nodeType)n=b.childNodes;else if(!o&&d){if(j&&(t=a.match(R),u=t[t.length-1],e=u.split(":not")[0],g=a.length-u.length),Tb.UNIQUE_ID&&(t=e.match(vb.ID))&&(u=t[1])?(l=Bb(u,b))&&(Yb(l,a)?(c&&c(l),n=[l]):n=[]):Tb.UNIQUE_ID&&(t=a.match(vb.ID))&&(u=t[1])&&((l=Bb(u,q))?"#"+u==a?(c&&c(l),n=[l]):b=/[>+~]/.test(a)?l.parentNode:l:n=[]),n)return Tb.CACHING&&p.saveResults(v,b,q,n),n;if(!Z&&(t=e.match(vb.TAG))&&(u=t[1])){if(0===(n=Eb(u,b)).length)return[];a=a.slice(0,g)+a.slice(g).replace(u,"*")}else if((t=e.match(vb.CLASS))&&(u=t[1])){if(0===(n=Ib(u,b)).length)return[];a=T.test(a.charAt(a.indexOf(u)-1))?a.slice(0,g)+a.slice(g).replace("."+u,""):a.slice(0,g)+a.slice(g).replace("."+u,"*")}else if((t=a.match(vb.CLASS))&&(u=t[1])){if(0===(n=Ib(u,b)).length)return[];for(h=0,els=[];n.length>h;++h)els=xb(els,n[h].getElementsByTagName("*"));n=els,a=T.test(a.charAt(a.indexOf(u)-1))?a.slice(0,g)+a.slice(g).replace("."+u,""):a.slice(0,g)+a.slice(g).replace("."+u,"*")}else if(Z&&(t=e.match(vb.TAG))&&(u=t[1])){if(0===(n=Eb(u,b)).length)return[];a=a.slice(0,g)+a.slice(g).replace(u,"*")}}return n||(n=/^(?:applet|object)$/i.test(b.nodeName)?b.childNodes:Eb("*",b)),dc[a]&&cc[a]===b||(dc[a]=Vb(d?[a]:t,"",!0),cc[a]=b),n=dc[a](n,ec,[],q,r,b,c,{}),Tb.CACHING&&p.saveResults(v,b,q,n),n},_b=function(a){return a},ac={},bc={},cc={},dc={},ec={nthElement:Pb,nthOfType:Qb,getAttribute:Lb,hasAttribute:Mb,byClass:Ib,byName:Gb,byTag:Eb,byId:Bb,contains:Kb,isEmpty:Nb,isLink:Ob,select:$b,match:Yb},fc={prefixes:u,encoding:E,operators:v,whitespace:w,identifier:F,attributes:H,combinators:x,pseudoclass:J,pseudoparms:y,quotedvalue:z};p.ACCEPT_NODE=Ub,p.emit=Sb,p.byId=Cb,p.byTag=Fb,p.byName=Gb,p.byClass=Jb,p.getAttribute=Lb,p.hasAttribute=Mb,p.match=Yb,p.first=Zb,p.select=$b,p.compile=Vb,p.contains=Kb,p.configure=Rb,p.setCache=_b,p.loadResults=_b,p.saveResults=_b,p.shortcuts=_b,p.Config=Tb,p.Snapshot=ec,p.Operators=ub,p.Selectors=tb,p.Tokens=fc,p.registerOperator=function(a,b){ub[a]||(ub[a]=b)},p.registerSelector=function(a,b,c){tb[a]||(tb[a]={Expression:b,Callback:c})},zb(q,!0)});