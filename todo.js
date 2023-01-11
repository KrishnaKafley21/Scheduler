onload = todoMain;

function todoMain(){
  let 
      inputTime,
      inputCarrier,
      inputQty,
      button,
      ulElem;

  getElements();
  addListeners();

  function getElements(){
    button = document.getElementById("new-task-submit");
    inputTime = document.getElementById("inputTime");
    inputCarrier = document.getElementById("inputCarrier");
    inputQty = document.getElementById("inputQty");
    ulElem = document.getElementsByTagName("ul");

  }

  function addListeners(){ //button
    button.addEventListener("click", addEntry, false); 
  }

  function addEntry(event){
    

    let timeInputValue = inputTime.value;
    timeInputValue.value = "";

    let carrierInputValue = inputCarrier.value;
    carrierInputValue.value="";

    let qtyInputValue = inputQty.value;
    qtyInputValue.value = "";


    // add a new row
    let table = document.getElementById("todoTable");
    let trElem = document.createElement("tr");
    table.appendChild(trElem);


    let timeElem = document.createElement("td");
    timeElem.innerText = timeInputValue;
    trElem.appendChild(timeElem);


    let carrierElem = document.createElement("td");
    carrierElem.innerText = carrierInputValue;
    trElem.appendChild(carrierElem);

    let qtyElem = document.createElement("td");
    qtyElem.innerText = qtyInputValue;
    trElem.appendChild(qtyElem);
     updateSubTotal();


    let checkBoxElem = document.createElement("input");
    checkBoxElem.type = "checkbox";
    checkBoxElem.addEventListener("click",done, false);
    let tdElem1 = document.createElement("td");
    tdElem1.appendChild(checkBoxElem);
    trElem.appendChild(tdElem1);


    // delete cell
    let spanElem = document.createElement("span");
    spanElem.innerText = "delete";
    spanElem.className = "material-icons";


    //spanElem.className = "material-icons";
    spanElem.addEventListener("click", deleteItem, false);
    let tdElem4 = document.createElement("td");
    tdElem4.appendChild(spanElem);
    trElem.appendChild(tdElem4);


    function deleteItem(){
      trElem.remove();
      updateSubTotal();
    }
    function done(){
      trElem.classList.toggle("strike");    
    }

  }

}
function updateSubTotal(){

  var grid = document.getElementById("todoTable"), sumVal = 0;
          
  for(var i = 1; i < grid.rows.length; i++)
  {
      sumVal = sumVal + parseInt(grid.rows[i].cells[2].innerHTML);
  }
  
  document.getElementById("val").innerHTML = "Total Qty = " + sumVal;
  console.log(sumVal);

}
