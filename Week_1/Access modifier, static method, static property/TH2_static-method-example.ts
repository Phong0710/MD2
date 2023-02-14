class Instructor {
     _name: string;
     _role: string;

    constructor(name: string, role: string = "assistant") {
        this._role = role;
        this._name = name;
    }

    getname(): string {
        return this._name;
    }

    getrole(): string {
        return this._role;
    }

    renderDetails() {
        console.log(`${this._name}-${this._role}`);
    }

    static helloWorld() {
        console.log('Hi there')
    }

    static canTeach(intruction) {
        return (intruction.getrole() === 'classroom');
    }
}

let juniorInstruction = new Instructor('Brian');
let seniorInstruction = new Instructor('Alice', 'classroom');
juniorInstruction.renderDetails();
seniorInstruction.renderDetails();
Instructor.helloWorld();
console.log(`${juniorInstruction.getname()} can teach: ${Instructor.canTeach(juniorInstruction)}`)
console.log(`${seniorInstruction.getname()} can teach: ${Instructor.canTeach(seniorInstruction)}`)