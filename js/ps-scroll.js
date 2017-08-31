window.onload = function() {

  var container = document.querySelector('.is-scroll-apply');

  Ps.initialize(container);

  Ps.initialize(container, {
    wheelSpeed: 2,
    wheelPropagation: false,
    minScrollbarLength: 20
  });

};
