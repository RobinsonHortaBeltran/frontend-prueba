import { Component,OnInit } from '@angular/core';
import { ApiService       } from '../../services/api/api.service';
import { Router           } from '@angular/router';
import { ResponseI        } from '../../models/response.interface'
import { AlertService     } from '../../services/alerts/alert.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  courses: any = [];
  constructor(private api:ApiService, private route:Router, private alert:AlertService){}

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
      let response:ResponseI = data;
      if(response){
        this.alert.showSuccess('Eliminado con exito','Eliminar curso')
        setTimeout(function(){
         location.reload()
      }, 2000);

      }else{
      this.alert.showError('Error al eliminar los datos','Error');
      }

    })
  }
}
