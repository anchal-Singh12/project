let todoList=[
    {item: 'buy milk', 
        dueDate: '4/03/2026'
    },
    {item: 'read book',
     dueDate:'4/03/2026'
    }];
displayItem();
function addTodo(){
    let inputElement=document.querySelector('#todo-input');
    let dateElement=document.querySelector('#todo-date');
    let todoDate=dateElement.value;
    let todoitem=inputElement.value;
    todoList.push({item:todoitem,dueDate:todoDate})
    inputElement.value='';
    dateElement.value='';
    displayItem();
}

function displayItem(){
    let displayElement=document.querySelector('.todocontainer');
    let newHtml='';
    for(let i=0; i<todoList.length;i++){
        let {item,dueDate}=todoList[i];
        newHtml +=`
            <div class="gridcontainer">
               <span>${item}</span>
               <span>${dueDate}</span>
               <button  class="btn-delete" onclick="todoList.splice(${i},1);
            displayItem();">Delete</button>
        </div>`;
    }
    displayElement.innerHTML=newHtml;


}