
function tabuada() {
    let num = document.querySelector('input#txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Digite um número, por gentileza')
    } else {
        tab.innerHTML = ''
        let n = Number(num.value)
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    } 
}