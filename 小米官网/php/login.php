<?php
//��ȡ����
@$uName=$_REQUEST['uName'] or die('�û����Ǳ����');
@$uPwd=$_REQUEST['uPwd'] or die('�����Ǳ����');
//������������
$conn=mysqli_connect('127.0.0.1','root','','xiaomi');
mysqli_query($conn,"SET NAMES UTF8");
$result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  //6:�ж��Ƿ��¼�ɹ�
  if($row===null){
    echo "login-err";
  }else{
    echo "login-succ";
  }

?>