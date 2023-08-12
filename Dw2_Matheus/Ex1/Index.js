function criarCirculo(raio,pi1,pi2,pi3) {

    const piValues = [3.14, 3.14159, 3.1415926536];

    Object.defineProperties(this, {
        pi1:{
            value: pi1,
            enumerable: true,
            writable: false,
            configurable: false
        },
        pi2:{
            value: pi2,
            enumerable: true,
            writable: false,
            configurable: false
        },
        pi3:{
            value: pi3,
            enumerable: true,
            writable: false,
            configurable: false
        },


    })
  
    function calcularArea(pi) {
      return pi * raio * raio;
    }
  
    function calcularCircunferencia(pi) {
      return 2 * pi * raio;
    }
  
    return {
      calcularArea: function() {
        return piValues.map(pi => calcularArea(pi));
      },
      calcularCircunferencia: function() {
        return piValues.map(pi => calcularCircunferencia(pi));
      }
    };
  }

  const circulo = criarCirculo(5); // Definindo o raio do círculo como 5
  const area = circulo.calcularArea();
  const circunferencia = circulo.calcularCircunferencia();
  
  console.log(circulo)
  console.log(area)
  console.log(circunferencia)
  
