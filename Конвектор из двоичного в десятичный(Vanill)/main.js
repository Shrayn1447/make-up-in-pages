const inp = document.querySelector('.inp');
const result = document.querySelector('.inp__get');
const btn = document.querySelector('.btn');
btn.addEventListener('click', ()=> {
    if(inp.value!== '') {
        let a = function () {
            let num = inp.value;
            let binary = (num%2).toString();
            for (; num > 1; ) {
                num = parseInt(num / 2);
                binary =  (num % 2) + (binary);
            }
            return binary;
        };
        result.textContent = a(inp.value);
    }
})





