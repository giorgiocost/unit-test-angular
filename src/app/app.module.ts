import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmesComponent } from './pipes/filmes/filmes.component';
import { FileSizePipe } from './pipes/filmes/file-size.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilmesComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
