import { Component } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercise_3_Create_An_Angular_Service';

  constructor(private logService: LogService) {
  }

  log(message: string) {
    this.logService.log(message);
  }
}
