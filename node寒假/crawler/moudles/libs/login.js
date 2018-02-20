window.onload = function(){
	getCode();
	$('#codeImg').click(getCode);

	$("#toLog").click(getInfor);

	$("#web").click(signup($("web").val()));
}
