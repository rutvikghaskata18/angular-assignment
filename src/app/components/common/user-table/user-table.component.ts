import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfile } from '../../../services/user.service';

@Component({
  selector: 'app-user-table',
  imports: [CommonModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss',
})
export class UserTableComponent {
  @Input() data: UserProfile[] = [];
  @Output() edit = new EventEmitter<number>();
  @Output() view = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onEdit(id: number): void {
    this.edit.emit(id);
  }

  onView(id: number): void {
    this.view.emit(id);
  }

  onDelete(id: number): void {
    this.delete.emit(id);
  }
}
