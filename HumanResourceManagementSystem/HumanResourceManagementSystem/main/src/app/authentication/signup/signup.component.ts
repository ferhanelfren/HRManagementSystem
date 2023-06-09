import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';

interface Gender {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  authForm!: UntypedFormGroup;
  submitted = false;
  returnUrl!: string;
  hide = true;
  chide = true;
  showAlrtMsg = false;
  showErrMsg = false;
  errorAlrtMsg!: string;
  // model:any = {};
  selectedValue: string;


  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() {
    return this.authForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.authForm.invalid) {
      return;
    } else {
      this.router.navigate(['/admin/dashboard/main']);
    }
  }

  onRegister(){
    // this.authService.register(this.model).subscribe({
    //   next: () => {
    //     this.showAlrtMsg = true;
    //     this.cancel();
    //     setTimeout(() => {
    //       this.showAlrtMsg = false;
    //       this.router.navigate(['/authentication/signin']);
    //     }, 4000);
    //   },
    //   //error: error => console.log(error)
    //   error: error => {
    //     //this.errorAlrtMsg = error.message;
    //     this.errorAlrtMsg = error.toString();
    //     this.showErrMsg = true;
    //     setTimeout(() => {
    //       this.showErrMsg = false;
    //     }, 4000);
    //   }
    // })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

  gender: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
  ];
}
