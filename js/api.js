'use strict';


const pesquisarCep = () => {
    const cep    = document.getElementById('cep').value;
    const url    = `https://viacep.com.br/ws/${cep}/json/`;
    const adress = fetch(url).then(
        responde => responde.json()).then(
            (json)=>{ 
                console.log(json); 
                alert(`Você mora na rua ${json['logradouro']} na cidade de ${json['localidade']}
                \nNossa unidade mais proxima fica na PRAÇA GENERAL OSORIO, 125`)

    });

    console.log(cep);
} 

document.getElementById('cep')
    .addEventListener('focusout',pesquisarCep);