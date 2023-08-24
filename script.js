let string = "";
let buttons = document.querySelectorAll(".button");

// Array.from(buttons).forEach((but)=>{
//     but.addEventListener("click", (e)=>{
//         if(e.target.innerHTML == "="){
//             string = eval(string);
//             document.querySelector("input").value = string;
//         }

//         else if(e.target.innerHTML == "C"){
//             string = "";
//             document.querySelector("input").value = string;
//         }

//         else{
//             string += e.target.innerHTML;
//             document.querySelector("input").value = string;
//         }
//     })
// })

for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){

            if(string.includes("×")){
               let newstr1 = string.replace("×", "*");

               document.querySelector("input").value = eval(newstr1);
            }

            else if(string.includes("÷")){
                let newstr3 = string.replace("÷", "/");

                document.querySelector("input").value = eval(newstr3);
            }

            else if(string.includes("^")){
                let newstr2 = string.replace("^","**");

                document.querySelector("input").value = eval(newstr2);
            }
            else{
                string = eval(string);
                document.querySelector("input").value = string;
            }
           
        }

        // else if(e.target.innerHTML == "X"){
        //     string += "*";
        //     document.querySelector("input").value  = string;
        // }

        // else if(e.target.innerHTML == "^"){
        //    string += "**";
        //    document.querySelector("input").value = string;
        // }

        else if(e.target.innerHTML == "C"){
            string = "";
            document.querySelector("input").value = string;
        }

        else if(e.target == buttons[2]){
            string = string.slice(0, -1);
            document.querySelector("input").value = string;
        }

        else{
            string += e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    })
}
