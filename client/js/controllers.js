app.controller('BasicCtrl', ['$scope',
  function($scope) {

  }
]).controller('PluginsCtrl', ['$scope',
  function($scope) {
    $scope.searchTree = function(data, ev) {
      console.log(data, ev);
    };
  }
]).controller('AjaxCtrl', ['$scope',
  function($scope) {

  }
]);
