import mongoose from "mongoose";

const bankSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    name: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },
    numShares: {
        type: Number,
        required: true
    },

    sharePrice: {
        type: Number,
        required: true
    },
    values: {
        type: Array,
        required: true,
    }
    
},
{
    timestamps: true,
}
)

const Bank = mongoose.model('Bank', bankSchema)

export default Bank