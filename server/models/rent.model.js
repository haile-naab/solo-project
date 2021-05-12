const mongoose= require('mongoose');
const RentSchema = new mongoose.Schema({
    manfacturer : {
        type: String,
         required: [true, "Manfacturer is required "],
         minlength : [ 3, " your name must be a  3 character long "  ]},



         model : {
            type: String,
             required: [true, "Model is required "],
             minlength : [ 3, " your name must be a  3 character long "  ]},

             year : {
                 
                type: Number,
                required: [true, "Year is required "],
               
            },

         color : {
                type: String,
                 required: [true, "Color is required "],
                 minlength : [ 2, " your name must be a  3 character long "  ]},


         
         image : {type: String,
            required: [true, "image is required "]},
         rentstate : { type: String },



    
    
    
}, { timestamps: true });

const Rent = mongoose.model('rent',RentSchema)
module.exports = Rent
