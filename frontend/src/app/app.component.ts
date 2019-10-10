import { Component } from '@angular/core';
import { ExampleService } from './services/example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(
    private exampleService: ExampleService
    ) {
      setTimeout(() => {
        this.exampleService.showExample();
      }, 500);
    }
}
