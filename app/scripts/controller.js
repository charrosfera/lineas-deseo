/* global App */

(function () {
  'use strict';

  App.Controller = {
    routeIndex: function(){

      var homepageView;

      homepageView = new App.Views.Homepage();
      App.Main.mainRegion.show(homepageView);
      $.localStorage.remove('App::App::Game');

    }

  };

})();
