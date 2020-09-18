const authors = require('../controllers/authors')

module.exports = function(app, path){
    app.get('/', (req, res) =>{

    })

    app.get('/author', (req, res) => {
        authors.all_authors(req, res)
    })

    app.get('/author/:id', (req, res) => {
        authors.one_author(req, res)
    })

    app.post('/author', (req, res) => {
        authors.add_author(req, res)
    })

    app.put('/author/:id', (req, res) =>{
        authors.edit_author(req, res)
    })

    app.delete('/author/:id', (req, res) => {
        authors.delete_author(req, res)
    })

    app.post('/reaction/:id', (req, res) =>{
        authors.add_reaction(req, res)
    })
    app.all('*', (req, res) =>{
        res.sendFile(path + '/index.html')
    })
}
