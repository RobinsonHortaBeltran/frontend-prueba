import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseI } from '../../models/course.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  courses!: CourseI;
  editForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    status: new FormControl(true)
  });
  constructor(private api: ApiService, private route: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    let id: string | null = this.activateRoute.snapshot.paramMap.get('id');
    this.api.getCourse(id).subscribe(data => {
      this.courses = data;
      let start_date = this.courses.startDate.split('T')
      let end_date = this.courses.endDate.split('T')
      this.editForm.setValue({
        'name': this.courses.name,
        'description': this.courses.description,
        'startDate': start_date[0],
        'endDate': end_date[0],
        'status': this.courses.status
      });
    })
  }
  EditCourse(form:any){
    let id: any = this.activateRoute.snapshot.paramMap.get('id');
    this.api.putCourse(form, id).subscribe(data=>{
      console.log(data);
    })
  }
}
