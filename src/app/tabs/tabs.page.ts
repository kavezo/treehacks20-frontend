import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  fabOpen: boolean;

  constructor() {}

  open(){
    this.fabOpen = !this.fabOpen;
  }

}
