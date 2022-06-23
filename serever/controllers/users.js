import { v4 as uuid } from "uuid";
import { createPool } from 'mysql'



const pool = createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodejs',
})





export const login = (req, res) => {
  pool.getConnection((err, connection) => {

    const { name, email } = req.body
    console.log(name, email)
    connection.query('SELECT * from users Where Name = ? AND Email = ?', [email, name], (err, rows) => {
      connection.release()


      if (!err && rows.length === 1) {
        res.status(200).send({
          message: "Succesfuly login",
        });
      } else {
        res.status(400).send({
          message: "User not found ",
        });
      }
    })
  })
};

//add about
export const addAbout = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err
    const params = req.body
    connection.query('INSERT INTO about SET ?', params, (err, rows) => {
      connection.release()

      if (!err) {
        res.send(`About added`)
      } else {
        console.log(err)
      }
    })

  })
};


//about


export const about = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err
    connection.query('SELECT * from about', (err, rows) => {
      connection.release()

      if (!err) {
        res.send(rows)
      } else {
        console.log(err)
      }
    })

  })
};


//Single user

export const getUser = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err


    connection.query('SELECT * from users Where Id = ?', [req.params.id], (err, rows) => {
      connection.release()

      if (!err) {
        res.send(rows)
      } else {
        console.log(err)
      }
    })

  })
};

//All users

export const allUsers = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err
    connection.query('SELECT * from users', (err, rows) => {
      connection.release()

      if (!err) {
        res.send(rows)
      } else {
        console.log(err)
      }
    })

  })
};



// all posts

export const allPosts = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err
    connection.query('SELECT * from post', (err, rows) => {
      connection.release()

      if (!err) {
        res.send(rows)
      } else {
        console.log(err)
      }
    })

  })
};



//Delete user


export const removeUser = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err
    connection.query('DELETE from users WHERE id = ?', [req.params.id], (err, rows) => {
      connection.release()

      if (!err) {
        res.send(`User with  id ${[req.params.id]} has been deleted`)
      } else {
        console.log(err)
      }
    })

  })
};


//Add user

export const addUser = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err
    const params = req.body
    connection.query('INSERT INTO users SET ?', params, (err, rows) => {
      connection.release()

      if (!err) {
        res.send(`User with  name ${params.Name} has been added`)
      } else {
        console.log(err)
      }
    })

  })
};

//add post

export const addPost = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err
    const params = req.body
    connection.query('INSERT INTO post SET ?', params, (err, rows) => {
      connection.release()

      if (!err) {
        res.send(`Post has been added`)
      } else {
        console.log(err)
      }
    })

  })
};



//Update user

export const modernizeUser = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err

    const { Id, Name, Email, Contact } = req.body

    connection.query('UPDATE users SET Name = ?,Email = ?,Contact = ? WHERE Id= ?', [Name, Email, Contact, Id], (err, rows) => {
      connection.release()

      if (!err) {
        res.send(`User with  name ${Name} has been changed`)
      } else {
        console.log(err)
      }
    })

  })
};

