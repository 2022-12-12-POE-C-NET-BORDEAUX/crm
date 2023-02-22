import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';

@NgModule({
  declarations: [
    IconNavComponent,
    IconCloseComponent,
    IconEditComponent,
    IconDeleteComponent
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    IconNavComponent,
    IconCloseComponent,
    IconEditComponent,
    IconDeleteComponent
  ],
})
export class IconsModule {}
