import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { Role } from 'src/app/core/models/role';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { EmployeeEntity, LeaveBalance } from 'src/app/swagger-generated';
import { User } from 'src/app/core/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  authForm!: UntypedFormGroup;
  submitted = false;
  loading = false;



  errorAlrtMsg!: string;
  hide = true;

  model:any = {};
  showErrMsg = false;
  showAlrtMsg = false;
  showAlrtMsgOne = false;

  employee: EmployeeEntity | undefined;
  leaveBalance: LeaveBalance;
  error: string;
  isAdmin: Observable<boolean>;


  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {
    super();
  }

  get f() {
    return this.authForm.controls;
  }

  ngOnInit(){
    this.authForm = this.formBuilder.group({
      username: ['admin@software.com', Validators.required],
      password: ['admin@123', Validators.required],
    });
  }

  adminSet() {
    this.authForm.get('username')?.setValue('admin@software.com');
    this.authForm.get('password')?.setValue('admin@123');
  }
  employeeSet() {
    this.authForm.get('username')?.setValue('employee@software.com');
    this.authForm.get('password')?.setValue('employee@123');
  }
  clientSet() {
    this.authForm.get('username')?.setValue('client@software.com');
    this.authForm.get('password')?.setValue('client@123');
  }

  onSubmit() {
      this.authService.login(this.model).subscribe(
        (response: any) => {
          const role = response.role
          if(role === 'Admin') {
            this.showAlrtMsg = true;
            this.router.navigate(['/admin/dashboard/main']);
          } else if(role === 'User'){
            this.showAlrtMsg = true;
            this.router.navigate(['/employee/dashboard']);
          }
          else{
            this.showErrMsg = true;
          }
        },
        (error: any) => {
          this.errorAlrtMsg = error.toString();
          this.showErrMsg = true;
        }
      );
  }



}
