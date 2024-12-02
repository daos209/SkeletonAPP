import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  username: string = '';
  password: string = '';

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  }
}