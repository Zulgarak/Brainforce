import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuIsOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
    this.menuIsOpen === true ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  }

}
