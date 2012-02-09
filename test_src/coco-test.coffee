class Employee
  constructor: (@name) -> #
  isEmployee: -> true
  isVeteran: -> true
  @get: (name) -> new Employee(name)
  createProject: (title) -> new Project(title)
class Project
  constructor: (@title) -> #
  rename: (newTitle) -> @title = newTitle

vows = require('vows')
assert = require('assert')
suite = vows.describe('Employee')

suite.addBatch
  'A new Employee':
    topic: -> new Employee("Sobah")

    'should be an employee': (employee) ->
      assert.isTrue employee.isEmployee()

    'can create projects':
      topic: (employee) -> employee.createProject("sobahprosjektet")
      
      'project should have a title': (project) ->
        assert.isDefined project.title
      
      'that is a string': (project) ->
        assert.isString project.title
      
      'can be renamed': (project) ->
        somename = "somename"
        project.rename(somename)
        assert.equal(project.title, somename)
  'An old employee':
    topic: -> Employee.get("Sobah")

    'is a veteran': (employee) ->
      assert.isTrue employee.isVeteran()
suite.export(module)