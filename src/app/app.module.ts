import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomeCreateComponent } from './home/home-create/home-create.component';
import { HomeReadComponent } from './home/home-read/home-read.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeCreateComponent,
    HomeReadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // Required for Toastr animations
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',  // Toast position: top-right
      toastClass: 'toast toast-error',  // Use the 'toast-error' class for styling
      timeOut: 3000,  // Duration for toast to appear (in milliseconds)
      closeButton: true,  // Add a close button to the toast
      progressBar: true,  // Add a progress bar for the toast duration
    }), 
    ReactiveFormsModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
