import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  ruc: string ='';
  correo:string ='';
  password: string='';

  constructor(private router: Router) {}

  ingresar(){
    console.log('Numero de RUC:', this.ruc);
    console.log('Correo electrónico:', this.correo);
    console.log('Contraseña:', this.password);

    this.router.navigate(['menu']); 
  }
}
