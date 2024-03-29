//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.18.2.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
    providedIn: 'root'
})
export class AuthenticationClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:5001";
    }

    login(loginVM: LoginVM): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Authentication/login";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(loginVM);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/octet-stream"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processLogin(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processLogin(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<FileResponse | null>;
                }
            } else
                return _observableThrow(response_) as any as Observable<FileResponse | null>;
        }));
    }

    protected processLogin(response: HttpResponseBase): Observable<FileResponse | null> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            let fileNameMatch = contentDisposition ? /filename\*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/g.exec(contentDisposition) : undefined;
            let fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[3] || fileNameMatch[2] : undefined;
            if (fileName) {
                fileName = decodeURIComponent(fileName);
            } else {
                fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
                fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            }
            return _observableOf({ fileName: fileName, data: responseBlob as any, status: status, headers: _headers });
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    register(userVm: HRMSUserVm): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Authentication/register";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(userVm);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/octet-stream"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processRegister(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processRegister(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<FileResponse | null>;
                }
            } else
                return _observableThrow(response_) as any as Observable<FileResponse | null>;
        }));
    }

    protected processRegister(response: HttpResponseBase): Observable<FileResponse | null> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            let fileNameMatch = contentDisposition ? /filename\*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/g.exec(contentDisposition) : undefined;
            let fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[3] || fileNameMatch[2] : undefined;
            if (fileName) {
                fileName = decodeURIComponent(fileName);
            } else {
                fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
                fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            }
            return _observableOf({ fileName: fileName, data: responseBlob as any, status: status, headers: _headers });
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

@Injectable({
    providedIn: 'root'
})
export class DataClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:5001";
    }

    getLeaveBalance(): Observable<LeaveBalance> {
        let url_ = this.baseUrl + "/api/Data";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetLeaveBalance(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetLeaveBalance(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<LeaveBalance>;
                }
            } else
                return _observableThrow(response_) as any as Observable<LeaveBalance>;
        }));
    }

    protected processGetLeaveBalance(response: HttpResponseBase): Observable<LeaveBalance> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = LeaveBalance.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

export class LoginVM implements ILoginVM {
    username!: string;
    password!: string;

    constructor(data?: ILoginVM) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.username = _data["username"];
            this.password = _data["password"];
        }
    }

    static fromJS(data: any): LoginVM {
        data = typeof data === 'object' ? data : {};
        let result = new LoginVM();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["username"] = this.username;
        data["password"] = this.password;
        return data;
    }

    clone(): LoginVM {
        const json = this.toJSON();
        let result = new LoginVM();
        result.init(json);
        return result;
    }
}

export interface ILoginVM {
    username: string;
    password: string;
}

export class HRMSUserVm implements IHRMSUserVm {
    username?: string | undefined;
    password?: string | undefined;
    email?: string | undefined;
    lastName?: string | undefined;
    firstName?: string | undefined;
    middleName?: string | undefined;
    extentName?: string | undefined;
    gender?: string | undefined;
    birthDate!: Date;
    buildingNo?: string | undefined;
    street?: string | undefined;
    unitNo?: string | undefined;
    barangay?: string | undefined;
    cityMun?: string | undefined;
    province?: string | undefined;
    zipCode?: string | undefined;

    constructor(data?: IHRMSUserVm) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.username = _data["username"];
            this.password = _data["password"];
            this.email = _data["email"];
            this.lastName = _data["lastName"];
            this.firstName = _data["firstName"];
            this.middleName = _data["middleName"];
            this.extentName = _data["extentName"];
            this.gender = _data["gender"];
            this.birthDate = _data["birthDate"] ? new Date(_data["birthDate"].toString()) : <any>undefined;
            this.buildingNo = _data["buildingNo"];
            this.street = _data["street"];
            this.unitNo = _data["unitNo"];
            this.barangay = _data["barangay"];
            this.cityMun = _data["cityMun"];
            this.province = _data["province"];
            this.zipCode = _data["zipCode"];
        }
    }

    static fromJS(data: any): HRMSUserVm {
        data = typeof data === 'object' ? data : {};
        let result = new HRMSUserVm();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["username"] = this.username;
        data["password"] = this.password;
        data["email"] = this.email;
        data["lastName"] = this.lastName;
        data["firstName"] = this.firstName;
        data["middleName"] = this.middleName;
        data["extentName"] = this.extentName;
        data["gender"] = this.gender;
        data["birthDate"] = this.birthDate ? this.birthDate.toISOString() : <any>undefined;
        data["buildingNo"] = this.buildingNo;
        data["street"] = this.street;
        data["unitNo"] = this.unitNo;
        data["barangay"] = this.barangay;
        data["cityMun"] = this.cityMun;
        data["province"] = this.province;
        data["zipCode"] = this.zipCode;
        return data;
    }

    clone(): HRMSUserVm {
        const json = this.toJSON();
        let result = new HRMSUserVm();
        result.init(json);
        return result;
    }
}

export interface IHRMSUserVm {
    username?: string | undefined;
    password?: string | undefined;
    email?: string | undefined;
    lastName?: string | undefined;
    firstName?: string | undefined;
    middleName?: string | undefined;
    extentName?: string | undefined;
    gender?: string | undefined;
    birthDate: Date;
    buildingNo?: string | undefined;
    street?: string | undefined;
    unitNo?: string | undefined;
    barangay?: string | undefined;
    cityMun?: string | undefined;
    province?: string | undefined;
    zipCode?: string | undefined;
}

export class LeaveBalance implements ILeaveBalance {
    id!: number;
    employee?: EmployeeEntity | undefined;
    leaveTotal!: number;
    leaveUsed!: number;
    leaveAccepted!: number;
    leaveRejected!: number;
    leaveExpired!: number;
    timeStamp!: Date;

    constructor(data?: ILeaveBalance) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.employee = _data["employee"] ? EmployeeEntity.fromJS(_data["employee"]) : <any>undefined;
            this.leaveTotal = _data["leaveTotal"];
            this.leaveUsed = _data["leaveUsed"];
            this.leaveAccepted = _data["leaveAccepted"];
            this.leaveRejected = _data["leaveRejected"];
            this.leaveExpired = _data["leaveExpired"];
            this.timeStamp = _data["timeStamp"] ? new Date(_data["timeStamp"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): LeaveBalance {
        data = typeof data === 'object' ? data : {};
        let result = new LeaveBalance();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["employee"] = this.employee ? this.employee.toJSON() : <any>undefined;
        data["leaveTotal"] = this.leaveTotal;
        data["leaveUsed"] = this.leaveUsed;
        data["leaveAccepted"] = this.leaveAccepted;
        data["leaveRejected"] = this.leaveRejected;
        data["leaveExpired"] = this.leaveExpired;
        data["timeStamp"] = this.timeStamp ? formatDate(this.timeStamp) : <any>undefined;
        return data;
    }

    clone(): LeaveBalance {
        const json = this.toJSON();
        let result = new LeaveBalance();
        result.init(json);
        return result;
    }
}

export interface ILeaveBalance {
    id: number;
    employee?: EmployeeEntity | undefined;
    leaveTotal: number;
    leaveUsed: number;
    leaveAccepted: number;
    leaveRejected: number;
    leaveExpired: number;
    timeStamp: Date;
}

export class EmployeeEntity implements IEmployeeEntity {
    id!: number;
    lName?: string | undefined;
    fName?: string | undefined;
    midName?: string | undefined;
    extenName?: string | undefined;
    gender?: string | undefined;
    birthDate?: string | undefined;
    buildingNo?: string | undefined;
    street?: string | undefined;
    unitNo?: string | undefined;
    building?: string | undefined;
    province?: string | undefined;
    cityMun?: string | undefined;
    barangay?: string | undefined;
    zipCode?: string | undefined;
    email?: string | undefined;
    mobile?: string | undefined;
    employeeEducationalBackgrounds?: EmployeeEducationalBackgroundEntity[] | undefined;
    employeeSkills?: EmployeeSkillEntity[] | undefined;
    employeeWorkExperiences?: EmployeeWorkExperienceEntity[] | undefined;
    positionEntity?: PositionEntity | undefined;
    departmentEntity?: DepartmentEntity | undefined;
    employeeStatus?: string | undefined;
    uploadImg?: string | undefined;
    uploadResume?: string | undefined;
    dateCreated!: Date;
    timeStamp!: Date;

    constructor(data?: IEmployeeEntity) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.lName = _data["lName"];
            this.fName = _data["fName"];
            this.midName = _data["midName"];
            this.extenName = _data["extenName"];
            this.gender = _data["gender"];
            this.birthDate = _data["birthDate"];
            this.buildingNo = _data["buildingNo"];
            this.street = _data["street"];
            this.unitNo = _data["unitNo"];
            this.building = _data["building"];
            this.province = _data["province"];
            this.cityMun = _data["cityMun"];
            this.barangay = _data["barangay"];
            this.zipCode = _data["zipCode"];
            this.email = _data["email"];
            this.mobile = _data["mobile"];
            if (Array.isArray(_data["employeeEducationalBackgrounds"])) {
                this.employeeEducationalBackgrounds = [] as any;
                for (let item of _data["employeeEducationalBackgrounds"])
                    this.employeeEducationalBackgrounds!.push(EmployeeEducationalBackgroundEntity.fromJS(item));
            }
            if (Array.isArray(_data["employeeSkills"])) {
                this.employeeSkills = [] as any;
                for (let item of _data["employeeSkills"])
                    this.employeeSkills!.push(EmployeeSkillEntity.fromJS(item));
            }
            if (Array.isArray(_data["employeeWorkExperiences"])) {
                this.employeeWorkExperiences = [] as any;
                for (let item of _data["employeeWorkExperiences"])
                    this.employeeWorkExperiences!.push(EmployeeWorkExperienceEntity.fromJS(item));
            }
            this.positionEntity = _data["positionEntity"] ? PositionEntity.fromJS(_data["positionEntity"]) : <any>undefined;
            this.departmentEntity = _data["departmentEntity"] ? DepartmentEntity.fromJS(_data["departmentEntity"]) : <any>undefined;
            this.employeeStatus = _data["employeeStatus"];
            this.uploadImg = _data["uploadImg"];
            this.uploadResume = _data["uploadResume"];
            this.dateCreated = _data["dateCreated"] ? new Date(_data["dateCreated"].toString()) : <any>undefined;
            this.timeStamp = _data["timeStamp"] ? new Date(_data["timeStamp"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): EmployeeEntity {
        data = typeof data === 'object' ? data : {};
        let result = new EmployeeEntity();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["lName"] = this.lName;
        data["fName"] = this.fName;
        data["midName"] = this.midName;
        data["extenName"] = this.extenName;
        data["gender"] = this.gender;
        data["birthDate"] = this.birthDate;
        data["buildingNo"] = this.buildingNo;
        data["street"] = this.street;
        data["unitNo"] = this.unitNo;
        data["building"] = this.building;
        data["province"] = this.province;
        data["cityMun"] = this.cityMun;
        data["barangay"] = this.barangay;
        data["zipCode"] = this.zipCode;
        data["email"] = this.email;
        data["mobile"] = this.mobile;
        if (Array.isArray(this.employeeEducationalBackgrounds)) {
            data["employeeEducationalBackgrounds"] = [];
            for (let item of this.employeeEducationalBackgrounds)
                data["employeeEducationalBackgrounds"].push(item.toJSON());
        }
        if (Array.isArray(this.employeeSkills)) {
            data["employeeSkills"] = [];
            for (let item of this.employeeSkills)
                data["employeeSkills"].push(item.toJSON());
        }
        if (Array.isArray(this.employeeWorkExperiences)) {
            data["employeeWorkExperiences"] = [];
            for (let item of this.employeeWorkExperiences)
                data["employeeWorkExperiences"].push(item.toJSON());
        }
        data["positionEntity"] = this.positionEntity ? this.positionEntity.toJSON() : <any>undefined;
        data["departmentEntity"] = this.departmentEntity ? this.departmentEntity.toJSON() : <any>undefined;
        data["employeeStatus"] = this.employeeStatus;
        data["uploadImg"] = this.uploadImg;
        data["uploadResume"] = this.uploadResume;
        data["dateCreated"] = this.dateCreated ? formatDate(this.dateCreated) : <any>undefined;
        data["timeStamp"] = this.timeStamp ? formatDate(this.timeStamp) : <any>undefined;
        return data;
    }

    clone(): EmployeeEntity {
        const json = this.toJSON();
        let result = new EmployeeEntity();
        result.init(json);
        return result;
    }
}

export interface IEmployeeEntity {
    id: number;
    lName?: string | undefined;
    fName?: string | undefined;
    midName?: string | undefined;
    extenName?: string | undefined;
    gender?: string | undefined;
    birthDate?: string | undefined;
    buildingNo?: string | undefined;
    street?: string | undefined;
    unitNo?: string | undefined;
    building?: string | undefined;
    province?: string | undefined;
    cityMun?: string | undefined;
    barangay?: string | undefined;
    zipCode?: string | undefined;
    email?: string | undefined;
    mobile?: string | undefined;
    employeeEducationalBackgrounds?: EmployeeEducationalBackgroundEntity[] | undefined;
    employeeSkills?: EmployeeSkillEntity[] | undefined;
    employeeWorkExperiences?: EmployeeWorkExperienceEntity[] | undefined;
    positionEntity?: PositionEntity | undefined;
    departmentEntity?: DepartmentEntity | undefined;
    employeeStatus?: string | undefined;
    uploadImg?: string | undefined;
    uploadResume?: string | undefined;
    dateCreated: Date;
    timeStamp: Date;
}

export class EmployeeEducationalBackgroundEntity implements IEmployeeEducationalBackgroundEntity {
    id!: number;
    schoolName?: string | undefined;
    schoolLocation!: number;
    timestamp!: Date;

    constructor(data?: IEmployeeEducationalBackgroundEntity) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.schoolName = _data["schoolName"];
            this.schoolLocation = _data["schoolLocation"];
            this.timestamp = _data["timestamp"] ? new Date(_data["timestamp"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): EmployeeEducationalBackgroundEntity {
        data = typeof data === 'object' ? data : {};
        let result = new EmployeeEducationalBackgroundEntity();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["schoolName"] = this.schoolName;
        data["schoolLocation"] = this.schoolLocation;
        data["timestamp"] = this.timestamp ? formatDate(this.timestamp) : <any>undefined;
        return data;
    }

    clone(): EmployeeEducationalBackgroundEntity {
        const json = this.toJSON();
        let result = new EmployeeEducationalBackgroundEntity();
        result.init(json);
        return result;
    }
}

export interface IEmployeeEducationalBackgroundEntity {
    id: number;
    schoolName?: string | undefined;
    schoolLocation: number;
    timestamp: Date;
}

export class EmployeeSkillEntity implements IEmployeeSkillEntity {
    id!: number;
    skillName?: string | undefined;
    skillType?: string | undefined;
    timestamp!: Date;

    constructor(data?: IEmployeeSkillEntity) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.skillName = _data["skillName"];
            this.skillType = _data["skillType"];
            this.timestamp = _data["timestamp"] ? new Date(_data["timestamp"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): EmployeeSkillEntity {
        data = typeof data === 'object' ? data : {};
        let result = new EmployeeSkillEntity();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["skillName"] = this.skillName;
        data["skillType"] = this.skillType;
        data["timestamp"] = this.timestamp ? formatDate(this.timestamp) : <any>undefined;
        return data;
    }

    clone(): EmployeeSkillEntity {
        const json = this.toJSON();
        let result = new EmployeeSkillEntity();
        result.init(json);
        return result;
    }
}

export interface IEmployeeSkillEntity {
    id: number;
    skillName?: string | undefined;
    skillType?: string | undefined;
    timestamp: Date;
}

export class EmployeeWorkExperienceEntity implements IEmployeeWorkExperienceEntity {
    id!: number;
    workExperienceName?: string | undefined;
    workExperiencePosition?: string | undefined;
    workExperienceStarted?: string | undefined;
    workExperienceCompleted?: string | undefined;
    timestamp!: Date;

    constructor(data?: IEmployeeWorkExperienceEntity) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.workExperienceName = _data["workExperienceName"];
            this.workExperiencePosition = _data["workExperiencePosition"];
            this.workExperienceStarted = _data["workExperienceStarted"];
            this.workExperienceCompleted = _data["workExperienceCompleted"];
            this.timestamp = _data["timestamp"] ? new Date(_data["timestamp"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): EmployeeWorkExperienceEntity {
        data = typeof data === 'object' ? data : {};
        let result = new EmployeeWorkExperienceEntity();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["workExperienceName"] = this.workExperienceName;
        data["workExperiencePosition"] = this.workExperiencePosition;
        data["workExperienceStarted"] = this.workExperienceStarted;
        data["workExperienceCompleted"] = this.workExperienceCompleted;
        data["timestamp"] = this.timestamp ? formatDate(this.timestamp) : <any>undefined;
        return data;
    }

    clone(): EmployeeWorkExperienceEntity {
        const json = this.toJSON();
        let result = new EmployeeWorkExperienceEntity();
        result.init(json);
        return result;
    }
}

export interface IEmployeeWorkExperienceEntity {
    id: number;
    workExperienceName?: string | undefined;
    workExperiencePosition?: string | undefined;
    workExperienceStarted?: string | undefined;
    workExperienceCompleted?: string | undefined;
    timestamp: Date;
}

export class PositionEntity implements IPositionEntity {
    id!: number;
    positioName?: string | undefined;
    timeStamp!: Date;

    constructor(data?: IPositionEntity) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.positioName = _data["positioName"];
            this.timeStamp = _data["timeStamp"] ? new Date(_data["timeStamp"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): PositionEntity {
        data = typeof data === 'object' ? data : {};
        let result = new PositionEntity();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["positioName"] = this.positioName;
        data["timeStamp"] = this.timeStamp ? formatDate(this.timeStamp) : <any>undefined;
        return data;
    }

    clone(): PositionEntity {
        const json = this.toJSON();
        let result = new PositionEntity();
        result.init(json);
        return result;
    }
}

export interface IPositionEntity {
    id: number;
    positioName?: string | undefined;
    timeStamp: Date;
}

export class DepartmentEntity implements IDepartmentEntity {
    id!: number;
    departmentName?: string | undefined;
    timeStamp!: Date;

    constructor(data?: IDepartmentEntity) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.departmentName = _data["departmentName"];
            this.timeStamp = _data["timeStamp"] ? new Date(_data["timeStamp"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): DepartmentEntity {
        data = typeof data === 'object' ? data : {};
        let result = new DepartmentEntity();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["departmentName"] = this.departmentName;
        data["timeStamp"] = this.timeStamp ? formatDate(this.timeStamp) : <any>undefined;
        return data;
    }

    clone(): DepartmentEntity {
        const json = this.toJSON();
        let result = new DepartmentEntity();
        result.init(json);
        return result;
    }
}

export interface IDepartmentEntity {
    id: number;
    departmentName?: string | undefined;
    timeStamp: Date;
}

function formatDate(d: Date) {
    return d.getFullYear() + '-' +
        (d.getMonth() < 9 ? ('0' + (d.getMonth()+1)) : (d.getMonth()+1)) + '-' +
        (d.getDate() < 10 ? ('0' + d.getDate()) : d.getDate());
}

export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: { [name: string]: any };
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}
