var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//创建schema模型
var goodsSchema = new Schema({
    'productId': String,
    'productName': String,
    'salePrice': Number,
    'productImage': String,
    'productNum': Number
})

mongoose.model('Goods', goodsSchema);