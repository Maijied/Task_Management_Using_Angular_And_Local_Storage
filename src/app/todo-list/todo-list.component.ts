import { Component } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  constructor(private localStore: LocalStorageService) {}

  public collection: any[] = [];
  public to_dos: any[] = [];
  // key = "M3HxS";

  ngOnInit(): void{
    for (let array of Object.values(localStorage)) {
      let data = this.localStore.getDecryptData(array);
      this.collection.push(JSON.parse(data));
    }
    for (let item of this.collection ){
      if (item.status == '1'){
        this.to_dos.push(item);
      }
    }
  }

  changeToProgress(data:any){
    data['status'] = '2';
    //Without Service
    //localStorage.setItem("taskList"+data.id , JSON.stringify(data));
    //Using Service
    this.localStore.saveData("taskList"+data.id,  JSON.stringify(data));
  }
  changeToDone(data:any){
    data['status'] = '3';
    //Without Service
    // localStorage.setItem("taskList"+data.id , JSON.stringify(data));
    //Using Service
    this.localStore.saveData("taskList"+data.id,  JSON.stringify(data));
  }


}
