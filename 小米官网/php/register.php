<?php
//1:获取参数
@$uName=$REQUEST['uName'] or die ('用户名是必须的')；
@$uPwd=$REQUEST['uPwd'] or die ('密码是必须的')；
//2:创建数据库连接
$conn = mysqli_connect('127.0.0.1','root','','xiaomi');
//3:设置编码
mysqli_query($conn,"SET NAMES UTF8");
//4:创建sql并且发送结果
$sql="INSERT TO user VALUES(null,'$uName','$uPwd')";
 //5:判断并且返回成功或者失败
  if($result===true){
    echo "注册成功";
  }else{
    echo "注册失败";
  }
?>