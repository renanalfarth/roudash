window.onload = function() {

  var container = document.querySelector('.is-scroll-apply');

  Ps.initialize(container);

  Ps.initialize(container, {
    wheelSpeed: 2,
    wheelPropagation: false,
    minScrollbarLength: 20
  });

  var container2 = document.querySelector('.is-scroll-apply2');

  Ps.initialize(container2);

  Ps.initialize(container2, {
    wheelSpeed: 2,
    wheelPropagation: false,
    minScrollbarLength: 20
  });

};
