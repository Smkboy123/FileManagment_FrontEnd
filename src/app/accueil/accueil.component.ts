import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {
  constructor(private router:Router){}
  // gotoServices(){
  //   this.router.navigate(['services'])
  //   alert("Services")
  // }
  
  currentAction:any;
  setCurrentAction(action:any){
    this.currentAction=action
  }

  prendreTicket() {
    alert('Ticket pris avec succès!');
  }
}
