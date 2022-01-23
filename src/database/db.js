// Importando dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// Iniciar o objeto do bd
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//Utilizacao do banco de dados
// db.serialize(() => {
//     //Create table
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

    //Insert value
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `

    // const values = [
    //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80",
    //     "Colectoria",
    //     "Guilherme Gemballa, Jardim América",
    //     "Número 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduos Eletrônicos, Lâmpadas"
    // ]

    // function afterInsertDate(err) {
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso.")
    //     console.log(this)
    // }
    
    // db.run(query, values, afterInsertDate)
    
//     //Select
//     db.all(`SELECT * FROM places`, function (err, rows) {
//         if(err) {
//             return console.log(err)
//         }
//         console.log(rows)
//     })

    // Delete
//     db.run(`DELETE FROM places WHERE id = ?`, [5], function(err, rows){
//         if(err) {
//             return console.log(err)
//         }
//        console.log("Registro deletado com sucesso!")

//     })

// })