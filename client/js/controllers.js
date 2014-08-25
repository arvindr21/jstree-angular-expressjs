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
]).controller('EventsCtrl', ['$scope',
  function($scope) {
  	/* List of all events  */
  	/* http://www.jstree.com/api/#/?q=.jstree%20Event */

    $scope.readyCB = function() {
      console.log('readyCB');
    };

    $scope.changedCB = function(e, data) {
      console.log('changedCB');
      console.log('e : ', e);
      console.log('data : ', data);

      console.log('processed data >>> ');
      var i, j, r = [];
      for (i = 0, j = data.selected.length; i < j; i++) {
        r.push(data.instance.get_node(data.selected[i]).text);
      }
      console.log('Selected: ' + r.join(', '));

    };

    $scope.openNodeCB = function(e, data) {
      console.log('openNodeCB');
      console.log('e : ', e);
      console.log('data : ', data);

    };
  }
]);
