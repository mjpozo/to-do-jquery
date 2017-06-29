
$(document).ready(function(){

	var i = 0;
	$("#send").click(function(e){

		e.preventDefault();

		i++;

		var tarea = $("#work").val();

		if (tarea != ""){
			$("#por-hacer").append('<div class="row" id="row' + i.toString() + '"></div>');

			$("#row" + i.toString()).append('<div class="col s1 cont-check" id="cont-check' + i.toString() + '"></div>');
			$("#cont-check" + i.toString()).append('<input type="checkbox" class="check" value="check' + i.toString() + '">');

			$("#row" + i.toString()).append('<div class="col s10" id="cont-work' + i.toString() + '"></div>');
			$("#cont-work" + i.toString()).append(tarea);

			$("#row" + i.toString()).append('<div class="col s1" id="cont-btn' + i.toString() + '"></div>');
			$("#cont-btn" + i.toString()).append('<button type="button">Remove</button>');

			document.getElementById("work").value = "";
		}


	});

	

});