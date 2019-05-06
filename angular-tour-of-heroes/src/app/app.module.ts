import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { ElModule } from 'element-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule , MatGridListModule , MatNativeDateModule, MatDatepickerModule, MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSortModule, MatCheckboxModule, MatListModule} from '@angular/material';
import { ListPaneComponent } from './list-pane/list-pane.component';
import { ButtonPaneComponent } from './button-pane/button-pane.component';
import { EditPaneComponent } from './edit-pane/edit-pane.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    routingComponents,
    ListPaneComponent,
    ButtonPaneComponent,
    EditPaneComponent
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
    MatRippleModule,
    MatSortModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatListModule,
    MatGridListModule,
    MatCardModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

