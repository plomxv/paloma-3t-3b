const url = 'https://raw.githubusercontent.com/pmatjayme/api/refs/heads/main/paloma.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = 'Você sabia que no 3B tem <span>${dados.Solteiro} pessoas solteiras,</span> <span>${Namorando} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${Enrolado} horas</span> e <span>${Fundo do Poço} minutos</span> conectadas.<br>Isso significa que aproximadamente <span>${Casado}%</span> de pessoas estão conectadas em alguma rede social.'

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
