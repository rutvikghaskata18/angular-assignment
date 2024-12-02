import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile, UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../common/page-header/page-header.component';
@Component({
  selector: 'app-user-edit',
  imports: [CommonModule, FormsModule, PageHeaderComponent],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss',
})
export class UserEditComponent {
  userId: any;
  userDetails: UserProfile | undefined;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id') || '0';
    this.userDetails = this.userService.getUserById(Number(this.userId));
  }

  save(): void {
    // @ts-ignore
    this.userService.updateUser(this.user,this.userDetails);
    this.router.navigate(['/']);
  }
}
