function un_rtl(cn) {
	if (!document.getElementsByClassName || !getComputedStyle) return;
	var s = document.getElementsByClassName(cn);
	for (var i = 0; i < s.length; ++i) {
		if (getComputedStyle(s[i]).direction != 'rtl') continue;
		var e = s[i].textContent.split('').reverse().join('');
		var t = s[i].title ? s[i].title : e;
		var l = '<a href="mailto:' + e + '">' + t + '</a>';
		s[i].style.direction = 'ltr';
		s[i].innerHTML = l;
	}
}

un_rtl('email');

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-46852506-1', 'konopas.org');
ga('send', 'pageview');
