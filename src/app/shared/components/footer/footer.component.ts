import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  currentYear: any;

  ngOnInit() {
    this.currentYear = new Date().getUTCFullYear();
    console.log(this.currentYear)
  }

}
