abstract class Car {
    public brand: string;
    protected year: number;
    private vinCode: string;

    constructor(brand: string, year: number, vinCode: string) {
        this.brand = brand;
        this.year = year;
        this.vinCode = vinCode;
    }

    // Абстрактний метод, який кожен нащадок реалізує сам
    abstract showDetails(): void;

    // Метод для надання доступу до приватного поля нащадкам
    protected getVin(): string {
        return this.vinCode;
    }
}

class Volkswagen extends Car {
    public model: string;
    private engineCapacity: number;

    constructor(model: string, year: number, vinCode: string, engineCapacity: number) {
        super("Volkswagen", year, vinCode);
        this.model = model;
        this.engineCapacity = engineCapacity;
    }

    showDetails(): void {
        console.log(`[VW] ${this.brand} ${this.model} (${this.year}), Двигун: ${this.engineCapacity}L, VIN: ${this.getVin()}`);
    }
}

class BMW extends Car {
    public model: string;
    public driveType: string;

    constructor(model: string, year: number, vinCode: string, driveType: string) {
        super("BMW", year, vinCode);
        this.model = model;
        this.driveType = driveType;
    }

    showDetails(): void {
        console.log(`[BMW] ${this.brand} ${this.model} (${this.year}), Привід: ${this.driveType}, VIN: ${this.getVin()}`);
    }
}

class Audi extends Car {
    public model: string;
    private isQuattro: boolean;

    constructor(model: string, year: number, vinCode: string, isQuattro: boolean) {
        super("Audi", year, vinCode);
        this.model = model;
        this.isQuattro = isQuattro;
    }

    showDetails(): void {
        console.log(`[Audi] ${this.brand} ${this.model} (${this.year}), Quattro: ${this.isQuattro}, VIN: ${this.getVin()}`);
    }
}

// По 2 екземпляри кожного класу
const vw1 = new Volkswagen("Passat B8", 2018, "WVWZZZ3CZJE111111", 2.0);
const vw2 = new Volkswagen("Golf 7", 2016, "WVWZZZAUZGW222222", 1.4);

const bmw1 = new BMW("3 Series (G20)", 2020, "WBA33AY05L333333", "RWD");
const bmw2 = new BMW("M5 (F90)", 2021, "WBSJF01090444444", "AWD");

const audi1 = new Audi("A4 B9", 2019, "WAUZZZF45K555555", true);
const audi2 = new Audi("A6 C8", 2022, "WAUZZZF28N666666", true);

const garage: Car[] = [vw1, vw2, bmw1, bmw2, audi1, audi2];
garage.forEach(car => car.showDetails());