enum Patente {
  FERRO = "Ferro",
  BRONZE = "Bronze",
  PRATA = "Prata",
  OURO = "Ouro",
  PLATINA = "Platina",
  ASCENDENTE = "Ascendente",
  IMORTAL = "Imortal",
  RADIANTE = "Radiante"
}

const patentes = [
  { limiteInferior: 10001, nome: Patente.RADIANTE },
  { limiteInferior: 9001, nome: Patente.IMORTAL },
  { limiteInferior: 8001, nome: Patente.ASCENDENTE },
  { limiteInferior: 7001, nome: Patente.PLATINA },
  { limiteInferior: 5001, nome: Patente.OURO },
  { limiteInferior: 2001, nome: Patente.PRATA },
  { limiteInferior: 1001, nome: Patente.BRONZE },
  { limiteInferior: 0, nome: Patente.FERRO },
];

function nivelHeroi(nome: string, xp: number): string {
  for (const patente of patentes) {
      if (xp >= patente.limiteInferior) {
          return `O herói de nome ${nome} está no nível de ${patente.nome}`;
      }
  }
  return `XP inválido para o herói ${nome}.`;
}

console.log(nivelHeroi("Matheus", 8001)); //Poder de luta de +8.000?!! 

