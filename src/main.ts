import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {importProvidersFrom} from '@angular/core';
import {AppComponent} from './app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LoginComponent} from './app/login/login.component';
import {EmployeesComponent} from './app/employees/employees.component';
import {EmployeeDetailsComponent} from './app/employee-details/employee-details.component';

// Bootstrap the app and set up routes
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        {path: '', component: LoginComponent},
        {path: 'employees', component: EmployeesComponent},
        {path: 'employees/:id', component: EmployeeDetailsComponent},
        {path: '**', redirectTo: ''}, // Redirect unknown paths to login
      ],
      withComponentInputBinding()
    ),
    importProvidersFrom(BrowserAnimationsModule),
  ],
}).catch((err) => console.error(err));
