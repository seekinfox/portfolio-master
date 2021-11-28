(() => {
    const menu = document.querySelector('.display-mobile');
    const icon = document.querySelector('.fas');
    icon.addEventListener('click', () => {
        menu.classList.toggle('show');
    })

    const popupIcon = document.querySelector('.contact');
    const popup = document.querySelector('.contact-popup');
    popupIcon.addEventListener('click', () => {
        popup.classList.add('block');

        const close = popup.querySelector('.close');
        close.addEventListener('click', () => {
            popup.classList.remove('block');
        })
    })

    const slideBox = document.querySelector('.slider');
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.classList.contains('all')) {
                console.log('returned')
                slideBox.classList.add('activep1')
            } else {
                slideBox.classList.remove('activep1')
            }
            if (e.target.classList.contains('hc')) {
                console.log('returned')
                slideBox.classList.add('activep2')
            } else {
                slideBox.classList.remove('activep2')
            }
            if (e.target.classList.contains('js')) {

                slideBox.classList.add('activep3')
            } else {
                slideBox.classList.remove('activep3')
            }

        })
    })


    const eyes = document.querySelectorAll('.fa-eye');
    const infoBox = document.querySelectorAll('.more');

    eyes.forEach((eye) => {

        eye.addEventListener('click', (e) => {
            let eyeData = e.target.dataset.eye;
            console.log(eyeData)
            infoBox.forEach((box) => {
                if (box.classList.contains(eyeData)) {
                    box.classList.add('block')
                    eye.parentElement.previousElementSibling.previousElementSibling.addEventListener('click', () => {

                        box.classList.remove('block');
                    })
                }
            })


        })
    })

    const scroll = document.querySelectorAll('.scroll')

    const item = document.querySelectorAll('.item-card');

    scroll.forEach((item) => {
        item.addEventListener('click', (e) => {
            const eye = e.target.parentElement.nextElementSibling.firstElementChild.dataset.eye;
            const cl = e.target.parentElement.nextElementSibling.lastElementChild;
            console.log(e.target.parentElement.nextElementSibling.lastElementChild)
            if (cl.classList.contains(eye)) {
                e.target.parentElement.parentElement.classList.toggle('scroll')
                console.log()
            }

        })

    })



})()
