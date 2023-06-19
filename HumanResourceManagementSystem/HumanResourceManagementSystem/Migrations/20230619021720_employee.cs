using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HumanResourceManagementSystem.Migrations
{
    public partial class employee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ZipCode",
                table: "AspNetUsers",
                newName: "Weight");

            migrationBuilder.RenameColumn(
                name: "UnitNo",
                table: "AspNetUsers",
                newName: "TribalAffiliation");

            migrationBuilder.RenameColumn(
                name: "Street",
                table: "AspNetUsers",
                newName: "TertiaryYearGraduated");

            migrationBuilder.RenameColumn(
                name: "Province",
                table: "AspNetUsers",
                newName: "TertiarySchool");

            migrationBuilder.RenameColumn(
                name: "CityMun",
                table: "AspNetUsers",
                newName: "TertiaryAcademicHonor");

            migrationBuilder.RenameColumn(
                name: "BuildingNo",
                table: "AspNetUsers",
                newName: "TINNo");

            migrationBuilder.RenameColumn(
                name: "Barangay",
                table: "AspNetUsers",
                newName: "SpouseOccupation");

            migrationBuilder.AddColumn<string>(
                name: "BloodType",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Citizenship",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CivilStatus",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateExam",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DateHired",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DateRegitered",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DegreeEarned",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EmployeeNumber",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Ethnicity",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FatherName",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FatherOccupation",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "GovLicensureExam",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Height",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Major",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MastersAcademicHonor",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MastersDegreeEarned",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MastersMajor",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MastersSchool",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MastersYearGraduated",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MotherName",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MotherOccupation",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NationalIDNo",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PagibigNo",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PermanentAddress",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PermanentCityMun",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PermanentProvince",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PermanentZip",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhdAcademicHonor",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhdDegreeEarned",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhdMajor",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhdSchool",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhdYearGraduated",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhilHealthNo",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PlaceBirth",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PlaceofExam",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PresentAddress",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PresentCityMun",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PresentProvince",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PresentZip",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PrimaryAcademicHonor",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PrimarySchool",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PrimaryYearGraduated",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Rating",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RegNo",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Religion",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Remarks",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SSSNo",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SecondaryAcademicHonor",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SecondarySchool",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SecondaryYearGraduated",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SpouseCompanyAdd",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SpouseCompanyName",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SpouseContactNo",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SpouseFullName",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "TimeStamp",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "Validity",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BloodType",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Citizenship",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "CivilStatus",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DateExam",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DateHired",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DateRegitered",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DegreeEarned",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "EmployeeNumber",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Ethnicity",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "FatherName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "FatherOccupation",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "GovLicensureExam",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Height",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Image",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Major",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "MastersAcademicHonor",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "MastersDegreeEarned",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "MastersMajor",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "MastersSchool",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "MastersYearGraduated",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "MotherName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "MotherOccupation",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "NationalIDNo",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PagibigNo",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PermanentAddress",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PermanentCityMun",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PermanentProvince",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PermanentZip",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PhdAcademicHonor",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PhdDegreeEarned",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PhdMajor",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PhdSchool",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PhdYearGraduated",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PhilHealthNo",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PlaceBirth",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PlaceofExam",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PresentAddress",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PresentCityMun",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PresentProvince",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PresentZip",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PrimaryAcademicHonor",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PrimarySchool",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PrimaryYearGraduated",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Rating",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "RegNo",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Religion",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Remarks",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "SSSNo",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "SecondaryAcademicHonor",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "SecondarySchool",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "SecondaryYearGraduated",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "SpouseCompanyAdd",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "SpouseCompanyName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "SpouseContactNo",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "SpouseFullName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "TimeStamp",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Validity",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "Weight",
                table: "AspNetUsers",
                newName: "ZipCode");

            migrationBuilder.RenameColumn(
                name: "TribalAffiliation",
                table: "AspNetUsers",
                newName: "UnitNo");

            migrationBuilder.RenameColumn(
                name: "TertiaryYearGraduated",
                table: "AspNetUsers",
                newName: "Street");

            migrationBuilder.RenameColumn(
                name: "TertiarySchool",
                table: "AspNetUsers",
                newName: "Province");

            migrationBuilder.RenameColumn(
                name: "TertiaryAcademicHonor",
                table: "AspNetUsers",
                newName: "CityMun");

            migrationBuilder.RenameColumn(
                name: "TINNo",
                table: "AspNetUsers",
                newName: "BuildingNo");

            migrationBuilder.RenameColumn(
                name: "SpouseOccupation",
                table: "AspNetUsers",
                newName: "Barangay");
        }
    }
}
