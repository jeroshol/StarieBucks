(function() {
  var Employee, root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  Employee = (function() {

    function Employee(id, name) {
      this.id = id;
      this.name = name;
    }

    Employee.prototype.makeIdea = function(caption, desc, color) {
      var idea;
      if (color == null) color = "red";
      return idea = new Idea({
        caption: caption,
        desc: desc,
        color: color,
        author: this.name
      });
    };

    return Employee;

  })();

  exports.batman = function(req, res) {
    return res.send("Hello batman");
  };

}).call(this);
