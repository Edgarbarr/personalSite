const models = require("../database/models.js")
const controllers = {
    getUsers: (req, res) => {
        models.getUsers()
        .then(data => {
            return res.send(data.rows)
        })
        .catch(err => res.send(err))
    },
    getUser: (req, res) => {
        models.getUser()
        .then(data => {
            return res.send(data.rows)
        })
        .catch(err => res.send(err))
    },
    postUser: (req, res) => {
        models.postUser()
        .then(data => {
            return res.send(data.rows)
        })
        .catch(err => res.send(err))
    },
    updateUser: (req, res) => {
        models.getUsers()
        .then(data => {
            return res.send(data.rows)
        })
        .catch(err => res.send(err))
    },
    deleteUser: (req, res) => {
        models.deleteUser()
        .then(data => {
            return res.send(data.rows)
        })
        .catch(err => res.send(err))
    },
}

module.exports = controllers;
