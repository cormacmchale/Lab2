import {labTwo} from "./interface";

class myClass implements labTwo
{
    list:Array<String> = [];
    //let i:number=0;
    //let namestr:String;
    addTask (task:String)
   {
       let counter:number = 0;
       this.list.push(task);
       console.log(task+ " was added to the array");
       let i:number=0;
       for(i=0; i<this.list.length; i++)
       {
         counter++;
       }
       console.log(counter);
   }
   listAllTask()
   {
       for(let item of this.list)
       {
        console.log(item);
       }  
   }
   deleteTask(search:String):number
   {
       let index:number = this.list.indexOf(search);
       if(index>-1)
       {
         this.list.splice(index, 1);
       }
     return this.list.length;
   }
}



