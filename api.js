var http = require("http");
var data = require("./data/inventory");


//Create http server 
http.createServer(function(req,res){
	//index uri
	if(req.url === "/"){
		//status code, data type of json
		res.writeHead(200,{"Content-Type":"text/json"});
		//response ends with sharing JSON data to request
		res.end(JSON.stringify(data));	

	}
	else if(req.url === "/instock"){
	
		listOfStock(res);

	}
	else{
		//status code of 404, data type of text
		res.writeHead(404,{"Content-Type":"text/plain"});
		//response ends with sharing JSON data to request
		res.end("Page not Found");	

	}


}).listen(2000);

//Creating Instock method

function listOfStock(res){
	//return in stock items only
	var inStock = data.filter(function(item){
		return item.avail === "In Stock";
		
	});

	res.end(JSON.stringify(inStock));
}

//Terminal notification that server started
console.log("Server started port 2000");
