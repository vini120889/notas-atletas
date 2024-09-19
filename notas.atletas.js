let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
 ];

 function mediaNotasAtletas(objAtletas){
    for(let i = 0;i < objAtletas.length;i++){
      let notasOrdenadas = objAtletas[i].notas.sort((a, b) => b - a)

      let notasComputadas = notasOrdenadas.slice(1,4);

      let soma = 0;
      notasComputadas.forEach(function(nota){
        soma = soma + nota;
      });

      let media = soma / notasComputadas.length;
      
      console.log(`Atleta: ${objAtletas[i].nome}`);
      console.log(`Notas Obtidas: ${objAtletas[i].notas.join(", ")}`);  
      console.log(`Média Válida: ${media}`);
      console.log("\n")
    }
    
  }

 mediaNotasAtletas(atletas);