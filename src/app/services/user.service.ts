import { Injectable } from '@angular/core';

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: UserProfile[] = [
    {
      id: 1,
      name: 'Rutik Ghaskata',
      email: 'rutvik.ghaskata@techalchemy.com',
      address: 'Surat, Gujarat, India',
      phone: '7984030828',
    },
  ];
  private idCounter = 1;

  getAllUsers(): UserProfile[] {
    return this.users;
  }

  getuserDetails(id: number): UserProfile | undefined {
    return this.users.find((data) => data.id === id);
  }

  addUser(user: Omit<UserProfile, 'id'>): void {
    this.users.unshift({ id: this.idCounter + 1, ...user });
  }

  getUserById(id: number): UserProfile | undefined {
    return this.users.find((user) => user.id === id);
  }

  updateUser(id: number, updatedUser: Omit<UserProfile, 'id'>): void {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users[index] = { id, ...updatedUser };
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
