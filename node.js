const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// app.get('/hello',(req,res)=>{
// 	let a = req.query.name;
// 	b=a.split('').reverse().join('');
// 	res.send(b);
// });


// const MongoClient = require('mongodb').MongoClient;//iniciate the mongodb object
// const uri = "mongodb+srv://admin:Sudipta123@cluster0-mggyz.mongodb.net/test?retryWrites=true&w=majority";//link to the server
// const client = new MongoClient(uri, { useNewUrlParser: true });//object to expose varios method of mongodb
// client.connect(err => {
//   const collection = client.db("testdb").collection("testcollection");//colloction-object


//  //  let a = {name:'sucheta',age:'21'};
//  // let b =[ {name:'sudipta',age:'22'},
//  // {name:'madhu',age:'22'},
//  // {name:'shree',age:'21'}]
 
//  function insertOne(data){
//   collection.insertOne(data,(err,result)=>{
//  console.log(result);
//   })
// }
// function insertMany(data){
// collection.insertMany(data,(err,result)=>{
// console.log(result);
//   })
// }
// // let checkuser={
// // 	username:'suchetakundu',
// // 	password:'sucheta24'
// // }

// // let upadateobj={
// // 	"username":"sudipta"
// // }
// // let changes = {
// // 	'$set':{"username":"suchetakundu"}
// function find(data){
// collection.find(data).toArray((err,result)=>{
//   console.log(result);
// })
// }
// function deleteData(data){
// collection.deleteOne(data,(err,result)=>{
//   console.log(result);
// })
// }
// function update(data,changes){
//   let dataChange = {
//     '$set':changes
//   };
//   collection.updateOne(data,dataChange,(err,result)=>{
//     console.log(result)
//   })
// }

// let a = { "name":"smsr"}
// let b = { "name":"sudipta"}
// //update(a,b);
// insertOne(a);
// update(a,b);
// find(a);
// // 	if(result.length!=0){
// // 	console.log('user found');
// // }
// // else
// // {
// // 	console.log('user not found');
// // }
// // });
//   // console.log(collection);
//   // perform actions on the collection object
//   client.close();
// });


// app.listen(1234, () => {
//     console.log("Server on 1234");
// });


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:Sudipta123@cluster0-j7ytk.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("testdb").collection("testcollection");


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://admin:Sudipta123@testapp-cljwu.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err=>{

  const collection = 
  client.db("testdb").collection("testcollection");

  function insertOne(data){
    collection.insertOne(data,(err, result)=>{
      console.log(result);
    })
  }

  function insertMany(data){
    collection.insertMany(data,(err, result)=>{
      console.log(result);
    })
  }

  function find(data){
    collection.find(data).toArray((err, result) => {
      console.log(result);
    })
  }

  function deleteData(data){
    collection.deleteOne(data, (err, result) => {
      console.log(result)
    })
  }

  function update(data,changes){
    let dataChange = {
      '$set': changes
    };
    collection.updateOne(data, dataChange, (err, result) => {
      console.log(result)
    })
  }

  let a={"name":"sms"}
  let c={"name":"Sudipta"}
  let d={"name":"SudiptaRocco"}
  // insertOne(a);
  update(c,d);
  // deleteData(a);

  client.close();

});


app.listen(1234, () => {
    console.log("Server on 1234");
});
