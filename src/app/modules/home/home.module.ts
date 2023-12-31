import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { HeaderComponent } from './components/header/header.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';

//Page
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    TodoButtonDeleteAllComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    TodoButtonDeleteAllComponent
  ]
})
export class HomeModule { }
