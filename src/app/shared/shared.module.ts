import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { BtnComponent } from './components/btn/btn.component';

@NgModule({
  declarations: [BtnComponent],
  imports: [CommonModule, RouterModule],
  exports: [TemplatesModule, IconsModule, BtnComponent],
})
export class SharedModule {}
