import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../service/servicio.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: false,
})
export class MenuPage implements OnInit {

  private total: number = 0;

  constructor(private router: Router, private notiConta: ServicioService) { }

  ngOnInit() {
  }

  obtenerCheq(){
    const cheq = this.notiConta.getCountCheq()
    return cheq
  }
  obtenerTransfer(){
    const transfer = this.notiConta.getCountTransfer()
    return transfer
  }

  totalCount(){
    this.total = this.obtenerCheq() + this.obtenerTransfer();
    return this.total
  }

  cerrar(){
    this.router.navigate(['home'])
  }

}
