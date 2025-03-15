import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:FormGroup

  constructor(private fb:FormBuilder,private api:ApiService){

    this.registerForm = this.fb.group({
      username:["",[Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.pattern("[a-zA-Z0-9 ]*")]]
    })
  }
  
  register(){
    if(this.registerForm.valid){
      let username = this.registerForm.value.username;
      let email = this.registerForm.value.email;
      let password = this.registerForm.value.password;
      this.api.registerAPI({username,email,password}).subscribe({
        next:(res:any)=>{
          console.log(res);
          alert("user generated successfully")
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
      
    }
      
  }

}
