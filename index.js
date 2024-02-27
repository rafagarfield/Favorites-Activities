class Course{
    constructor(id,name,question,image){
        this.id = id;
        this.name = name;
        this.question = question;
        this.image = image;

    }
}

class Repository {
    constructor(){
        this.courses= [];
        this.id= 0;

    }

    getAllCourses() {
        return this.courses
    }

    createCourses(name,question,image){
        this.id++;
        const course= new Course(this.id, name ,question,image);
        this.courses.push(course);

    }
    deleteCourses(id){
        this.courses=this.courses.filter(coursess => coursess.id !== id);
    }
}

/* const repo1= new Repository();
repo1.createCourses("mate","1+1=2","www.exambhhhple.com");
repo1.createCourses("mate","1+1=2","www.exambhhhple.com");
repo1.createCourses("mate","1+1=2","www.exambhhhple.com");
repo1.createCourses("mate","1+1=2","www.exambhhhple.com");
repo1.createCourses("mate","1+1=2","www.exambhhhple.com");
repo1.createCourses("mate","1+1=2","www.exambhhhple.com");
repo1.createCourses("mate","1+1=2","www.exambhhhple.com");


console.log(repo1.deleteCourses(2));
console.log(repo1.getAllCourses()); */

function cardGenerator(courses) {
    const {id, name, description, image} = courses;

    const card=document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3 class="card-title">${name}</h3>
        <p class="card-text">${description}</p>
        <img src=${image} class="card-img-top" alt="...">
    `;
    return card
}
 
