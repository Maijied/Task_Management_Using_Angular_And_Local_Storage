import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  constructor(private localStore: LocalStorageService) {}

  public collection: any[] = [];
  arr :any;
  public error:any;
  public form={
    title:null,
    description:null,
    priority:null,
    start_date:null,
    end_date:null,
    status:null,
    assigned_person:null,
    attachment:null,
    sub_task:null,
  }

  ngOnInit(): void{

  }

  submitOrderDetails(taskForm: NgForm){
    let taskData = {
      id: Math.floor(Math.random() * 1000000),
      title:this.form.title,
      description:this.form.description ,
      priority:this.form.priority ,
      start_date: this.form.start_date,
      end_date: this.form.end_date,
      status: this.form.status,
      assigned_person: this.form.assigned_person,
      attachment: this.form.attachment,
      sub_task: this.form.sub_task,
    }
    //Using Service
    this.localStore.saveData("taskList"+taskData.id,  JSON.stringify(taskData));
    //Without Service
    // localStorage.setItem("taskList"+taskData.id , JSON.stringify(taskData));
  }
}
