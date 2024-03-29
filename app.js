(function() {
  var app, express, routes;

  express = require("express");

  routes = require("./routes");

  app = module.exports = express.createServer();

  app.listen(7321);

  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

  app.configure(function() {
    app.set("views", __dirname + "/views");
    app.set("view engine", "jade");
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    return app.use(express.static(__dirname + "/public"));
  });

  app.configure("development", function() {
    return app.use(express.errorHandler({
      dumpExceptions: true,
      showStack: true
    }));
  });

  app.configure("production", function() {
    return app.use(express.errorHandler());
  });

  app.get("/", routes.ideas);

  app.get("/ideas", routes.ideas);

  app.get("/ideasdata", routes.ideasdata);

  app.get("/batman", routes.batman);

  app.get("/car", function(req, res) {
    return res.send({
      color: "green"
    });
  });

}).call(this);
