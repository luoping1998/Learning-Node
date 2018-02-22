window.onload= function(){
	window.tName = 'all';
	var infors;
	
	infors = show(0);
	showTable('view',infors);

	$('#view button').click(function(){
		window.tName=$(this).attr('name');
		document.getElementById("period").options[0].selected = true;
		infors = show(0);
		showTable('view',infors);
	});

	$("#period").change(function(){
		var index =$("option:selected",this).index();
		infors = show(index);
		showTable('view',infors);
	});

	$('#ck').click(function(){
		$('#view').attr('display','block');
		$('#admin').attr('display','none');
	})
	
	$('#gl').click(function(){
		$('#admin').attr('display','block');
		$('#view').attr('display','none');
	})
}
