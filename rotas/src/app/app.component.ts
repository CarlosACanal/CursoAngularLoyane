import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HTTP';

  showMenu: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.showMenuEmitter.subscribe(status => {
      this.showMenu = status;
    })
  }
}
