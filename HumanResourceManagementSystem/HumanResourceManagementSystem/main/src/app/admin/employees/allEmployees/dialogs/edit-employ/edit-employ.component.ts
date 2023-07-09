/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeModel } from 'src/app/core/models/employeeModel';
import { AuthService } from 'src/app/core/service/auth.service';
import { DepartmentsService } from 'src/app/core/service/departments.service';
import { PositionsService } from 'src/app/core/service/positions.service';
import { PositionsVM, DepartmentsVM, FileResponse } from 'src/app/hrms-swagger';

@Component({
  selector: 'app-edit-employ',
  templateUrl: './edit-employ.component.html',
  styleUrls: ['./edit-employ.component.scss']
})
export class EditEmployComponent {
  docForm: UntypedFormGroup;
  positionNameFilter: string;
  positionsNameVM: PositionsVM[];
  departmentFilter: string;
  departmentsNameVM: DepartmentsVM[];
  employeeModel: EmployeeModel = new EmployeeModel();
  hide = true;
  @Output() updateSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();
  username: string


  constructor(
    private snackBar: MatSnackBar,
    private fb: UntypedFormBuilder,
    private positionService: PositionsService,
    private departmentsService: DepartmentsService,
    public dialogRef: MatDialogRef<EditEmployComponent>,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.docForm = this.fb.group({
      // imageFile: [''],
      id: data.id,
      username: data.username,
      password: data.password,
      positionName: data.positionName,
      employeeNumber: data.employeeNumber,
      departmentName: data.departmentName,

      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      extentName: data.extentName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      gender: data.gender,
      placeofBirth: data.placeofBirth,
      birthDate: new Date(data.birthDate),
      bloodType: data.bloodType,
      height: data.height,
      weight: data.weight,


      citizenship: data.citizenship,
      civilStatus: data.civilStatus,

      religion: data.religion,
      ethnicity: data.ethnicity,
      tribalAffiliation: data.tribalAffiliation,

      presentAddress: data.presentAddress,
      presentCityMun: data.presentCityMun,
      presentProvince: data.presentProvince,
      presentZip: data.presentZip,
      permanentAddress: data.permanentAddress,
      permanentCityMun: data.permanentCityMun,
      permanentProvince: data.permanentProvince,
      permanentZip: data.permanentZip,

      dateHired: new Date(data.dateHired),
      nationalIDNo: data.nationalIDNo,
      tINNo: data.tINNo,
      sSSNo: data.sSSNo,
      pagibigNo: data.pagibigNo,
      philHealthNo: data.philHealthNo,

      spouseFullName: data.spouseFullName,
      spouseContactNo: data.spouseContactNo,
      spouseOccupation: data.spouseOccupation,
      spouseCompanyName: data.spouseCompanyName,
      spouseCompanyAdd: data.spouseCompanyAdd,

      fatherName: data.fatherName,
      fatherOccupation: data.fatherOccupation,
      motherName: data.motherName,
      motherOccupation: data.motherOccupation,

      govLicensureExam: data.govLicensureExam,
      dateExam: data.dateExam,
      rating: data.rating,
      regNo: data.regNo,
      placeofExam: data.placeofExam,
      dateRegitered: data.dateRegitered,
      validity: data.validity,
      remarks: data.remarks,

      primarySchool: data.primarySchool,
      primaryAcademicHonor: data.primaryAcademicHonor,
      primaryYearGraduated: data.primaryYearGraduated,
      secondarySchool: data.secondarySchool,
      secondaryAcademicHonor: data.secondaryAcademicHonor,
      secondaryYearGraduated: data.secondaryYearGraduated,
      tertiarySchool: data.tertiarySchool,
      tertiaryAcademicHonor: data.tertiaryAcademicHonor,
      degreeEarned: data.degreeEarned,
      major: data.major,
      tertiaryYearGraduated: data.tertiaryYearGraduated,
      mastersSchool: data.mastersSchool,
      mastersAcademicHonor: data.mastersAcademicHonor,
      mastersDegreeEarned: data.mastersDegreeEarned,
      mastersMajor: data.mastersMajor,
      mastersYearGraduated: data.mastersYearGraduated,
      phdSchool: data.phdSchool,
      phdAcademicHonor: data.phdAcademicHonor,
      phdDegreeEarned: data.phdDegreeEarned,
      phdMajor: data.phdMajor,
      phdYearGraduated: data.phdYearGraduated,

    });

    // this.employeeModel.username = data.username;
    // this.username = data.username;
    // this.authService.getEmployeeList(data.id).subscribe(
    //   (response) => {
    //     console.log(response);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }



  onNoClick(): void {
    this.dialogRef.close();
  }


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

}
