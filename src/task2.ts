// 1. Оголошення базових типів
let studentName: string = "Богдан";
let studentAge: number = 20;
let isEnrolled: boolean = true;
let customData: any = "Початковий текст";
customData = 12345; // any дозволяє змінювати тип значення

console.log("--- Базові змінні ---");
console.log(`Ім'я: ${studentName}, Вік: ${studentAge}, Навчається: ${isEnrolled}, any-дані: ${customData}`);

// 2. Масиви
let languages: string[] = ["TypeScript", "JavaScript", "C#", "Python"];
let marks: number[] = [95, 87, 91, 100];

console.log("\n--- Масиви ---");
console.log("Мови програмування:", languages);
console.log("Оцінки:", marks);

// 3. Функція з параметром за замовчуванням
function repeatMessage(message: string, count: number = 1): void {
    console.log(`\nВивід повідомлення (${count} раз(и)):`);
    for (let i = 0; i < count; i++) {
        console.log(`${i + 1}: ${message}`);
    }
}

// Виклик зі значенням за замовчуванням
repeatMessage("Привіт, світ!");

// Виклик із переданим значенням
repeatMessage("Лабораторна з TypeScript", 3);