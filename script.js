//your code here
var btn=document.getElementById('addTodoBtn');
var ol=document.getElementById('todoList');
var input=document.getElementById('newTodoInput');

function todofunction(){
	if(input.value){
		var li=document.createElement('li');
		li.textContent=input.value;
		ol.appendChild(li);
		input.value="";
	}
}
btn.addEventListener("click",todofunction);

