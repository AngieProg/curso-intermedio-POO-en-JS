console.log("Hello, POO en JS Intermedio");

const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    
    addCourse(newCourse){
        // console.log("This", this);
        // console.log("this.approvedCourses", this.approvedCourses); 
        this.approvedCourses.push(newCourse);
    }
};
//Lista sus keys
// console.log(Object.keys(juan));
// //Lista sus keys
//console.log(Object.getOwnPropertyNames(juan));
// //Es un array de arrays [key,value]
//console.log(Object.entries(juan));

//Enumerable: false --> hace que nuestra propiedad no aparezca cuando listamos por ejemplo con Object.keys pero si en Object.getOwnPropertyNames
Object.defineProperty(juan, "navigator", {
    value: "Chrome",
    enumerable: false,
    writable: true,
    configurable: true,
});

//Writable:false --> No permite editar las propiedades. 
Object.defineProperty(juan, "editor", {
    value: "VSCode",
    enumerable: true,
    writable: false,
    configurable: true,
});

//Configurable: false --> impide que podamos borrar propiedades de nuestros objetos 
Object.defineProperty(juan, "terminal", {
    value: "WSL",
    enumerable: true,
    writable: true,
    configurable: false,
});

Object.defineProperty(juan, "PruebaNASA", {
    value: "Extraterrestres",
    enumerable: false,
    writable: false,
    configurable: false,
});

console.log(Object.getOwnPropertyDescriptors(juan));
//Object.seal: Nos ayudan a evitar que mis propiedades dse puedan borrar (configurable: false)
Object.seal(juan);
//Object.freeze: (configurable: false - writable: false)No se pueden borrar ni tampoco editarlas
Object.freeze(juan);