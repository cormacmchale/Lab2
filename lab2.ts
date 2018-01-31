 let list:Array<String> = [];
 //let i:number=0;
 //let namestr:String;
function addTask (task:String)
{
    let counter:number = 0;
    list.push(task);
    console.log(task+ " was added to the array");
    let i:number=0;
    for(i=0; i<list.length; i++)
    {
      counter++;
    }
    console.log(counter);
}
function listAllTask()
{
    for(let item of list)
    {
     console.log(item);
    }

}
function deleteTask(search:String):number
{
    let index:number = list.indexOf(search);
    if(index>-1)
    {
      list.splice(index, 1);
    }
  return list.length;
}
addTask("hello");
addTask("mike");
addTask("hammer");

listAllTask();

let show:number = deleteTask("mike");
console.log(show);

listAllTask();

