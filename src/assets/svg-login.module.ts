import { NgModule } from '@angular/core';
import { SvgLoginComponent } from './svg-login.component';


// import { MyComponentRoutingModule } from './my-component-routing';

@NgModule({
  declarations: [
    SvgLoginComponent
  ],
  imports: [
    // MyComponentRoutingModule,
  ],
  providers: [],
  exports: [
    SvgLoginComponent,
  ]
})
export class SvgLoginModule { }