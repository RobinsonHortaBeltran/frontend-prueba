import { Injectable               } from '@angular/core';
import { NewCourseI               } from '../../models/new.interface';
import { ResponseI                } from '../../models/response.interface';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { Observable               } from 'rxjs'
import { CourseI                  } from '../../models/course.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = 'http://127.0.0.1:8000/api/';

  constructor(private http:HttpClient) { }

  onNewCourse(form:NewCourseI):Observable<ResponseI>{
    let direccion = this.url + 'courses';
    return this.http.post<any>(direccion,form);
  }
  getAllCourses():Observable<any[]>
  {
    let direccion = this.url + 'courses';
    return this.http.get<any[]>(direccion);
  }

  getCourse( id:string|null):Observable<CourseI>{
    let direccion = this.url + 'courses/'+ id;
    return this.http.get<CourseI>(direccion);
  }

  putCourse(form:NewCourseI, id:any):Observable<ResponseI>{
    let direccion = this.url + 'courses/' + id ;
    return this.http.put<any>(direccion,form);
  }

  deleteCourse(id:string|null):Observable<any>{
    let direccion = this.url + 'courses/'+ id;
    return this.http.delete<any>(direccion);
  }
}
