const db = require("./index.js");

const models = {
    getUsers: () => db.query("Select * from users"),
    getUser: (id) => db.query("Select * from users where id = $1", [id]),
    postUser: (user) => db.query("Insert into users(username, email, password, createdAt) values($1, $2, $3, $4)", [user.username, user.email, user.password]),
    updateUser: (update) => db.query("update users set $1 = $2", [update.column, update.value])
}
module.exports =models;