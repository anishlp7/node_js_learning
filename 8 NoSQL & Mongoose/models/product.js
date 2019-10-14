const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  imageUrl:{
    type:String,
    required:true
  }  
})

// const mongoDB  = require('mongodb');
// const getDb = require('../util/database').getDb;

// class Product {
//   constructor(title,price,description,imageUrl,id){
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this._id = id ? new mongoDB.ObjectId(id) : null;
//   }

//   save(){
//     let db = getDb();
//     let dbOp;

//     if(this._id){
//       dbOp = db.collection('products')
//       .updateOne({_id: this._id},{$set: this})
//     }else{
//       dbOp = db.collection('products')
//       .insertOne(this);
//     }
//     return dbOp
//     .then(result => console.log(result)).catch(err => console.log(err))
//   }

//   static fetchAll() {
//     let db = getDb();
//     return db.collection('products').find().toArray().then(products => {
//       console.log(products);
//        return products;
//     }); 
//   }

//   static findById(prodId){
//     let db =getDb();

//     return db.collection('products').find({_id: new mongoDB.ObjectId(prodId)}).next().then(product => {
//       console.log(product);
//       return product;
//     })
//   }

//   static deleteById(prodId){
//     let db = getDb();
//     return db
//     .collection('products')
//     .deleteOne
//     ({_id: new mongoDB.ObjectId(prodId) })
//     .then(result => console.log('Deleted!!')).catch(err => console.log(err))
//   }
// }



// module.exports = Product;
