import mongoose from 'mongoose'
const productSchema = new mongoose.Schema(
    {
        title:{ type: String, required: true},
        description: { type: String, default: ''},
        price: { type: Number, requried: true},
        image: { type: String, default:''},
        category:{type: String, default:''},
        storck:{ type: Number, default:0},
    },
    {timestamps:true}
)
export const Product = mongoose.model('Product', productSchema);