import conn from "../config/conn.js";

const tableParticipante = /*sql*/ `
    CREATE TABLE IF NOT EXISTS participantes(
        participante_id VARCHAR(60) PRIMARY KEY
    )
`;

conn.query(tableParticipante, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Tabela [participante] criada com sucesso");
});
