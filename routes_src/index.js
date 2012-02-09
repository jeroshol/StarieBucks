(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  exports.index = function(req, res) {
    return res.render("index", {
      title: "Kraken: Express",
      menu: ["Home", "Browse", "Help"],
      makeitem: function(x) {
        return "<a>" + x + "</a>";
      }
    });
  };

}).call(this);
