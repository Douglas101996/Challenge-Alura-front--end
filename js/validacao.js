export function valida (input) {
    const tipoDeInput = input.dataset.tipo;

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid){
        input.classList.remove('input-container--invalido');
        input.parentElement.querySelector('.error').innerHTML = '';
    }else {
        input.classList.add('input-container--invalido');
        input.parentElement.querySelector('.error').innerHTML = mostraMensagemDeErro(tipoDeInput, input);
    }
}
const tiposDeErro = [
    'valueMissing',
    'typeMismatch'
]
const mensagensDeErro = {
    nome: {
        valueMissing: 'El nombre no puede estar vacío.',
    },
    mensagem: {
        valueMissing: 'El mensaje no se puede enviar.',
    },
    email: {
        valueMissing: 'El E-mail no puede estar vacío.',
        typeMismatch: 'El E-mail esta mal escrito (nombre@email.com).'
    },
    senha: {
        valueMissing: 'La contrasena no puede estar vacia.'
    },
    nomeProdutos: {
        valueMissing: 'El nombre del producto no puede estar vacío.'
    },
    preco: {
        valueMissing: 'El precio no puede estar vacío.'
    },
    descricao: {
        valueMissing: 'La descripción no puede estar vacía.'
    }
}
const validadores = {

}
function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = '';

    tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            mensagem = mensagensDeErro[tipoDeInput][erro];
        }
    })

    return mensagem;
}