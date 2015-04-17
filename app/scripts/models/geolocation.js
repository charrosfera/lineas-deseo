/*global App, Backbone*/

App.Models = App.Models || {};

(function () {
    'use strict';

    App.Models.GeoLocation = Backbone.Model.extend({
        defaults:{
          points: [],
          timestamp: new Date().getTime()
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

          var array = this.get('points');

          var point = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            date: new Date().getTime()
          };

          $.localStorage.set('App::LineaDeseo:' + this.get('timestamp'), {
            points: array
          });

          array.push(point);
          this.set('points', array);

          this.trigger('gelocation:save-point', point);
        }
    });

})();
