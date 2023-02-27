import { Component } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public version!: number;

  constructor(private versionService: VersionService) {
    this.versionService.version$.subscribe((number) => {
      this.version = number;
    });
  }
}
