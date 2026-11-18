const cl = console.log;

const Food = document.getElementById('Food')

function onFilter(eve) {
    let val = eve.target.value;
    let allDivs = [...document.querySelectorAll(".all")]
    allDivs.forEach(d => {
        d.classList.add('d-none')
    })

    let selectedDiv = [...document.querySelectorAll("." +val)]
    selectedDiv.forEach(d => {
        d.classList.remove('d-none')
    })

}

Food.addEventListener('change',onFilter)