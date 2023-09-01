import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { SvgLoginComponent } from './utils/components/svg-login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { SvgLoginModule } from './utils/components/svg-login.module';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

// import { MyComponentRoutingModule } from './my-component-routing';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormControl,
    FormsModule,
    Validators,
    ReactiveFormsModule,
    SvgLoginComponent,
    SvgLoginModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [LoginPageComponent],
})
export class LoginPageModule {}
