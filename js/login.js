document.getElementById("btn__register").addEventListener('click', e=>{
    e.preventDefault();
    register();
  });
  
  document.getElementById("btn__iniciar-sesion").addEventListener('click', e=>{
    e.preventDefault();
    iniciarSesion();
  });
  
  window.addEventListener('resize', e =>{
    anchoPagina();
  }); 
  
  const formulario_login = document.querySelector('.formulario__login'),
        formulario_register = document.querySelector('.formulario__register'),
        contenedor_login_register = document.querySelector('.contenedor__login-register'),
        caja_trasera_login = document.querySelector('.caja__trasera-login'),
        caja_trasera_register = document.querySelector('.caja__trasera-register');
  
  const anchoPagina = ()=>{
    if(window.innerWidth > 850) {
      caja_trasera_login.style.display = "block";
      caja_trasera_register.style.display = "block";
    } else {
      caja_trasera_register.style.display = "block";
      caja_trasera_register.style.opacity = "1";
      caja_trasera_login.style.display = "none";
      formulario_login.style.display = "block";
      formulario_register.style.display = "none";
      contenedor_login_register.style.left = "0px";
    }
  }
   
  anchoPagina(); 
  
  const iniciarSesion = ()=>{
    if(window.innerWidth > 850) {
      formulario_register.style.display = "none";
      contenedor_login_register.style.left = "10px";
      formulario_login.style.display = "block";
      caja_trasera_register.style.opacity = "1";
      caja_trasera_login.style.opacity = "0";
    } else {
      formulario_register.style.display = "none";
      contenedor_login_register.style.left = "0";
      formulario_login.style.display = "block";
      caja_trasera_register.style.display = "block";
      caja_trasera_login.style.display = "none";
    }
    
  }
  
  const register = ()=>{
    if(window.innerWidth > 850) {
      formulario_register.style.display = "block";
      contenedor_login_register.style.left = "410px";
      formulario_login.style.display = "none";
      caja_trasera_register.style.opacity = "0";
      caja_trasera_login.style.opacity = "1";
    } else {
      formulario_register.style.display = "block";
      contenedor_login_register.style.left = "0px";
      formulario_login.style.display = "none";
      caja_trasera_register.style.display = "none";
      caja_trasera_login.style.display = "block";
      caja_trasera_login.style.opacity = "1";
    }
    
  }
  
  
  