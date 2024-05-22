import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../services/admin-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    
    adminName:string=""
    adminpswd:string=""
    adminDetails:any={}
      ngOnInit(): void {
      this.adminName= localStorage.getItem('adminName')||""
      this.adminpswd= localStorage.getItem('adminPassword')||""

      this.api.Authenticate().subscribe((admin:any)=>{
        this.adminDetails=admin;
        
      })
      }
    
      adminLoggedStatus :any =new Date()//To hold corrent date and time 

      sidebarStatus:boolean = true;

      constructor(private api:AdminApiService){}


      menubarClicked(){
        this.sidebarStatus= !this.sidebarStatus;
      }

      updateAdmin(){
        this.api.updateAdmin(this.adminDetails).subscribe((admin:any)=>{
           console.log(admin);
          localStorage.setItem("adminName",admin.name)
          localStorage.setItem("adminPassword",admin.password)
          alert("Admin Details Updated")
        })
      }
}
