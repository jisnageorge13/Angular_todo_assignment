import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
export interface ToDoDetails {
  id: number;
  userid: number;
  title: string;
  completed: string;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule, CommonModule, FormsModule, MatIconModule,MatProgressSpinnerModule ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  displayedColumns: string[] = ['select', 'id', 'Title', 'Edit','Delete'];
  dataSource: MatTableDataSource<ToDoDetails>;
  selection = new SelectionModel<ToDoDetails>(true, []);
  todos: ToDoDetails[] = [];
  isLoading:boolean=true

  constructor(public api:ApiService){
    this.dataSource = new MatTableDataSource<ToDoDetails>(this.todos);
  }
  ngOnInit() {
    this.api.getTodo().subscribe(data => {
      this.todos = data;
      this.isLoading=false
        console.log(this.todos)
        this.dataSource.data = data.todos;
      });
  }

 
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

 toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data.filter(row => row.completed !== 'true'));
  }

  checkboxLabel(row?: ToDoDetails): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}

 