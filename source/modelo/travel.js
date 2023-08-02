const {Schema, model} = require ("mongoose")
const travelschema = new Schema({
    lugar: String, 
    descripcion: {
        type: String,
        require: true,
    },
    historia: String,
    precio: Number,
});
module.exports = model ("travel", travelschema) 