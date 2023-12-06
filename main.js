const form = document.getElementById('form-validacao');
const campo1 = document.getElementById('numero1');
const campo2 = document.getElementById('numero2');

function validaNumero(num1, num2) {
    return num1 < num2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `TUDO CERTO! O valor do primeiro número é menor que o segundo número: <b>${campo1.value}</b> ⇢ <b>${campo2.value}</b>`;

    if (validaNumero(campo1.value, campo2.value)) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        document.querySelector('.error-message').style.display = 'none';

        campo1.style.border = 'none'; 
        campo1.value = '';
        campo2.value = '';
    } else {
        campo1.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';

        document.querySelector('.success-message').style.display = 'none';
    }
});

campo1.addEventListener('change', function(e){
    console.log(e.target.value);

    if (!validaNumero) {
        campo1.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';

        document.querySelector('.success-message').style.display = 'none';
    } else {
        campo1.style.border = 'none';
        document.querySelector('.error-message').style.display = 'none';

        document.querySelector('.success-message').style.display = 'none';
    }
});
