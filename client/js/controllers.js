app.controller('BasicCtrl', ['$scope',
  function($scope) {

  }
]).controller('PluginsCtrl', ['$scope',
  function($scope) {

    $scope.contextMenu = {
      "Menu 1": {
        "label": "Menu 1",
        "action": function(obj) {
          console.log(obj);
          alert("You clicked " + obj.item.label);
        }
      },
      "Menu 2": {
        "label": "Menu 2",
        "action": function(obj) {
          console.log(obj);
          alert("You clicked " + obj.item.label);
        }
      }
    };


    $scope.typesConfig = {
      "default": {
        "icon":  "/jstree/imgs/tree.png"        
      }
    }

  }
]).controller('AjaxCtrl', ['$scope',
  function($scope) {

  }
]).controller('EventsCtrl', ['$scope',
  function($scope) {
    /* List of all events  */
    /* http://www.jstree.com/api/#/?q=.jstree%20Event */
    $scope.htmlConsole = '';

    $scope.readyCB = function() {
      console.log('readyCB');
      $scope.htmlConsole = 'readyCB';
    };

    $scope.changedCB = function(e, data) {
      console.log('changedCB');
      $scope.htmlConsole = 'changedCB';
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
