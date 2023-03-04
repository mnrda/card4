        let div1 = document.querySelector('#mere #div1');
        let div21 = document.querySelector('#mere  #div21');
        let div22 = document.querySelector('#mere  #div22');
        let prevbtn = document.querySelectorAll('#mere  .prev');
        let carddiv1 = div1.querySelectorAll('.card');

        carddiv1[0].addEventListener('click', function(e) {
            e.preventDefault();
            div1.classList.add('hide');
            div21.classList.remove('hide');
        });

        carddiv1[1].addEventListener('click', function(e) {
            e.preventDefault();
            div1.classList.add('hide');
            div21.classList.remove('hide');
        });

        prevbtn.forEach((elt) => {
            elt.addEventListener('click', function(e) {
                e.preventDefault();
                div21.classList.add('hide');
                div22.classList.add('hide');
                div1.classList.remove('hide');
            })
        })