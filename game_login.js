function adduser(){
player1_name=document.getElementById("player1_nameinput").value;
player2_name=document.getElementById("player2_nameinput").value;

localStorage.setItem("player1", player1_name);
localStorage.setItem("player2", player2_name);

window.location="game_page.html";
}
