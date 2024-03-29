import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Pokedex';
  constructor(private router: Router) { }
  ngOnInit() { this.goToList() }
  goToList() {
    this.router.navigate(['/list']);
  }
}
