import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users:User[]=[];
  constructor(private eservice:UsersService){}
  
  ngOnInit(): void {
    this.eservice.getAllUsers().subscribe({
      next:(users)=>
      {
        this.users=users;
        console.log(users);
      },
      error:(response)=>
      {
        console.log(response);
      }
    })
  }

}
