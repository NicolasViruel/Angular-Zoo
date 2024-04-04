import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
 

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{
  public title: String ;
  public user: User;
  public token: string;
  public identity: User | null;
  public httpOptions: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ){
    this.title = "Identificate"
    this.user = new User('','','','','','admin','');
    this.token = "";
    this.identity = null
  }

  ngOnInit(): void {
      console.log("estoy en el login");
      
  }

  onSubmit(): void {
    // this.userService.login(this.user, true).subscribe(
    //  response =>{
    //   this.identity = response.user;
    //   if (!this.identity || !this.identity._id) {
    //     alert("El usuario no se ha logeado Correctamente")
    //   }else{
    //     this.identity.password = '';
    //     //mostramos identity
    //     console.log(this.identity);
    //       //conseguir el token
    //       this.userService.login(this.user, true).subscribe(
    //         response =>{
    //           this.token = response.token;

    //           if (this.token.length <= 0) {
    //             alert("El token no se ha generado")
    //           }else{
    //             //mostramos token
    //             console.log(this.token);
    //           }
    //         },
    //         error =>{
    //           console.log(error);
              
    //         }
    //       )
    //   }
    //  },
    //   (error) => {
    //     console.log(error);
    //     // Maneja el error, por ejemplo, muestra un mensaje de error al usuario
    //   }
    // );
  }


  

}



  
  

