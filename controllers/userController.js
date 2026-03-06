//SQL
const connection = require("../config/db");
//get all users
exports.getAllEnrollment = (req, res) => {
  connection.query("SELECT * FROM enrollments", (err, rows, fields) => {
    if (err) throw err;
    res.json(rows);
  });
};

//search a user by id
exports.getEnrollmentById = (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM enrollments WHERE id=?",
    [id],
    (err, rows, fields) => {
      if (err) throw err;
      res.json(rows);
    },
  );
};

// search a user by last name
exports.getEnrollmentByName = (req, res) => {
  const productName = req.params.productName;
  connection.query(
    "SELECT * FROM enrollments WHERE productName=?",
    [productName],
    (err, rows, fields) => {
      if (err) throw err;
      res.json(rows);
    },
  );
};

exports.createEnrollment = (req, res) => {
  const { id, productName, category, stockCount, locationCode, lastUpdated } =
    req.body;
  connection.query(
    "INSERT INTO enrollments (id, productName, category, stockCount, locationCode, lastUpdated) VALUES (?, ?, ?, ?, ?,?)",
    [id, productName, category, stockCount, locationCode, lastUpdated],
    (err, result) => {
      if (err) throw err;
      res.json({
        message: "Enrollment created successfully",
        userId: result.insertId,
      });
    },
  );
};


