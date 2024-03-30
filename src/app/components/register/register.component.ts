import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

import { environment } from 'src/environments/environment';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  providers:[UserService]
})
export class RegisterComponent implements OnInit{
  @ViewChild('registerForm', { static: false }) registerForm: NgForm | undefined; // Declara registerForm
  public title: String ;
  public user: User;
  public status: string;


  constructor(
    private_route: ActivatedRoute,
    private_router: Router,
    private userService: UserService
  ){
    this.title = "Registro";
    this.user = new User('','','','','','admin','');
    this.status= ""
  }

  ngOnInit(): void {
      console.log("estoy en el Registro");
      
  }

  onSubmit(): void {
    this.userService.register(this.user).subscribe(
      (response) => {
        if (response && response._id) { // Verifica si hay un ID en la respuesta
          this.status = 'success';
          // Volvemos a colocar los campos en 0
          this.user = new User('', '', '', '', '', 'admin', '');
          this.resetForm(); // Llama al método para restablecer el formulario
          this.status = 'success';
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

  resetForm(): void {
    this.user = new User('', '', '', '', '', 'admin', '');
    this.status = '';
    if (this.registerForm) {
      this.registerForm.resetForm(); // Restablecer el estado del formulario si registerForm está definido
    }
  }
  
  




}