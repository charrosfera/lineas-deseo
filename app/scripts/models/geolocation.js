/*global App, Backbone*/

App.Models = App.Models || {};

(function () {
    'use strict';

    App.Models.GeoLocation = Backbone.Model.extend({
        defaults:{
          position: [],
          transport: ''
        },

        initialize: function(){

          window.setInterval( this.getLocation.bind(this), 1000);
        },
        getLocation: function(){

          if (navigator.geolocation){
              navigator.geolocation.getCurrentPosition( this.savePoint.bind(this));
          }

        },

        savePoint: function(position) {

          var array = this.get('position');

          var point = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            elevation: null
          };

          $.localStorage.set('App::LineaDeseo:' + this.get('timestamp'), {
            position: array
          });

          array.push(point);
          this.set('position', array);

          this.trigger('gelocation:save-point', point);
        }
    });

})();
