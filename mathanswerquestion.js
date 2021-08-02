player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;



function send(){
    answer=document.getElementById("number_1").value * document.getElementById("number_2").value;
    console.log("Answer="+answer);
    number_1=document.getElementById("number_1").value;
    number_2=document.getElementById("number_2").value;
    h4=number_1+"❌"+number_2;
    input="<br><br><br><input id='answercheck' class='form-control' placeholder='Answer here'>";
    button="<br><br><button class='btn btn-info' onclick='check()'> Check </button>";
    row=h4+input+button;
   document.getElementById("output").innerHTML=row;

}
question_turn="player_1";
answer_turn="player_2";
function check(){
answer_written=document.getElementById("answercheck").value;
if(answer_written==answer){
    if(answer_turn=="player_1"){
    player1_score=player1_score+1;
    document.getElementById("player1_score").innerHTML=player1_score;
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
}
if(question_turn=="player_1"){
    question_turn="player_2";
    document.getElementById("player_question").innerHTML="Question Turn- "+player2_name;
}
else{
    question_turn="player_1";
    document.getElementById("player_question").innerHTML="Question Turn- "+player1_name;
}





if(answer_turn=="player_1"){
    answer_turn="player_2";
    document.getElementById("player_answer").innerHTML="Answer Turn- "+player2_name;
}
else{
    answer_turn="player_1";
    document.getElementById("player_answer").innerHTML="Answer Turn- "+player1_name;
}
document.getElementById("output").innerHTML="";
}


