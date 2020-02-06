var sql = require("../../db/db.js");
module.exports = {
  async index(req, res) {
    sql.query("SELECT * FROM letters_from_speciality", (err, letters) => {
      if (err) {
        console.log(err);
      } else {
        sql.query("SELECT * FROM speciality_order_by", (err, specs) => {
          if (err) {
            console.log(err);
          } else {
            return res.json({ letters: letters, specs: specs });
          }
        });
      }
    });
  },
  async speciality(req, res) {
    var spec = req.query.speciality;
    sql.query(
      `CALL get_doctors_by_speciality_or_type('${spec}')`,
      (err, doctors) => {
        if (err) {
          console.log(err);
        } else {
          return res.json({ doctors: doctors });
        }
      }
    );
  }
};
