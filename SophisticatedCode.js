/*
   Filename: SophisticatedCode.js

   Description: This JavaScript code is a sophisticated and elaborate implementation of a task management system.
                It allows users to create, update, and delete tasks, as well as mark tasks as complete.
                The code follows best practices for code organization, uses modern ES6 syntax, and features advanced error handling.

   Author: Your Name
*/

class Task {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = false;
  }

  markAsComplete() {
    this.completed = true;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description) {
    const taskId = this.generateTaskId();
    const task = new Task(taskId, title, description);
    this.tasks.push(task);
    return task;
  }

  generateTaskId() {
    // Generate a unique task ID using a complex algorithm (not implemented here)
    // For the sake of simplicity, let's just use a random number between 1000 and 9999
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  }

  findTaskById(id) {
    return this.tasks.find((task) => task.id === id);
  }

  updateTask(id, title, description) {
    const task = this.findTaskById(id);
    if (!task) {
      throw new Error('Task not found');
    }
    task.title = title;
    task.description = description;
  }

  deleteTask(id) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      throw new Error('Task not found');
    }
    this.tasks.splice(taskIndex, 1);
  }

  markTaskAsComplete(id) {
    const task = this.findTaskById(id);
    if (!task) {
      throw new Error('Task not found');
    }
    task.markAsComplete();
  }
}

// Example usage

const taskManager = new TaskManager();

// Adding tasks
const task1 = taskManager.addTask('Implement login feature', 'Implement user login functionality');
const task2 = taskManager.addTask('Refactor code', 'Refactor existing code to improve performance');
const task3 = taskManager.addTask('Write documentation', 'Prepare detailed documentation for the project');

// Updating tasks
taskManager.updateTask(task1.id, 'Implement authentication feature', 'Implement user authentication functionality');

// Marking tasks as complete
taskManager.markTaskAsComplete(task3.id);

// Deleting a task
taskManager.deleteTask(task2.id);

console.log(taskManager.tasks);
