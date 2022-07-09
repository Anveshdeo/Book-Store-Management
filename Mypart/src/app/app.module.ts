import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { HomeComponent } from './component/home/home.component';
import { FeaturedComponent } from './component/featured/featured.component';
import { NewarrivalComponent } from './component/newarrival/newarrival.component';
import { MostviewedComponent } from './component/mostviewed/mostviewed.component';
import { ProductService } from './services/product.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [AppComponent, SearchBarComponent, HomeComponent, FeaturedComponent, NewarrivalComponent, MostviewedComponent, FilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    MatButtonToggleModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
