const connection = require('../config/connection')

module.exports = app => {
    app.get('/', (req, res) => {
        const sql = "SELECT data FROM messages"

        connection.query(sql, (error, result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(result)
            }
        })
    })
}
