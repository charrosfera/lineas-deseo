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
      App.Events.trigger('gelocation:update-line', this.model.get('points'));
    },

    createPolyline: function(point){

      var positionsArray = [];
      _.each(this.model.get('points'), function(point){
        positionsArray.push(new google.maps.LatLng(point.lat,point.lng));
      });

      // new google.maps.Marker({
      //   position: myLatlng,
      //   map: this.map
      // });
      //

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
