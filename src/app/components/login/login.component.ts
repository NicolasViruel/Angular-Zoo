import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{
  public title: String ;

  constructor(
    private_route: ActivatedRoute,
    private_router: Router,
  ){
    this.title = "Identificate"
  }

  ngOnInit(): void {
      console.log("estoy en el login");
      
  }





}