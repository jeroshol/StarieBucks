
/*
class Ball
  constructor: (@color, @point) -> #
class Point
  constructor: (@x, @y) -> #
  bounce: -> puts "hello"
multer = (m) -> ((x) -> x*m)
tripler = multer(3)
alert tripler(10)
*/

(function() {
  var Ball,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Ball = (function(_super) {

    __extends(Ball, _super);

    function Ball(color) {
      this.color = color;
    }

    return Ball;

  })(Object);

  $(function() {
    $(".idea").draggable({
      drag: function(event, ui) {
        return $.notification("(" + ui.position.top + ", " + ui.position.left + ")", {
          position: "bottom-right"
        });
      }
    });
    $("#dialog").dialog();
    $.ajax({
      url: "batman",
      type: "POST",
      data: {
        text: "Hello you"
      },
      success: function(data) {
        return $.notification(data);
      }
    });
    return $.ajax({
      url: "ideasdata",
      dataType: "json",
      timeout: 5000,
      success: function(data) {
        $("#dialog").append("<h3>Data received</h3>\n<p>" + data.notes + "</p>");
        return _.each(data.notes, function(caption) {
          $("#ideatable").append("<div class='idea ui-widget-content'>" + caption + "</div>");
          $(".idea").dblclick(function() {
            return alert("you clickd me");
          });
          return $(".idea").draggable();
        });
      },
      error: function(jqXHR, textStatus, errorThrown) {
        return $("#dialog").append("<h3>" + textStatus + "</h3>\n<p>" + errorThrown + "</p>");
        /*
              $.notification textStatus,
                className: "jquery-notification"
                duration: 2000
                freezeOnHover: true
                hideSpeed: 250
                position: 'center'
                showSpeed: 250
                zIndex: 99999
        */
      }
    });
  });

}).call(this);
