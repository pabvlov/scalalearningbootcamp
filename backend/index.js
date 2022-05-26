
const axios = require('axios')
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
const port = 3001

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get('/api/search', async function(req, res) {
    axios.get(`https://api.mercadolibre.com/sites/MLC/search?q=${req.query.query}`)
    .then(resp => {
        
        let results = []
        resp.data.results.forEach((resultados) => {
            let obj = {
                id: resultados.id,
                title: resultados.title,
                price: resultados.price,
                currency_id: resultados.currency_id,
                available_quantity: resultados.available_quantity,
                thumbnail: "http://http2.mlstatic.com/D_NQ_NP_" + resultados.thumbnail_id + "-O.jpg"  ,
                condition: resultados.condition
            }
            results.push(obj)
        });
        
        res.json(results)
    }).catch(console.log)
})

app.listen(port, () => {
    console.log(`Servidor API Scala Learning escuchando puerto `+ port)
})