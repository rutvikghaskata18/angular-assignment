import { Component } from '@angular/core';
import { UserProfile, UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../common/page-header/page-header.component';
import { UserTableComponent } from '../common/user-table/user-table.component';

@Component({
  selector: 'app-user-profiles',
  imports: [CommonModule, PageHeaderComponent,UserTableComponent],
  templateUrl: './user-profiles.component.html',
  styleUrl: './user-profiles.component.scss',
})
export class UserProfilesComponent {
  users: UserProfile[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.users = this.userService.getAllUsers();
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this profile?')) {
      this.userService.deleteUser(id);
      this.users = this.userService.getAllUsers();
    }
  }

  navigateToAdd(): void {
    this.router.navigate(['/user-add']);
  }

  navigateToEdit(id: number): void {
    this.router.navigate(['/user-edit', id]);
  }

  navigateToDetails(id: number): void {
    this.router.navigate([`/user/${id}`]);
  }
}
