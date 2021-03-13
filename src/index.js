const config = require('./config/server')
const connection = require('./config/connection')

connection.connect(error => {
    if (error) { 
        console.log('Database connect error')
    } else {        
        const app = config()
        app.listen(8080, () => console.log('Server running on port 8080'))
    }
})
