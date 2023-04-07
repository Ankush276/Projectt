import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  base_url:string=environment.baseApiUrl;
  
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<User[]>
  {
    return this.http.get<User[]>(this.base_url+'/api/user');
  }

  addUser(DataFromtTS:User):Observable<User>
  {
    DataFromtTS.id="00000000-0000-0000-0000-000000000000";
    return this.http.post<User>(this.base_url+'/api/user',DataFromtTS);
  }

  getUser(id:string):Observable<User>
  {
    return this.http.get<User>(this.base_url+'/api/user/getUser/'+id);
  }

  updateUser(id:string,updateUserRequest:User):Observable<User>
  { 
    return this.http.put<User>(this.base_url+'/api/user/updateUser/'+id,updateUserRequest);
  }

  private readonly getTaskDetailUrl = this.base_url + '/api/user/DeleteUser/{assignmentId}';
  
  deleteUser(id:any):Observable<User>
  {
    const url=this.getTaskDetailUrl.replace('{assignmentId}', id);
    return this.http.delete<any>(url);
  }

  loginUser(loginInfo:Array<string>)
  {
    return this.http.post(this.base_url+'/api/user/LoginUser',{
      Username:loginInfo[0],
      Password:loginInfo[1]
    },
    {
      responseType:'text',
    });
  }

}
