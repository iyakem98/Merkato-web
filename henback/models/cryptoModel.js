import mongoose from "mongoose";

const cryptoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    
},
{
    timestamps: true,
}
)

const Crypto = mongoose.model('Crypto', bankSchema)

export default Crypto