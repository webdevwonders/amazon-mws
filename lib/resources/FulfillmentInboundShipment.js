'use strict';

var AmazonMwsResource = require('../AmazonMwsResource');
var amazonMwsMethod = AmazonMwsResource.method;

module.exports = AmazonMwsResource.extend({

    path: 'FulfillmentInboundShipment',
    search_get: amazonMwsMethod({
      method: 'GET'
    }),
    search: amazonMwsMethod({
        // Necessary to change method to POST and use body, otherwise some requests with many parcels are too long and fail
        method:'POST',
        useBody:true
    })

});
