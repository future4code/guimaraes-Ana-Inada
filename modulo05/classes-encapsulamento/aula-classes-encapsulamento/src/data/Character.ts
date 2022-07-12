// type Character = {
//     id: string, 
//     name: string, 
//     team: string, 
//     age: number
// }

export class Character {
    private id: string
    private name: string
    private team: string
    private age: number

    constructor(id: string, name: string, team: string, age: number) {
        this.id = id,
        this.name = name,
        this.team = team,
        this.age = age
    }

    public getId():string {
        return this.id
    }

    public getName():string {
        return this.name
    }

    public getTeam():string {
        return this.team
    }

    public getAge():number{
        return this.age
    }
}



