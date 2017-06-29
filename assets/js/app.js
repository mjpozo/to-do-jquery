
$(document).ready(function(){

	var i = 0;
	$("#send").click(function(e){

		e.preventDefault();

		i++;

		var tarea = $("#work").val();

		if (tarea != ""){
			$("#por-hacer").append('<div class="row" id="row' + i.toString() + '"></div>');

			$("#row" + i.toString()).append('<div class="col s10 cont-check" id="cont-check' + i.toString() + '"></div>');
			$("#cont-check" + i.toString()).append('<input type="checkbox" class="check" id="check' + i.toString() + '" value="miCheck' + i.toString() + '">');

			$("#cont-check" + i.toString()).append('<label for="check' + i.toString() + '">' + tarea + '</label>');

			//$("#row" + i.toString()).append('<div class="col offset-s2 s8" id="cont-work' + i.toString() + '"></div>');
			//$("#cont-work" + i.toString()).append('<p>' + tarea + '</p>');

			$("#row" + i.toString()).append('<div class="col s2" id="cont-btn' + i.toString() + '"></div>');
			$("#cont-btn" + i.toString()).append('<a class="waves-effect waves-light btn" id="delete' + i.toString() + '"><i class="medium material-icons">delete</i></a>');

			document.getElementById("work").value = "";

			//cuando se hace check al checkbox
			/*if ($("[checked]").val() == "checked"){
				$("#row" + i.toString()).remove();

			}*/


		}

		//para borrar tareas
		$("#delete" + i.toString()).click(function(e){

			e.preventDefault();

			$(this).parent().parent().remove();
		});


	});

	

});