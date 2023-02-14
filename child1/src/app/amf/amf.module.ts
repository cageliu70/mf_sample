import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmfRoutingModule } from './amf-routing.module';
import { ChildrenComponent } from './amfcomponents/children/children.component';


@NgModule({
  declarations: [
    ChildrenComponent
  ],
  imports: [
    CommonModule,
    AmfRoutingModule
  ]
})
export class AmfModule { }
