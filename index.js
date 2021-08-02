function func()
{
    var r1=Math.floor(Math.random()*6)+1;
    var r2=Math.floor(Math.random()*6)+1;
    document.getElementsByClassName("img1")[0].setAttribute("src","images/dice"+r1+".png");
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice"+r2+".png");
    if(r1==r2)
    document.getElementsByClassName("result")[0].innerHTML="Tie";
    else if(r1>r2)
    document.getElementsByClassName("result")[0].innerHTML="PLAYER 1 WINS";
    else
    document.getElementsByClassName("result")[0].innerHTML="PLAYER 2 WINS";
}
function exitfunc()
{
    document.getElementsByClassName("img1")[0].setAttribute("src","images/dice6.png");
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice6.png");
    document.getElementsByClassName("result")[0].innerHTML="PRESS THE PLAY BUTTON TO PLAY";
}