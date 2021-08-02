function rotate(idname)
{
    let id = null;
    const elem= document.getElementById(idname);
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame,10);
    function frame() {
    if (pos>=360) 
    {
      clearInterval(id);
    } 
    else 
    {
      pos=pos+10;
      elem.style.transform="rotate("+pos+"deg)";
    }
  }
}
function func()
{
    rotate("img1");
    rotate("img2");
    var r1=Math.floor(Math.random()*6)+1;
    var r2=Math.floor(Math.random()*6)+1;
    document.getElementById("img1").setAttribute("src","images/dice"+r1+".png");
    document.getElementById("img2").setAttribute("src","images/dice"+r2+".png");
    if(r1==r2)
    document.getElementById("result").innerHTML="Tie";
    else if(r1>r2)
    document.getElementById("result").innerHTML="PLAYER 1 WINS";
    else
    document.getElementById("result").innerHTML="PLAYER 2 WINS";
}
function exitfunc()
{
    document.getElementById("img1").setAttribute("src","images/dice6.png");
    document.getElementById("img2").setAttribute("src","images/dice6.png");
    document.getElementById("result").innerHTML=" ";
}