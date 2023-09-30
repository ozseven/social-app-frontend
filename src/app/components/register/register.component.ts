import { Component } from '@angular/core';
import { type } from 'os';
import { HttpService } from 'src/app/services/http.service';
import { Person } from './../../entities/person';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private http: HttpService) {}

  submitData(data:Person) {
    this.http.postPerson(data).subscribe(
      (data) => {
        console.log('Veri başarıyla eklendi:', data);
      },
      (error) => {
        console.error( error ,"Data:",data);
      }
    );
  }
}
