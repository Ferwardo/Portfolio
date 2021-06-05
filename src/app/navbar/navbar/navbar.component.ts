import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit {
  isMobileMenuExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMobileMenu() {
    this.isMobileMenuExpanded = !this.isMobileMenuExpanded;

    //open or close the menu
    const menu = document.getElementById('mobile-menu');
    if (this.isMobileMenuExpanded) {
      menu?.classList.remove("hidden");
    }
    else {
      menu?.classList.add("hidden");
    }
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: Event) {
    const header = document.getElementById('header');
    const whoami = document.getElementById('whoami');
    const home = document.getElementById('home');

    if ((whoami?.getBoundingClientRect()?.top ?? 0) <= 86) {
      header?.classList.remove('md:bg-transparent')
      header?.classList.remove('md:shadow-none')
    }
    else {
      header?.classList.add('md:bg-transparent')
      header?.classList.add('md:shadow-none')
    }
  }


  scrollTo(id: string) {
    const header = document.getElementById('header');
    const element = document.getElementById(id);
    const y = (element?.getBoundingClientRect()?.top ?? 0) + window.pageYOffset
      - (header?.getBoundingClientRect()?.height ?? 0);

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
