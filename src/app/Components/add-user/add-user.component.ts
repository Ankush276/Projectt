import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  AddURequest:User={
    id:'',
    username:'',
    password:'',
  }

  constructor(private eservice:UsersService,private router: Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addUser()
  {
    this.eservice.addUser(this.AddURequest).subscribe({
      next:(user)=>
      {
        this.router.navigate(['func/users']);
      }
    })
  }

}
