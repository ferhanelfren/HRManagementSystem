"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[1697],{1697:(ze,y,m)=>{m.r(y),m.d(y,{ClientModule:()=>Xe});var Z=m(6895),o=m(4006),g=m(671),T=m(8739),d=m(9549),b=m(4144),D=m(7009),_=m(4859),v=m(7392),x=m(4385),u=m(5938),A=m(6308),R=m(3683),h=m(9602),N=m(6709),k=m(1572),M=m(3848),I=m(266),J=m(1135),S=m(9186),e=m(4650),F=m(529);let C=(()=>{class t extends S.n{constructor(l){super(),this.httpClient=l,this.API_URL="assets/data/clients.json",this.isTblLoading=!0,this.dataChange=new J.X([])}get data(){return this.dataChange.value}getDialogData(){return this.dialogData}getAllClients(){this.subs.sink=this.httpClient.get(this.API_URL).subscribe({next:l=>{this.isTblLoading=!1,this.dataChange.next(l)},error:l=>{this.isTblLoading=!1,console.log(l.name+" "+l.message)}})}addClient(l){this.dialogData=l}updateClient(l){this.dialogData=l}deleteClient(l){console.log(l)}}return t.\u0275fac=function(l){return new(l||t)(e.LFG(F.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var Q=m(9132),E=m(3238),Y=m(7082),q=m(1299);function H(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Name is required "),e.qZA())}function B(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Company Name is required "),e.qZA())}function L(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a valid email address "),e.qZA())}function P(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please select date "),e.qZA())}function O(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Select Any Billing Method "),e.qZA())}const j=function(){return["Clients"]};let G=(()=>{class t{constructor(l){this.fb=l,this.hide3=!0,this.agree3=!1,this.clientForm=this.fb.group({name:["",[o.kI.required]],mobile:["",[o.kI.required]],email:["",[o.kI.required,o.kI.email,o.kI.minLength(5)]],date:["",[o.kI.required]],company_name:["",[o.kI.required]],currency:["",[o.kI.required]],billing_method:["",[o.kI.required]],uploadImg:[""]})}onSubmit(){console.log("Form Value",this.clientForm.value)}}return t.\u0275fac=function(l){return new(l||t)(e.Y36(o.QS))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-add-client"]],decls:77,vars:16,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"row","clearfix"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"card"],[1,"header"],[1,"body"],[1,"m-4",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-xl-6","col-lg-6","col-md-12","col-sm-12","mb-3"],["appearance","outline",1,"example-full-width","mb-3"],["matInput","","formControlName","name","required",""],[4,"ngIf"],["matInput","","formControlName","company_name","required",""],["matInput","","formControlName","email","required",""],["matInput","","formControlName","mobile","type","number","required",""],["matInput","","formControlName","date","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["matInput","","formControlName","currency","type","text","required",""],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-3"],["formControlName","billing_method","required",""],[3,"value"],["formControlName","uploadImg"],["mat-raised-button","","color","primary",1,"btn-space",3,"disabled"],["type","button","mat-raised-button","","color","warn"]],template:function(l,i){if(1&l&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._UZ(3,"app-breadcrumb",3),e.qZA(),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h2")(9,"strong"),e._uU(10,"Add Client"),e.qZA()()(),e.TgZ(11,"div",8)(12,"form",9),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(13,"div",10)(14,"div",11)(15,"mat-form-field",12)(16,"mat-label"),e._uU(17,"Name"),e.qZA(),e._UZ(18,"input",13),e.YNc(19,H,2,0,"mat-error",14),e.qZA()(),e.TgZ(20,"div",11)(21,"mat-form-field",12)(22,"mat-label"),e._uU(23,"Company Name"),e.qZA(),e._UZ(24,"input",15),e.YNc(25,B,2,0,"mat-error",14),e.qZA()()(),e.TgZ(26,"div",10)(27,"div",11)(28,"mat-form-field",12)(29,"mat-label"),e._uU(30,"Email"),e.qZA(),e._UZ(31,"input",16),e.YNc(32,L,2,0,"mat-error",14),e.qZA()(),e.TgZ(33,"div",11)(34,"mat-form-field",12)(35,"mat-label"),e._uU(36,"Mobile"),e.qZA(),e._UZ(37,"input",17),e.qZA()()(),e.TgZ(38,"div",10)(39,"div",11)(40,"mat-form-field",12)(41,"mat-label"),e._uU(42,"Date"),e.qZA(),e._UZ(43,"input",18)(44,"mat-datepicker-toggle",19)(45,"mat-datepicker",null,20),e.YNc(47,P,2,0,"mat-error",14),e.qZA()(),e.TgZ(48,"div",11)(49,"mat-form-field",12)(50,"mat-label"),e._uU(51,"Currency"),e.qZA(),e._UZ(52,"input",21),e.qZA()()(),e.TgZ(53,"div",10)(54,"div",22)(55,"mat-form-field",12)(56,"mat-label"),e._uU(57,"Billing Method"),e.qZA(),e.TgZ(58,"mat-select",23)(59,"mat-option",24),e._uU(60," Fixed Price "),e.qZA(),e.TgZ(61,"mat-option",24),e._uU(62," Hourly User Rate "),e.qZA(),e.TgZ(63,"mat-option",24),e._uU(64," Hourly Job Rate "),e.qZA()(),e.YNc(65,O,2,0,"mat-error",14),e.qZA()()(),e.TgZ(66,"div",10)(67,"div",22)(68,"mat-label"),e._uU(69,"Upload Image"),e.qZA(),e._UZ(70,"app-file-upload",25),e.qZA()(),e.TgZ(71,"div",10)(72,"div",22)(73,"button",26),e._uU(74,"Submit"),e.qZA(),e.TgZ(75,"button",27),e._uU(76,"Cancel"),e.qZA()()()()()()()()()()),2&l){const a=e.MAs(46);let r,c,s,p,f;e.xp6(3),e.Q6J("title","Add Client")("items",e.DdM(15,j))("active_item","Add Client"),e.xp6(9),e.Q6J("formGroup",i.clientForm),e.xp6(7),e.Q6J("ngIf",null==(r=i.clientForm.get("name"))?null:r.hasError("required")),e.xp6(6),e.Q6J("ngIf",null==(c=i.clientForm.get("company_name"))?null:c.hasError("required")),e.xp6(7),e.Q6J("ngIf",(null==(s=i.clientForm.get("email"))?null:s.hasError("email"))&&(null==(s=i.clientForm.get("email"))?null:s.touched)),e.xp6(11),e.Q6J("matDatepicker",a),e.xp6(1),e.Q6J("for",a),e.xp6(3),e.Q6J("ngIf",null==(p=i.clientForm.get("date"))?null:p.hasError("required")),e.xp6(12),e.Q6J("value","Fixed Price"),e.xp6(2),e.Q6J("value","Hourly User Rate"),e.xp6(2),e.Q6J("value","Hourly Job Rate"),e.xp6(2),e.Q6J("ngIf",null==(f=i.clientForm.get("billing_method"))?null:f.hasError("required")),e.xp6(8),e.Q6J("disabled",!i.clientForm.valid)}},dependencies:[Z.O5,o._Y,o.Fj,o.wV,o.JJ,o.JL,o.Q7,o.sg,o.u,d.KE,d.hX,d.TO,d.R9,b.Nt,_.lW,x.gD,E.ey,h.Mq,h.hl,h.nW,Y.Y,q.L]}),t})();function X(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Name is required "),e.qZA())}function z(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Company Name is required "),e.qZA())}function $(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a valid email address "),e.qZA())}function K(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please select date "),e.qZA())}function V(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Select Any Billing Method "),e.qZA())}const W=function(){return["Clients"]};let ee=(()=>{class t{constructor(l){this.fb=l,this.formdata={name:"Pooja Sarma",mobile:"123456789",email:"test@example.com",date:"1987-02-17T14:22:18Z",company_name:"ABC Infotech",currency:"rupee",billing_method:"Fixed Price",uploadImg:""},this.clientForm=this.createContactForm()}onSubmit(){console.log("Form Value",this.clientForm.value)}createContactForm(){return this.fb.group({name:[this.formdata.name,[o.kI.required]],mobile:[this.formdata.mobile,[o.kI.required]],email:[this.formdata.email,[o.kI.required,o.kI.email,o.kI.minLength(5)]],date:[this.formdata.date,[o.kI.required]],company_name:[this.formdata.company_name],currency:[this.formdata.currency],billing_method:[this.formdata.billing_method],uploadImg:[this.formdata.uploadImg]})}}return t.\u0275fac=function(l){return new(l||t)(e.Y36(o.QS))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-edit-client"]],decls:76,vars:16,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"row","clearfix"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"card"],[1,"header"],[1,"body"],[1,"m-4",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-xl-6","col-lg-6","col-md-12","col-sm-12","mb-3"],["appearance","outline",1,"example-full-width","mb-3"],["matInput","","formControlName","name","required",""],[4,"ngIf"],["matInput","","formControlName","company_name","required",""],["matInput","","formControlName","email","required",""],["matInput","","formControlName","mobile","type","number","required",""],["matInput","","formControlName","date","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["matInput","","formControlName","currency","type","text","required",""],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-3"],["formControlName","billing_method","required",""],[3,"value"],["formControlName","uploadImg"],["mat-raised-button","","color","primary",1,"btn-space",3,"disabled"],["type","button","mat-raised-button","","color","warn"]],template:function(l,i){if(1&l&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._UZ(3,"app-breadcrumb",3),e.qZA(),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h2"),e._uU(9,"Edit Client"),e.qZA()(),e.TgZ(10,"div",8)(11,"form",9),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(12,"div",10)(13,"div",11)(14,"mat-form-field",12)(15,"mat-label"),e._uU(16,"Name"),e.qZA(),e._UZ(17,"input",13),e.YNc(18,X,2,0,"mat-error",14),e.qZA()(),e.TgZ(19,"div",11)(20,"mat-form-field",12)(21,"mat-label"),e._uU(22,"Company Name"),e.qZA(),e._UZ(23,"input",15),e.YNc(24,z,2,0,"mat-error",14),e.qZA()()(),e.TgZ(25,"div",10)(26,"div",11)(27,"mat-form-field",12)(28,"mat-label"),e._uU(29,"Email"),e.qZA(),e._UZ(30,"input",16),e.YNc(31,$,2,0,"mat-error",14),e.qZA()(),e.TgZ(32,"div",11)(33,"mat-form-field",12)(34,"mat-label"),e._uU(35,"Mobile"),e.qZA(),e._UZ(36,"input",17),e.qZA()()(),e.TgZ(37,"div",10)(38,"div",11)(39,"mat-form-field",12)(40,"mat-label"),e._uU(41,"Date"),e.qZA(),e._UZ(42,"input",18)(43,"mat-datepicker-toggle",19)(44,"mat-datepicker",null,20),e.YNc(46,K,2,0,"mat-error",14),e.qZA()(),e.TgZ(47,"div",11)(48,"mat-form-field",12)(49,"mat-label"),e._uU(50,"Currency"),e.qZA(),e._UZ(51,"input",21),e.qZA()()(),e.TgZ(52,"div",10)(53,"div",22)(54,"mat-form-field",12)(55,"mat-label"),e._uU(56,"Billing Method"),e.qZA(),e.TgZ(57,"mat-select",23)(58,"mat-option",24),e._uU(59," Fixed Price "),e.qZA(),e.TgZ(60,"mat-option",24),e._uU(61," Hourly User Rate "),e.qZA(),e.TgZ(62,"mat-option",24),e._uU(63," Hourly Job Rate "),e.qZA()(),e.YNc(64,V,2,0,"mat-error",14),e.qZA()()(),e.TgZ(65,"div",10)(66,"div",22)(67,"mat-label"),e._uU(68,"Upload Image"),e.qZA(),e._UZ(69,"app-file-upload",25),e.qZA()(),e.TgZ(70,"div",10)(71,"div",22)(72,"button",26),e._uU(73,"Submit"),e.qZA(),e.TgZ(74,"button",27),e._uU(75,"Cancel"),e.qZA()()()()()()()()()()),2&l){const a=e.MAs(45);let r,c,s,p,f;e.xp6(3),e.Q6J("title","Edit Client")("items",e.DdM(15,W))("active_item","Edit Client"),e.xp6(8),e.Q6J("formGroup",i.clientForm),e.xp6(7),e.Q6J("ngIf",null==(r=i.clientForm.get("name"))?null:r.hasError("required")),e.xp6(6),e.Q6J("ngIf",null==(c=i.clientForm.get("company_name"))?null:c.hasError("required")),e.xp6(7),e.Q6J("ngIf",(null==(s=i.clientForm.get("email"))?null:s.hasError("email"))&&(null==(s=i.clientForm.get("email"))?null:s.touched)),e.xp6(11),e.Q6J("matDatepicker",a),e.xp6(1),e.Q6J("for",a),e.xp6(3),e.Q6J("ngIf",null==(p=i.clientForm.get("date"))?null:p.hasError("required")),e.xp6(12),e.Q6J("value","Fixed Price"),e.xp6(2),e.Q6J("value","Hourly User Rate"),e.xp6(2),e.Q6J("value","Hourly Job Rate"),e.xp6(2),e.Q6J("ngIf",null==(f=i.clientForm.get("billing_method"))?null:f.hasError("required")),e.xp6(8),e.Q6J("disabled",!i.clientForm.valid)}},dependencies:[Z.O5,o._Y,o.Fj,o.wV,o.JJ,o.JL,o.Q7,o.sg,o.u,d.KE,d.hX,d.TO,d.R9,b.Nt,_.lW,x.gD,E.ey,h.Mq,h.hl,h.nW,Y.Y,q.L]}),t})();var te=m(1991),U=m(5017);class le{constructor(n){this.id=n.id||this.getRandomID(),this.img=n.img||"assets/images/user/user1.jpg",this.name=n.name||"",this.mobile=n.mobile||"",this.email=n.email||"",this.company_name=n.company_name||"",this.currency=n.currency||"",this.billing_method=n.billing_method||""}getRandomID(){const n=()=>65536*(1+Math.random())|0;return n()+n()}}function ie(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Name is required "),e.qZA())}function ne(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Mobile is required "),e.qZA())}function ae(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a valid email address "),e.qZA())}function oe(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a valid company name "),e.qZA())}function re(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a currency "),e.qZA())}function me(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a billing method "),e.qZA())}let w=(()=>{class t{constructor(l,i,a,r){this.dialogRef=l,this.data=i,this.clientService=a,this.fb=r,this.formControl=new o.p4("",[o.kI.required]),this.action=i.action,"edit"===this.action?(this.dialogTitle=i.clients.name,this.clients=i.clients):(this.dialogTitle="New Client",this.clients=new le({})),this.clientForm=this.createContactForm()}getErrorMessage(){return this.formControl.hasError("required")?"Required field":this.formControl.hasError("email")?"Not a valid email":""}createContactForm(){return this.fb.group({id:[this.clients.id],img:[this.clients.img],name:[this.clients.name],email:[this.clients.email],mobile:[this.clients.mobile],company_name:[this.clients.company_name],currency:[this.clients.currency],billing_method:[this.clients.billing_method]})}submit(){}onNoClick(){this.dialogRef.close()}confirmAdd(){this.clientService.addClient(this.clientForm.getRawValue())}}return t.\u0275fac=function(l){return new(l||t)(e.Y36(u.so),e.Y36(u.WI),e.Y36(C),e.Y36(o.QS))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-form-dialog"]],decls:70,vars:11,consts:[[1,"addContainer"],[1,"modalHeader"],[1,"editRowModal"],[1,"modalHeader","clearfix"],["alt","avatar",3,"src"],[1,"modal-about"],["mat-icon-button","","aria-label","Close dialog",1,"modal-close-button",3,"click"],["mat-dialog-content",""],[1,"register-form","m-4",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-xl-6","col-lg-6","col-md-12","col-sm-12","mb-2"],["appearance","outline",1,"example-full-width"],["matInput","","formControlName","name","required",""],["matSuffix",""],[4,"ngIf"],["matInput","","formControlName","mobile","type","number"],["matInput","","formControlName","email","required",""],["matInput","","formControlName","company_name","required",""],["matInput","","formControlName","currency","required",""],["matInput","","formControlName","billing_method","required",""],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-2"],["align","end",1,"example-button-row"],["mat-raised-button","","color","primary",3,"disabled","mat-dialog-close","click"],["mat-raised-button","","color","warn","tabindex","-1",3,"click"]],template:function(l,i){if(1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.TgZ(5,"div",5),e._uU(6),e.qZA()()(),e.TgZ(7,"button",6),e.NdJ("click",function(){return i.dialogRef.close()}),e.TgZ(8,"mat-icon"),e._uU(9,"close"),e.qZA()()(),e.TgZ(10,"div",7)(11,"form",8),e.NdJ("ngSubmit",function(){return i.submit}),e.TgZ(12,"div",9)(13,"div",10)(14,"mat-form-field",11)(15,"mat-label"),e._uU(16,"Name"),e.qZA(),e._UZ(17,"input",12),e.TgZ(18,"mat-icon",13),e._uU(19,"face"),e.qZA(),e.YNc(20,ie,2,0,"mat-error",14),e.qZA()(),e.TgZ(21,"div",10)(22,"mat-form-field",11)(23,"mat-label"),e._uU(24,"Mobile"),e.qZA(),e._UZ(25,"input",15),e.TgZ(26,"mat-icon",13),e._uU(27,"phone"),e.qZA(),e.YNc(28,ne,2,0,"mat-error",14),e.qZA()()(),e.TgZ(29,"div",9)(30,"div",10)(31,"mat-form-field",11)(32,"mat-label"),e._uU(33,"Email"),e.qZA(),e._UZ(34,"input",16),e.TgZ(35,"mat-icon",13),e._uU(36,"email"),e.qZA(),e.YNc(37,ae,2,0,"mat-error",14),e.qZA()(),e.TgZ(38,"div",10)(39,"mat-form-field",11)(40,"mat-label"),e._uU(41,"Company Name"),e.qZA(),e._UZ(42,"input",17),e.TgZ(43,"mat-icon",13),e._uU(44,"business"),e.qZA(),e.YNc(45,oe,2,0,"mat-error",14),e.qZA()()(),e.TgZ(46,"div",9)(47,"div",10)(48,"mat-form-field",11)(49,"mat-label"),e._uU(50,"Currency"),e.qZA(),e._UZ(51,"input",18),e.TgZ(52,"mat-icon",13),e._uU(53,"paid"),e.qZA(),e.YNc(54,re,2,0,"mat-error",14),e.qZA()(),e.TgZ(55,"div",10)(56,"mat-form-field",11)(57,"mat-label"),e._uU(58,"Billing Method"),e.qZA(),e._UZ(59,"input",19),e.TgZ(60,"mat-icon",13),e._uU(61,"receipt"),e.qZA(),e.YNc(62,me,2,0,"mat-error",14),e.qZA()()(),e.TgZ(63,"div",9)(64,"div",20)(65,"div",21)(66,"button",22),e.NdJ("click",function(){return i.confirmAdd()}),e._uU(67,"Save"),e.qZA(),e.TgZ(68,"button",23),e.NdJ("click",function(){return i.onNoClick()}),e._uU(69,"Cancel"),e.qZA()()()()()()()),2&l){let a,r,c,s,p,f;e.xp6(4),e.Q6J("src",i.clients.img,e.LSH),e.xp6(2),e.hij(" ",i.dialogTitle," "),e.xp6(5),e.Q6J("formGroup",i.clientForm),e.xp6(9),e.Q6J("ngIf",null==(a=i.clientForm.get("name"))?null:a.hasError("required")),e.xp6(8),e.Q6J("ngIf",null==(r=i.clientForm.get("mobile"))?null:r.hasError("required")),e.xp6(9),e.Q6J("ngIf",(null==(c=i.clientForm.get("email"))?null:c.hasError("required"))||(null==(c=i.clientForm.get("email"))?null:c.touched)),e.xp6(8),e.Q6J("ngIf",(null==(s=i.clientForm.get("company_name"))?null:s.hasError("required"))||(null==(s=i.clientForm.get("company_name"))?null:s.touched)),e.xp6(9),e.Q6J("ngIf",(null==(p=i.clientForm.get("currency"))?null:p.hasError("required"))||(null==(p=i.clientForm.get("currency"))?null:p.touched)),e.xp6(8),e.Q6J("ngIf",(null==(f=i.clientForm.get("billing_method"))?null:f.hasError("required"))||(null==(f=i.clientForm.get("billing_method"))?null:f.touched)),e.xp6(4),e.Q6J("disabled",!i.clientForm.valid)("mat-dialog-close",1)}},dependencies:[Z.O5,o._Y,o.Fj,o.wV,o.JJ,o.JL,o.Q7,o.sg,o.u,d.KE,d.hX,d.TO,d.R9,b.Nt,_.lW,_.RK,v.Hw,u.ZT,u.xY]}),t})(),ce=(()=>{class t{constructor(l,i,a){this.dialogRef=l,this.data=i,this.clientService=a}onNoClick(){this.dialogRef.close()}confirmDelete(){this.clientService.deleteClient(this.data.id)}}return t.\u0275fac=function(l){return new(l||t)(e.Y36(u.so),e.Y36(u.WI),e.Y36(C))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-delete"]],decls:25,vars:4,consts:[[1,"container"],["mat-dialog-title",""],["mat-dialog-content",""],[1,"clearfix"],[1,"font-weight-bold"],["mat-dialog-actions","",1,"mb-1"],["mat-flat-button","","color","warn",3,"mat-dialog-close","click"],["mat-flat-button","","tabindex","-1",3,"click"]],template:function(l,i){1&l&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2,"Are you sure?"),e.qZA(),e.TgZ(3,"div",2)(4,"ul",3)(5,"li")(6,"p")(7,"span",4),e._uU(8," Name: "),e.qZA(),e._uU(9),e.qZA()(),e.TgZ(10,"li")(11,"p")(12,"span",4),e._uU(13," Company name: "),e.qZA(),e._uU(14),e.qZA()(),e.TgZ(15,"li")(16,"p")(17,"span",4),e._uU(18,"Email: "),e.qZA(),e._uU(19),e.qZA()()()(),e.TgZ(20,"div",5)(21,"button",6),e.NdJ("click",function(){return i.confirmDelete()}),e._uU(22," Delete "),e.qZA(),e.TgZ(23,"button",7),e.NdJ("click",function(){return i.onNoClick()}),e._uU(24,"Cancel"),e.qZA()()()),2&l&&(e.xp6(9),e.Oqu(i.data.name),e.xp6(5),e.Oqu(i.data.company_name),e.xp6(5),e.hij("",i.data.email," "),e.xp6(2),e.Q6J("mat-dialog-close",1))},dependencies:[_.lW,u.ZT,u.uh,u.xY,u.H8]}),t})();var se=m(4968),de=m(6451),ue=m(4004),pe=m(6035),ge=m(1676);const fe=["filter"];function _e(t,n){if(1&t){const l=e.EpF();e.TgZ(0,"mat-header-cell",55)(1,"mat-checkbox",56),e.NdJ("change",function(a){e.CHM(l);const r=e.oxw();return e.KtG(a?r.masterToggle():null)}),e.qZA()()}if(2&t){const l=e.oxw();e.Q6J("ngClass","tbl-col-width-per-6"),e.xp6(1),e.Q6J("checked",l.selection.hasValue()&&l.isAllSelected())("indeterminate",l.selection.hasValue()&&!l.isAllSelected())("ngClass","tbl-checkbox")}}function he(t,n){if(1&t){const l=e.EpF();e.TgZ(0,"mat-cell",55)(1,"mat-checkbox",57),e.NdJ("click",function(a){return a.stopPropagation()})("change",function(a){const c=e.CHM(l).$implicit,s=e.oxw();return e.KtG(a?s.selection.toggle(c):null)}),e.qZA()()}if(2&t){const l=n.$implicit,i=e.oxw();e.Q6J("ngClass","tbl-col-width-per-6"),e.xp6(1),e.Q6J("checked",i.selection.isSelected(l))("ngClass","tbl-checkbox")}}function Ze(t,n){1&t&&(e.TgZ(0,"mat-header-cell",58),e._uU(1,"Id"),e.qZA())}function Ce(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const l=n.$implicit;e.xp6(1),e.Oqu(l.id)}}function be(t,n){1&t&&(e.TgZ(0,"mat-header-cell",59),e._uU(1," Image "),e.qZA()),2&t&&e.Q6J("ngClass","tbl-col-width-per-5")}function Ae(t,n){if(1&t&&(e.TgZ(0,"mat-cell",60),e._UZ(1,"img",61),e.qZA()),2&t){const l=n.$implicit;e.xp6(1),e.Q6J("src",l.img,e.LSH)}}function Te(t,n){1&t&&(e.TgZ(0,"mat-header-cell",58),e._uU(1,"Name"),e.qZA())}function ve(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const l=n.$implicit;e.xp6(1),e.hij(" ",l.name,"")}}function xe(t,n){1&t&&(e.TgZ(0,"mat-header-cell",58),e._uU(1,"Mobile"),e.qZA())}function qe(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const l=n.$implicit;e.xp6(1),e.hij(" ",l.mobile,"")}}function Ue(t,n){1&t&&(e.TgZ(0,"mat-header-cell",58),e._uU(1,"Email"),e.qZA())}function ye(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const l=n.$implicit;e.xp6(1),e.hij(" ",l.email,"")}}function De(t,n){1&t&&(e.TgZ(0,"mat-header-cell",58),e._uU(1,"Company Name"),e.qZA())}function Ne(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const l=n.$implicit;e.xp6(1),e.hij(" ",l.company_name,"")}}function ke(t,n){1&t&&(e.TgZ(0,"mat-header-cell",58),e._uU(1,"Currency"),e.qZA())}function Ie(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const l=n.$implicit;e.xp6(1),e.hij(" ",l.currency,"")}}function Je(t,n){1&t&&(e.TgZ(0,"mat-header-cell",58),e._uU(1,"Billing Method"),e.qZA())}function Se(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const l=n.$implicit;e.xp6(1),e.hij(" ",l.billing_method,"")}}function Fe(t,n){1&t&&(e.TgZ(0,"mat-header-cell",62),e._uU(1,"Actions"),e.qZA())}function Qe(t,n){if(1&t){const l=e.EpF();e.TgZ(0,"mat-cell",62)(1,"button",63),e.NdJ("click",function(a){return a.stopPropagation()})("click",function(){const r=e.CHM(l).$implicit,c=e.oxw();return e.KtG(c.editCall(r))}),e._UZ(2,"app-feather-icons",64),e.qZA(),e.TgZ(3,"button",65),e.NdJ("click",function(a){return a.stopPropagation()})("click",function(){const a=e.CHM(l),r=a.index,c=a.$implicit,s=e.oxw();return e.KtG(s.deleteItem(r,c))}),e._UZ(4,"app-feather-icons",64),e.qZA()()}2&t&&(e.xp6(2),e.Tol("tbl-fav-edit"),e.Q6J("icon","edit"),e.xp6(2),e.Tol("tbl-fav-delete"),e.Q6J("icon","trash-2"))}function Ee(t,n){1&t&&e._UZ(0,"mat-header-row")}function Ye(t,n){if(1&t){const l=e.EpF();e.TgZ(0,"mat-row",66),e.NdJ("click",function(){const r=e.CHM(l).$implicit,c=e.oxw();return e.KtG(c.editCall(r))}),e.qZA()}2&t&&e.Udp("cursor","pointer")}function we(t,n){1&t&&(e.TgZ(0,"div",67),e._UZ(1,"mat-progress-spinner",68),e.qZA()),2&t&&(e.xp6(1),e.Q6J("diameter",40))}function Re(t,n){if(1&t&&(e.TgZ(0,"div",69),e._uU(1," No results "),e.qZA()),2&t){const l=e.oxw();e.Udp("display",0===l.dataSource.renderedData.length?"":"none")}}const Me=function(){return["Clients"]},He=function(){return[5,10,25,100]};let Be=(()=>{class t extends S.n{constructor(l,i,a,r){super(),this.httpClient=l,this.dialog=i,this.clientService=a,this.snackBar=r,this.displayedColumns=["select","img","name","mobile","email","company_name","currency","billing_method","actions"],this.selection=new U.Ov(!0,[])}ngOnInit(){this.loadData()}refresh(){this.loadData()}addNew(){let l;l="true"===localStorage.getItem("isRtl")?"rtl":"ltr";const i=this.dialog.open(w,{data:{clients:this.clients,action:"add"},direction:l});this.subs.sink=i.afterClosed().subscribe(a=>{1===a&&(this.exampleDatabase?.dataChange.value.unshift(this.clientService.getDialogData()),this.refreshTable(),this.showNotification("snackbar-success","Add Record Successfully...!!!","bottom","center"))})}editCall(l){let i;this.id=l.id,i="true"===localStorage.getItem("isRtl")?"rtl":"ltr";const a=this.dialog.open(w,{data:{clients:l,action:"edit"},direction:i});this.subs.sink=a.afterClosed().subscribe(r=>{if(1===r){const c=this.exampleDatabase?.dataChange.value.findIndex(s=>s.id===this.id);void 0!==c&&(this.exampleDatabase.dataChange.value[c]=this.clientService.getDialogData(),this.refreshTable(),this.showNotification("black","Edit Record Successfully...!!!","bottom","center"))}})}deleteItem(l,i){let a;this.index=l,this.id=i.id,a="true"===localStorage.getItem("isRtl")?"rtl":"ltr";const r=this.dialog.open(ce,{height:"250px",width:"300px",data:i,direction:a});this.subs.sink=r.afterClosed().subscribe(c=>{if(1===c){const s=this.exampleDatabase?.dataChange.value.findIndex(p=>p.id===this.id);void 0!==s&&(this.exampleDatabase?.dataChange.value.splice(s,1),this.refreshTable(),this.showNotification("snackbar-danger","Delete Record Successfully...!!!","bottom","center"))}})}refreshTable(){this.paginator._changePageSize(this.paginator.pageSize)}isAllSelected(){const i=this.dataSource?.renderedData.length;return this.selection.selected.length===i}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource?.renderedData.forEach(l=>this.selection.select(l))}removeSelectedRows(){const l=this.selection.selected.length;this.selection.selected.forEach(i=>{const a=this.dataSource?.renderedData.findIndex(r=>r===i);this.exampleDatabase?.dataChange.value.splice(a,1),this.refreshTable(),this.selection=new U.Ov(!0,[])}),this.showNotification("snackbar-danger",l+" Record Delete Successfully...!!!","bottom","center")}loadData(){this.exampleDatabase=new C(this.httpClient),this.dataSource=new Le(this.exampleDatabase,this.paginator,this.sort),this.subs.sink=(0,se.R)(this.filter.nativeElement,"keyup").subscribe(()=>{this.dataSource&&(this.dataSource.filter=this.filter.nativeElement.value)})}exportExcel(){const l=this.dataSource.filteredData.map(i=>({Name:i.name,Mobile:i.mobile,Email:i.email,"Company Name":i.company_name,Currency:i.currency,"Billing Method":i.billing_method}));pe.c.exportToExcel(l,"excel")}showNotification(l,i,a,r){this.snackBar.open(i,"",{duration:2e3,verticalPosition:a,horizontalPosition:r,panelClass:l})}}return t.\u0275fac=function(l){return new(l||t)(e.Y36(F.eN),e.Y36(u.uw),e.Y36(C),e.Y36(D.ux))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-all-clients"]],viewQuery:function(l,i){if(1&l&&(e.Gf(T.NW,7),e.Gf(A.YE,7),e.Gf(fe,7)),2&l){let a;e.iGM(a=e.CRH())&&(i.paginator=a.first),e.iGM(a=e.CRH())&&(i.sort=a.first),e.iGM(a=e.CRH())&&(i.filter=a.first)}},features:[e.qOj],decls:80,vars:15,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"row"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"card"],[1,"body"],[1,"responsive_table"],[1,"materialTableHeader"],[1,"col-8"],[1,"header-buttons-left","ms-0"],[1,"tbl-title"],[1,"tbl-search-box"],["for","search-input"],[1,"material-icons","search-icon"],["placeholder","Search","type","text","aria-label","Search box",1,"browser-default","search-field"],["filter",""],[1,"tbl-header-btn"],["matTooltip","ADD",1,"m-l-10"],["mat-mini-fab","","color","primary",3,"click"],[1,"col-white"],["matTooltip","REFRESH",1,"m-l-10"],["matTooltip","DELETE",1,"m-l-10",3,"hidden"],["mat-mini-fab","","color","warn",3,"click"],[1,"col-4"],[1,"tbl-export-btn"],["matTooltip","XLSX",1,"export-button","m-l-10"],["src","assets/images/icons/xlsx.png","alt","",3,"click"],["matSort","",1,"mat-cell",3,"dataSource"],["table",""],["matColumnDef","select"],[3,"ngClass",4,"matHeaderCellDef"],[3,"ngClass",4,"matCellDef"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","img"],["mat-header-cell","",3,"ngClass",4,"matHeaderCellDef"],["mat-cell","","class","table-img tbl-col-width-per-5",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","mobile"],["matColumnDef","email"],["matColumnDef","company_name"],["matColumnDef","currency"],["matColumnDef","billing_method"],["matColumnDef","actions"],["class","pr-0",4,"matHeaderCellDef"],["class","pr-0",4,"matCellDef"],[4,"matHeaderRowDef"],["matRipple","",3,"cursor","click",4,"matRowDef","matRowDefColumns"],["class","tbl-spinner",4,"ngIf"],["class","no-results",3,"display",4,"ngIf"],[3,"length","pageIndex","pageSize","pageSizeOptions"],["paginator",""],[3,"ngClass"],[3,"checked","indeterminate","ngClass","change"],[3,"checked","ngClass","click","change"],["mat-sort-header",""],["mat-header-cell","",3,"ngClass"],["mat-cell","",1,"table-img","tbl-col-width-per-5"],[3,"src"],[1,"pr-0"],["mat-icon-button","","color","accent","matTooltip","Edit",1,"tbl-action-btn",3,"click"],[3,"icon"],["mat-icon-button","","color","accent","matTooltip","Delete",1,"tbl-action-btn",3,"click"],["matRipple","",3,"click"],[1,"tbl-spinner"],["color","primary","mode","indeterminate",3,"diameter"],[1,"no-results"]],template:function(l,i){1&l&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._UZ(3,"app-breadcrumb",3),e.qZA(),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",4)(11,"div",10)(12,"ul",11)(13,"li",12)(14,"h2"),e._uU(15,"All Clients"),e.qZA()(),e.TgZ(16,"li",13)(17,"label",14)(18,"i",15),e._uU(19,"search"),e.qZA()(),e._UZ(20,"input",16,17),e.qZA(),e.TgZ(22,"li",18)(23,"div",19)(24,"button",20),e.NdJ("click",function(){return i.addNew()}),e.TgZ(25,"mat-icon",21),e._uU(26,"add"),e.qZA()()()(),e.TgZ(27,"li",18)(28,"div",22)(29,"button",20),e.NdJ("click",function(){return i.refresh()}),e.TgZ(30,"mat-icon",21),e._uU(31,"refresh"),e.qZA()()()(),e.TgZ(32,"li",18)(33,"div",23)(34,"button",24),e.NdJ("click",function(){return i.removeSelectedRows()}),e.TgZ(35,"mat-icon",21),e._uU(36,"delete "),e.qZA()()()()()(),e.TgZ(37,"div",25)(38,"ul",26)(39,"li")(40,"div",27)(41,"img",28),e.NdJ("click",function(){return i.exportExcel()}),e.qZA()()()()()()(),e.TgZ(42,"mat-table",29,30),e.ynx(44,31),e.YNc(45,_e,2,4,"mat-header-cell",32),e.YNc(46,he,2,3,"mat-cell",33),e.BQk(),e.ynx(47,34),e.YNc(48,Ze,2,0,"mat-header-cell",35),e.YNc(49,Ce,2,1,"mat-cell",36),e.BQk(),e.ynx(50,37),e.YNc(51,be,2,1,"mat-header-cell",38),e.YNc(52,Ae,2,1,"mat-cell",39),e.BQk(),e.ynx(53,40),e.YNc(54,Te,2,0,"mat-header-cell",35),e.YNc(55,ve,2,1,"mat-cell",36),e.BQk(),e.ynx(56,41),e.YNc(57,xe,2,0,"mat-header-cell",35),e.YNc(58,qe,2,1,"mat-cell",36),e.BQk(),e.ynx(59,42),e.YNc(60,Ue,2,0,"mat-header-cell",35),e.YNc(61,ye,2,1,"mat-cell",36),e.BQk(),e.ynx(62,43),e.YNc(63,De,2,0,"mat-header-cell",35),e.YNc(64,Ne,2,1,"mat-cell",36),e.BQk(),e.ynx(65,44),e.YNc(66,ke,2,0,"mat-header-cell",35),e.YNc(67,Ie,2,1,"mat-cell",36),e.BQk(),e.ynx(68,45),e.YNc(69,Je,2,0,"mat-header-cell",35),e.YNc(70,Se,2,1,"mat-cell",36),e.BQk(),e.ynx(71,46),e.YNc(72,Fe,2,0,"mat-header-cell",47),e.YNc(73,Qe,5,6,"mat-cell",48),e.BQk(),e.YNc(74,Ee,1,0,"mat-header-row",49),e.YNc(75,Ye,1,2,"mat-row",50),e.qZA(),e.YNc(76,we,2,1,"div",51),e.YNc(77,Re,2,2,"div",52),e._UZ(78,"mat-paginator",53,54),e.qZA()()()()()()()),2&l&&(e.xp6(3),e.Q6J("title","All Clients")("items",e.DdM(13,Me))("active_item","All Clients"),e.xp6(30),e.Q6J("hidden",!i.selection.hasValue()),e.xp6(9),e.Q6J("dataSource",i.dataSource),e.xp6(32),e.Q6J("matHeaderRowDef",i.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",i.displayedColumns),e.xp6(1),e.Q6J("ngIf",null==i.exampleDatabase?null:i.exampleDatabase.isTblLoading),e.xp6(1),e.Q6J("ngIf",!(null!=i.exampleDatabase&&i.exampleDatabase.isTblLoading)),e.xp6(1),e.Q6J("length",i.dataSource.filteredData.length)("pageIndex",0)("pageSize",10)("pageSizeOptions",e.DdM(14,He)))},dependencies:[Z.mk,Z.O5,g.BZ,g.fO,g.as,g.w1,g.Dz,g.nj,g.ge,g.ev,g.XQ,g.Gk,T.NW,_.RK,_.nh,v.Hw,A.YE,A.nU,N.oG,I.gM,k.Ou,q.L,ge.A]}),t})();class Le extends U.o2{get filter(){return this.filterChange.value}set filter(n){this.filterChange.next(n)}constructor(n,l,i){super(),this.exampleDatabase=n,this.paginator=l,this._sort=i,this.filterChange=new J.X(""),this.filteredData=[],this.renderedData=[],this.filterChange.subscribe(()=>this.paginator.pageIndex=0)}connect(){const n=[this.exampleDatabase.dataChange,this._sort.sortChange,this.filterChange,this.paginator.page];return this.exampleDatabase.getAllClients(),(0,de.T)(...n).pipe((0,ue.U)(()=>{this.filteredData=this.exampleDatabase.data.slice().filter(a=>-1!==(a.name+a.mobile+a.email+a.company_name+a.currency+a.billing_method).toLowerCase().indexOf(this.filter.toLowerCase()));const l=this.sortData(this.filteredData.slice());return this.renderedData=l.splice(this.paginator.pageIndex*this.paginator.pageSize,this.paginator.pageSize),this.renderedData}))}disconnect(){}sortData(n){return this._sort.active&&""!==this._sort.direction?n.sort((l,i)=>{let a="",r="";switch(this._sort.active){case"id":[a,r]=[l.id,i.id];break;case"name":[a,r]=[l.name,i.name];break;case"email":[a,r]=[l.email,i.email];break;case"company_name":[a,r]=[l.company_name,i.company_name];break;case"currency":[a,r]=[l.currency,i.currency];break;case"mobile":[a,r]=[l.mobile,i.mobile]}return((isNaN(+a)?a:+a)<(isNaN(+r)?r:+r)?-1:1)*("asc"===this._sort.direction?1:-1)}):n}}const Pe=[{path:"all-clients",component:Be},{path:"add-client",component:G},{path:"edit-client",component:ee},{path:"**",component:te.J}];let Oe=(()=>{class t{}return t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[Q.Bz.forChild(Pe),Q.Bz]}),t})();var je=m(5626),Ge=m(4844);let Xe=(()=>{class t{}return t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[C],imports:[Z.ez,o.u5,o.UX,g.p0,T.TU,d.lN,b.c,D.ZX,_.ot,v.Ps,u.Is,A.JX,R.g0,x.LD,N.p9,h.FA,M.Nh,I.AV,k.Cq,Oe,je.K,Ge.m]}),t})()}}]);