/* global  App */

(function () {
  'use strict';

  App.Events = _.extend({}, Backbone.Events);

  App.Controller = {
    routeInit: function() {
      var initPageView;
      initPageView = new App.Views.Init();
      App.Main.mainRegion.show(initPageView);
    },

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
    },

    routeVisualize: function() {
      var visualization = new App.Views.Visualization();
      App.Main.mainRegion.show(visualization);
    },

    routeSuccess: function() {
      var success = new App.Views.Success();
      App.Main.mainRegion.show(success);
    }

  };

})();
