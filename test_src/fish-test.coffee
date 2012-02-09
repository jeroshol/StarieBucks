class Fish
  constructor: (@color, @weight) -> #
  skills: ["swim", "wobble"]

# vows = require "vows"
# console.log "imafish"
vows = require('vows')
assert = require('assert')
suite = vows.describe('subject')

suite.addBatch
  'A new Fish("blue", 24)':
    topic: new Fish("blue", 24)

    'is blue': (topic) ->
      assert.equal topic.color, "blue"

    'can swim': (topic) ->
      assert.includes topic.skills, "swim"

    "When the fish is swimming":
      topic: 

suite.export(module)