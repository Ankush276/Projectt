import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-all-functionality',
  templateUrl: './all-functionality.component.html',
  styleUrls: ['./all-functionality.component.css']
})
export class AllFunctionalityComponent implements OnInit{
 ngOnInit(): void {}
 constructor(private route:ActivatedRoute,private eservice:UsersService,private router: Router){}
}
