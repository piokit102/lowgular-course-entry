import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeFormComponent } from './employe-form.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [EmployeFormComponent],
  providers: [],
  exports: [EmployeFormComponent]
})
export class EmployeFormComponentModule {
}
