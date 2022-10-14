const controller = {};

// funcion para poder listar los datos en la tabla 
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM info', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('customers', {
        data: customers
     });
    });
  });
};

// funcion save donde se aguardar un nuevo registro
controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO info set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/');
    })
  })
};

// funcion edit donde se puede editar los datos de un registro
controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM info WHERE id = ?", [id], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE info set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/');
  });
  });
};


// funcion eliminar registro
controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM info WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
