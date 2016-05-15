var webpack = require('webpack');
module.exports = {
    entry : {
        entry : 'entry.js'
    },
    output : {
        path : './dist',
        filename : '[name].js'
    },
    module : {
        loaders : []
    },
    plugins : [
        new webpack.optimize.CommonChunkPlugin('common.js')
    ],
    resolve :{
        extension : ['','js','.jsx']
    }
}