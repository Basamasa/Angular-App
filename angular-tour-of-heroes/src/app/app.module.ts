import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { ElModule } from 'element-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSortModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ElModule,
    ElModule.forRoot(),
    FormsModule,
    MatButtonModule, 
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ElModule,
    FormsModule,
    MatButtonModule, 
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

