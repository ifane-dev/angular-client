import { Component } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  id!: number;
  user!: User;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['userId'];
    this.userService.find(this.id).subscribe({
      next: (response) => {
        this.user = response;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
      complete: () => {
        console.log('Data fetching completed');
      }
    });
  }

  back(){
    this.router.navigateByUrl('user/index');
  }

}
