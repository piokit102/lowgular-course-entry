import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';
import { EmployeFormComponent } from './ui/employe-form/employe-form.component';
import { HomeComponent } from './ui/home-component/home.component';
import { EmployeeDetailsComponent } from './ui/employee-details/employee-details.component';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { EmployeFormComponentModule } from './ui/employe-form/employe-form.component-module';
import { HomeComponentModule } from './ui/home-component/home.component-module';
import { EmployeeDetailsComponentModule } from './ui/employee-details/employee-details.component-module';

const routes: Routes = [{ path: 'list', component: EmployeeListComponent }, { path: 'create-employee', component: EmployeFormComponent }, { path: '', component: HomeComponent }, { path: 'employee-details/:id', component: EmployeeDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeeListComponentModule, EmployeeServiceModule, EmployeFormComponentModule, HomeComponentModule, EmployeeDetailsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
