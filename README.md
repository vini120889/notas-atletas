# Cálculo de Média de Notas de Atletas

Este repositório contém um código JavaScript simples que calcula a **média válida** das notas de diferentes atletas, descartando a maior e a menor nota de cada um. O objetivo é apresentar as notas obtidas por cada atleta e calcular sua média com base nas 3 notas do meio.

## Funcionalidades

- Ordenação das notas em ordem decrescente.
- Cálculo da média descartando a maior e a menor nota.
- Exibição da média válida para cada atleta com base em suas 3 notas do meio.

## Estrutura do Código

O código é composto por:

- Um array de objetos `atletas`, onde cada objeto contém:
  - O nome do atleta.
  - Um array de suas notas.
  
- A função `mediaNotasAtletas(atletas)` que:
  1. Ordena as notas de cada atleta em ordem decrescente.
  2. Remove a maior e a menor nota, mantendo apenas as 3 notas centrais.
  3. Calcula a média dessas 3 notas.
  4. Exibe o nome do atleta, suas notas e a média válida calculada.

### Exemplo de Saída

Para o array de atletas fornecido, o código gerará uma saída semelhante a esta:

Atleta: Cesar Abascal<br> 
Notas Obtidas: 10, 9.34, 8.42, 10, 7.88<br> 
Média Válida: 9.253333333333332<br>

Atleta: Fernando Puntel<br> 
Notas Obtidas: 8, 10, 10, 7, 9.33<br> 
Média Válida: 9.11<br>

Atleta: Daiane Jelinsky<br> 
Notas Obtidas: 7, 10, 9.5, 9.5, 8<br> 
Média Válida: 9.00<br>

Atleta: Bruno Castro<br> 
Notas Obtidas: 10, 10, 10, 9, 9.5<br> 
Média Válida: 9.833333333333334<br>


## Como Executar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   
2. Abra o arquivo JavaScript em seu ambiente de desenvolvimento ou diretamente em um navegador:

O código pode ser executado diretamente em qualquer ambiente JavaScript ou incluído em um arquivo HTML com a tag <script>.

3. Veja o resultado no console do navegador:

Abra o console de desenvolvimento do seu navegador (pressionando F12 ou Ctrl+Shift+I) e veja as saídas no console.
