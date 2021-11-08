

let visitante = prompt('Olá, qual seu nome?')

let nome_visitante = document.getElementById('nomeVisitante');

nome_visitante.innerHTML = `Olá ${visitante.toUpperCase()}`;


