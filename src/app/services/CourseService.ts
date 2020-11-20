import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
  // findAllCourses = () => fetch('http://localhost:8080/api/courses').then(response => response.json())
  findAllCourses = () => fetch('http://blackboardbackend-env-1.eba-caqezr7x.us-east-2.elasticbeanstalk.com/api/courses').then(response => response.json())


}
