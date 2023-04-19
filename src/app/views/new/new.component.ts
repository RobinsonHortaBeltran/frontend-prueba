import { Component } from '@angular/core';
import {FormGroup, FormControl,Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { Router           } from '@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  newCourseForm = new FormGroup({
    name :       new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    startDate:   new FormControl('',Validators.required),
    endDate:     new FormControl('',Validators.required),
    status:      new FormControl(true)
  })

  constructor(private api:ApiService,private route:Router){}

  createNewCourse(form: any){
    this.api.onNewCourse(form).subscribe(data=>{
      this.route.navigate(['new']);
    })
  }
}
