app.directive('scrollTopClick', function ($window) {

  var 
    $ = angular.element,
    $el;

  function topClick($scopeParam, $elParam) {
    $el = $elParam;
    bindClickEvent();
  }

  function bindClickEvent() {
    $el.bind('click', function () {
      onClickEvent();
    });
  }

  function onClickEvent() {
    $("html, body").animate({scrollTop: 0}, 1000);
  }

  return topClick;
});