import { Component ,Input ,input , computed ,
  Output , EventEmitter ,output} from '@angular/core';
import { type User } from './user.model';

 @Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent
{
    //input using Input Decarator
    @Input({ required: true}) user!: User;
    @Input({ required: true}) selected!: boolean;
    @Output() select = new EventEmitter<string>();

    get imagePath()
    {
     return '/assets/'+this.user.avatar;
    }
    onSelectUser()
    {
      this.select.emit(this.user.id);
    }

 /*    @Input({required: true}) id !:string;
    @Input({required: true}) avatar!: string;
    @Input({required: true}) name!: string; */

 // input using input signal
 /* avatar = input.required<string>();
 name = input.required<string>();
 */
 //output using output function

  /*  select = output<string>(); */
 /* imagePath= computed(() =>
  { return '/assets/'+this.avatar()});
 */


 /* selectedUser = signal(DUMMY_USERS[randomIndex]);
 *//*  get imagePath()
 {
  return '/assets/'+this.selectedUser().avatar;
 } *//*

imagePath = computed(() => '/assets/'+this.selectedUser().avatar)
 onSelectUser()
 {
   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
  // this.selectedUser =DUMMY_USERS[randomIndex];
  //By using the signal the update the value
  this.selectedUser.set(DUMMY_USERS[randomIndex]);
   console.log('Clicked');
 } */
}
