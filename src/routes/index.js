const news = require('./news')
const site = require('./site')

module.exports = function route(app){

    app.use('/news',news)
    app.use('/',site)

}