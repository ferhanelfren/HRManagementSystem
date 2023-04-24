"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[2058],{2058:(Rt,N,d)=>{d.r(N),d.d(N,{HolidayModule:()=>Yt});var h=d(6895),n=d(4006),p=d(671),A=d(8739),s=d(9549),b=d(4144),q=d(7009),_=d(4859),T=d(7392),Q=d(4385),D=d(6709),u=d(5938),C=d(6308),w=d(3683),f=d(9602),H=d(266),U=d(1572),k=d(9132),S=d(1135),I=d(9186),t=d(4650),J=d(529);let Z=(()=>{class e extends I.n{constructor(a){super(),this.httpClient=a,this.API_URL="assets/data/holidays.json",this.isTblLoading=!0,this.dataChange=new S.X([])}get data(){return this.dataChange.value}getDialogData(){return this.dialogData}getAllHolidays(){this.subs.sink=this.httpClient.get(this.API_URL).subscribe({next:a=>{this.isTblLoading=!1,this.dataChange.next(a)},error:a=>{this.isTblLoading=!1,console.log(a.name+" "+a.message)}})}addHoliday(a){this.dialogData=a}updateHoliday(a){this.dialogData=a}deleteHoliday(a){console.log(a)}}return e.\u0275fac=function(a){return new(a||e)(t.LFG(J.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var v=d(5017);class E{constructor(i){this.id=i.id||this.getRandomID(),this.hName=i.hName||"",this.shift=i.shift||"",this.details=i.details||"",this.date=(0,h.p6)(new Date,"yyyy-MM-dd","en")||"",this.location=i.location||""}getRandomID(){const i=()=>65536*(1+Math.random())|0;return i()+i()}}function Y(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Holiday Name is required "),t.qZA())}function R(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please select date "),t.qZA())}function M(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Location is required "),t.qZA())}function L(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Shift is required "),t.qZA())}let F=(()=>{class e{constructor(a,o,l,r){this.dialogRef=a,this.data=o,this.holidayService=l,this.fb=r,this.formControl=new n.p4("",[n.kI.required]),this.action=o.action,"edit"===this.action?(this.dialogTitle=o.holiday.hName,this.holiday=o.holiday):(this.dialogTitle="New Holiday",this.holiday=new E({})),this.holidayForm=this.createContactForm()}getErrorMessage(){return this.formControl.hasError("required")?"Required field":this.formControl.hasError("email")?"Not a valid email":""}createContactForm(){return this.fb.group({id:[this.holiday.id],hName:[this.holiday.hName],date:[this.holiday.date],location:[this.holiday.location],shift:[this.holiday.shift],details:[this.holiday.details]})}submit(){}onNoClick(){this.dialogRef.close()}confirmAdd(){this.holidayService.addHoliday(this.holidayForm.getRawValue())}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(u.so),t.Y36(u.WI),t.Y36(Z),t.Y36(n.QS))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-form-dialog"]],decls:59,vars:10,consts:[[1,"addContainer"],[1,"modalHeader"],[1,"editRowModal"],[1,"modalHeader","clearfix"],[1,"modal-about"],["mat-icon-button","","aria-label","Close dialog",1,"modal-close-button",3,"click"],["mat-dialog-content",""],[1,"register-form","m-4",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-xl-6","col-lg-6","col-md-12","col-sm-12","mb-2"],["appearance","outline",1,"example-full-width"],["matInput","","formControlName","hName","required",""],["matSuffix",""],[4,"ngIf"],["matInput","","formControlName","date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["matInput","","formControlName","location","required",""],["matInput","","formControlName","shift","required",""],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-2"],["matInput","","formControlName","details"],["align","end",1,"example-button-row"],["mat-raised-button","","color","primary",3,"disabled","mat-dialog-close","click"],["mat-raised-button","","color","warn","tabindex","-1",3,"click"]],template:function(a,o){if(1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t._uU(5),t.qZA()()(),t.TgZ(6,"button",5),t.NdJ("click",function(){return o.dialogRef.close()}),t.TgZ(7,"mat-icon"),t._uU(8,"close"),t.qZA()()(),t.TgZ(9,"div",6)(10,"form",7),t.NdJ("ngSubmit",function(){return o.submit}),t.TgZ(11,"div",8)(12,"div",9)(13,"mat-form-field",10)(14,"mat-label"),t._uU(15,"Holiday Name"),t.qZA(),t._UZ(16,"input",11),t.TgZ(17,"mat-icon",12),t._uU(18,"article"),t.qZA(),t.YNc(19,Y,2,0,"mat-error",13),t.qZA()(),t.TgZ(20,"div",9)(21,"mat-form-field",10)(22,"mat-label"),t._uU(23,"Date"),t.qZA(),t._UZ(24,"input",14)(25,"mat-datepicker-toggle",15)(26,"mat-datepicker",null,16),t.YNc(28,R,2,0,"mat-error",13),t.qZA()()(),t.TgZ(29,"div",8)(30,"div",9)(31,"mat-form-field",10)(32,"mat-label"),t._uU(33,"Location"),t.qZA(),t._UZ(34,"input",17),t.TgZ(35,"mat-icon",12),t._uU(36,"place"),t.qZA(),t.YNc(37,M,2,0,"mat-error",13),t.qZA()(),t.TgZ(38,"div",9)(39,"mat-form-field",10)(40,"mat-label"),t._uU(41,"Shift"),t.qZA(),t._UZ(42,"input",18),t.TgZ(43,"mat-icon",12),t._uU(44,"checklist"),t.qZA(),t.YNc(45,L,2,0,"mat-error",13),t.qZA()()(),t.TgZ(46,"div",8)(47,"div",19)(48,"mat-form-field",10)(49,"mat-label"),t._uU(50,"details"),t.qZA(),t._UZ(51,"textarea",20),t.qZA()()(),t.TgZ(52,"div",8)(53,"div",19)(54,"div",21)(55,"button",22),t.NdJ("click",function(){return o.confirmAdd()}),t._uU(56,"Save"),t.qZA(),t.TgZ(57,"button",23),t.NdJ("click",function(){return o.onNoClick()}),t._uU(58,"Cancel"),t.qZA()()()()()()()),2&a){const l=t.MAs(27);let r,c,m,g;t.xp6(5),t.hij(" ",o.dialogTitle," "),t.xp6(5),t.Q6J("formGroup",o.holidayForm),t.xp6(9),t.Q6J("ngIf",null==(r=o.holidayForm.get("hName"))?null:r.hasError("required")),t.xp6(5),t.Q6J("matDatepicker",l),t.xp6(1),t.Q6J("for",l),t.xp6(3),t.Q6J("ngIf",null==(c=o.holidayForm.get("date"))?null:c.hasError("required")),t.xp6(9),t.Q6J("ngIf",null==(m=o.holidayForm.get("location"))?null:m.hasError("required")),t.xp6(8),t.Q6J("ngIf",null==(g=o.holidayForm.get("shift"))?null:g.hasError("required")),t.xp6(10),t.Q6J("disabled",!o.holidayForm.valid)("mat-dialog-close",1)}},dependencies:[h.O5,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.sg,n.u,s.KE,s.hX,s.TO,s.R9,b.Nt,_.lW,_.RK,T.Hw,u.ZT,u.xY,f.Mq,f.hl,f.nW]}),e})(),O=(()=>{class e{constructor(a,o,l){this.dialogRef=a,this.data=o,this.holidayService=l}onNoClick(){this.dialogRef.close()}confirmDelete(){this.holidayService.deleteHoliday(this.data.id)}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(u.so),t.Y36(u.WI),t.Y36(Z))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-delete"]],decls:26,vars:7,consts:[[1,"container"],["mat-dialog-title",""],["mat-dialog-content",""],[1,"clearfix"],[1,"font-weight-bold"],["mat-dialog-actions","",1,"mb-1"],["mat-flat-button","","color","warn",3,"mat-dialog-close","click"],["mat-flat-button","","tabindex","-1",3,"click"]],template:function(a,o){1&a&&(t.TgZ(0,"div",0)(1,"h3",1),t._uU(2,"Are you sure?"),t.qZA(),t.TgZ(3,"div",2)(4,"ul",3)(5,"li")(6,"p")(7,"span",4),t._uU(8,"Holiday Name: "),t.qZA(),t._uU(9),t.qZA()(),t.TgZ(10,"li")(11,"p")(12,"span",4),t._uU(13," Location: "),t.qZA(),t._uU(14),t.qZA()(),t.TgZ(15,"li")(16,"p")(17,"span",4),t._uU(18,"Date: "),t.qZA(),t._uU(19),t.ALo(20,"date"),t.qZA()()()(),t.TgZ(21,"div",5)(22,"button",6),t.NdJ("click",function(){return o.confirmDelete()}),t._uU(23," Delete "),t.qZA(),t.TgZ(24,"button",7),t.NdJ("click",function(){return o.onNoClick()}),t._uU(25,"Cancel"),t.qZA()()()),2&a&&(t.xp6(9),t.Oqu(o.data.hName),t.xp6(5),t.Oqu(o.data.location),t.xp6(5),t.hij("",t.xi3(20,4,o.data.date,"MM/dd/yyyy")," "),t.xp6(3),t.Q6J("mat-dialog-close",1))},dependencies:[_.lW,u.ZT,u.uh,u.xY,u.H8,h.uU]}),e})();var G=d(4968),B=d(6451),j=d(4004),X=d(6035),x=d(1299),z=d(1676);const P=["filter"];function W(e,i){if(1&e){const a=t.EpF();t.TgZ(0,"mat-header-cell",51)(1,"mat-checkbox",52),t.NdJ("change",function(l){t.CHM(a);const r=t.oxw();return t.KtG(l?r.masterToggle():null)}),t.qZA()()}if(2&e){const a=t.oxw();t.Q6J("ngClass","tbl-col-width-per-6"),t.xp6(1),t.Q6J("checked",a.selection.hasValue()&&a.isAllSelected())("indeterminate",a.selection.hasValue()&&!a.isAllSelected())("ngClass","tbl-checkbox")}}function K(e,i){if(1&e){const a=t.EpF();t.TgZ(0,"mat-cell",51)(1,"mat-checkbox",53),t.NdJ("click",function(l){return l.stopPropagation()})("change",function(l){const c=t.CHM(a).$implicit,m=t.oxw();return t.KtG(l?m.selection.toggle(c):null)}),t.qZA()()}if(2&e){const a=i.$implicit,o=t.oxw();t.Q6J("ngClass","tbl-col-width-per-6"),t.xp6(1),t.Q6J("checked",o.selection.isSelected(a))("ngClass","tbl-checkbox")}}function $(e,i){1&e&&(t.TgZ(0,"mat-header-cell",54),t._uU(1,"Id"),t.qZA())}function V(e,i){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const a=i.$implicit;t.xp6(1),t.Oqu(a.id)}}function tt(e,i){1&e&&(t.TgZ(0,"mat-header-cell",54),t._uU(1,"Holiday Name"),t.qZA())}function et(e,i){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const a=i.$implicit;t.xp6(1),t.hij(" ",a.hName,"")}}function at(e,i){1&e&&(t.TgZ(0,"mat-header-cell",54),t._uU(1,"Date"),t.qZA())}function ot(e,i){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const a=i.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,a.date,"MM/dd/yyyy")," ")}}function it(e,i){1&e&&(t.TgZ(0,"mat-header-cell",54),t._uU(1,"Location"),t.qZA())}function lt(e,i){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const a=i.$implicit;t.xp6(1),t.hij(" ",a.location," ")}}function nt(e,i){1&e&&(t.TgZ(0,"mat-header-cell",54),t._uU(1,"Shift"),t.qZA())}function rt(e,i){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const a=i.$implicit;t.xp6(1),t.hij(" ",a.shift,"")}}function dt(e,i){1&e&&(t.TgZ(0,"mat-header-cell",54),t._uU(1,"details"),t.qZA())}function ct(e,i){if(1&e&&(t.TgZ(0,"mat-cell")(1,"span",55),t._uU(2),t.qZA()()),2&e){const a=i.$implicit;t.xp6(2),t.Oqu(a.details)}}function mt(e,i){1&e&&(t.TgZ(0,"mat-header-cell",56),t._uU(1,"Actions"),t.qZA())}function st(e,i){if(1&e){const a=t.EpF();t.TgZ(0,"mat-cell",56)(1,"button",57),t.NdJ("click",function(l){return l.stopPropagation()})("click",function(){const r=t.CHM(a).$implicit,c=t.oxw();return t.KtG(c.editCall(r))}),t._UZ(2,"app-feather-icons",58),t.qZA(),t.TgZ(3,"button",59),t.NdJ("click",function(l){return l.stopPropagation()})("click",function(){const l=t.CHM(a),r=l.index,c=l.$implicit,m=t.oxw();return t.KtG(m.deleteItem(r,c))}),t._UZ(4,"app-feather-icons",58),t.qZA()()}2&e&&(t.xp6(2),t.Tol("tbl-fav-edit"),t.Q6J("icon","edit"),t.xp6(2),t.Tol("tbl-fav-delete"),t.Q6J("icon","trash-2"))}function ut(e,i){1&e&&t._UZ(0,"mat-header-row")}function pt(e,i){if(1&e){const a=t.EpF();t.TgZ(0,"mat-row",60),t.NdJ("click",function(){const r=t.CHM(a).$implicit,c=t.oxw();return t.KtG(c.editCall(r))}),t.qZA()}2&e&&t.Udp("cursor","pointer")}function ht(e,i){1&e&&(t.TgZ(0,"div",61),t._UZ(1,"mat-progress-spinner",62),t.qZA()),2&e&&(t.xp6(1),t.Q6J("diameter",40))}function ft(e,i){if(1&e&&(t.TgZ(0,"div",63),t._uU(1," No results "),t.qZA()),2&e){const a=t.oxw();t.Udp("display",0===a.dataSource.renderedData.length?"":"none")}}const gt=function(){return["Holidays"]},_t=function(){return[5,10,25,100]};let Zt=(()=>{class e extends I.n{constructor(a,o,l,r){super(),this.httpClient=a,this.dialog=o,this.holidayService=l,this.snackBar=r,this.displayedColumns=["select","hName","date","location","shift","details","actions"],this.selection=new v.Ov(!0,[])}ngOnInit(){this.loadData()}refresh(){this.loadData()}addNew(){let a;a="true"===localStorage.getItem("isRtl")?"rtl":"ltr";const o=this.dialog.open(F,{data:{holiday:this.holiday,action:"add"},direction:a});this.subs.sink=o.afterClosed().subscribe(l=>{1===l&&(this.exampleDatabase?.dataChange.value.unshift(this.holidayService.getDialogData()),this.refreshTable(),this.showNotification("snackbar-success","Add Record Successfully...!!!","bottom","center"))})}editCall(a){let o;this.id=a.id,o="true"===localStorage.getItem("isRtl")?"rtl":"ltr";const l=this.dialog.open(F,{data:{holiday:a,action:"edit"},direction:o});this.subs.sink=l.afterClosed().subscribe(r=>{if(1===r){const c=this.exampleDatabase?.dataChange.value.findIndex(m=>m.id===this.id);void 0!==c&&void 0!==this.exampleDatabase&&(this.exampleDatabase.dataChange.value[c]=this.holidayService.getDialogData(),this.refreshTable(),this.showNotification("black","Edit Record Successfully...!!!","bottom","center"))}})}deleteItem(a,o){let l;this.index=a,this.id=o.id,l="true"===localStorage.getItem("isRtl")?"rtl":"ltr";const r=this.dialog.open(O,{height:"270px",width:"350px",data:o,direction:l});this.subs.sink=r.afterClosed().subscribe(c=>{if(1===c){const m=this.exampleDatabase?.dataChange.value.findIndex(g=>g.id===this.id);void 0!==m&&void 0!==this.exampleDatabase&&(this.exampleDatabase.dataChange.value.splice(m,1),this.refreshTable(),this.showNotification("snackbar-danger","Delete Record Successfully...!!!","bottom","center"))}})}refreshTable(){this.paginator._changePageSize(this.paginator.pageSize)}isAllSelected(){return this.selection.selected.length===this.dataSource.renderedData.length}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.renderedData.forEach(a=>this.selection.select(a))}removeSelectedRows(){const a=this.selection.selected.length;this.selection.selected.forEach(o=>{const l=this.dataSource.renderedData.findIndex(r=>r===o);this.exampleDatabase?.dataChange.value.splice(l,1),this.refreshTable(),this.selection=new v.Ov(!0,[])}),this.showNotification("snackbar-danger",a+" Record Delete Successfully...!!!","bottom","center")}loadData(){this.exampleDatabase=new Z(this.httpClient),this.dataSource=new yt(this.exampleDatabase,this.paginator,this.sort),this.subs.sink=(0,G.R)(this.filter.nativeElement,"keyup").subscribe(()=>{this.dataSource&&(this.dataSource.filter=this.filter.nativeElement.value)})}exportExcel(){const a=this.dataSource.filteredData.map(o=>({"Holiday Name":o.hName,Date:(0,h.p6)(new Date(o.date),"yyyy-MM-dd","en")||"",Location:o.location,Shift:o.shift,Details:o.details}));X.c.exportToExcel(a,"excel")}showNotification(a,o,l,r){this.snackBar.open(o,"",{duration:2e3,verticalPosition:l,horizontalPosition:r,panelClass:a})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(J.eN),t.Y36(u.uw),t.Y36(Z),t.Y36(q.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-allholiday"]],viewQuery:function(a,o){if(1&a&&(t.Gf(A.NW,7),t.Gf(C.YE,7),t.Gf(P,7)),2&a){let l;t.iGM(l=t.CRH())&&(o.paginator=l.first),t.iGM(l=t.CRH())&&(o.sort=l.first),t.iGM(l=t.CRH())&&(o.filter=l.first)}},features:[t.qOj],decls:74,vars:15,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"row"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"card"],[1,"body"],[1,"responsive_table"],[1,"materialTableHeader"],[1,"col-8"],[1,"header-buttons-left","ms-0"],[1,"tbl-title"],[1,"tbl-search-box"],["for","search-input"],[1,"material-icons","search-icon"],["placeholder","Search","type","text","aria-label","Search box",1,"browser-default","search-field"],["filter",""],[1,"tbl-header-btn"],["matTooltip","ADD",1,"m-l-10"],["mat-mini-fab","","color","primary",3,"click"],[1,"col-white"],["matTooltip","REFRESH",1,"m-l-10"],["matTooltip","DELETE",1,"m-l-10",3,"hidden"],["mat-mini-fab","","color","warn",3,"click"],[1,"col-4"],[1,"tbl-export-btn"],["matTooltip","XLSX",1,"export-button","m-l-10"],["src","assets/images/icons/xlsx.png","alt","",3,"click"],["matSort","",1,"mat-cell",3,"dataSource"],["table",""],["matColumnDef","select"],[3,"ngClass",4,"matHeaderCellDef"],[3,"ngClass",4,"matCellDef"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","hName"],["matColumnDef","date"],["matColumnDef","location"],["matColumnDef","shift"],["matColumnDef","details"],["matColumnDef","actions"],["class","pr-0",4,"matHeaderCellDef"],["class","pr-0",4,"matCellDef"],[4,"matHeaderRowDef"],["matRipple","",3,"cursor","click",4,"matRowDef","matRowDefColumns"],["class","tbl-spinner",4,"ngIf"],["class","no-results",3,"display",4,"ngIf"],[3,"length","pageIndex","pageSize","pageSizeOptions"],["paginator",""],[3,"ngClass"],[3,"checked","indeterminate","ngClass","change"],[3,"checked","ngClass","click","change"],["mat-sort-header",""],[1,"truncate-text"],[1,"pr-0"],["mat-icon-button","","color","accent","matTooltip","Edit",1,"tbl-action-btn",3,"click"],[3,"icon"],["mat-icon-button","","color","accent","matTooltip","Delete",1,"tbl-action-btn",3,"click"],["matRipple","",3,"click"],[1,"tbl-spinner"],["color","primary","mode","indeterminate",3,"diameter"],[1,"no-results"]],template:function(a,o){1&a&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2),t._UZ(3,"app-breadcrumb",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",4)(11,"div",10)(12,"ul",11)(13,"li",12)(14,"h2"),t._uU(15,"All Holiday"),t.qZA()(),t.TgZ(16,"li",13)(17,"label",14)(18,"i",15),t._uU(19,"search"),t.qZA()(),t._UZ(20,"input",16,17),t.qZA(),t.TgZ(22,"li",18)(23,"div",19)(24,"button",20),t.NdJ("click",function(){return o.addNew()}),t.TgZ(25,"mat-icon",21),t._uU(26,"add"),t.qZA()()()(),t.TgZ(27,"li",18)(28,"div",22)(29,"button",20),t.NdJ("click",function(){return o.refresh()}),t.TgZ(30,"mat-icon",21),t._uU(31,"refresh"),t.qZA()()()(),t.TgZ(32,"li",18)(33,"div",23)(34,"button",24),t.NdJ("click",function(){return o.removeSelectedRows()}),t.TgZ(35,"mat-icon",21),t._uU(36,"delete "),t.qZA()()()()()(),t.TgZ(37,"div",25)(38,"ul",26)(39,"li")(40,"div",27)(41,"img",28),t.NdJ("click",function(){return o.exportExcel()}),t.qZA()()()()()()(),t.TgZ(42,"mat-table",29,30),t.ynx(44,31),t.YNc(45,W,2,4,"mat-header-cell",32),t.YNc(46,K,2,3,"mat-cell",33),t.BQk(),t.ynx(47,34),t.YNc(48,$,2,0,"mat-header-cell",35),t.YNc(49,V,2,1,"mat-cell",36),t.BQk(),t.ynx(50,37),t.YNc(51,tt,2,0,"mat-header-cell",35),t.YNc(52,et,2,1,"mat-cell",36),t.BQk(),t.ynx(53,38),t.YNc(54,at,2,0,"mat-header-cell",35),t.YNc(55,ot,3,4,"mat-cell",36),t.BQk(),t.ynx(56,39),t.YNc(57,it,2,0,"mat-header-cell",35),t.YNc(58,lt,2,1,"mat-cell",36),t.BQk(),t.ynx(59,40),t.YNc(60,nt,2,0,"mat-header-cell",35),t.YNc(61,rt,2,1,"mat-cell",36),t.BQk(),t.ynx(62,41),t.YNc(63,dt,2,0,"mat-header-cell",35),t.YNc(64,ct,3,1,"mat-cell",36),t.BQk(),t.ynx(65,42),t.YNc(66,mt,2,0,"mat-header-cell",43),t.YNc(67,st,5,6,"mat-cell",44),t.BQk(),t.YNc(68,ut,1,0,"mat-header-row",45),t.YNc(69,pt,1,2,"mat-row",46),t.qZA(),t.YNc(70,ht,2,1,"div",47),t.YNc(71,ft,2,2,"div",48),t._UZ(72,"mat-paginator",49,50),t.qZA()()()()()()()),2&a&&(t.xp6(3),t.Q6J("title","All Holiday")("items",t.DdM(13,gt))("active_item","All Holiday"),t.xp6(30),t.Q6J("hidden",!o.selection.hasValue()),t.xp6(9),t.Q6J("dataSource",o.dataSource),t.xp6(26),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("ngIf",null==o.exampleDatabase?null:o.exampleDatabase.isTblLoading),t.xp6(1),t.Q6J("ngIf",!(null!=o.exampleDatabase&&o.exampleDatabase.isTblLoading)),t.xp6(1),t.Q6J("length",o.dataSource.filteredData.length)("pageIndex",0)("pageSize",10)("pageSizeOptions",t.DdM(14,_t)))},dependencies:[h.mk,h.O5,p.BZ,p.fO,p.as,p.w1,p.Dz,p.nj,p.ge,p.ev,p.XQ,p.Gk,A.NW,_.RK,_.nh,T.Hw,C.YE,C.nU,D.oG,H.gM,U.Ou,x.L,z.A,h.uU]}),e})();class yt extends v.o2{get filter(){return this.filterChange.value}set filter(i){this.filterChange.next(i)}constructor(i,a,o){super(),this.exampleDatabase=i,this.paginator=a,this._sort=o,this.filterChange=new S.X(""),this.filteredData=[],this.renderedData=[],this.filterChange.subscribe(()=>this.paginator.pageIndex=0)}connect(){const i=[this.exampleDatabase.dataChange,this._sort.sortChange,this.filterChange,this.paginator.page];return this.exampleDatabase.getAllHolidays(),(0,B.T)(...i).pipe((0,j.U)(()=>{this.filteredData=this.exampleDatabase.data.slice().filter(l=>-1!==(l.shift+l.hName+l.details+l.date+l.location).toLowerCase().indexOf(this.filter.toLowerCase()));const a=this.sortData(this.filteredData.slice());return this.renderedData=a.splice(this.paginator.pageIndex*this.paginator.pageSize,this.paginator.pageSize),this.renderedData}))}disconnect(){}sortData(i){return this._sort.active&&""!==this._sort.direction?i.sort((a,o)=>{let l="",r="";switch(this._sort.active){case"id":[l,r]=[a.id,o.id];break;case"hName":[l,r]=[a.hName,o.hName];break;case"date":[l,r]=[a.date,o.date];break;case"location":[l,r]=[a.location,o.location];break;case"shift":[l,r]=[a.shift,o.shift]}return((isNaN(+l)?l:+l)<(isNaN(+r)?r:+r)?-1:1)*("asc"===this._sort.direction?1:-1)}):i}}function bt(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Holiday Number is required "),t.qZA())}function Ct(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Holiday Name is required "),t.qZA())}function At(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please select date "),t.qZA())}function Tt(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Location is required "),t.qZA())}function vt(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Shift is required "),t.qZA())}const xt=function(){return["Holidays"]};function qt(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Holiday Number is required "),t.qZA())}function Dt(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Holiday Name is required "),t.qZA())}function Ht(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please select date "),t.qZA())}function Ut(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Location is required "),t.qZA())}function kt(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Shift is required "),t.qZA())}const St=function(){return["Holidays"]},Ft=[{path:"all-holidays",component:Zt},{path:"add-holiday",component:(()=>{class e{constructor(a){this.fb=a,this.holidayForm=this.fb.group({hNo:["",[n.kI.required]],hName:["",[n.kI.required]],date:["",[n.kI.required]],location:["",[n.kI.required]],shift:["",[n.kI.required]],details:["",[n.kI.required]]})}onSubmit(){console.log("Form Value",this.holidayForm.value)}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(n.QS))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-holiday"]],decls:63,vars:13,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"row","clearfix"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"card"],[1,"header"],[1,"body"],[1,"m-4",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-3"],["appearance","outline",1,"example-full-width","mb-3"],["matInput","","formControlName","hNo","required",""],[4,"ngIf"],["matInput","","formControlName","hName","required",""],["matInput","","formControlName","date","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["matInput","","formControlName","location","required",""],["matInput","","formControlName","shift","required",""],["matInput","","formControlName","details"],["mat-raised-button","","color","primary",1,"btn-space",3,"disabled"],["type","button","mat-raised-button","","color","warn"]],template:function(a,o){if(1&a&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2),t._UZ(3,"app-breadcrumb",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h2")(9,"strong"),t._uU(10," New Holiday"),t.qZA()()(),t.TgZ(11,"div",8)(12,"form",9),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(13,"div",10)(14,"div",11)(15,"mat-form-field",12)(16,"mat-label"),t._uU(17,"Holiday No"),t.qZA(),t._UZ(18,"input",13),t.YNc(19,bt,2,0,"mat-error",14),t.qZA()()(),t.TgZ(20,"div",10)(21,"div",11)(22,"mat-form-field",12)(23,"mat-label"),t._uU(24,"Holiday Name"),t.qZA(),t._UZ(25,"input",15),t.YNc(26,Ct,2,0,"mat-error",14),t.qZA()()(),t.TgZ(27,"div",10)(28,"div",11)(29,"mat-form-field",12)(30,"mat-label"),t._uU(31,"Holiday Date"),t.qZA(),t._UZ(32,"input",16)(33,"mat-datepicker-toggle",17)(34,"mat-datepicker",null,18),t.YNc(36,At,2,0,"mat-error",14),t.qZA()()(),t.TgZ(37,"div",10)(38,"div",11)(39,"mat-form-field",12)(40,"mat-label"),t._uU(41,"Location"),t.qZA(),t._UZ(42,"input",19),t.YNc(43,Tt,2,0,"mat-error",14),t.qZA()()(),t.TgZ(44,"div",10)(45,"div",11)(46,"mat-form-field",12)(47,"mat-label"),t._uU(48,"Shift"),t.qZA(),t._UZ(49,"input",20),t.YNc(50,vt,2,0,"mat-error",14),t.qZA()()(),t.TgZ(51,"div",10)(52,"div",11)(53,"mat-form-field",12)(54,"mat-label"),t._uU(55,"Details"),t.qZA(),t._UZ(56,"textarea",21),t.qZA()()(),t.TgZ(57,"div",10)(58,"div",11)(59,"button",22),t._uU(60,"Submit"),t.qZA(),t.TgZ(61,"button",23),t._uU(62,"Cancel"),t.qZA()()()()()()()()()()),2&a){const l=t.MAs(35);let r,c,m,g,y;t.xp6(3),t.Q6J("title","Add Holiday")("items",t.DdM(12,xt))("active_item","Add Holiday"),t.xp6(9),t.Q6J("formGroup",o.holidayForm),t.xp6(7),t.Q6J("ngIf",null==(r=o.holidayForm.get("hNo"))?null:r.hasError("required")),t.xp6(7),t.Q6J("ngIf",null==(c=o.holidayForm.get("hName"))?null:c.hasError("required")),t.xp6(6),t.Q6J("matDatepicker",l),t.xp6(1),t.Q6J("for",l),t.xp6(3),t.Q6J("ngIf",null==(m=o.holidayForm.get("date"))?null:m.hasError("required")),t.xp6(7),t.Q6J("ngIf",null==(g=o.holidayForm.get("location"))?null:g.hasError("required")),t.xp6(7),t.Q6J("ngIf",null==(y=o.holidayForm.get("shift"))?null:y.hasError("required")),t.xp6(9),t.Q6J("disabled",!o.holidayForm.valid)}},dependencies:[h.O5,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.sg,n.u,s.KE,s.hX,s.TO,s.R9,b.Nt,_.lW,f.Mq,f.hl,f.nW,x.L]}),e})()},{path:"edit-holiday",component:(()=>{class e{constructor(a){this.fb=a,this.formdata={hNo:"01",hName:"World Aids Day",date:"2021-12-10T14:22:18Z",location:"All Locations",shift:"All Shifts",details:"This festival is celebrate for."},this.holidayForm=this.createContactForm()}onSubmit(){console.log("Form Value",this.holidayForm.value)}createContactForm(){return this.fb.group({hNo:[this.formdata.hNo,[n.kI.required]],hName:[this.formdata.hName,[n.kI.required]],date:[this.formdata.date,[n.kI.required]],location:[this.formdata.location,[n.kI.required]],shift:[this.formdata.shift,[n.kI.required]],details:[this.formdata.details,[n.kI.required]]})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(n.QS))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-edit-holiday"]],decls:63,vars:13,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"row","clearfix"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"card"],[1,"header"],[1,"body"],[1,"m-4",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-3"],["appearance","outline",1,"example-full-width","mb-3"],["matInput","","formControlName","hNo","required",""],[4,"ngIf"],["matInput","","formControlName","hName","required",""],["matInput","","formControlName","date","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["matInput","","formControlName","location","required",""],["matInput","","formControlName","shift","required",""],["matInput","","formControlName","details"],["mat-raised-button","","color","primary",1,"btn-space",3,"disabled"],["type","button","mat-raised-button","","color","warn"]],template:function(a,o){if(1&a&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2),t._UZ(3,"app-breadcrumb",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h2")(9,"strong"),t._uU(10," Edit Holiday"),t.qZA()()(),t.TgZ(11,"div",8)(12,"form",9),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(13,"div",10)(14,"div",11)(15,"mat-form-field",12)(16,"mat-label"),t._uU(17,"Holiday No"),t.qZA(),t._UZ(18,"input",13),t.YNc(19,qt,2,0,"mat-error",14),t.qZA()()(),t.TgZ(20,"div",10)(21,"div",11)(22,"mat-form-field",12)(23,"mat-label"),t._uU(24,"Holiday Name"),t.qZA(),t._UZ(25,"input",15),t.YNc(26,Dt,2,0,"mat-error",14),t.qZA()()(),t.TgZ(27,"div",10)(28,"div",11)(29,"mat-form-field",12)(30,"mat-label"),t._uU(31,"Holiday Date"),t.qZA(),t._UZ(32,"input",16)(33,"mat-datepicker-toggle",17)(34,"mat-datepicker",null,18),t.YNc(36,Ht,2,0,"mat-error",14),t.qZA()()(),t.TgZ(37,"div",10)(38,"div",11)(39,"mat-form-field",12)(40,"mat-label"),t._uU(41,"Location"),t.qZA(),t._UZ(42,"input",19),t.YNc(43,Ut,2,0,"mat-error",14),t.qZA()()(),t.TgZ(44,"div",10)(45,"div",11)(46,"mat-form-field",12)(47,"mat-label"),t._uU(48,"Shift"),t.qZA(),t._UZ(49,"input",20),t.YNc(50,kt,2,0,"mat-error",14),t.qZA()()(),t.TgZ(51,"div",10)(52,"div",11)(53,"mat-form-field",12)(54,"mat-label"),t._uU(55,"Details"),t.qZA(),t._UZ(56,"textarea",21),t.qZA()()(),t.TgZ(57,"div",10)(58,"div",11)(59,"button",22),t._uU(60,"Submit"),t.qZA(),t.TgZ(61,"button",23),t._uU(62,"Cancel"),t.qZA()()()()()()()()()()),2&a){const l=t.MAs(35);let r,c,m,g,y;t.xp6(3),t.Q6J("title","Edit Holiday")("items",t.DdM(12,St))("active_item","Edit Holiday"),t.xp6(9),t.Q6J("formGroup",o.holidayForm),t.xp6(7),t.Q6J("ngIf",null==(r=o.holidayForm.get("hNo"))?null:r.hasError("required")),t.xp6(7),t.Q6J("ngIf",null==(c=o.holidayForm.get("hName"))?null:c.hasError("required")),t.xp6(6),t.Q6J("matDatepicker",l),t.xp6(1),t.Q6J("for",l),t.xp6(3),t.Q6J("ngIf",null==(m=o.holidayForm.get("date"))?null:m.hasError("required")),t.xp6(7),t.Q6J("ngIf",null==(g=o.holidayForm.get("location"))?null:g.hasError("required")),t.xp6(7),t.Q6J("ngIf",null==(y=o.holidayForm.get("shift"))?null:y.hasError("required")),t.xp6(9),t.Q6J("disabled",!o.holidayForm.valid)}},dependencies:[h.O5,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.sg,n.u,s.KE,s.hX,s.TO,s.R9,b.Nt,_.lW,f.Mq,f.hl,f.nW,x.L]}),e})()},{path:"**",component:d(1991).J}];let Qt=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[k.Bz.forChild(Ft),k.Bz]}),e})();var wt=d(5626),Et=d(4844);let Yt=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[Z],imports:[h.ez,n.u5,n.UX,p.p0,A.TU,s.lN,b.c,q.ZX,_.ot,T.Ps,u.Is,C.JX,D.p9,w.g0,Q.LD,H.AV,f.FA,Qt,U.Cq,wt.K,Et.m]}),e})()}}]);