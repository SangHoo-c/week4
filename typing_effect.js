var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;
//var liLength = document.getElementById('mydialog').childElementCount;
var button_input = document.getElementById("button_input");


// var liLength = document.getElementsByTagName('div').length;

// alert(liLength);


// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
if(typingBool==false){ // 타이핑이 진행되지 않았다면 
    typingBool=true; 
    var tyInt = setInterval(typing,100); // 반복동작 
} 
     
function typing(){ 
  if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
     $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
     typingIdx++; 
   } else{ //한문장이끝나면
     //다음문장으로.. 마지막문장이면 다시 첫번째 문장으로 
     if(liIndex>=liLength-1){
    //    liIndex=0;
    // YES OR NO 버튼 활성화 
    button_input.style.visibility = "visible";
    return;
     }else{
       liIndex++; 
     }
     
     //다음문장을 타이핑하기위한 셋팅
        typingIdx=0;
        typingBool = false; 
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
       
     //다음문장 타이핑전 1초 쉰다
         clearInterval(tyInt);
         setTimeout(function(){
            $(".typing").html('');
           tyInt = setInterval(typing,100);
         },1000);
    } 
}  



//도망가기
var x = 0;
var y = 0;
var no_but = document.getElementById("no_button");
no_but.addEventListener("mouseover", move);
// var content = document.getElementById("content");

function move(){
  if(x <200){
    x += Math.floor(Math.random() * 100);
  }
  if(x >= 200){
    x -= Math.floor(Math.random() * 400);
  }
  if(y <200){
    y += Math.floor(Math.random() * 100);
  }
  if(y >= 200){
    y -= Math.floor(Math.random() * 400);
  }

  y += Math.floor(Math.random() * 10);
  no_but.style.left = x + 'px';
  no_but.style.top = y + 'px';
//   alert(x);
}

