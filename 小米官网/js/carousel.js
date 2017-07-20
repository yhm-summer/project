
var Img=document.querySelectorAll (".xm-slider-box ul:first-child>li"),
    slider=document.querySelector (".xm-slider-box"),
    lis=document.querySelectorAll (".xm-slider-box ul:last-child>li"),
    size=Img .length,
    timer=null,
    index=0;
//停止轮播
function stopPlay(){
    if(timer){
        clearInterval (timer)
        timer=null;
    }
}
//自动轮播
function startPlay(){
    timer=setInterval(function (){
        index ++
        if(index>=size){index=0}
        changeImg ()
    },3000)
}
//改变图片
function changeImg(){
    for(var i=0;i<size;i++){
        lis[i].className ="";
        Img[i].className =""
    }
    lis[index].className ="active"
   Img[index].className ="show"
}
function slideImg(){
    //鼠标进入停止轮播
    slider.onmouseover=function (){
        stopPlay ()
    }
    //鼠标移除开始轮播
    slider.onmouseout=function (){
       startPlay ()
    }
    //按钮控制
    for(var i=0;i<lis.length ;i++){
        lis[i].id=i;
        lis[i].onclick=function (){
            index=this.id;
            changeImg ()
        }
    }
}
slideImg ()
