import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';

import { PeticionesService } from './services/peticiones.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PeticionesPipe } from './pipes/peticiones.pipe';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddHeaderInterceptor } from './interceptor/http.interceptor';
import { APP_ROUTING } from './app.routes';
import { SegundoFormComponent } from './components/segundo-form/segundo-form.component';
import { RouterModule } from '@angular/router';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FlexLayoutModule, BREAKPOINT } from '@angular/flex-layout';

export function HttpLoaderFactory(http: HttpClient) {
        return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent,
    PeticionesPipe,
    SegundoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTING,
    RouterModule,
    TranslateModule.forRoot({
        loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
        }
    }),
    FlexLayoutModule
  ],
  providers: [PeticionesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
