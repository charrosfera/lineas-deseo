/* global App, templates */

App.Views = App.Views || {};

(function () {
  'use strict';

  App.Views.Visualization = Backbone.Marionette.LayoutView.extend({
    template: templates.visualization,
    count: 0,

    events: {
      'click .js-btn-back': 'goBack'
    },

    regions: {
      header: '#header',
      content: '#content'
    },

    initialize: function() {
      this.collection = new App.Collection.Routes();
      this.collection.fetch({
        success: this.showRoutes.bind(this)
      });

      $('body').removeClass().addClass('body-info');
    },

    showRoutes: function() {
      this.bounds = new google.maps.LatLngBounds();

      _.each(this.collection.models, function(route) {
        this.createPolyline(route.get("position"));
      }.bind(this));

      $('.js-count-lines').html('Hay ' + this.count + ' Lineas de Deseo guardadas');
      this.map.fitBounds(this.bounds);
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
        title: 'Visualizar'
      }));
    },

    goBack: function(e) {
      e.preventDefault();
      window.history.back();
    },

    createPolyline: function(positions){

      if (positions.length){
        this.count += 1;

        var positionsArray = [];
        _.each(positions, function(point){
          positionsArray.push(new google.maps.LatLng(point.latitude,point.longitude));
          this.bounds.extend(new google.maps.LatLng(point.latitude,point.longitude));
        }.bind(this));

        var lineaDeseo = new google.maps.Polyline({
          path: positionsArray,
          geodesic: true,
          strokeColor: '#00AEA9',
          strokeOpacity: 0.4,
          strokeWeight: 10
        });
        lineaDeseo.setMap(this.map);

        var lastPoint = new google.maps.LatLng(positions[positions.length-1].latitude,positions[positions.length-1].longitude);

        console.log('polyline');
      }


    }

  });

})();
