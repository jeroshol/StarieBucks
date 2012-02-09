root = exports ? this

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

exports.batman = (req,res) ->
  res.send "Hello batman"