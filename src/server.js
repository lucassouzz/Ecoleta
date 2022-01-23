const express = require("express")
const server = express()

//importando o banco
const db = require("./database/db")

// Configurar pasta publica
server.use(express.static("public"))

//Utilizar req.body()
server.use(express.urlencoded({ extended: true}))

// Template Engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


// Configurar rotas
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {



    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items

    ]

    function afterInsertDate(err) {
        if(err){
            console.log(err)
            return res.send("Erro no cadastro!")
        }

        console.log("Cadastrado com sucesso.")
        console.log(this)

        return res.render("create-point.html", { saved: true })
    }
    
    db.run(query, values, afterInsertDate)
    
})

server.get("/search", (req, res) => {
    
    const search = req.query.search

    let querySelect = ''
    if(search == ''){
        querySelect = 'SELECT * FROM places'
    } else {
        querySelect = `SELECT * FROM places WHERE city LIKE '%${search}%'`
    }

    db.all(querySelect, function (err, rows) {
        if (err) {
            return console.log(err)
        }
        console.log(rows)
        const total = rows.length
        return res.render("search-results.html", { places : rows, total})
    })
})

// Iniciar o servidor
server.listen(3000)