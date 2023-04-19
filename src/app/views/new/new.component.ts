import { Component     } from '@angular/core';
import {FormGroup,
        FormControl,
        Validators     } from '@angular/forms';
import { ApiService    } from '../../services/api/api.service';
import { Router        } from '@angular/router';
import { ResponseI     } from '../../models/response.interface';
import { AlertService  } from '../../services/alerts/alert.service';
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

  constructor(private api:ApiService,private route:Router, private alert: AlertService){}

  createNewCourse(form: any){
    this.api.onNewCourse(form).subscribe(data=>{
      let response:ResponseI = data;
      if(response){
        this.alert.showSuccess('Creado con exito','Creacion de curso')
        this.route.navigate(['/']);
      }else{
      this.alert.showError('Error al crear los datos','Error');
      }
    })
  }
}
