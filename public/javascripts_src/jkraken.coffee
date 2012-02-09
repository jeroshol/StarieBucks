###
class Ball
  constructor: (@color, @point) -> #
class Point
  constructor: (@x, @y) -> #
  bounce: -> puts "hello"
multer = (m) -> ((x) -> x*m)
tripler = multer(3)
alert tripler(10)
###

class Ball extends Object
  constructor: (color) ->
    @color = color
  

$ ->
  $(".idea").draggable
    drag: (event, ui) -> 
      $.notification "(#{ui.position.top}, #{ui.position.left})",
        position: "bottom-right"
  # $(".note").resizable()
    
  $("#dialog").dialog() # "option", "title", 'Dialog Title'

  $.ajax
    url: "batman"
    type: "POST"
    data:
      text: "Hello you"
    success: (data) ->
      $.notification data

  $.ajax
    url: "ideasdata"
    dataType: "json"
    # cache: yes
    timeout: 5000 #ms
    success: (data) ->
      # alert "data received!"
      $("#dialog").append """
        <h3>Data received</h3>
        <p>#{data.notes}</p>
      """
      _.each data.notes, (caption) ->
        $("#ideatable").append("<div class='idea ui-widget-content'>"+caption+"</div>")
        $(".idea").dblclick -> alert "you clickd me"
        $(".idea").draggable()
    error: (jqXHR, textStatus, errorThrown) ->
      # alert "error: #{textStatus} - #{errorThrown}"

      $("#dialog").append """
        <h3>#{textStatus}</h3>
        <p>#{errorThrown}</p>
      """

      # $.notification """
      # """,
      #   duration: 4000
      #   position: "bottom-right"
      ###
      $.notification textStatus,
        className: "jquery-notification"
        duration: 2000
        freezeOnHover: true
        hideSpeed: 250
        position: 'center'
        showSpeed: 250
        zIndex: 99999
      ###