<?php
//1:��ȡ����
@$uName=$REQUEST['uName'] or die ('�û����Ǳ����')��
@$uPwd=$REQUEST['uPwd'] or die ('�����Ǳ����')��
//2:�������ݿ�����
$conn = mysqli_connect('127.0.0.1','root','','xiaomi');
//3:���ñ���
mysqli_query($conn,"SET NAMES UTF8");
//4:����sql���ҷ��ͽ��
$sql="INSERT TO user VALUES(null,'$uName','$uPwd')";
 //5:�жϲ��ҷ��سɹ�����ʧ��
  if($result===true){
    echo "ע��ɹ�";
  }else{
    echo "ע��ʧ��";
  }
?>