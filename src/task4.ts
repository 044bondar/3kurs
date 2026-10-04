interface Animal {
    name: string;
    speed?: number;           // Опціональна властивість (не всім тваринам потрібна точна швидкість)
    move(): void;             // Обов'язковий метод
    makeSound?(): void;       // Опціональний метод (риби звуків не видають)
}

class Cat implements Animal {
    constructor(public name: string, public speed?: number) {}

    move(): void {
        console.log(`${this.name} біжить на чотирьох лапах зі швидкістю ${this.speed ?? 15} км/год.`);
    }

    makeSound(): void {
        console.log(`${this.name} каже: Мяу!`);
    }
}

class Bird implements Animal {
    constructor(public name: string, public wingspan: number, public speed?: number) {}

    move(): void {
        console.log(`${this.name} летить у небі з розмахом крил ${this.wingspan} см.`);
    }

    makeSound(): void {
        console.log(`${this.name} щебече.`);
    }
}

class Fish implements Animal {
    constructor(public name: string) {}

    move(): void {
        console.log(`${this.name} пливе під водою за допомогою плавників.`);
    }
    // Метод makeSound не реалізуємо, оскільки він опціональний
}

const cat = new Cat("Барсик", 20);
const bird = new Bird("Ластівка", 30, 45);
const fish = new Fish("Окунь");

cat.move();
cat.makeSound?.();

bird.move();
bird.makeSound?.();

fish.move();