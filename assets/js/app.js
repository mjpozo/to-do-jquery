
$(document).ready(function(){

	var i = 0;
	$("#send").click(function(e){

		e.preventDefault();
		i++;

		var tarea = $("#work").val();

		if (tarea != ""){
			$("#por-hacer").append('<div class="row" id="rowDo' + i.toString() + '"></div>');
			$("#hecho").append('<div class="row" id="rowDone' + i.toString() + '"></div>');

			$("#rowDo" + i.toString()).append('<div class="col s10 cont-check" id="cont-check-do' + i.toString() + '"></div>');
			$("#cont-check-do" + i.toString()).append('<input type="checkbox" class="check" id="check-do' + i.toString() + '" value="miCheck-do' + i.toString() + '">');
			$("#cont-check-do" + i.toString()).append('<label for="check-do' + i.toString() + '">' + tarea + '</label>');

			$("#rowDone" + i.toString()).append('<div class="col s10 cont-check" id="cont-check-done' + i.toString() + '"></div>');
			$("#cont-check-done" + i.toString()).append('<input type="checkbox" class="check" id="check-done' + i.toString() + '" value="miCheck-do' + i.toString() + '">');
			$("#cont-check-done" + i.toString()).append('<label for="check-done' + i.toString() + '">' + tarea + '</label>');

			$("#rowDo" + i.toString()).append('<div class="col s2" id="cont-btn-do' + i.toString() + '"></div>');
			$("#cont-btn-do" + i.toString()).append('<a class="waves-effect waves-light btn" id="delete-do' + i.toString() + '"><i class="medium material-icons">delete</i></a>');

			$("#rowDone" + i.toString()).append('<div class="col s2" id="cont-btn-done' + i.toString() + '"></div>');
			$("#cont-btn-done" + i.toString()).append('<a class="waves-effect waves-light btn" id="delete-done' + i.toString() + '"><i class="medium material-icons">delete</i></a>');

			document.getElementById("work").value = "";

			//cuando se hace check al checkbox
			/*if ($("[checked]").val() == "checked"){
				$("#row" + i.toString()).remove();

			}*/

		}

		//para borrar tareas
		$("#delete-do" + i.toString()).click(function(e){
			e.preventDefault();
			$(this).parent().parent().remove();
		});

		$("#delete-done" + i.toString()).click(function(e){
			e.preventDefault();
			$(this).parent().parent().remove();
		});

		//para los checks
		if ($("[checked]").val() == "checked"){
				

			}
		
		

	});

});