
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

   
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value
    var formBtn = document.getElementById("formBtn")

    const currentUrl = (window.location.href).replace("index.html")

    var data = new FormData()

    data.append('name', name)
    data.append('email', email)
    data.append('phone', phone)
  

    const options = {
        method: 'POST',
        body: data
    };

    formBtn.disabled = true;
    formBtn.innerText = "Enviando...";

    fetch(currentUrl + 'php/mail/mail.php', options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // Swal.fire({
            //     text: 'Email enviado com sucesso!',
            //     icon: 'success',
            //     showCancelButton: false,
            //     confirmButtonColor: '#FFF00D',
            //     confirmButtonText: 'Fechar'

            // });
            formBtn.innerText = "Enviado";
            formBtn.disabled = false;
            return
        })
        .catch(err => {
            console.error('Error:', err);

            // // Swal.fire({
            // //     text: 'Não foi possível enviar o email.',
            // //     icon: 'error',
            // //     showCancelButton: false,
            // //     confirmButtonColor: '#FFF00D',
            // //     confirmButtonText: 'Fechar'
            // });
            formBtn.innerText = "Enviado";
            formBtn.disabled = false;
            return

        });
    formBtn.innerText = "Enviar";
});
// Chamar a função com JavaScript

