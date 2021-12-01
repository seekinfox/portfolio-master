(() => {
    const item = document.querySelectorAll('.item-card');
    const menu = document.querySelector('.display-mobile');
    const icon = document.querySelector('.fas');
    const popupIcon = document.querySelector('.contact');
    const popup = document.querySelector('.contact-popup');
    const slideBox = document.querySelector('.slider');
    const buttons = document.querySelectorAll('.btn');
    const eyes = document.querySelectorAll('.fa-eye');
    const infoBox = document.querySelectorAll('.more');
    const scroll = document.querySelectorAll('.scroll')
    const form = document.getElementById('form')
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const massage = document.querySelector('#msg')
    const alertmsg = document.querySelector('.alert');
    const resume = document.querySelector('.rb');
    const resumeLinks = document.querySelector('.resume')
    const viewResume = document.querySelector('.vr')
    const resumebox = document.querySelector('.top-layer')
    const closer = document.querySelector('.closer')
    const body = document.getElementsByTagName('body')[0];

    //popup for resume view on mobile
    viewResume.addEventListener('click', (e) => {
        e.preventDefault();
        resumebox.classList.add('block-resume');
        body.classList.add('overflow');

        closer.addEventListener('click', () => {
            resumebox.classList.remove('block-resume')
            body.classList.remove('overflow')
        })
    })

    //popup resume option
    resume.addEventListener('click', (e) => {
        e.preventDefault();
        resumeLinks.classList.toggle('resume-block')
    })

    //for menu popup
    icon.addEventListener('click', () => {
        menu.classList.toggle('show');
        if (resumeLinks.classList.contains('resume-block')) {
            resumeLinks.classList.remove('resume-block')
        }
    })


    //for contact popup
    popupIcon.addEventListener('click', () => {
        popup.classList.add('block');

        const close = popup.querySelector('.close');
        close.addEventListener('click', () => {
            popup.classList.remove('block')
        })
    })


    //for filter and some buggy animation
    buttons.forEach((btn) => {
        //filter
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;

            item.forEach((item) => {
                const itemFilter = item.dataset.item;
                if (filter == 'all') {
                    console.log('all')
                    item.style.display = 'inherit';
                } else if (filter == itemFilter) {
                    item.style.display = 'block'

                } else {

                    item.style.display = 'none'

                }

            })

            //red slider on filter navigation
            if (e.target.classList.contains('all')) {
                slideBox.classList.add('activep1')
            } else {
                slideBox.classList.remove('activep1')
            }
            if (e.target.classList.contains('hc')) {

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



    //for item menu eye
    eyes.forEach((eye) => {

        eye.addEventListener('click', (e) => {
            let eyeData = e.target.dataset.eye;
            console.log(eyeData)
            infoBox.forEach((box) => {
                if (box.classList.contains(eyeData)) {
                    box.classList.add('block')
                    eye.parentElement.previousElementSibling.previousElementSibling.addEventListener('click', () => {
                        box.classList.add('none');
                        setTimeout(() => {
                            box.classList.remove('block');
                            box.classList.remove('none');

                        }, 300)
                    })
                }
            })


        })
    })




    //for website preview slider
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

    //send email on submit
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const msg = '<br><b>Name:</b>' + name.value + '<br><b>Email:</b>' + email.value + '<br><br>' + massage.value;
        console.log(msg)


        Email.send({
            //token is generated from elastic-email.com

            SecureToken: "5906bf1d-4f65-4200-bdf6-530b11610051",
            To: 'sabhyankar918@gmail.com',
            From: email.value,
            Subject: "New message from portfolio",
            Body: msg
        }).then(
            message => {
                console.log(massage.value)
                if (message) {

                    //feedback massage :)
                    alertmsg.classList.add('block')
                    setTimeout(() => {
                        alertmsg.classList.remove('block');
                    }, 7000)
                }
            }
        );
        //empty the input content after the email submit
        name.value = '';
        email.value = '';
        massage.value = '';

    })

})()
