import { Component } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css']
})
export class InProgressComponent {
  constructor(private localStore: LocalStorageService) {}
  public collection: any[] = [];
  public to_dos: any[] = [];
  ngOnInit(): void{
    // this.getTasks();
    for (let array of Object.values(localStorage)) {
      let data = this.localStore.getDecryptData(array);
      this.collection.push(JSON.parse(data) );
    }
    for (let item of this.collection ){
      if (item.status == '2'){
        this.to_dos.push(item);
      }
    }
  }
  changeToDone(data:any){
    data['status'] = '3';
    //Without Service
    // localStorage.setItem("taskList"+data.id , JSON.stringify(data));
    //Using Service
    this.localStore.saveData("taskList"+data.id,  JSON.stringify(data));
  }
}
