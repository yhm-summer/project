//1:��ȡ��¼��ť
//2:�󶨵���¼�
var form=document.getElementById ("form");
var uName=form.uName ;
var uPwd=form.uPwd;
var btn1=document.getElementById ("btn1");
btn1.onclick = function(){
    //2.1:��ȡ�û���������
    var u = uName.value;
    var p = uPwd.value;
    //2.2:��������XHR
    var xhr = new XMLHttpRequest();
    //2.3:���¼�
    xhr.onreadystatechange = function(){
        var input = xhr.responseText;
        if(input==='login-succ'){
            alert('��¼�ɹ�');
        }else{
            alert("��¼ʧ��");
        }
    }
    //2.4:��������
    xhr.open('GET','login.php?uName='+u+'&uPwd='+p,true);
    //2.5:��������
    xhr.send(null);
}
 var lis=document .querySelectorAll (".top li"),
     box_show=document.querySelector ("#box-3"),
     box_show_2=document.querySelector ("#main-box-2");
for(var i=0;i<lis.length ;i++){
    lis[i].onclick=function(){
        if(this.id=="1"){
            box_show.style.display ="block";
            this.style.color="#FF6700";
            lis[1].style.color="black";
            box_show_2.style.display ="none"
        }else if(this.id=="2"){box_show.style.display ="none";
            this.style.color="#FF6700";
            lis[0].style.color="black";
        box_show_2.style.display ="block"}
    }}
