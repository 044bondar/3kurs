import * as readline from "readline";

type IceCreamSize = "small" | "large";
type IceCreamTopping = "chocolate" | "caramel" | "berries";

function calculateIceCreamCost(
    size: IceCreamSize,
    toppings: IceCreamTopping[],
    marshmallow: boolean
): number {
    let total = size === "small" ? 10 : 25;

    const toppingPrices: Record<IceCreamTopping, number> = {
        chocolate: 5,
        caramel: 6,
        berries: 10
    };

    for (const topping of toppings) {
        if (toppingPrices[topping]) {
            total += toppingPrices[topping];
        }
    }

    if (marshmallow) {
        total += 5;
    }

    return total;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Оберіть розмір (small / large): ", (sizeInput) => {
    const size = sizeInput.trim().toLowerCase() as IceCreamSize;

    rl.question("Оберіть начинки через кому (chocolate, caramel, berries): ", (toppingInput) => {
        const toppings = toppingInput
            .split(",")
            .map(t => t.trim().toLowerCase()) as IceCreamTopping[];

        rl.question("Додати маршмелоу? (так / ні): ", (marshInput) => {
            const hasMarshmallow = marshInput.trim().toLowerCase() === "так";

            const finalPrice = calculateIceCreamCost(size, toppings, hasMarshmallow);
            console.log(`\n Загальна вартість вашого морозива: ${finalPrice} грн`);
            rl.close();
        });
    });
});