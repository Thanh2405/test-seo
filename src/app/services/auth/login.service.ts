import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api = 'http://staging.thenewgym.vn:3030';
  constructor(
    private http: HttpClient,
    private permissionsSvc: NgxPermissionsService,
    private alert: ToastrService,
    private router: Router,
  ) { }

  public login(user: any) {
    return this.http.post(this.api + '/auth/login/', user).subscribe((res: any) => {

    })
  }

  public setTokenData(data: any) {
    localStorage.setItem('ACCESS_TOKEN', data.accessToken);
    localStorage.setItem('REFRESH_TOKEN', data.refreshToken);
  }

  public getDataInfo(token: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    };
    this.http.get(this.api + '/auth/profile', httpOptions).subscribe((res: any) => {
      const permissions = res.data.permissions.concat(res.data.systemPermissions);
      this.permissionsSvc.loadPermissions(permissions); //Load Permission
      if (!permissions.includes('CRM')) {
        this.alert.error('fail');
        return;
      }
      this.alert.success('Success');
      localStorage.setItem('USER_PROFILE', JSON.stringify(res.data));
      this.router.navigateByUrl('/login');
    });
  }

}
