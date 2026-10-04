interface Payable {
    pay(): void;
}

abstract class Employee {
    constructor(
        public name: string,
        public age: number,
        public salary: number
    ) {}

    abstract getAnnualBonus(): number;
}

class Developer extends Employee implements Payable {
    getAnnualBonus(): number {
        return this.salary * 0.10; // 10%
    }

    pay(): void {
        console.log(`Виплата з/п розробнику ${this.name}: ${this.salary} грн`);
    }
}

class Manager extends Employee implements Payable {
    getAnnualBonus(): number {
        return this.salary * 0.20; // 20%
    }

    pay(): void {
        console.log(`Виплата з/п менеджеру ${this.name}: ${this.salary} грн`);
    }
}

const staff: Employee[] = [
    new Developer("Олексій", 24, 55000),
    new Developer("Тетяна", 27, 70000),
    new Manager("Сергій", 38, 90000)
];

let totalBonuses = 0;

staff.forEach(emp => {
    const bonus = emp.getAnnualBonus();
    totalBonuses += bonus;
    console.log(`${emp.name} (З/П: ${emp.salary} грн) -> Річний бонус: ${bonus} грн`);
});

console.log(`\nЗагальна сума бонусів: ${totalBonuses} грн`);