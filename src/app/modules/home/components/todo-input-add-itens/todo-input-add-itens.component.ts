import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {
  @Output() public emmitItemTaskList =  new EventEmitter();
  
  public addItemTasklist: string = "";
  constructor(){}


  ngOnInit(): void{

  }

  public submitItemTaskList(){
    this.addItemTasklist = this.addItemTasklist.trim();
    if(this.addItemTasklist){
      this.emmitItemTaskList.emit(this.addItemTasklist);
      this.addItemTasklist ="";
    }
     
  }
}
