script

    function log(){
        var userName = document.getElementById('userName').value;
        var password = document.getElementById('password').value;
       		if(userName == "admin@admin" && password =="admin"){
                alert('Acesso bem sucedido');
            	} else{
               	alert('Acesso negado');
            }
        }
