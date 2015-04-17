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

          // this.save({

          // }, {
          //   url: "http://grial3.usal.es:1935/routes/",
          //   dataType: "jsonp",
          //   success: function(model, response) {
          //     console.log(response)
          //   },
          //   error: function(a, b, c) {
          //     console.log(a);
          //     console.log(b);
          //     console.log(c)
          //   }
          // });

          // // Using YQL and JSONP
          // $.ajax({
          //     url: "http://grial3.usal.es:1935/routes/",
          //     dataType: "jsonp",
          //     type: "POST",
          //     data: {
          //         format: "json"
          //     },
          //     success: function( response ) {
          //         console.log( response );
          //     },
          //     error: function( response ) {
          //         console.log( response );
          //     },
          // });

          // window.setInterval( this.getLocation.bind(this), 1000);
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
            lng: position.coords.longitude
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
