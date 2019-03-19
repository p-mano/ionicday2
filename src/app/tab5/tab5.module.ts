import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab5Component } from './tab5.component';
import { Tab5Pipe } from '../tab5.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab5Component }])
  ],
  declarations: [Tab5Component, Tab5Pipe]
})
export class Tab5PageModule {}
