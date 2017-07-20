
var Img=document.querySelectorAll (".xm-slider-box ul:first-child>li"),
    slider=document.querySelector (".xm-slider-box"),
    lis=document.querySelectorAll (".xm-slider-box ul:last-child>li"),
    size=Img .length,
    timer=null,
    index=0;
//ֹͣ�ֲ�
function stopPlay(){
    if(timer){
        clearInterval (timer)
        timer=null;
    }
}
//�Զ��ֲ�
function startPlay(){
    timer=setInterval(function (){
        index ++
        if(index>=size){index=0}
        changeImg ()
    },3000)
}
//�ı�ͼƬ
function changeImg(){
    for(var i=0;i<size;i++){
        lis[i].className ="";
        Img[i].className =""
    }
    lis[index].className ="active"
   Img[index].className ="show"
}
function slideImg(){
    //������ֹͣ�ֲ�
    slider.onmouseover=function (){
        stopPlay ()
    }
    //����Ƴ���ʼ�ֲ�
    slider.onmouseout=function (){
       startPlay ()
    }
    //��ť����
    for(var i=0;i<lis.length ;i++){
        lis[i].id=i;
        lis[i].onclick=function (){
            index=this.id;
            changeImg ()
        }
    }
}
slideImg ()
