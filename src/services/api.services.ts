import { Component, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient){}

    //Metodo get
    get <T>(url:string): Observable<T>{
    return this.http.get<T>(url);
    }
    Post<T> (url:string, data: any): Observable<T>{
        return this.http.post<T>(url, data);
    }
    put<T>(url:string, data: any): Observable<T>{
        return this.http.put<T>(url, data);
    }
    delete<T>(url:string): Observable<T>{
        return this.http.delete<T>(url);
    }
}
