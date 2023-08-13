// Define uma função para criar um objeto de círculo com o raio especificado
function criarCirculo(raio) {

  // Usa o Object.defineProperties para definir propriedades e métodos em 'this' (o objeto criado)
  Object.defineProperties(this, {
      raio: {
          configurable: false,
          get: function() {
              return raio;
          },
          set: function(value) {
              if (value <= 0) {
                  throw new Error("O raio deve ser maior que zero");
              }
              raio = value;
          }
      },
      pi1: {
          value: 3.14,
          enumerable: true,       // Pode ser enumerado em loops
          writable: false,       // Não pode ser modificado
          configurable: false    // Não pode ser excluído ou configurado
      },
      pi2: {
          value: 3.1415,
          enumerable: true,
          writable: false,
          configurable: false
      },
      pi3: {
          value: 3.1415926536,
          enumerable: true,
          writable: false,
          configurable: false
      },
      // Define método para calcular a área com base no valor de PI
      calcularArea: {
          value: function(pi) {
              return pi * raio * raio;
          },
          enumerable: false    
      },
      calcularCircunferencia: {
          value: function(pi) {
              return 2 * pi * raio;
          },
          enumerable: false
      },
      imprimirValores: {
          value: function() {
              const piValues = [this.pi1, this.pi2, this.pi3]; // Correção: Obtém os valores de PI do próprio objeto
              piValues.forEach(pi => {
                  console.log(`PI: ${pi}, Área: ${this.calcularArea(pi)}, Perímetro: ${this.calcularCircunferencia(pi)}`);
              });
          },
          enumerable: false
      }
  });

  return this;    
}

const circulo = criarCirculo(5);
circulo.imprimirValores();
