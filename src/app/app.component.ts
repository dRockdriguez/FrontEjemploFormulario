import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {ObservableMedia} from '@angular/flex-layout';
import {BREAKPOINTS, DEFAULT_BREAKPOINTS} from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: BREAKPOINTS, useValue: DEFAULT_BREAKPOINTS }]
})
export class AppComponent {
  title = 'appp';

  constructor(
    public translate: TranslateService,
    public media: ObservableMedia
  ){
    translate.addLangs(['es', 'en', 'fr']);
    translate.setDefaultLang('es');

    const browserLang = translate.getBrowserLang();

    translate.use(browserLang.match(/en|fr|es/) ? browserLang : 'es');
  }
}
