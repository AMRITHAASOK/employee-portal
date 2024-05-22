import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from '../services/user-api.service';
import { userModel } from '../users.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user:userModel={} //assign the user details

  constructor(private route:ActivatedRoute, private api:UserApiService,private toastr:ToastrService){}

  ngOnInit(): void {
    //find particular user id using ActivatedRoute
      this.route.params.subscribe((res:any)=>{
        console.log(res);
        const {id} =res
        console.log(id);

        //fetch particular user details using id parameter
        //API request 
        this.api.viewAUser(id).subscribe((res:any)=>{
          console.log(res);
          this.user = res
          // console.log(this.user);
          
        })
        
      })

  }

    EditUser(id:any){
      this.api.editUser(id,this.user).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.toastr.success("User updated successfully")
        },
        error:(err:any)=>{
          console.log(err.message);
          
        }
      })
    }
  

}
