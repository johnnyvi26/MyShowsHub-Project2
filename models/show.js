const mongoose = require('mongoose'); // require mongoose
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema construtor

// Show Schema
const showSchema = new Schema(
    {
        title:{ type: String, required:true },
        description:{ type: String, required:true },
        sources:{ type: String, required:false },
    }
);

// Comment Model
const Show = mongoose.model('Show', showSchema);

// Export Show Model
module.exports = Show;