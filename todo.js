let input = document.getElementById("todo");
let newTodo = document.getElementById("newTodo");
let todoList = document.getElementById("todoList");

newTodo.addEventListener("click", function() {
    var list = document.createElement("li");
    var delBttn = document.createElement("button");
    delBttn.textContent = "X"; //버튼 css 설정을 제외하고 X만 만들고 싶다. 버튼 말고 텍스트로 해야 하나?

    if (!input.value)
        alert("내용을 입력해주세요 >_<");
    else {
        list.innerText = input.value;
        todoList.appendChild(list);
        list.appendChild(delBttn);
        input.value = "";
    }

    list.addEventListener("click", function() {
        list.innerHTML = '<form><input type="text" id="reText" value=""><button type="button" onclick="corr()">확인</button><br></form>';
        
        function corr()  {
            //input이 제대로 안됨
        }
    })

    list.addEventListener("mouseover", function(event) {
        event.target.style.color = "#999"; //마우스 오버 시에 회색으로 변경
    })

    list.addEventListener("mouseout", function(event) {
        event.target.style.color = "Black"; //다시 마우스 이동 시에 검은색으로 돌아옴
    })

    delBttn.addEventListener("click", function() { // X 버튼으로 항목과 버튼 모두 삭제
        todoList.removeChild(list);
        todoList.removeChild(delBttn);
    })
})