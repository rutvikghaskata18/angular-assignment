import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, UserProfile } from '../../services/user.service';
import { PageHeaderComponent } from '../common/page-header/page-header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
  standalone: true,
})
export class UserDetailsComponent implements OnInit {
  user: UserProfile | null | undefined = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.user = this.userService.getUserById(+id); // Replace with actual service call.
    }
  }
}
