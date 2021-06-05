import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToWhoAmI() {
    const id = 'whoami';
    const header = document.getElementById('header');
    const element = document.getElementById(id);
    const y = (element?.getBoundingClientRect()?.top ?? 0) + window.pageYOffset
      - (header?.getBoundingClientRect()?.height ?? 0);

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
