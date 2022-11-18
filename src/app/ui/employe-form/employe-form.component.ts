import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CreateEmployeeModel } from '../../model/create-employee.model';

@Component({
  selector: 'app-employe-form',
  templateUrl: './employe-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeFormComponent {
  readonly eForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.min(0)]),
      salary: new FormControl(null, [Validators.required, Validators.min(0)])
    });

  constructor(private _employeeService: EmployeeService) {
  }

  onButtonClicked(form: { name: string, age: number, salary: number }) {
    alert('Name:' + form.name + ', age:' + form.age + ', salary:' + form.salary);
  }

  onFormSumbmitted(form: CreateEmployeeModel) {
    this._employeeService.create({name:form.name, age:form.age, salary:form.salary}).subscribe();
    alert('Name:' + form.name + ', age:' + form.age + ', salary:' + form.salary);
  }
}


