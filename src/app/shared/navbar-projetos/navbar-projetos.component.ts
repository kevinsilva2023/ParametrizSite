import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-projetos',
  templateUrl: './navbar-projetos.component.html',
  styleUrls: ['./navbar-projetos.component.scss']
})
export class NavbarProjetosComponent {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

}
