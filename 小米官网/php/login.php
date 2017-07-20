<?php
//获取参数
@$uName=$_REQUEST['uName'] or die('用户名是必须的');
@$uPwd=$_REQUEST['uPwd'] or die('密码是必须的');
//创建数据连接
$conn=mysqli_connect('127.0.0.1','root','','xiaomi');
mysqli_query($conn,"SET NAMES UTF8");
$result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  //6:判断是否登录成功
  if($row===null){
    echo "login-err";
  }else{
    echo "login-succ";
  }

?>