import { Personagem } from "./model/types";

export const validateCharacter = (
  personagem: Personagem
): boolean | undefined => {
  if (personagem.defesa > 0 && personagem.força > 0 && personagem.vida > 0) {
    return true;
  }
  if (
    (!personagem.nome && personagem.defesa <= 0) ||
    personagem.força <= 0 ||
    personagem.vida <= 0 ||
    personagem.defesa <= 0
  ) {
    return false;
  }
};

export const performAttack = (ataque: Personagem, defesa: Personagem) => {
  if (!validateCharacter(ataque) || !validateCharacter(defesa)) {
    throw new Error("Personagem inválido!");
  }
  if (defesa.defesa < ataque.força) {
    defesa.vida -= ataque.força = defesa.defesa;
  }
};
