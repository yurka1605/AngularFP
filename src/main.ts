import { enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {AppComponent} from "./app/app.component";
import {ApplicationComponent} from "./app/components/application/application.component";
import {LocationStrategy, PathLocationStrategy} from "@angular/common";

@NgModule({
  imports: [BrowserModule, routing],
  declaration: [ AppComponent, ApplicationComponent ],
  providers: [ { provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [ AppComponent ]
})

platformBrowserDynamic().bootstrapModule( AppModule )
  .catch(err => console.error(err));

if (environment.production) {
  enableProdMode();
}
