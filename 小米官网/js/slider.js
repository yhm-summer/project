window.onload =function () {
    var slider = document.querySelector(".xm-star .slider .brick-list"),
        width = 248,
        moved = 0,
        forward = document.querySelector(".next"),
        backward = document.querySelector(".pre"),
        div=document.querySelector (".xm-star>.wrap")
    forward.onclick = move;
    function move() {
        if (this.className.indexOf("disabled") == -1) {
            moved += (
                this.className == "next " ? -5 : 5
            );
            var left = moved * -width;
            slider.style.left = left + "px";
            check()
        }
    }
    function check() {
        if (moved == 0) {
            backward.className = "pre  ";
            forward.className = "next  disabled"
        } else {
            forward.className = "next ";
            backward.className = "pre disabled"
        }
    }
    backward.onclick = move
    function startPlay (){

        if(backward.className =="pre  "&& forward.className == "next  disabled"){moved=5;
            var left = moved * -width;
            slider.style.left=left+"px";
        }else if(forward.className =="next "&&
        backward.className =="pre disabled"){
            moved =0;
           var left=moved * -width;
            slider.style.left=left+"px";
        }
        check();
    }
   var timer= setInterval (startPlay ,3000)
    div.onmouseover = function (){
        clearInterval (timer);
        timer=null
    }
    div.onmouseout=function (){
        timer= setInterval (startPlay ,3000)
    }
}
