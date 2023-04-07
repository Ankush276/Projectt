import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userDetails:User={
    id:'',
    username:'',
    password:'',
  }

  constructor(private route:ActivatedRoute,private eservice:UsersService,private router: Router){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>
      {
        const id=params.get('id');
        if(id)
        {
          //call api
          this.eservice.getUser(id).subscribe(
            {
              next:(response)=>{
                this.userDetails=response;
              }
            }
          );
        }
      }
    })
  }

  updateUser()
  {
    this.eservice.updateUser(this.userDetails.id,this.userDetails).subscribe({
      next:(response)=>
      {
        this.router.navigate(['func/users']);
      },
      error:(response)=>
      {
        console.log(response);
      }
    });
  }

  deleteUser(id:string)
  {
    this.eservice.deleteUser(id).subscribe({
      next:(response)=>
      {
        this.router.navigate(['func/users']);
      },
      error:(response)=>
      {
        console.log(response);
      }
    });
  }

  
}
