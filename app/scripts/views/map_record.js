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

    onShow: function() {


      var mapOptions = {
        center: new google.maps.LatLng(-34.397, 150.644),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);

    },

    onClickStop: function() {
      App.Router.navigate('', { trigger: true });
    }

  });

})();
