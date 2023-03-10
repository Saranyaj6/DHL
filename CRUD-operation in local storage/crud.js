
var row=null;

function save()
{
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var phone=document.getElementById('phone').value;
    var email=document.getElementById('email').value;
    
    var e_arr=[fname,lname,phone,email];

    var readData=getData(e_arr);

    if(row==null){
        insert(readData);
        msg.innerHTML="Data Inserted";
    }

    else{
    update();
    msg.innerHTML="Data Updated";
    }

    
}


function getData(e_arr){
    
     var json_data={
        first_name: e_arr[0],
        Last_name:e_arr[1],
        phone_no:e_arr[2],
        email_id:e_arr[3]
    }

    var datas=JSON.stringify(json_data);
    localStorage.setItem(e_arr[0],datas);

   // var n=localStorage.setItem("fname",e_arr[0]);
   // var i=localStorage.setItem("lname",e_arr[1]);
   // var d=localStorage.setItem("phone",e_arr[2]);
   // var e=localStorage.setItem("email",e_arr[3]);

    var get_n=localStorage.getItem(e_arr[0]);
    //var get_i=localStorage.getItem("lname");
    //var get_d=localStorage.getItem("phone");
   // var get_e=localStorage.getItem("email");
   const myData = JSON.parse(get_n);
   const a=myData['first_name'];
   const b=myData['last_name'];
   const c=myData['phone_no'];
   const d=myData['email_id'];

    var get_arr=[a,b,c,d];

    return(get_arr);
}


function insert(readData){
    var table=document.getElementById('tab')
    var row=table.insertRow();
    row.insertCell(0).innerHTML=readData[0];
    row.insertCell(1).innerHTML=readData[1];
    row.insertCell(2).innerHTML=readData[2];
    row.insertCell(3).innerHTML=readData[3];
    row.insertCell(4).innerHTML=`<button onclick=edit(this)>Edit</button>
                                 <button onclick=remove(this)>Delete</button>`;
    
    
}

function edit(td){
    row=td.parentElement.parentElement;
    document.getElementById("fname").value=row.cells[0].innerHTML;
    document.getElementById("lname").value=row.cells[1].innerHTML;
    document.getElementById("phone").value=row.cells[2].innerHTML;
    document.getElementById("email").value=row.cells[3].innerHTML;
}

function update(){
    row.cells[0].innerHTML=document.getElementById("fname").value;
    row.cells[1].innerHTML=document.getElementById("lname").value;
    row.cells[2].innerHTML=document.getElementById("phone").value;
    row.cells[3].innerHTML=document.getElementById("email").value;
    row=null;
}

function remove(td){
    var prompt=confirm("Continue deleting?")
    if(prompt==true){
        var row=td.parentElement.parentElement;
        var n=document.getElementById("fname").value;
        localStorage.removeItem(n);
        document.getElementById("tab").deleteRow(row.rowIndex);
    }
}

// Call the loadData function when the page is loaded
window.addEventListener('load', loadData);

function loadData() {
  var table = document.getElementById('tab');
  table.innerHTML = '';
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var jsonData = JSON.parse(localStorage.getItem(key));
    var row = table.insertRow();
    row.insertCell(0).innerHTML = jsonData.first_name;
    row.insertCell(1).innerHTML = jsonData.Last_name;
    row.insertCell(2).innerHTML = jsonData.phone_no;
    row.insertCell(3).innerHTML = jsonData.email_id;
    row.insertCell(4).innerHTML = `<button onclick="edit(this)">Edit</button>
                                    <button onclick="remove(this)">Delete</button>`;
  }
}

function loadData() {
    var table = document.getElementById('tab');
    table.innerHTML = '';
    var headingRow = table.insertRow();
    headingRow.insertCell(0).innerHTML = "First Name";
    headingRow.insertCell(1).innerHTML = "Last Name";
    headingRow.insertCell(2).innerHTML = "Phone Number";
    headingRow.insertCell(3).innerHTML = "Email";
    headingRow.insertCell(4).innerHTML = "Actions";
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var jsonData = JSON.parse(localStorage.getItem(key));
      var row = table.insertRow();
      row.insertCell(0).innerHTML = jsonData.first_name;
      row.insertCell(1).innerHTML = jsonData.Last_name;
      row.insertCell(2).innerHTML = jsonData.phone_no;
      row.insertCell(3).innerHTML = jsonData.email_id;
      row.insertCell(4).innerHTML = `<button onclick="edit(this)">Edit</button>
                                      <button onclick="remove(this)">Delete</button>`;
    }
  }
  