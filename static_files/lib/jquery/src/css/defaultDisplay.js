define(["../core","../manipulation"],function(e){function t(t,n){var o,a=e(n.createElement(t)).appendTo(n.body),d=window.getDefaultComputedStyle&&(o=window.getDefaultComputedStyle(a[0]))?o.display:e.css(a[0],"display");return a.detach(),d}var n,o={};return function(a){var d=document,r=o[a];return r||("none"!==(r=t(a,d))&&r||(n=(n||e("<iframe frameborder='0' width='0' height='0'/>")).appendTo(d.documentElement),(d=n[0].contentDocument).write(),d.close(),r=t(a,d),n.detach()),o[a]=r),r}});