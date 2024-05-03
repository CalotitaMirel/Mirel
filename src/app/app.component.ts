import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'TodoList App';
  todos =[
   {
    title: 'Birthday',
    done: false,
    priority: 3
   },

   {
    title: 'Meeting',
    done: true,
    priority: 1
   },

   {
    title: 'Pay Bill',
    done: true,
    priority: 2
   }

  ];

  addTodo(newTodoTitle,newTodoPriority1,newTodoDone1){
  var newTodo = {
    title: newTodoTitle,
    priority: newTodoPriority1,
    done: newTodoDone1
  };
  this.todos.push(newTodo);
}

deleteTodo(todo){
  this.todos = this.todos.filter(t => t.title !== todo.title);
}
}

