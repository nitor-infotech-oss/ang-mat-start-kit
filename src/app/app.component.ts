import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService, private swUpdate: SwUpdate) {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          // tslint:disable-next-line: deprecation
          window.location.reload(true);
        }
      });
    }
    this.translate.addLangs(['en-US', 'fr']);
    // To get browser language
    // const browserLang = translate.getBrowserLang();
    // this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    this.translate.use('en-US');
  }
  title = 'ang-mat-start-kit';
}
