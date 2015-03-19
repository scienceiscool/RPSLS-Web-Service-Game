// Node.JS API Documentation
// https://nodejs.org/api/http.html

// I looked at the nudge.js file from a previous homework for inspiration:
// https://gist.github.com/ProfAvery/3358aafcebcb57258f03#file-nudge-js

// To learn about the game's rules I went to:
// http://www.samkass.com/theories/RPSSL.html

//#!/kathy/bin/env node

"use strict"; // Stay on JavaScript's good side :D

function getRandomArbitrary(min, max) {
	/*I found out about the following random function call from:
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random*/
	return Math.random() * (max - min) + min; // Math is a built-in Javascript object
}

var http = require("http"),
	index = 0,
	/*I forgot the exact syntax for an array, so I looked it up from:
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array*/
	choiceArray = ["rock", "paper", "scissors", "lizard", "spock"],
	winCount = 0,
	loseCount = 0,
	tieCount = 0,
	outcome;

var server = http.createServer( function (req, res) {
	/*I got the idea to write the following two lines for testing purposes from:
	http://www.learnallthenodes.com/episodes/3-beginning-routing-in-nodejs*/
	console.log(req.url);
	console.log(req.method);

	//res.writeHead(200, {"Content-Type": "text/html"});

	if (req.url === "/play/rock") {
		if (req.method === "POST") {
			//var body = ""

			//req.on("data", function (chunk) {
			//	body += chunk;
			/*I got the idea for the following line for the purposes of testing from:
			http://www.learnallthenodes.com/episodes/3-beginning-routing-in-nodejs*/
			//	console.log("chunk: ", chunk);
			//});

			req.on("end", function () {
				/*I got the idea for the following line, and one after the next line from:
				http://www.learnallthenodes.com/episodes/3-beginning-routing-in-nodejs*/
				//console.log("Handling the input");
				res.writeHead(200, {"Content-Type": "application/json"});

				//res.write("Handling it");

				index = getRandomArbitrary(0, 4);

				if (choiceArray[index] === 0) { // rock, rock
					tieCount++;
					outcome = "tie";
				} else if (choiceArray[index] === 1){ // rock, paper
					loseCount++;
					outcome = "lose";
				} else if (choiceArray[index] === 2){ // rock, scissors
					winCount++;
					outcome = "win";
				} else if (choiceArray[index] === 3){ // rock, lizard
					winCount++;
					outcome = "win";
				} else if (choiceArray[index] === 4){ // rock, spock
					loseCount++;
					outcome = "lose";
				}

				/*if (choiceArray[index] === 0 && (body === 'spock' || body === 'paper')) {
					winCount++;
					outcome = "win";
				} else if (choiceArray[index] === 1 && (body === 'lizard' || body === 'scissors')){
					winCount++;
					outcome = "win";
				} else if (choiceArray[index] === 2 && (body === 'spock' || body === 'rock')){
					winCount++;
					outcome = "win";
				} else if (choiceArray[index] === 3 && (body === 'rock' || body === 'scissors')){
					winCount++;
					outcome = "win";
				} else if (choiceArray[index] === 4 && (body === 'paper' || body === 'lizard')){
					winCount++;
					outcome = "win";
				} else if (choiceArray[index] === body){
					tieCount++;
					outcome = "tie";
				} else{
					loseCount++;
					outcome = "loss";
				}*/

				//jsonStr = '{' +
				//	'{"outcome": "outcome"},' +
				//	'{"wins": "winCount"},' +
				//	'{"losses": "loseCount"},' +
				//	'{"ties": "tieCount"}' +
				//'}';
				//jsonObj = JSON.parse(jsonStr);
				//res.write(JSON.stringify(jsonObj));

				res.write('{\n');
				res.write('outcome: \"' + outcome + '\",\n');
				res.write('wins: ' + winCount + ',\n');
				res.write('losses: ' + loseCount + ',\n');
				res.write('ties: ' + tieCount + ',\n');
				res.write('}\n');

				res.end();
			});
		} else {
			res.writeHead(200, {"Content-Type": "text/html"});
			
			res.write("<!doctype html>\n");
			res.write("<html lang='en'>\n");
			res.write("<head>\n");
			res.write("<meta charset='utf-8'>\n");
			res.write("<title>Rock Paper Scissors Lizard Spock</title>\n");
			res.write("</head>\n");
			res.write("<body>\n");
			res.write("<form name='rock' action='/play/rock' method='post'>\n");
			/*To refresh myself on the following input tag (a button), I went to:
			https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input*/
			res.write("<input type='submit' value='rock'>");
			res.write("</body>\n");
			res.write("</html>\n");
			res.write("</form>\n");

			res.end();
		}
	} else if (req.url === "/play/paper") {
		if (req.method === "POST") {
			var body = ""

			req.on("data", function (chunk) {
				body += chunk;
				console.log("chunk: ", chunk);
			});

			req.on("end", function () {
				//console.log("Handling the input");
				res.writeHead(200, {"Content-Type": "text/plain"});

				//res.write("Handling it");

				index = getRandomArbitrary(0, 4);

				if (choiceArray[index] === 0) { // paper, rock
					winCount++;
					outcome = "win";
				} else if (choiceArray[index] === 1){ // paper, paper
					tieCount++;
					outcome = "tie";
				} else if (choiceArray[index] === 2){ // paper, scissors
					loseCount++;
					outcome = "lose";
				} else if (choiceArray[index] === 3){ // paper, lizard
					loseCount++;
					outcome = "lose";
				} else if (choiceArray[index] === 4){ // paper, spock
					winCount++;
					outcome = "win";
				}

				res.write('{\n');
				res.write('outcome: \"' + outcome + '\",\n');
				res.write('wins: ' + winCount + ',\n');
				res.write('losses: ' + loseCount + ',\n');
				res.write('ties: ' + tieCount + ',\n');
				res.write('}\n');

				res.end();
			});
		} else {
			res.writeHead(200, {"Content-Type": "text/html"});
			
			res.write("<!doctype html>\n");
			res.write("<html lang='en'>\n");
			res.write("<head>\n");
			res.write("<meta charset='utf-8'>\n");
			res.write("<title>Rock Paper Scissors Lizard Spock</title>\n");
			res.write("</head>\n");
			res.write("<body>\n");
			res.write("<form name='paper' action='/play/paper' method='post'>\n");
			res.write("<input type='submit' value='paper'>");
			res.write("</body>\n");
			res.write("</html>\n");
			res.write("</form>\n");

			res.end();
		}
	} else if (req.url === "/play/scissors"){
		if (req.method === "POST") {
			var body = ""

			req.on("data", function (chunk) {
				body += chunk;
				console.log("chunk: ", chunk);
			});

			req.on("end", function () {
				//console.log("Handling the input");
				res.writeHead(200, {"Content-Type": "text/plain"});

				//res.write("Handling it");

				index = getRandomArbitrary(0, 4);

				if (choiceArray[index] === 0) { // scissors, rock
					loseCount++;
					outcome = "lose";
				} else if (choiceArray[index] === 1){ // scissors, paper
					winCount++;
					outcome = "win";
				} else if (choiceArray[index] === 2){ // scissors, scissors
					tieCount++;
					outcome = "tie";
				} else if (choiceArray[index] === 3){ // scissors, lizard
					winCount++;
					outcome = "win";
				} else if (choiceArray[index] === 4){ // scissors, spock
					loseCount++;
					outcome = "lose";
				}

				res.write('{\n');
				res.write('outcome: \"' + outcome + '\",\n');
				res.write('wins: ' + winCount + ',\n');
				res.write('losses: ' + loseCount + ',\n');
				res.write('ties: ' + tieCount + ',\n');
				res.write('}\n');

				res.end();

			});
		} else {
			res.writeHead(200, {"Content-Type": "text/html"});
			
			res.write("<!doctype html>\n");
			res.write("<html lang='en'>\n");
			res.write("<head>\n");
			res.write("<meta charset='utf-8'>\n");
			res.write("<title>Rock Paper Scissors Lizard Spock</title>\n");
			res.write("</head>\n");
			res.write("<body>\n");
			res.write("<form name='scissors' action='/play/scissors' method='post'>\n");
			res.write("<input type='submit' value='scissors'>");
			res.write("</body>\n");
			res.write("</html>\n");
			res.write("</form>\n");

			res.end();
		}
	} else if (req.url === "/play/lizard") {
		if (req.method === "POST") {
			var body = ""

			req.on("data", function (chunk) {
				body += chunk;
				console.log("chunk: ", chunk);
			});

			req.on("end", function () {
				//console.log("Handling the input");
				res.writeHead(200, {"Content-Type": "text/plain"});
				
				//res.write("Handling it");

				index = getRandomArbitrary(0, 4);

				if (choiceArray[index] === 0) { // lizard, rock
					loseCount++;
					outcome = "lose";
				} else if (choiceArray[index] === 1){ // lizard, paper
					winCount++;
					outcome = "win";
				} else if (choiceArray[index] === 2){ // lizard, scissors
					loseCount++;
					outcome = "lose";
				} else if (choiceArray[index] === 3){ // lizard, lizard
					tieCount++;
					outcome = "tie";
				} else if (choiceArray[index] === 4){ // lizard, spock
					winCount++;
					outcome = "win";
				}

				res.write('{\n');
				res.write('outcome: \"' + outcome + '\",\n');
				res.write('wins: ' + winCount + ',\n');
				res.write('losses: ' + loseCount + ',\n');
				res.write('ties: ' + tieCount + ',\n');
				res.write('}\n');

				res.end();

			});
		} else {
			res.writeHead(200, {"Content-Type": "text/html"});
			
			res.write("<!doctype html>\n");
			res.write("<html lang='en'>\n");
			res.write("<head>\n");
			res.write("<meta charset='utf-8'>\n");
			res.write("<title>Rock Paper Scissors Lizard Spock</title>\n");
			res.write("</head>\n");
			res.write("<body>\n");
			res.write("<form name='lizard' action='/play/lizard' method='post'>\n");
			res.write("<input type='submit' value='lizard'>");
			res.write("</body>\n");
			res.write("</html>\n");
			res.write("</form>\n");

			res.end();
		}
	} else if (req.url === "/play/spock") {
		if (req.method === "POST") {
			var body = ""

			req.on("data", function (chunk) {
				body += chunk;
				console.log("chunk: ", chunk);
			});

			req.on("end", function () {
				//console.log("Handling the input");
				res.writeHead(200, {"Content-Type": "text/plain"});
				
				//res.write("Handling it");

				index = getRandomArbitrary(0, 4);

				if (choiceArray[index] === 0) { // spock, rock
					winCount++;
					outcome = "win";
				} else if (choiceArray[index] === 1){ // spock, paper
					loseCount++;
					outcome = "lose";
				} else if (choiceArray[index] === 2){ // spock, scissors
					winCount++;
					outcome = "win";
				} else if (choiceArray[index] === 3){ // spock, lizard
					loseCount++;
					outcome = "lose";
				} else if (choiceArray[index] === 4){ // spock, spock
					tieCount++;
					outcome = "tie";
				}

				res.write('{\n');
				res.write('outcome: \"' + outcome + '\",\n');
				res.write('wins: ' + winCount + ',\n');
				res.write('losses: ' + loseCount + ',\n');
				res.write('ties: ' + tieCount + ',\n');
				res.write('}\n');

				res.end();

			});
		} else {
			res.writeHead(200, {"Content-Type": "text/html"});
			
			res.write("<!doctype html>\n");
			res.write("<html lang='en'>\n");
			res.write("<head>\n");
			res.write("<meta charset='utf-8'>\n");
			res.write("<title>Rock Paper Scissors Lizard Spock</title>\n");
			res.write("</head>\n");
			res.write("<body>\n");
			res.write("<form name='spock' action='/play/spock' method='post'>\n");
			res.write("<input type='submit' value='spock'>");
			res.write("</body>\n");
			res.write("</html>\n");
			res.write("</form>\n");

			res.end();
		}
	}
});

server.listen(3000);
console.log("Server running on port 3000");
