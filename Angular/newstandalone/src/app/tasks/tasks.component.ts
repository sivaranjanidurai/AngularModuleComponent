import { Component ,Input } from '@angular/core';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

@Input({ required: true}) userId!: string;
@Input({ required: true}) name!: string;
isAddingTask = false;
/* private tasksService : TasksService; */

constructor(private tasksService:TasksService) {}
get selectedUserTasks()
{
  return this.tasksService.getUserTasks(this.userId);
 }
onCompleteTask(id:string)
{
}

onStartAddTask()
{
  this.isAddingTask=true;
}
onClosedAddTask()
{
  this.isAddingTask=false;
}

}
