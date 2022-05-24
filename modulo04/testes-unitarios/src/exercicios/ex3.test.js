import { idText, isExpressionWithTypeArguments } from "typescript";
import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    it("retorna true para [1, 2 ,1]", ()=>{
        const numerosDuplicados=checaItensDuplicados([1, 2 ,1]);
        expect(numerosDuplicados).toEqual(true);
    })
    it("retorna true para [1, 2, 3]", ()=>{
        const numerosDuplicados=checaItensDuplicados([1, 2, 3]);
        expect(numerosDuplicados).toEqual(false);
    })
});
