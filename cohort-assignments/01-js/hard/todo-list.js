/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

function Todo() {
  this.todos = [];

  this.add = function (todo) {
    if (!this.todos.includes(todo)) {
      this.todos.push(todo);
    }
  };

  this.remove = function (indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    } else {
      console.error("Invalid index provided.");
    }
  };

  this.update = function (index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      console.error("Invalid index provided.");
    }
  };

  this.getAll = function () {
    return this.todos;
  };

  this.get = function (indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      return null;
    }
  };

  this.clear = function () {
    this.todos = [];
  };
}

module.exports = Todo;



