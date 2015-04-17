/* global  App */

(function () {
  'use strict';

  App.Controller = {
    routeIndex: function(){

      var homepageView;
      homepageView = new App.Views.Homepage();
      App.Main.mainRegion.show(homepageView);

    },

    routeInfo: function() {
      var infoPage = new App.Views.Info();
      App.Main.mainRegion.show(infoPage);
    },

    routeInitPage: function() {
      var startPage = new App.Views.Start();
      App.Main.mainRegion.show(startPage);
    },

    routeMapRecord: function() {
      var mapRecordPage = new App.Views.MapRecord();
      App.Main.mainRegion.show(mapRecordPage);
    }

  };

})();
