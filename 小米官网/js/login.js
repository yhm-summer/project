//1:获取登录按钮
//2:绑定点击事件
var form=document.getElementById ("form");
var uName=form.uName ;
var uPwd=form.uPwd;
var btn1=document.getElementById ("btn1");
btn1.onclick = function(){
    //2.1:获取用户名和密码
    var u = uName.value;
    var p = uPwd.value;
    //2.2:创建对象XHR
    var xhr = new XMLHttpRequest();
    //2.3:绑定事件
    xhr.onreadystatechange = function(){
        var input = xhr.responseText;
        if(input==='login-succ'){
            alert('登录成功');
        }else{
            alert("登录失败");
        }
    }
    //2.4:创建连接
    xhr.open('GET','login.php?uName='+u+'&uPwd='+p,true);
    //2.5:发送请求
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
