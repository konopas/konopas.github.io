window.i18n.get=function(n,k,d){
var m=this[n],f=function(k,d){return typeof m[k]=="function"?m[k](d):k in m?m[k]:k};
return !m?null
:typeof k=="undefined"?f
:typeof d=="undefined"?typeof m[k]=="function"?m[k]:function(){return m[k]}
:f(k,d)}
window.i18n.fill=function(c,s){
var i,n,k,d,a,g=this.get(c),l=document.querySelectorAll('['+s+']');
if(g)for(i=0;n=l[i];++i){
k=n.getAttribute(s)||n.textContent.trim();
d=n.getAttribute(s+'-var');
d&&(d=JSON.parse('{'+d.replace(/[^,:]+/g,'"$&"')+'}'));
a=n.getAttribute(s+'-attr');
a?n.setAttribute(a,g(k,d)):n.innerHTML=g(k,d)}}
var
c=function(d){if(!d)throw new Error("MessageFormat: No data passed to function.")},
n=function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: `"+k+"` isnt a number.");return d[k]-(o||0)},
v=function(d,k){c(d);return d[k]},
p=function(d,k,o,l,p){c(d);return d[k] in p?p[d[k]]:(k=MessageFormat.locale[l](d[k]-o),k in p?p[k]:p.other)},
s=function(d,k,p){c(d);return d[k] in p?p[d[k]]:p.other};
