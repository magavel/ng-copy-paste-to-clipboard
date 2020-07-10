import { Component } from '@angular/core';
import { Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-copy-paste';
  animateCssCdn = `https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css`;
  couponCode = 'KGHKJHJ';
  message = '';

  constructor(private cb: Clipboard) {
  }

  copy(): void {
    this.cb.copy(this.message);
    console.log('data copié', this.message);

  }
  onValueInput(e): void {
    this.message = e.target.value;
  }

}
