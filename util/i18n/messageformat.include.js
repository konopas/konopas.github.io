window.i18n.get = function(n, k, d) {
  var m = this[n], f = function(k, d) { return typeof m[k] == "function" ? m[k](d) : m[k] || k; };
  return !m ? null
    : (typeof k == "undefined") ? f
    : (typeof d == "undefined") ? typeof m[k] == "function" ? m[k] : function(){return m[k]}
    : f(k, d);
}
window.i18n.fill = function(lc, ka) {
  var i,n,k,d,a,g = this.get(lc), l = document.querySelectorAll('['+ka+']');
  if (g) for (i = 0; n = l[i]; ++i) {
    k = n.getAttribute(ka) || n.textContent.trim();
    d = n.getAttribute(ka+'-var');
    if (d) d = JSON.parse('{'+d.replace(/[^,:]+/g, '"$&"')+'}');
    a = n.getAttribute(ka+'-attr');
    if (a) n.setAttribute(a, g(k,d));
    else n.innerHTML = g(k,d);
  }
}
var
c=function(d){if(!d)throw new Error("MessageFormat: No data passed to function.")},
n=function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: `"+k+"` isnt a number.");return d[k]-(o||0)},
v=function(d,k){c(d);return d[k]},
p=function(d,k,o,l,p){c(d);return p[d[k]]||p[MessageFormat.locale[l](d[k]-o)]||p.other},
s=function(d,k,p){c(d);return p[d[k]]||p.other};
