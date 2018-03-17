import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule, 
  MatToolbar,
  MatButtonModule,
  MatButton,
  MatIconModule,
  MatExpansionModule,
  MatSidenav,
  MatFormField,
  MatInputModule,
  MatListModule
} from '@angular/material';

import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { MaterialButtonComponent } from './material-button/material-button.component';
import { MaterialInputComponent } from './material-input/material-input.component';
import { MaterialListComponent } from './material-list/material-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule
  ],
  exports: [//para usar en otros modules
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule
  ],
  declarations: [MaterialDemoComponent, MaterialButtonComponent, MaterialInputComponent, MaterialListComponent]
})
export class MaterialModule { }
