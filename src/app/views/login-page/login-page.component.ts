import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SvgLoginModule } from './utils/components/svg-login.module';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
interface createUser {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf,
    SvgLoginModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
})
export class LoginPageComponent implements OnInit {
  // @ViewChild()
  // constructor(private cdRef: ChangeDetectorRef) {}
  apiUrl = 'http://localhost:3333/users';

  constructor(private http: HttpClient) {}

  isLogin!: boolean;
  ngOnInit(): void {
    this.isLogin = true;
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  emailFormControlRegister = new FormControl('', []);
  passwordFormControlRegister = new FormControl('', []);
  userFormControl = new FormControl('', []);

  email!: string;
  password!: string;

  userRegister!: string;
  emailRegister!: string;
  passwordRegister!: string;

  openRegister(): void {
    this.isLogin = false;
    // this.cdRef.detectChanges();
  }
  openLogin(): void {
    this.isLogin = true;
    // this.cdRef.detectChanges();
  }
  listUser: any = [];
  onSubmit(): void {
    this.http.get(this.apiUrl).subscribe((response: any) => {
      this.listUser = response;
      console.log('Dados', this.listUser);
    });
  }
  onRegister(): void {
    const bodyRegister: createUser = {
      name: this.userRegister,
      email: this.emailRegister,
      password: this.passwordRegister,
    };
    console.log('Object', bodyRegister);
    // this.http.post(this.apiUrl, bodyRegister);
  }
}
