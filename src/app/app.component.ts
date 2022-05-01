import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web';

  public geraCumprimento(): string {
    const data = new Date();
    console.log(data);
    console.log(data.getHours());

    if (data.getHours() <= 12) {
      return "Bom dia"
    } else if (data.getHours() > 12) {
      return "Boa tarde"
    }

    return ""
  }
}
