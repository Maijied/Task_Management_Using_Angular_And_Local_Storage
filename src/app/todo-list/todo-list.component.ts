import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  public collection: any[] = [];
  public to_dos: any[] = [];
  ngOnInit(): void{
    for (let array of Object.values(localStorage)) {
      this.collection.push(JSON.parse(array) );
    }
    for (let item of this.collection ){
      if (item.status == '1'){
        this.to_dos.push(item);
      }
    }
  }

  changeToProgress(data:any){
    data['status'] = '2';
    localStorage.setItem("taskList"+data.id , JSON.stringify(data));
  }
  changeToDone(data:any){
    data['status'] = '3';
    localStorage.setItem("taskList"+data.id , JSON.stringify(data));
  }



}
