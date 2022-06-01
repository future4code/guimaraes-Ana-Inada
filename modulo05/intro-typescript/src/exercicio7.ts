function rna(dna:string){
    dna.replace("A","U")
    dna.replace("T","A")
    dna.replace("G","C")
    dna.replace("G","C")
    return dna
}
console.log(rna("ATTGCTGCGCATTAACGACGCGTA"))