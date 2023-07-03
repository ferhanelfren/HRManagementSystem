/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { EmployeeModel } from 'src/app/core/models/employeeModel';
import { AuthService } from 'src/app/core/service/auth.service';
import { DepartmentsService } from 'src/app/core/service/departments.service';
import { PositionsService } from 'src/app/core/service/positions.service';
import { DepartmentsVM, FileParameter,FileResponse, Image, PositionsVM, } from 'src/app/hrms-swagger';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent {
  docForm: UntypedFormGroup;

  hide3 = true;
  agree3 = false;
  imageModel: Image;
  selectedFile: File;
  positionNameFilter: string;
  positionsNameVM: PositionsVM[];
  departmentFilter: string;
  departmentsNameVM: DepartmentsVM[];




  // employeeNumber: string;
  // positionName: string;
  // departmentName: string;

  hide = true;
  public file: File | null = null;
  // onChange: Function;


  imageFile: FileParameter;
  // username: string;
  // password: string;
  // positionName: string;
  // employeeNumber: string;
  // departmentName: string;

  // firstName: string;
  // middleName: string;
  // lastName: string;
  // extentName: string;
  // email: string;
  // phoneNumber: string;
  // gender: string;
  employeeModel = new EmployeeModel();

  @HostListener('change', ['$event.target.files'])
  emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.onChange(file);
    this.file = file;
  }


  constructor(
    private snackBar: MatSnackBar,
    private fb: UntypedFormBuilder,
    private positionService: PositionsService,
    private departmentsService: DepartmentsService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef) {
    this.docForm = this.fb.group({
      // imageFile: [''],
      employeeNumber: ['', [Validators.required]],
      positionName: ['', [Validators.required]],
      departmentName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      middleName:  ['', [Validators.required]],
      gender: ['', [Validators.required]],
      extentName: [''],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],

      placeofBirth: ['', [Validators.required]],
      bloodType: ['', [Validators.required]],
      height: [''],
      weight: [''],
      citizenship: ['', [Validators.required]],
      civilStatus: ['', [Validators.required]],
      religion: ['', [Validators.required]],
      ethnicity: [''],
      tribalAffiliation: [''],
      presentAddress: ['', [Validators.required]],
      presentCityMun: ['', [Validators.required]],
      presentProvince: ['', [Validators.required]],
      presentZip: ['', [Validators.required]],
      permanentAddress: ['', [Validators.required]],
      permanentCityMun: ['', [Validators.required]],
      permanentProvince: ['', [Validators.required]],
      permanentZip: ['', [Validators.required]],

      dateHired: ['', [Validators.required]],
      nationalIDNo: [''],
      tINNo: [''],
      sSSNo: [''],
      pagibigNo: [''],
      philHealthNo: [''],

      fatherName:['', [Validators.required]],
      fatherOccupation:['', [Validators.required]],
      motherName:['', [Validators.required]],
      motherOccupation:['', [Validators.required]],

      spouseFullName: [''],
      spouseContactNo:[''],
      spouseOccupation:[''],
      spouseCompanyName:[''],
      spouseCompanyAdd:[''],

      dateExam:[''],
      rating:[''],
      regNo:[''],
      placeofExam:[''],
      dateRegitered:[''],
      validity:[''],
      remarks:[''],
      govLicensureExam:[''],

      primarySchool: ['', [Validators.required]],
      primaryAcademicHonor:[''],
      primaryYearGraduated: ['', [Validators.required]],
      secondarySchool: ['', [Validators.required]],
      secondaryAcademicHonor: [''],
      secondaryYearGraduated: ['', [Validators.required]],
      tertiarySchool:[''],
      tertiaryAcademicHonor:[''],
      degreeEarned:[''],


      major:[''],
      tertiaryYearGraduated:[''],
      mastersSchool:[''],
      mastersAcademicHonor:[''],
      mastersDegreeEarned:[''],
      mastersMajor:[''],
      mastersYearGraduated:[''],
      phdSchool:[''],
      phdAcademicHonor:[''],
      phdDegreeEarned:[''],
      phdMajor:[''],
      phdYearGraduated:[''],

    });


    this.loadPositions();
    this.loadDepartment();
  }


  showNotification(
    colorName: string,
    text: string,
    placementFrom: MatSnackBarVerticalPosition,
    placementAlign: MatSnackBarHorizontalPosition
  ) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange(file: File) {
    // console.log('File changed:', file);
  }


  onSubmit() {
    console.log('Form Value', this.docForm.value);
  }

  // onFileSelected(event: any) {
  //   // this.selectedFile = event.target.files[0];
  //   const fileInput = event.target as HTMLInputElement;
  //   if (fileInput.files && fileInput.files.length > 0) {
  //     const file = fileInput.files[0];

  //     this.employeeModel.imageFile = {
  //       data: file,
  //       fileName: file.name
  //     }
  //   }

  // }

  // onFileSelected(event: any) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.docForm.get('imageFile').setValue(file);
  //   }
  // }

  onFileSelected(event: any) {
    // if (event.target.files.length > 0) {
    //   const file = event.target.files[0];
    //   const reader = new FileReader();

    //   reader.onload = (e: any) => {
    //     const base64String = e.target.result;
    //     this.docForm.get('imageFile').setValue(base64String);
    //   };

    //   reader.readAsDataURL(file);
    // }
    //this.imageFile = event.target.files[0];
  }


  // onFileSelected(event: any) {
  //   const fileInput = event.target as HTMLInputElement;
  //     if (fileInput.files && fileInput.files.length > 0) {
  //       const file = fileInput.files[0];

  //       setTimeout(() => {
  //         this.employeeModel.imageFile = {
  //           data: file,
  //           fileName: file.name
  //         };
  //       });
  //     }
  // }

  // onFileSelected(event: any) {
  //   const fileInput = event.target as HTMLInputElement;
  //   if (fileInput.files && fileInput.files.length > 0) {
  //     const file = fileInput.files[0];
  //     const imageURL = URL.createObjectURL(file);

  //     this.employeeModel.imageFile = {
  //       data: file,
  //       fileName: file.name
  //     };
  //     console.log(imageURL);
  //   }
  // }

  // onFileSelected(event: any) {
  //   const fileInput = event.target as HTMLInputElement;
  //   if (fileInput.files && fileInput.files.length > 0) {
  //     const file = fileInput.files[0];
  //     this.docForm = {
  //       data: file,
  //       fileName: file.name
  //     };
  //   }
  // }

  getImageUrl(): string {
    if (this.employeeModel.imageFile) {
      return URL.createObjectURL(this.employeeModel.imageFile.data);
    }
    return '';
  }



  // uploadImage() {
  //   if (this.selectedFile) {
  //     this.positionService.uploadImage(this.imageModel).subscribe(
  //       result => {
  //         console.log('Upload Success', result);
  //       },
  //       error => {
  //         console.log('Error', error);
  //       }
  //     );
  //   }
  // }

  loadPositions(){
    this.positionService.getPositionList(this.positionNameFilter).subscribe(
      (fileResponse: FileResponse | null) => {
        if (fileResponse && fileResponse.data) {
          const fileReader = new FileReader();
          fileReader.onload = (event: any) => {
            const jsonData = JSON.parse(event.target.result);
            this.positionsNameVM = jsonData;
          };
          fileReader.readAsText(fileResponse.data);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  loadDepartment(){
    this.departmentsService.getDepartmentList(this.departmentFilter).subscribe(
      (fileResponse: FileResponse | null) => {
        if (fileResponse && fileResponse.data) {
          const fileReader = new FileReader();
          fileReader.onload = (event: any) => {
            const jsonData = JSON.parse(event.target.result);
            this.departmentsNameVM = jsonData;

          };
          fileReader.readAsText(fileResponse.data);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // onSave(){
  //   this.authService.registerEmployee(this.employeesVM, this.positionName, this.departmentName).subscribe(
  //     (result: any )=> {
  //       console.log(result);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }


  onSave(){
    if (this.docForm.invalid) {
      console.log('Invalid Form:', this.docForm.controls);
      this.snackBar.open(
        'Please fill in all required fields',
        'Close',
        { duration: 5000 });

    return;

    } else{
      const formData = this.docForm.value;
      //const formData = new FormData();
      // const imageFile = this.docForm.get('imageFile').value;

      // formData.append('imageFile', imageFile);

      this.authService.registerEmployee(formData).subscribe(
        (response: any )=> {
          console.log(response);
          if(response.status === 200) {
            this.showNotification(
              'snackbar-success',
              'Employee added successfully',
              'top',
              'center'
            );
          } else{
            this.showNotification(
              'error-color',
              'An error occurred while creating the employee account!',
              'top',
              'center'
            );
          }
        },
        error => {
          //console.log(error);
          this.showNotification(
            'error-color',
            'An error occurred while creating the employee account! See the errors: '+ error.message,
            'top',
            'center'
          );
        }
      );

    }
  }

  // onSave(){

  //   if (this.docForm.invalid) {
  //     // Form is invalid, handle accordingly (show error messages, etc.)
  //     console.log("error");
  //   }

  //   const formData = this.docForm.value;

  //   this.authService.registerEmployee(formData).subscribe(
  //     (response: Response) => {
  //       if (response.status === "Success") {
  //         console.log(response);
  //         this.showNotification(
  //           'snackbar-success',
  //           response.message,
  //           'top',
  //           'center'
  //         );
  //       } else {
  //         this.showNotification(
  //           'error-color',
  //           response.message,
  //           'top',
  //           'center'
  //         );
  //       }
  //     },
  //     error => {
  //       console.log(error);
  //       this.showNotification(
  //         'error-color',
  //         'An error occurred while creating the employee account!',
  //         'top',
  //         'center'
  //       );
  //     }
  //   );
  //   // this.authService.registerEmployee(this.employeeModel).subscribe(
  //   //   result=> {
  //   //     console.log(result);
  //   //   },
  //   //   error => {
  //   //     console.log(error);
  //   //   }
  //   // );

  // }

}
