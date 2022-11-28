import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponentModule } from "./ui/employee-list/employee-list.component-module";
import {FacesComponentModule} from "./ui/faces/faces.component-module";
import {EmployeeService} from "./services/employee.service";
import {EmployeeServiceModule} from "./services/employee.service-module";
import {ProjectListComponentModule} from "./ui/project-list/project-list.component-module";
import {EmployeFormComponentModule} from "./ui/employe-form/employe-form.component-module";
import {EmployeeDetailsComponentModule} from "./ui/employee-details/employee-details.component-module";


@NgModule({
  declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        EmployeeListComponentModule,
        FacesComponentModule,
        EmployeeServiceModule,
        ProjectListComponentModule,
        EmployeFormComponentModule,
        EmployeeDetailsComponentModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
