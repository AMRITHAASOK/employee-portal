import { Component } from '@angular/core';
 import { userModel } from '../users.model';
import { UserApiService } from '../services/user-api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  user:userModel={} // to hold user details

  constructor(private api:UserApiService,private tostr:ToastrService,private route:Router){}

    addUser(){
      this.api.addUserAPI(this.user).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.tostr.success("User added successfully")
          setTimeout(()=>{
            this.route.navigateByUrl('/users')
          },2000)
          
        },
      })
      console.log(this.user);
      
    }
}
