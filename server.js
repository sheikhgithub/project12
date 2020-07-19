// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();//express library initialize

// app.use(function(req,res,next){
// 	res.header("Access-Control-Allow-Origin","*");//to grant acess to all ip
// 	res.header("Access-Control-Allow-Origin","Origin, X-Requested-With, Content-Type, Accept");
// 	//res.header("Access-Control-Allow-Origin","localhost:4200");//to grant acess to all ip
// 	next();
// });//to call this server 3000 by another server request

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());


// app.get('/',(req,res) => {
// res.send('Welcome to my server');
// }); //req-request, res-response;

// app.get('/abc',(req,res) => {
// res.send('good bye');
// }); //req-request, res-response; /abc means localhost:3000/abc in server

// app.get('/def',(req,res) => {
// res.status(404).send('errors');
// }); //req-request, res-response; /404 means error type in server

// app.get( '/login',(req,res)=> {
// 	if (req.query.name)
// 	res.status(200).send('user:'+req.query.name)
// 	else
// 	res.status(404).send('no data');
// }); 

// app.get('/number',(req,res) => {
// 	if(req.query.number){
// 		var k=parseInt(req.query.number);
// 		var a = {
// 			"number":k,
// 			"square":k*k,
// 			"cube":k*k*k
// 		}
// 		console.log(k);
// 		res.status(200)
// 		.send(a);
// 	}
// 	else
// 		res.status(404).send('no data');
// });

// app.post( '/login',(req,res)=> {
// 	let response={};
// 	if(
// 		req.body.user=="tunir" && 
// 		req.body.pass=="pass")
// 	{
// 		response={
// 			"status":"ok"
// 		}
// 	}
// 	else
// 	{
// 		response={
// 			"status":"fail"
// 		}
// 	}
// 	// let a={
// 	// 	"data";"hello"
// 	// }
// 	res.status(200).send(response);
// }); 

// app.listen(3000, () => {
// console.log("Server on 3000");
// 	}); //Always keep at the end of this page

/*Tunir sir code of server.js*/

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

app.get('/', (req, res) => {
	res.send('Welcome to My Server');
});

app.post('/login', (req, res) => {
	let response={};
	if(
		req.body.user=="tunir" && 
		req.body.pass=="pass"
	){
		response={
			"status":"ok"
		}
	}
	else{
		response={
			"status":"fail"
		}
	}
	res.status(200).send(response);
});

app.get('/number', (req, res) => {
	if(req.query.number){
		var k=parseInt(req.query.number);
		var a = {
			"number":k,
			"square":k*k,
			"cube":k*k*k
		}
		console.log(k);
		res.status(200)
		.send(a);
	}
	else
		res.status(404).send('no data');
});


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://admin:Sudipta123@cluster0-j7ytk.mongodb.net/test?retryWrites=true&w=majority";//collection to database
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => { //for checking connection error
//   const collection = client.db("testdb").collection("testcollection"); //here collection is an object
//   // perform actions on the collection object
//   //console.log(collection);
//   //collection.findOne({},function(err,res){
//   	collection.find({"password":"sudipta1"}).toArray((err,res)=>{
//   		console.log(res);
//   		for(let i=0;i<res.length;i++){
//   			if(res[i].username=="sudipta"){
//   				console.log('found');
//   				break;
//   		   }
//   		}
//   	});
  	// collection.find({"username":"rajeev","password":"password"}).toArray((err,res)=>{
   //  if(res.length!=0)
   //  	console.log('user found');
   //  else
   //  	console.log('user not found');
  	// });
  // 	if(err)
  // 		throw err;
  // 	else
  // 		console.log(res);
  // }); //Here point arrow function does not work
//   client.close();
// });

app.get('/hello',(req,res)=>{
	let a = req.query.name;
	b=a.split('').reverse().join('');
	//res.send(b);
	let response={};
	if(a==b)
	{
		response={
			"status":"it is a palindrome"
		}

	}
	else
	{
		response={
			"status":"it is not a palindrome"
		}
	}
    res.status(200).send(response);
});

app.post('/palin',(req,res)=>{
	if(req.query.palindrome){
		var ab=req.query.palindrome;
		var b = ab.split('').reverse().join('');
		console.log(b);
		res.status(200)
		.send(b);
	}
	else
		res.status(404).send('no data');
});

app.listen(1234, () => {
    console.log("Server on 1234");
});