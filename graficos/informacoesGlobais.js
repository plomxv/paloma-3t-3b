const url = 'https://raw.githubusercontent.com/pmatjayme/api/refs/heads/main/paloma.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.Solteiro}</span> bilhões de pessoas e que aproximadamente <span>${dados.Namorando}</span> bilhões estão
    empregadas, sendo a taxa de desemprego de <span>${dados.Enrolado}</span> %. Por fim, por semana, trabalham em média <span>${dados.Fundo_poco}</span> horas e <span>${dados.Casado}</span> minutos.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()
