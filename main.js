// alert("connected")
// const x = 99;
// const color = x > 10 ? "red" : "blue";
// switch(color){
//     case "red":
//     console.log("color is red")
//     break;
//     case "blue":
//     console.log("color is blue")
//     break;
//     default:
//     console.log("color is not red or blue")
//     break;
// }
//constructor object 
// class person {
//     constructor(firstname, lastname, dob) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.dob =new Date(dob);
//     }
// }
// const person1 = new person("john" , "mayowa" , "1-2-1998");
// const person2 = new person("mayowa" , " sowunmi", "15-6-2001")
// console.log(person2.dob)

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const submit = document.querySelector(".btn");
const msg = document.querySelector(".msg");

submit.addEventListener("click" , (e) =>{
    e.preventDefault();
    if (name.value === "" || email.value === "") {
        msg.classList.add("error")
        msg.innerHTML = " <h2>please input name or email</h2>";
        setTimeout(() => msg.remove() , 3000)
    }
    else{
        msg.classList.add("success")
        msg.innerHTML= " <h2>login succesful</h2>"
        setTimeout(() => msg.remove() , 3000)
        name.value = ""; 
        email.value = "";
    }
})