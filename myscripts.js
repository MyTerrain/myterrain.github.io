function calculateCost() {
    const area = document.getElementById("area").value;
    const cost = (area / 25) * 20;
    document.getElementById("result").innerHTML = "Cost: $" + cost.toFixed(2);


    if(((area / 25) * 20)  <=0)
    {
        console.log("");
        document.getElementById("recommend").innerText = "";
    }
   else if(((area / 25) * 20) <= 300)
    {
        console.log("Small");
        document.getElementById("recommend").innerText = "Small Package";
    }
    else if(((area / 25) * 20) <=1000){
        console.log("Medium");
        document.getElementById("recommend").innerText = "Medium Package";
    }
    else{
        console.log("Large");
        document.getElementById("recommend").innerText = "Larg Package";
    }


}



function updateForm(){
    
    //hide all input

    document.getElementById("id_inputs_circle").hidden = true;
    document.getElementById("id_inputs_square").hidden = true;
    document.getElementById("id_inputs_rectangle").hidden = true;
    document.getElementById("id_inputs_triangle").hidden = true;

    //get selected shape and show it to input

    let shape = document.getElementById("id_shapes").value;
    switch (shape) {
        case "circle": 
            document.getElementById("id_inputs_circle").hidden = false;
            break;
        case "rectangle":
            document.getElementById("id_inputs_rectangle").hidden = false;
            break;
        case "square":
            document.getElementById("id_inputs_square").hidden = false;
            break;
        case "triangle":
            document.getElementById("id_inputs_triangle").hidden = false;
            break;
    }
}//end of updateForm

function calculateArea(){

    //get selected shape
    let shape = document.getElementById("id_shapes").value;

    //calculate shape area
    let area = 0;
    switch(shape){
        case "circle":
            let radius = document.getElementById("id_radius").value;
            area = Math.PI * radius * radius;
            break;
        case "square":
            let side = document.getElementById("id_side").value;
            area = side * side;
            break;
        case "rectangle":
            let length = document.getElementById("id_length").value;
            let width = document.getElementById("id_width").value;
            area = length * width;
            break;
        case "triangle":
            let base = document.getElementById("id_base").value;
            let height = document.getElementById("id_height").value;
            area = base * height/2;
            break;

    }

    //output the area
    document.getElementById("id_output").innerHTML = "Area = " + area + " sq.ft";
    document.getElementById("area").value = area;
    document.getElementById("result").value = calculateCost();
    console.log("Worked");

}




