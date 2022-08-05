const course = require('../../data/model/course')
const {multi , single} = require('../../util/convertObj')

class NewsController{
    

    news(req,res,next){
        course.find({})
        
            .then(course => res.render('news',{course: multi(course)}))
            .catch(next)
    }
    show(req,res,next){
        course.findOne({name: req.params.slug })
            .then((data)=> res.json(data))
            .catch(next)  
    }

    create(req,res,next) {
        res.render('news/create')
    }

    store(req,res,next) {
        course.create(req.body)
            .then(()=> res.redirect('/news'))
    }

    edit(req,res,next) {
        course.findOne({slug: req.params.slug} )
            .then((data)=> res.render('news/edit', {data: single(data)}) )
            .catch(next)
    }
    update(req,res,next){
        course.updateOne({slug: req.params.slug} , req.body)
            .then(()=> res.redirect('/news'))
            .catch(next)
    }
    delete(req,res,next){
        course.deleteOne({_id: req.params.slug})
            .then(() => res.redirect('back'))
            .catch(next)
    }   
}
 
module.exports =  new NewsController(); 
