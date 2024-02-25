class Course {
    constructor(id, name, question, image) {
        this.id = id;
        this.name = name;
        this.question = question;
        this.image = image;
    }
}

class Repository {
    constructor() {
        this.courses = [];
        this.id = 0;
    }

    getAllCourses() {
        return this.courses;
    }

    createCourse( name, question, image) {
        this.id ++;
        const course = new Course(this.id, name, question, image);
        this.courses.push(course);
    }
}

const repo = new Repository(); // Creamos una instancia de Repository
repo.createCourse( "mate", "1+1=3", "www.google.com");
repo.createCourse( "mate", "1+1=3", "www.google.com");
repo.createCourse( "mate", "1+1=3", "www.google.com");
repo.createCourse( "mate", "1+1=3", "www.google.com");
repo.createCourse( "mate", "1+1=3", "www.google.com");
// Llamamos al método createCourse de la instancia de Repository

console.log(repo.getAllCourses()); // Para verificar si se creó el curso correctamente

