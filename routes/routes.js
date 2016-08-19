module.exports = function(app, request) {

	app.all('*', function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		res.header('Access-Control-Allow-Headers', 'Content-Type');
		next();
	});

	app.post("/url", function(req, res) {
		request(req.body.url, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				res.json({"Url": req.body.url, "StatusCode": response.statusCode, "Body": body});
			}
		});
	});

};