(function(d,j){
  j = d.createElement('script');
  j.src = 'MathJax/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
  (d.head || d.getElementsByTagName('head')[0]).appendChild(j);
  }(document));

window.MathJax = {
  tex2jax: {
    inlineMath:  [ ['$','$'], ['\\(','\\)'] ],
    displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
    processEscapes: true
  },
  TeX: { extensions: ["autoload-all.js"] }
};
