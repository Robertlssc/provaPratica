import conn from "../config/conn.js";

const tableEventos = /*sql*/ `
    CREATE TABLE IF NOT EXISTS eventos(
        evento_id VARCHAR(60) PRIMARY KEY
    )
`;

conn.query(tableEventos, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Tabela [evento] criada com sucesso");
});
