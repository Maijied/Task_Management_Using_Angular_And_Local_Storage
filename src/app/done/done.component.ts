import { Component } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent {
  constructor(private localStore: LocalStorageService) {}
  public collection: any[] = [];
  public to_dos: any[] = [];
  ngOnInit(): void{
    for (let array of Object.values(localStorage)) {
      this.collection.push(JSON.parse(array) );
    }
    for (let item of this.collection ){
      if (item.status == '3'){
        this.to_dos.push(item);
      }
    }
  }
  delete(data:any){
    //Without Service
    // localStorage.removeItem("taskList"+data.id);
    //Using Service
    this.localStore.removeData("taskList"+data.id);
  }
}
