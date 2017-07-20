//单击下拉列表
var list=document.getElementById ("areal_list");
var p=document.querySelector (".areal p:nth-child(2)");
var body=document.body ;


p.onclick =function(){
        if(list.style.display =="none"){
                list.style.display ="block"
        }else{
                list.style.display ="none"
        }

}
//表单验证
var form=document.forms[0];
var txtName=form.uName;
var txtPwd=form.uPwd ;
function vali(text,reg){
        if(!reg.test(text.value)){
                text.parentNode .nextElementSibling .style.display ="block";
                text.style.borderColor =" #FF6700"
        }
}
txtName.onblur=function(){
        vali(this,/^\w{1,10}$/)
}
txtPwd.onblur=function(){
        vali(this,/^\d{6}$/);
}
//为表单绑定onsubmit事件
form.onsubmit=function(e){
        //如果验证用户名未通过
        if(!vali(
                form.uName ,/^\w{1,10}$/)){
                //让用户名获得焦点
                form.uName .focus();
                e.preventDefault();//阻止提交
        }else if(!vali(
                form.uPwd ,/^\d{6}$/)){
                //否则，如果验证密码未通过
                //让密码框获得焦点
                form.uPwd .focus();
                e.preventDefault();//阻止提交
        }
}
//end

var lis=document.querySelectorAll ("#areal_list>li"),
    p=document.querySelector (".areal>p:first-child")
for(var i=1;i<lis.length ;i++){
        lis[i].onclick =function (){
                p.innerHTML ="";
          p.innerHTML =this.firstElementChild .innerHTML+"("+this.lastElementChild .innerHTML+")";
                this.parentNode .style.display ="none"
        }
}
//注册
var btn=document.querySelector (".register>div:nth-of-type(3)>input");
btn.onclick=function (){
        var u=txtName .value,
            p=txtPwd .value,
            xhr=new XMLHttpRequest ();
        xhr.onreadystatechange =function (){
                alert(xhr.responseText);
        }
        xhr.open('get','register.php?uName='+u+'&uPwd='+p,true);
        xhr.send(null);

};