const {Schema, model} = require("mongoose")

const postSchema = new Schema({
    district: {
        type:String,
        enum:["Bektemir", "Mirobod", "Mirzo Ulug'bek", "Sergeli", "Olmazor", "UchTepa", "Shayxontohur", "Yashnobod", "Chilonzor", "Yunusobod", "Yakkasaroy"],
        required:true
    },
    street:{
        type:String,
        required:true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = model("Post",postSchema)