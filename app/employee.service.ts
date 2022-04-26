import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private https: HttpClient) { }
  getEmployeeData() {
    return this.https.get("https://api.onlinewebtutorblog.com/employees")
  }
  addEmployeeData() {
    return this.https.post("https://api.onlinewebtutorblog.com/employees", {})
  }
  updateEmployeeData() {
    return this.https.patch("https://api.onlinewebtutorblog.com/employees", {})
  }
  deleteEmployeeData() {
    return this.https.delete("https://api.onlinewebtutorblog.com/employees")
  }
}
