/* global App, Marionette */

(function () {
  'use strict';

  App.Router = new Marionette.AppRouter({
    controller: App.Controller,
    appRoutes: {
      ''              : 'routeIndex',
      'informacion'   : 'routeInfo',
      'como-te-mueves' : 'routeInitPage',
      'guardando-ruta': 'routeMapRecord'
    }
  });

})();
