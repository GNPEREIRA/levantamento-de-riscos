let risco = document.getElementById('risco')
let fonte = document.getElementById('fonte')
let epi = document.getElementById('epi')
let ca = document.getElementById('ca')
const btnAdicionar = document.getElementById('btn-adicionar')
const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0]

function maiuscula(){
    let a = document.getElementById('risco')
    let b = document.getElementById('fonte')
    let c = document.getElementById('epi')
    
    a.value = a.value.toUpperCase()
    b.value = b.value.toUpperCase()
    c.value = c.value.toUpperCase()
    
}

btnAdicionar.addEventListener('click', function(){
  
    let varRisco = risco.value.trim()
    let varFonte = fonte.value.trim()
    let varEpi = epi.value.trim()
    let varCa = ca.value.trim()

    //verifica se os campos estão em branco
    if(risco === '' || fonte === '' || epi === '' || ca === ''){
        alert('Informe os dados antes de adicionar')
        
    }

    //cria uma nova linha tr
    const linha = tabela.insertRow()

    //adiciona células td à linha
    let celulaRisco = linha.insertCell(0)
    let celulaFonte = linha.insertCell(1)
    let celulaEpi = linha.insertCell(2)
    let celulaCa = linha.insertCell(3)
    const celulaAcao = linha.insertCell(4)

    //preenche as células com os valores digitados
    celulaRisco.textContent = varRisco
    celulaFonte.textContent = varFonte
    celulaEpi.textContent = varEpi
    celulaCa.textContent = varCa

    //cria o botão de deletar
    const btnDelete = document.createElement('button')
    btnDelete.textContent = 'Remover'
    btnDelete.addEventListener('click', function(){
        tabela.deleteRow(linha.rowIndex-1)//-a para não incluir o btnDelete na linha do cabeçalho
    })

    celulaAcao.appendChild(btnDelete)

    //limpa os campos de entrada
    risco.value = ''
    fonte.value = ''
    epi.value = ''
    ca.value = ''

})