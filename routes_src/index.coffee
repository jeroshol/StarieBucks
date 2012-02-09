 class Idea
  constructor: (args) ->
    @caption = args.caption
    @desc = args.desc
# ---------------------------------------
class Employee
  constructor: (id, name) ->
    @id = id
    @name = name

  makeIdea: (caption, desc, color="red") ->
    idea = new Idea
      caption: caption
      desc: desc
      color: color
      author: @name
# ---------------------------------------
exports.index = (req, res) ->
  sobah = new Employee 23, "Sobah"
  idea = sobah.makeIdea "WeatherMachine", "A WeatherMachine is a nice device"
  res.render "index",
    title: "Kraken: Express"
    menu: ["Home", "Browse", "Help"]
    makeitem: (x) -> "<a>#{x}</a>"

exports.ideas = (req, res) ->
  res.render "postit",
    title: "Post-it's are awesome"
    notes: ["Make Coffee", "Be Awesome", "Conformity ftw!"]

exports.ideasdata = (req, res) ->
  # db.ideas.find()
  res.send
    notes: ["Make Coffee", "Be Awesome", "Conformity ftw!"]

exports.batman = (req,res) ->
  res.send
    caption: "Hello batman!!"
