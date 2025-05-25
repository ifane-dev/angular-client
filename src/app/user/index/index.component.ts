import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterModule} from '@angular/router';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit{

  users: User[] = [];

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.getAll().subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
      complete: () => {
        console.log('Data fetching completed');
      }
    });
  }

  deleteUser(id:number){
    this.userService.delete(id).subscribe(res => {
      this.users = this.users.filter(item => item.id !== id);
      console.log('User deleted successfully!');
    })
  }

}
