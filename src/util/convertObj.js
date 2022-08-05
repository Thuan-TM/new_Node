module.exports = {
    multi: function(mongooseArrays){
        return mongooseArrays.map(mongoose => mongoose.toObject())
    },
    single: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose
    }
}