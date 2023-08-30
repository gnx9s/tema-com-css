document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.querySelector('.trocarmodo');
    const body = document.body;
    const container = document.getElementById('container');

    modeToggle.addEventListener('click', function () {
        body.classList.toggle('modonoturno');
        container.classList.toggle('modonoturno');

        if(body.classList.contains('modonoturno')) 
        {
            body.style.background = '#142d4c';
            body.style.backgroundColor = '#091727';
            container.style.border = 'solid #081b31'
            container.style.boxShadow = '8px 8px 0 0 #050d18'
        }

        else
        {
            body.style.background = 'linear-gradient(45deg, #e0c3fc 1%, #8ec5fc 100%)';
            container.style.border = 'solid #cadefc'
            container.style.boxShadow = '8px 8px 0 0 #c3bef0';
        }
    });
});
