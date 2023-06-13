import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css']
})
export class MobileNavComponent {
  menu: boolean = false;

  menuClick() {
    if (this.menu === false) {
      this.menu = true;
      console.log(this.menu);
    } else {
      this.menu = false;
      console.log(this.menu);
    }
  }

  closeClick() {
    this.menu = false;
  }

  navigateClick() {
    this.menu = false;
  }
}
