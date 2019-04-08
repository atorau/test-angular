import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuxComponentComponent } from './aux-component/aux-component.component';
import { StarWarsService } from './star-wars.service';

@NgModule({
  declarations: [
    AppComponent,
    AuxComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
