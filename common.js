$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за сообщение! Скоро я с вами свяжусь.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});