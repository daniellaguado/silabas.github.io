const varContador = document.getElementById('counter');

const ejecutarContador = (entradas, observador) => {
    // console.log('ejecuta!')


    entradas.forEach((entrada)=> {  

            
        
      

    if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');

        let counts = setInterval(updated, 40);

        let upto = 0;

       
       
        function updated() {          

                var count = document.getElementById("counter");

                count.innerHTML = ++ upto;

                if (upto === 50) {

                    clearInterval(counts);

                
                }
            };
        }      
        //  else {
		// 	// entrada.target.classList.remove('visible');
		// }    
    
    })
    
}
  
    
    
    const observador = new IntersectionObserver(ejecutarContador, {
        root: null,
        rootMargin: '-10px -10px -10px -10px',
        threshold: 1,
    });



observador.observe(varContador);




    