interface Course {
    courseName: string;
    durationHours: number;
    students: string[];
}

class OnlineCourse implements Course {
    public students: string[] = [];

    constructor(
        public courseName: string,
        public durationHours: number
    ) {}

    registerStudent(student: string): void {
        if (this.isStudentRegistered(student)) {
            console.log(`Увага: Студент ${student} вже зареєстрований на курс "${this.courseName}".`);
            return;
        }
        this.students.push(student);
        console.log(`Студента ${student} успішно зараховано на курс "${this.courseName}".`);
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}

class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
    }

    removeCourse(courseName: string): void {
        this.courses = this.courses.filter(c => c.courseName !== courseName);
        console.log(`Курс "${courseName}" було видалено.`);
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find(c => c.courseName.toLowerCase() === courseName.toLowerCase());
    }

    printAllCourses(): void {
        console.log("\n--- Список курсів та зареєстрованих студентів ---");
        this.courses.forEach(c => {
            const studentList = c.students.length > 0 ? c.students.join(", ") : "немає студентів";
            console.log(`Курс: ${c.courseName} (${c.durationHours} год.) | Студенти: ${studentList}`);
        });
    }
}

const manager = new CourseManager();

const courseTS = new OnlineCourse("TypeScript Advanced", 45);
const courseBack = new OnlineCourse("Backend на Node.js", 60);

courseTS.registerStudent("Богдан");
courseTS.registerStudent("Ольга");
courseTS.registerStudent("Богдан"); // спроба дублювання

courseBack.registerStudent("Андрій");

manager.addCourse(courseTS);
manager.addCourse(courseBack);

manager.printAllCourses();

const found = manager.findCourse("TypeScript Advanced");
console.log(`\nЗнайдено курс: ${found ? found.courseName : "не знайдено"}`);