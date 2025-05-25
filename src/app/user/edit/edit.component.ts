import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {User} from '../user';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  id!: number;
  user!: User;
  form!: FormGroup;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];
    this.userService.find(this.id).subscribe((data: User)=>{
      this.user = data;
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.userService.update(this.id, this.form.value).subscribe((res:any) => {
      console.log('User updated successfully!');
      this.router.navigateByUrl('user/index');
    })
  }

}
