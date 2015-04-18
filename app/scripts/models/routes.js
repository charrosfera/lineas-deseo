/*global App, Backbone*/

App.Collection = App.Collection || {};

(function () {
    'use strict';

    App.Collection.Routes = Backbone.Collection.extend({
        url: 'http://grial3.usal.es:1935/users/1/?format=json',
        initialize: function(){},
        parse: function(response) {
          return response.routes;
        }
    });

})();
