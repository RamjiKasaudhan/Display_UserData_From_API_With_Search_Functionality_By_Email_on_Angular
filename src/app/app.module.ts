import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, rountingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './footer/footer.component';
import { SearchFilterPipePipe } from './search-filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe2Pipe } from './search-filter-pipe2.pipe';


@NgModule({
  declarations: [
    AppComponent,
    rountingComponents,
    FooterComponent,
    SearchFilterPipePipe,
    SearchFilterPipe2Pipe
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
