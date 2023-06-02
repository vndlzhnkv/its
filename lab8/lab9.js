class Employee {
    constructor({name, surname, baseSalary, experience}) {
        this.name = name
        this.surname = surname
        this.baseSalary  = baseSalary
        this.experience = experience
    }
    countedSalary() {
        if (this.experience > 2 && this.experience < 5) {return this.salary + 200;}
        if (this.exp >= 5) {return this.baseSalary  * 1.2 + 500;}
        return this.baseSalary ;
    }
}
class Developer extends Employee {
    constructor({name, surname, baseSalary, experience}) {
        super(name, surname, baseSalary, experience)
    }
}
class Designer extends Employee {
    constructor({name, surname, baseSalary, experience}) {
        super(name, surname, baseSalary, experience)
        this.effCoeff = params.effCoeff
    }
    countedSalary() {
        return (super.countedSalary() * this.effCoeff).toFixed(0);
    }
}

class Manager extends Employee {
    constructor({name, surname, baseSalary, experience}) {
        super(name, surname, baseSalary, experience)
        this.team = params.team
    }
    countedSalary() {
        let count = 0;
        let salary = super.countedSalary();
        for (let item of this.team) {
            if (item.constructor.name == "Developer")  count++;
        }
        if (this.team.length > 5 && this.team.length < 10) salary += 200;
        if (this.team.length >= 10 ) salary += 300;
        if (count > this.team.length / 2 ) salary *= 1.1;
        return salary.toFixed(0);
    }
}

class Department {
    constructor (params) {
        this.managers = params.managers
    }
    giveSalary(){
        this.managers.forEach(el => {
            console.log(`${el.name} ${el.surname} отримує ${el.countedSalary()}$`);
            managers.team.forEach(elem => {console.log(`${elem.name} ${elem.surname} отримує ${elem.countedSalary()}$`);});
        })
    }
}