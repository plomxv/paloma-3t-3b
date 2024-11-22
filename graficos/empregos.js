async function empregos() {
    const url = 'https://raw.githubusercontent.com/pmatjayme/api/refs/heads/main/paloma.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeX = Object.keys (dados)
    const empregos = Object.values (dados)

    const data = [
        {
            x: nomeX,
            y: empregos,
            type: 'bar'
        }
    ]

        const grafico = document.createElement('div')
        grafico.className = 'grafico'
        document.getElementById('graficos-container').appendChild(grafico)

        Plotly.newPlot(grafico, data)
        
    console.log(dados)
}

empregos()