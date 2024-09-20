
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '4f1e71d847mshd34a1ad6ccd41d1p1087adjsnb1b12e15aaad',
        'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
    }
};



const btn=document.getElementById('btn')
const moneyAmount=document.getElementById('moneyAmount')
const err=document.getElementById('err')
const resultH2=document.getElementById('result')
const form = document.getElementById('from')
const to = document.getElementById('to')

btn.addEventListener('click',()=>{
    if (moneyAmount.value<0 || form.value==''|| to.value=='' ) {
if (moneyAmount.value>0) {
    err.style='display:block';
    err.textContent='Iltimos miqdorni kiriting!!!';
} else {
    err.style='display:block';
    err.textContent='Iltimos miqdorni kiriting!!!';
}
    } else {
        try {
            const url = `https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=${from.value}`;
            fetch(url, options)
            .then((res)=>res.json())
            .then((json)=> calc(json));
            
            
            
        } catch (error) {
            console.error(error);
        }
    }
})

function calc(data) {
    console.log(data);
    
    err.style='display:none';
    resultH2.style='display:block'
    resultH2.textContent='Natija:'+data.result[to.value]*moneyAmount.value+`  ✅`
}