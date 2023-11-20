import { Component, DoCheck, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');


  constructor() {
  }


  ngDoCheck(): void {
    this.setLocalStorage();
    
  }



  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public hasValueTaskList(): boolean {
    if (this.taskList.length > 0) {
      return true;
    }
    else {
      return false;
    }
  }

  public setItemTaskList(event : string){
        this.taskList.push({task: event, checked: false});
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Você deseja realmente deletar tudo?");

    if (confirm)
      this.taskList = [];
  }

  public validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("task está vazia, deseja deletar?");

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage(){
    if(this.hasValueTaskList()){
      this.taskList.sort((first,last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list",JSON.stringify(this.taskList));
    }
  }
}
