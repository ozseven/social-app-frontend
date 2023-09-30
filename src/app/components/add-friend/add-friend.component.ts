import { Component ,OnInit} from '@angular/core';
import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss']
})


export class AddFriendComponent implements OnInit{

  persons: any[] = [];


  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getPersons().subscribe((data) => {
      this.persons = data.data;
    });


  }

}
