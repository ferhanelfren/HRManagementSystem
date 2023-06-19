using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HumanResourceManagementSystem.Migrations
{
    public partial class departmentemployee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DepartmentsId",
                table: "AspNetUsers",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_DepartmentsId",
                table: "AspNetUsers",
                column: "DepartmentsId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Departments_DepartmentsId",
                table: "AspNetUsers",
                column: "DepartmentsId",
                principalTable: "Departments",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Departments_DepartmentsId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_DepartmentsId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DepartmentsId",
                table: "AspNetUsers");
        }
    }
}
