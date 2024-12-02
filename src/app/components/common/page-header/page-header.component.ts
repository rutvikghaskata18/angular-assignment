import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA], // Add this line
})
export class PageHeaderComponent {
  @Input() title: string = '';
  @Input() isProfilePage?: boolean;
  constructor(private router: Router) {}
  navigateToAdd(): void {
    this.router.navigate(['/user-add']);
  }
}
