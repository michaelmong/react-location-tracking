# react-location-tracking

React part of a project to keep tracking the location and display to another client on google map

This [repo](https://github.com/michaelmong/react-location-tracking "react-location-tracking") has been created to keep tracking the location of users and display to another client on google map. Frontend composes of GetLocation.js and DisplayLocation.js, which is not yet finished, and not yet integrated with Facebook SSO authentication system for automatically identifying user ID.

  1. ``GetLocation.js``
  
      Web UI from this JS file provides location tracking periodically, after Facebook SSO login (not yet finished) to identify user ID. Every 5 seconds the location coordinates (Lat/Long) will be refreshed and sent to backend, ``UpdateLocation.js`` Node.JS file through REST API. Please see [repo](https://github.com/michaelmong/nodejs-location-tracking "nodejs-location-tracking")(Not yet finished).
      
      There is no need to use Hook actually to update the Lat/Long to backend. However, Hook is used in this JS to notify users the information, which is sent to backend, on the Web UI. 
      
      _setInterval_ method is used to periodically execute getCurrentPosition function in javascript. It is not OK to put this _setInterval_ function anyway but in useEffect. Otherwise, callback function in _setInterval_ will be called unpredictably.
  2. ``DisplayLocation.js``

      Under construction.
  3. ``loginFackbookSSO.js``

      Under construction.
  