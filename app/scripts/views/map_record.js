/* global google, App, templates */

App.Views = App.Views || {};

(function () {
  'use strict';

  App.Views.MapRecord = Backbone.Marionette.LayoutView.extend({
    template: templates.map,

    regions: {
      content: '#content'
    },

    events: {
      'click #btn-stop': 'onClickStop'
    },

    initialize: function() {
      this.model = new App.Models.GeoLocation();
      this.listenTo(this.model, 'gelocation:save-point', this.createPolyline.bind(this));
    },

    onShow: function() {

      var mapOptions = {
        center: new google.maps.LatLng(-34.397, 150.644),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(document.getElementById('map'),
            mapOptions);
      this.map.setZoom(18);

    },

    onClickStop: function() {
      App.Router.navigate('', { trigger: true });

      this.model.save({},
      {
        url: 'http://grial3.usal.es:1935/routes/?format=json',
        success: function( response ) {
            console.log( 'Exito:' + response );
        },
        error: function( response ) {
            console.log( 'Error:' + response );
        }
      });

      App.Events.trigger('gelocation:update-line', this.model.get('position'));
    },

    createPolyline: function(point){

      var positionsArray = [];
      _.each(this.model.get('position'), function(point){
        positionsArray.push(new google.maps.LatLng(point.lat,point.lng));
      });

      var lineaDeseo = new google.maps.Polyline({
        path: positionsArray,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      lineaDeseo.setMap(this.map);

      var lastPoint = new google.maps.LatLng(point.lat,point.lng);
      this.map.setCenter(lastPoint);

    }

  });

})();
