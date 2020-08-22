var xhr=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Micrsoft.XMLHTTP');
xhr.open(www.baidu.com);
xhr.send();
xhr.onreadystatechange=()=>{
	if(xhr.readyState===4&&xhr.state==200){
		console.log('成功',xhr.responseText);
	}
}
