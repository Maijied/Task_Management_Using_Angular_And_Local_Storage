import { Component } from '@angular/core';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent {
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
    localStorage.removeItem("taskList"+data.id);
  }
}
