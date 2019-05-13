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
import { EditPaneComponent, DialogOverviewExampleDialog } from './edit-pane/edit-pane.component';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule }    from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    routingComponents,
    ListPaneComponent,
    ButtonPaneComponent,
    EditPaneComponent,
    DialogOverviewExampleDialog
  ],
  entryComponents: [DialogOverviewExampleDialog],
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
    MatCardModule,
    HttpClientModule,
    MatDialogModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

