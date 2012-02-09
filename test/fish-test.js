(function() {
  var Fish, assert, suite, vows;

  Fish = (function() {

    function Fish(color, weight) {
      this.color = color;
      this.weight = weight;
    }

    Fish.prototype.skills = ["swim", "wobble"];

    return Fish;

  })();

  vows = require('vows');

  assert = require('assert');

  suite = vows.describe('subject');

  suite.addBatch({
    'A new Fish("blue", 24)': {
      topic: new Fish("blue", 24),
      'is blue': function(topic) {
        return assert.equal(topic.color, "blue");
      },
      'can swim': function(topic) {
        return assert.includes(topic.skills, "swim");
      }
    }
  });

  suite["export"](module);

}).call(this);
