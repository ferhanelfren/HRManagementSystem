using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HumanResourceManagementSystem.Migrations
{
    public partial class positionsemployee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Positions_PositionId",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "PositionId",
                table: "AspNetUsers",
                newName: "PositionsId");

            migrationBuilder.RenameIndex(
                name: "IX_AspNetUsers_PositionId",
                table: "AspNetUsers",
                newName: "IX_AspNetUsers_PositionsId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Positions_PositionsId",
                table: "AspNetUsers",
                column: "PositionsId",
                principalTable: "Positions",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Positions_PositionsId",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "PositionsId",
                table: "AspNetUsers",
                newName: "PositionId");

            migrationBuilder.RenameIndex(
                name: "IX_AspNetUsers_PositionsId",
                table: "AspNetUsers",
                newName: "IX_AspNetUsers_PositionId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Positions_PositionId",
                table: "AspNetUsers",
                column: "PositionId",
                principalTable: "Positions",
                principalColumn: "Id");
        }
    }
}
