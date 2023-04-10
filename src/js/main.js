const form = document.getElementById('form-financeiro');

const saida = document.getElementById('saida');
const entrada = document.getElementById('entrada');

function validateForm(saida, entrada) {
    if(saida > entrada){
        return false;
    } else {
        return true;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const messageSuccess = "Finanças do mês cadastradas com sucesso!";
    const messageFailure = "A saída não pode ser maior que a entrada!";

    const validate = validateForm(saida.value, entrada.value);

    if(validate){
        const successContainer = document.querySelector('.success-message');
        successContainer.innerHTML = messageSuccess;
        successContainer.style.display = 'block';
    } else {
        saida.style.border = '2px solid red';
        const failureContainer = document.querySelector('.failure-message');
        failureContainer.innerHTML = messageFailure;
        failureContainer.style.display = 'block';
    }
})

saida.addEventListener('change', function() {
    validateChange = validateForm(saida, entrada);

    if(validateChange){
        saida.style.border = '';
        document.querySelector('.failure-message').style.display = 'none';
    } else {
        document.querySelector('.success-message').style.display = 'none';
    }
})

entrada.addEventListener('change', function() {
    validateChange = validateForm(saida, entrada);

    if(validateChange){
        saida.style.border = '';
        document.querySelector('.failure-message').style.display = 'none';
    } else {
        document.querySelector('.success-message').style.display = 'none';
    }
})