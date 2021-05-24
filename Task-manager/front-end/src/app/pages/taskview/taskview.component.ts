import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.scss']
})
export class TaskviewComponent implements OnInit {
  lists:List[];
  tasks:Task[];

  constructor(private taskService:TaskService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params:Params)=>
    {
      
      this.taskService.getTasks(params.listId).subscribe((tasks:Task[])=>
      {
         this.tasks = tasks
         console.log(tasks)
      })
    })

    this.taskService.getLists().subscribe((lists:List[])=>
    {
      console.log(lists)
      this.lists= lists
    })
  }

  onTaskClick(task:Task)
  {
    //we want to set the task to complete
    this.taskService.complete(task).subscribe(()=>
    {
      console.log("completed successfully")
    })
  }

 

  

}
