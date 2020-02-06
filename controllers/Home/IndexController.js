var sql = require("../../db/db.js");

module.exports = {
  async login(req, res) {
    const { email_or_tel, password } = req.body;

    if (/^\d+$/.test(email_or_tel) === true) {
      query = `CALL login_by_telephone_or_email('${email_or_tel}', '', '${password}')`;
    } else {
      query = `CALL login_by_telephone_or_email('', '${email_or_tel}', '${password}')`;
    }

    sql.query(`${query}`, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result[0].length > 0) {
          sql.query(
            `CALL get_all_dependent_for_patient(${result[0][0].id})`,
            (err, dependent) => {
              return res.json({
                data: result[0][0],
                datadependent: dependent[0][0]
              });
            }
          );
        } else {
          return res.json({ error: "Login ou senha inválida." });
        }
      }
    });
  }
};
