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

          var array = this.get('points');

          if (navigator.geolocation){
              navigator.geolocation.getCurrentPosition(function(position){
                  array.push({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    date: new Date().getTime()
                  });
              }.bind(this));
          }

          this.set('points', array);

          $.localStorage.set('App::LineaDeseo:' + this.get('timestamp'), {
            points: array
          });

         },
    });

})();
