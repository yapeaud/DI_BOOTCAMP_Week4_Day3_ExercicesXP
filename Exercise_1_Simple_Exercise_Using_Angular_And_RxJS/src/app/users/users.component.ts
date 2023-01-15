import { Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usernames$!: Observable<string[]>;

  constructor(private http: HttpClient){ }


  users = [
    {
      nom:'kone yaya'
    },
    {
      nom:'yvea Armand de bordeaux'
    },
    {
      nom:'akissi medart'
    }]

  ngOnInit() {
    this.usernames$ = this.http.get<Array<{name:string}>>('https://api.atos.com/users')
    .pipe(
    map(users => users.map((user: { name: string; }) => user.name))
    );
    }

}




}
