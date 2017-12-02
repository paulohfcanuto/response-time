var api = require('../api');
var path = require('path');

module.exports  = function(app) {

    app.route('/api/v1/foto/:file')
        .get(api.foto);
};
