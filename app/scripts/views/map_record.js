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
      this.listenTo(this.model, 'gelocation:save-point', this.setMarker.bind(this));
    },

    onShow: function() {

      var mapOptions = {
        center: new google.maps.LatLng(-34.397, 150.644),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(document.getElementById('map'),
            mapOptions);

    },

    onClickStop: function() {
      App.Router.navigate('', { trigger: true });
    },

    setMarker: function(point){

      var myLatlng = new google.maps.LatLng(point.lat,point.lng);
      new google.maps.Marker({
        position: myLatlng,
        map: this.map
      });

      this.map.setCenter(myLatlng);
      this.map.setZoom(18);

    }

  });

})();
