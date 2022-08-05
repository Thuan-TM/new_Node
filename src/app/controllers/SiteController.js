
const test = require('../../data/model/test')
const course = require('../../data/model/course')

class NewsController{

    home(req,res){
        res.render('home')
    }
    search(req,res,next){
        test.find({})
            .then(test => res.json(test))
            .catch(next)
    }
}

module.exports =  new NewsController(); 