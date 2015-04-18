/* global App, Marionette */

(function () {
  'use strict';

  App.Router = new Marionette.AppRouter({
    controller: App.Controller,
    appRoutes: {
      ''               : 'routeInit',
      'inicio'         : 'routeIndex',
      'informacion'    : 'routeInfo',
      'como-te-mueves' : 'routeInitPage',
      'guardando-ruta' : 'routeMapRecord',
      'visualizar-rutas': 'routeVisualize',
      'exito': 'routeSuccess',
    }
  });

})();
