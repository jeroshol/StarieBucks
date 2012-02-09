(function() {
  var Employee, Project, assert, suite, vows;

  Employee = (function() {

    function Employee(name) {
      this.name = name;
    }

    Employee.prototype.isEmployee = function() {
      return true;
    };

    Employee.prototype.isVeteran = function() {
      return true;
    };

    Employee.get = function(name) {
      return new Employee(name);
    };

    Employee.prototype.createProject = function(title) {
      return new Project(title);
    };

    return Employee;

  })();

  Project = (function() {

    function Project(title) {
      this.title = title;
    }

    Project.prototype.rename = function(newTitle) {
      return this.title = newTitle;
    };

    return Project;

  })();

  vows = require('vows');

  assert = require('assert');

  suite = vows.describe('Employee');

  suite.addBatch({
    'A new Employee': {
      topic: function() {
        return new Employee("Sobah");
      },
      'should be an employee': function(employee) {
        return assert.isTrue(employee.isEmployee());
      },
      'can create projects': {
        topic: function(employee) {
          return employee.createProject("sobahprosjektet");
        },
        'project should have a title': function(project) {
          return assert.isDefined(project.title);
        },
        'that is a string': function(project) {
          return assert.isString(project.title);
        },
        'can be renamed': function(project) {
          var somename;
          somename = "somename";
          project.rename(somename);
          return assert.equal(project.title, somename);
        }
      }
    },
    'An old employee': {
      topic: function() {
        return Employee.get("Sobah");
      },
      'is a veteran': function(employee) {
        return assert.isTrue(employee.isVeteran());
      }
    }
  });

  suite["export"](module);

}).call(this);
