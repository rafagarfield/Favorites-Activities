class Activity{
    constructor(id,title,description,imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;

    }
}

class Repository{
    constructor(){
        this.activities= [];
        this.id = 0;
    }

    getAllActivities(){
        return this.activities
    }

    createActivity(title, description,imgUrl){
        this.id++;
        const activity= new Activity(this.id,title, description,imgUrl);
        this.activities.push(activity);

    }

    deleteActivity(id){
        this.activities=this.activities.filter(activity=> activity.id !== id);
    }

}

const repository= new Repository();

/* repository.createActivity("leer","me gusta leer","www.leer.com");
repository.createActivity("leer","me gusta leer","www.leer.com");
repository.createActivity("leer","me gusta leer","www.leer.com");
repository.createActivity("leer","me gusta leer","www.leer.com");

console.log(repository.getAllActivities()); */


function cardGenerator(activity){
    const {id,title,description,imgUrl} = activity;
    const card= document.createElement("div");
    card.innerHTML=`
    <h3> ${title}  </h3>
    <p>${description}</p>
    <img src=${imgUrl}>`

    return card;
}

function getActivities(){

    const container=document.getElementById("container-card")

}