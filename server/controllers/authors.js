const {Author} = require('../models/author')



module.exports = {

    all_authors:(req, res)=>{
        Author.find({})
        .then(all_authors => {
            console.log('Here are all the author', all_authors)
            res.json(all_authors)
        })
        .catch(err => {
            console.log('Error when showing all authors', err)
            res.json(err)
        })
    },

    one_author:(req, res) => {
        Author.findOne({_id: req.params.id})
        .then(author => {
            console.log('Here is the one author', author)
            res.json(author)
        })
        .catch(err => {
            console.log('Error when showing a single authors', err)
            res.json(err)
        })
    },

    add_author:(req, res) => {
        console.log('Here is the req.body', req.body)
        const author = new Author()
        author.name = req.body.name
        author.save()
        .then(new_author => {
            console.log('here is the new author', new_author)
            res.json(new_author)
        })
        .catch(err => {
            console.log('Error when creating new author', err)
            res.json(err)
        })
    },

    edit_author:(req, res)=> {
        Author.findOne({_id: req.params.id})
        .then(author_to_update => {
            console.log('Here is the author to update', author_to_update)
            author_to_update.name = req.body.name
            author_to_update.save()
            .then(updated_author => {
                console.log('here is the Updated author', updated_author)
                res.json(updated_author)
            })
            .catch(err => {
                console.log('Error from updated author', err)
                res.json(err)
            })
        })
        .catch(err => {
            console.log('Error when editing author', err)
            res.json(err)
        })
    },

    delete_author:(req, res) => {
        Author.deleteOne({_id: req.params.id})
        .then(author_to_delete => {
            console.log('Here is the author to delete', author_to_delete)
            res.json(author_to_delete)
        })
        .catch(err => {
            console.log('Error when deleting author', err)
            res.json(err)
        })
    },    
}