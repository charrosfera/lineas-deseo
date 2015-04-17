/* global google, App, templates */

App.Views = App.Views || {};

(function () {
  'use strict';

  App.Views.MapRecord = Backbone.Marionette.LayoutView.extend({
    template: templates.map,

    regions: {
      header: '#header',
      content: '#content'
    },

    events: {
      'click #btn-stop': 'onClickStop',
      'click .js-btn-back': 'onClickStop'
    },

    initialize: function() {
      $('body').removeClass().addClass("body-home");
      this.model = new App.Models.GeoLocation();
      this.listenTo(this.model, 'gelocation:save-point', this.createPolyline.bind(this));
    },

    onShow: function() {

      var mapOptions = {
        center: new google.maps.LatLng(40.9660954,-5.6804497),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(document.getElementById('map'),
            mapOptions);
      this.map.setZoom(10);

      this.header.show(new App.Views.Header({
        title: 'map'
      }));

    },

    onClickStop: function() {
      App.Router.navigate('inicio', { trigger: true });

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
        strokeColor: '#f18700',
        strokeOpacity: 1.0,
        strokeWeight: 6
      });
      lineaDeseo.setMap(this.map);

      var lastPoint = new google.maps.LatLng(point.latitude,point.longitude);
      this.map.setCenter(lastPoint);
      this.map.setZoom(17);

    }

  });

})();
