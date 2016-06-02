$(document).ready(function() { 
	$("#ajaxform").submit(function(){ 
		var form = $(this);
		var error = false; 
		form.find('input, textarea').each( function(){ 
			if ($(this).val() == '') { 
				alert('Заполните поле "'+$(this).attr('placeholder')+'"!'); 
				error = true; 
			}
		});
		if (!error) { 
			var data = form.serialize(); // подготавливаем данные
			$.ajax({ 
			   type: 'POST',
			   url: 'send_mes.php', 
			   dataType: 'json', 
			   data: data, 
		       beforeSend: function(data) { // событие до отправки
		            form.find('input[type="submit"]').attr('disabled', 'disabled');
		          },
		       success: function(data){ // событие после удачного обращения к серверу и получения ответа
		       		if (data['error']) { 
		       			alert(data['error']);
		       		} else { 
		       			alert('Письмо отвравлено!  =)'); 
		       		}
		         },
		       error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
		            alert(xhr.status); //  ответ сервера
		            alert(thrownError); // текст ошибки
		         },
		       complete: function(data) { 
		            form.find('input[type="submit"]').prop('disabled', false); 
		         }
		                  
			     });
		}
		return false; 
	});
});
