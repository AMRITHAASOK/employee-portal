import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminApiService } from '../services/admin-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email: string ="";
    password: string ="";
    adminDetails:any={}//to hold the admin details

    constructor(private toastr: ToastrService,private api:AdminApiService,private route:Router) {}

    login(){
      if(this.email&&this.password){
        this.api.Authenticate().subscribe({
          next:(res:any)=>{ //res ?  admin details email & pswd 
            const {email,password} = res
            if(email==this.email&&password==this.password){
              this.toastr.success("login successfully..")
              this.adminDetails=res//to assign admin details 
              console.log(this.adminDetails);//{"id":"1","name":"admin","email":"admin","password":" ""}
              //to set admin details into the localStorage
              localStorage.setItem("adminName",this.adminDetails.name)
              localStorage.setItem("adminPassword",this.adminDetails.password)

              setTimeout(()=>{
                this.route.navigateByUrl('/dashboard')
              },2000)
              
            }
            else{
              this.toastr.error("invalid data")
            }
          }
        })
        // alert("login already")
       
      }
      else{
        // alert("Please enter valid email or password")
        this.toastr.error("Please enter valid Details")
      }
    }
}
