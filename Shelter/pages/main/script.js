console.log('1.Бургер-меню: 26');
   //burger
   const body = document.body;
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".header_nav");
    const wrapper = document.querySelector(".wrapper");
    const links = document.querySelector(".nav_item");
    
    burger.addEventListener("click", menuToggler);
    
    function menuToggler(event)  {
      menu.classList.toggle("active");
      wrapper.classList.toggle("active");
      burger.classList.toggle("active");
      body.classList.toggle("lock");}

    body.addEventListener('click', (event) => {
            if(!event.target.closest('.menu')){
                burger.classList.remove('active');
                menu.classList.remove('active');
                wrapper.classList.remove('active');
                body.classList.remove('lock');
            }
        });
       
    menu.addEventListener('click', (event) => {
                if(event.target.closest('.nav_item')) {
                    menu.classList.remove('active');
                    body.classList.remove('lock');
                    burger.classList.remove('active');
                    wrapper.classList.remove('active')
                }
    })
