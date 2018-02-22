function select(index,group){
	var interview = [0,-1,1,2,3,4];
	/*
		0 ：全部 ，
		-1 ：未通过 ，
		1 ：一面通过，
		2 ：二面通过，
		3 ：三面通过，
		4 : 通过
	 */
	
	if(index==0){
		var infors = getFinfors(group);
	}else{
		var infors = getFinfors(group,interview[index]);
	}
	return infors;
}

//展示信息
function show(index){
	var group = toGroup(window.tName);
	return select(index,group);	
}

//转化成组别
function toGroup(tname){
	if(tname == 'all'){
		return 'all';
	}else if(tname == 'and'){
		return 'Android';
	}else if(tname == 'ios'){
		return 'iOS';
	}else if(tname == 'web'){
		return 'Web';
	}else {
		return 'Java后台';
	}
}

function toPeriod(str){
	if(str == 0){
		return '未面试';
	}else if(str == -1){
		return '未通过';
	}else if(str == 1){
		return '一面通过';
	}else if(str == 2){
		return '二面通过';
	}else if(str == 3){
		return '三面通过';
	}
}

function showTable(id,infors){
	$('table').remove();

	var oTable = document.createElement('table');
	oTable.setAttribute('border','1');
	var aTr = ['学 号','姓 名','性 别','学 院','专 业',
				'班 级','年 级','所选组别','手 机 号',
				'邮 箱','留 言','当前面试情况'];
	var fTr = document.createElement('tr');
	oTable.appendChild(fTr);
	for(var i = 0 ;i<12 ;i++){
		var oTh = document.createElement('th');
		oTh.innerHTML = aTr[i];
		fTr.appendChild(oTh);
	}
	var len = infors.length;
	for(var i = 0; i<len; i++){
		var oTr = document.createElement('tr');
		var inter = toPeriod(infors[i].interview);
		var aValue = [infors[i].stusID,infors[i].name,infors[i].sex,
		infors[i].college,infors[i].major,infors[i].class,infors[i].grade,
		infors[i].group,infors[i].phone,infors[i].email,infors[i].lines,inter];
		for(var j = 0; j<12; j++){
			var oTd = document.createElement('td');
			oTd.innerHTML = aValue[j];
			oTr.appendChild(oTd);
		}
		oTable.appendChild(oTr);
	}
	document.getElementById('view').appendChild(oTable);
}