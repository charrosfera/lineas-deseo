/*global App, Backbone*/

App.Models = App.Models || {};

(function () {
    'use strict';

    App.Models.GeoLocation = Backbone.Model.extend({
        initialize: function(){
          window.setInterval( this.getLocation.bind(this), 1000);
        },
        getLocation: function(){
          var that = this;
          if (navigator.geolocation){
              navigator.geolocation.getCurrentPosition(function(position){
                  that.set('lat', position.coords.latitude);
                  that.set('lng', position.coords.longitude);
              });
          }else{
              that.set('lat', 0);
              that.set('lng', 0);
          }

          console.log('Location: ' + this.get('lat') + ' - ' + this.get('lng'));
         },
    });

})();
