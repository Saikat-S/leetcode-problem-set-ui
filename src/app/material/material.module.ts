import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatExpansionModule} from '@angular/material/expansion';

const material = [
  MatButtonModule,
  MatToolbarModule,
  FlexLayoutModule,
  MatIconModule,
  MatTableModule,
  MatSortModule,
  MatFormFieldModule,
  FormsModule,
  MatPaginatorModule,
  MatSelectModule,
  MatInputModule,
  MatCardModule,
  ScrollingModule,
  MatExpansionModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
