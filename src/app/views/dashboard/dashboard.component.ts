import { Component,OnInit } from '@angular/core';
import { ApiService       } from '../../services/api/api.service';
import { Router           } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  courses: any = [];
  constructor(private api:ApiService, private route:Router){}

  ngOnInit():void{
    this.api.getAllCourses().subscribe(data=>{
      this.courses= data;
    })
  }

  editCourse(id:string){
    this.route.navigate(['edit', id]);
  }
  newCourse(){
    this.route.navigate(['new']);
  }

  deleteCourse(id:any){
    this.api.deleteCourse(id).subscribe(data=>{
      console.log(data);

    })
  }
}
