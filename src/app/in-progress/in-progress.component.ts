import { Component } from '@angular/core';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css']
})
export class InProgressComponent {
  public collection: any[] = [];
  public to_dos: any[] = [];
  ngOnInit(): void{
    // this.getTasks();
    for (let array of Object.values(localStorage)) {
      this.collection.push(JSON.parse(array) );
    }
    for (let item of this.collection ){
      if (item.status == '2'){
        this.to_dos.push(item);
      }
    }
  }
  changeToDone(data:any){
    data['status'] = '3';
    localStorage.setItem("taskList"+data.id , JSON.stringify(data));
  }
}
