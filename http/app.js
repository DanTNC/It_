$(document).ready(function(){
	$("#ajax").click(function(){
		$("p").html("loading");
		$.ajax({
			url:"./ajax.njs",
			method:"GET",
			async:false,
			data:{
				sid1:$("#get input").val(),
				sid2:$("#post input").val()
			},
			success:function(name){
				$("p").html(name);
			},
			error:function(){
				console.log("something's wrong");
			}
		});
	});
});
