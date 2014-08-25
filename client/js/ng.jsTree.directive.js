 var ngJSTree = angular.module('jsTree.directive', []);
 ngJSTree.directive('jsTree', function($http) {

   var treeDir = {
     restrict: 'EA',
     fetchResource: function(url, cb) {
       return $http.get(url).then(function(data) {
         if (cb) cb(data.data);
       });
     },

     managePlugins: function(s, e, a, config) {
       if (a.treePlugins) {
         config.plugins = a.treePlugins.split(',');
         config.core = config.core || {};
         config.core.check_callback = true;

         if (config.plugins.indexOf('state') >= 0) {
           config.state = config.state || {};
           config.state.key = a.treeStateKey;
         }

         if (config.plugins.indexOf('search') >= 0) {
           var to = false;
           e.after('<input type="text" placeholder="Search Tree" class="ng-tree-search"/>')
             .next()
             .on('keyup', function(ev) {
               //s.searchTree(tree, ev.target.value, ev);
               if (to) {
                 clearTimeout(to);
               }
               to = setTimeout(function() {
                 treeDir.tree.jstree(true).search(ev.target.value);
               }, 250);
             });
         }

         if (config.plugins.indexOf('checkbox') >= 0) {
           config.checkbox = config.checkbox || {};
           config.checkbox.keep_selected_style = false;
         }
       }
       return config;
     },

     link: function(s, e, a) { // scope, element, attribute \O/
       $(function() {
         var config = {};
         // clean Case
         a.treeData = a.treeData ? a.treeData.toLowerCase() : '';
         a.treeSrc = a.treeSrc ? a.treeSrc.toLowerCase() : '';

         if (a.treeData == 'html') {
           treeDir.fetchResource(a.treeSrc, function(data) {
             e.html(data);
             treeDir.managePlugins(s, e, a, config);
             treeDir.init(e, config);
           });
         } else if (a.treeData == 'json') {
           treeDir.fetchResource(a.treeSrc, function(data) {
             config = {
               'core': {
                 'data': data
               }
             };
             treeDir.managePlugins(s, e, a, config);
             treeDir.init(e, config);
           });
         } else if (a.treeAjax) {
           config = {
             'core': {
               'data': {
                 'url': a.treeAjax,
                 'data': function(node) {
                   return {
                     'id': node.id != '#' ? node.id : 1
                   };
                 }
               }
             }
           };
           treeDir.managePlugins(s, e, a, config);
           treeDir.init(e, config);
         }
       });

     },

     init: function(e, config) {
       this.tree = $(e).jstree(config);
     }
   };

   return treeDir;

 });
