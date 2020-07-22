import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule }   from './core/core.module';
import { SharedModule }   from './shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyModalComponent } from './modals/my-modal/my-modal.component';

import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    CoreModule,   //Singleton objects
    SharedModule,  //Shared (multi-instance) objects
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [ AppComponent, AppRoutingModule.components, WelcomeComponent, MyModalComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [MyModalComponent]

})
export class AppModule { }
