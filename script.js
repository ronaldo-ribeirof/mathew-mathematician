let txtn1 = window.document.getElementById('txtn1')
        let txtn2 = window.document.querySelector('input#txtn2')

        function somar() {
            let res = window.document.getElementById('res')
            let n1 = Number(txtn1.value)
            let n2 = Number(txtn2.value)
            let s = n1 + n2
            res.innerHTML = (`${s}`)
        }

        function subtrair() {
            let res = window.document.getElementById('res')
            let n1 = Number(txtn1.value)
            let n2 = Number(txtn2.value)
            let s = n1 - n2
            res.innerHTML = (`${s}`)
        }

        function multiplicar() {
            let res = window.document.getElementById('res')
            let n1 = Number(txtn1.value)
            let n2 = Number(txtn2.value)
            let s = n1 * n2
            res.innerHTML = (`${s}`)
        }

        function dividir() {
            let res = window.document.getElementById('res')
            let n1 = Number(txtn1.value)
            let n2 = Number(txtn2.value)
            let s = n1 / n2
            res.innerHTML = (`${s}`)
        }

        function resetar() {
            let res = window.document.getElementById('res')
            let n1 = Number(txtn1.value)
            let n2 = Number(txtn2.value)
            res.innerHTML = ('')
            txtn1.value = ''
            txtn2.value = ''
        }
