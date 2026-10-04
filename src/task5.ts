interface Shape {
    getArea(): number;
    getPerimeter(): number;
    scale(factor: number): void;
}

class Circle implements Shape {
    constructor(public radius: number) {}

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    scale(factor: number): void {
        this.radius *= factor;
    }
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    scale(factor: number): void {
        this.width *= factor;
        this.height *= factor;
    }
}

class Triangle implements Shape {
    constructor(public a: number, public b: number, public c: number) {}

    getPerimeter(): number {
        return this.a + this.b + this.c;
    }

    getArea(): number {
        // Формула Герона
        const p = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }

    scale(factor: number): void {
        this.a *= factor;
        this.b *= factor;
        this.c *= factor;
    }
}

// Демонстрація роботи
const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 8),
    new Triangle(3, 4, 5)
];

console.log("--- До масштабування ---");
let totalArea = shapes.reduce((sum, s) => sum + s.getArea(), 0);
let totalPerimeter = shapes.reduce((sum, s) => sum + s.getPerimeter(), 0);
console.log(`Загальна площа: ${totalArea.toFixed(2)}`);
console.log(`Загальний периметр: ${totalPerimeter.toFixed(2)}`);

// Збільшуємо всі фігури у 2 рази
shapes.forEach(s => s.scale(2));

console.log("\n--- Після масштабування (factor = 2) ---");
totalArea = shapes.reduce((sum, s) => sum + s.getArea(), 0);
totalPerimeter = shapes.reduce((sum, s) => sum + s.getPerimeter(), 0);
console.log(`Нова площа: ${totalArea.toFixed(2)}`);
console.log(`Новий периметр: ${totalPerimeter.toFixed(2)}`);