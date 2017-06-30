
$(document).ready(function(){

	var i = 0;
	//$("#send").click(function(event){
	$('body').keydown(function(event){

		
		if (event.keyCode == 13){
			event.preventDefault();
			i++;

			var tarea = $("#work").val();

			if (tarea != ""){
				$("#por-hacer").append('<div class="row" id="rowDo' + i.toString() + '"></div>');
				$("#hecho").append('<div class="rowDone" id="rowDone' + i.toString() + '"></div>');

				$("#rowDo" + i.toString()).append('<div class="col s10 cont-check" id="cont-check-do' + i.toString() + '"></div>');
				$("#cont-check-do" + i.toString()).append('<input type="checkbox" class="checkDo" id="check-do' + i.toString() + '" value="miCheck-do' + i.toString() + '">');
				$("#cont-check-do" + i.toString()).append('<label for="check-do' + i.toString() + '">' + tarea + '</label>');

				$("#rowDone" + i.toString()).append('<div class="col s10 cont-check" id="cont-check-done' + i.toString() + '"></div>');
				$("#cont-check-done" + i.toString()).append('<span>' + tarea + '</span>');

				$("#rowDo" + i.toString()).append('<div class="col s2" id="cont-btn-do' + i.toString() + '"></div>');
				$("#cont-btn-do" + i.toString()).append('<a class="waves-effect waves-light btn" id="delete-do' + i.toString() + '"><i class="medium material-icons">delete</i></a>');

				$("#rowDone" + i.toString()).append('<div class="col s2" id="cont-btn-done' + i.toString() + '"></div>');
				$("#cont-btn-done" + i.toString()).append('<a class="waves-effect waves-light btn" id="delete-done' + i.toString() + '"><i class="medium material-icons">delete</i></a>');

				document.getElementById("work").value = "";

			}

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

		//esto mantiene inicialmente ocultas las tareas en el item completed
		$(".rowDone").hide();


		//cuando de hace check en To Do Items
		//no funciona por dos razones:
		//siempre hace que muestre el ultimo item de la lista y ninguno mas
		//al apretar cualquier boton, vuelve a desaparecer el elemento reciente de completed item
		$("#check-do" + i.toString()).click(function(e){
			e.preventDefault();
			$(this).parent().parent().remove();
			$("#rowDone" + i.toString()).show();
		});


		//cuando de hace check en To Do Items (NO FUNCIONA)
		/*$(document).on("change","#check-done" + i.toString(),function(){
			$("#rowDone" + i.toString()).hide();
			$("#rowDo" + i.toString()).show();

			$("#check-do" + i.toString()).removeAttr('checked');
		});*/

	});

});