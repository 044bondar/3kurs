interface LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    borrow(): void;
}

class Book implements LibraryItem {
    public isBorrowed: boolean = false;

    constructor(
        public title: string,
        public author: string,
        public pagesCount: number
    ) {}

    borrow(): void {
        this.isBorrowed = true;
    }
}

class Magazine implements LibraryItem {
    public isBorrowed: boolean = false;

    constructor(
        public title: string,
        public author: string,
        public issueNumber: number
    ) {}

    borrow(): void {
        this.isBorrowed = true;
    }
}

class DVD implements LibraryItem {
    public isBorrowed: boolean = false;

    constructor(
        public title: string,
        public author: string,
        public durationMinutes: number
    ) {}

    borrow(): void {
        this.isBorrowed = true;
    }
}

class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find(item => item.title.toLowerCase() === name.toLowerCase());
    }

    listAvailableItems(): void {
        console.log("\n--- Доступні матеріали в бібліотеці ---");
        const available = this.items.filter(item => !item.isBorrowed);
        if (available.length === 0) {
            console.log("Немає доступних матеріалів.");
            return;
        }
        available.forEach(item => {
            console.log(`- "${item.title}" (Автор/Видавець: ${item.author})`);
        });
    }
}

const myLibrary = new Library();

const book = new Book("Чистий Код", "Роберт Мартін", 464);
const mag = new Magazine("Forbes", "Forbes Media", 120);
const dvd = new DVD("Інтерстеллар", "Крістофер Нолан", 169);

myLibrary.addItem(book);
myLibrary.addItem(mag);
myLibrary.addItem(dvd);

console.log("До того, як взяли книгу:");
myLibrary.listAvailableItems();

// Беремо книгу читати
book.borrow();

console.log("\nПісля видачі книги:");
myLibrary.listAvailableItems();