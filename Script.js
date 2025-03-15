let uname        = document.getElementById('uname');
let upassword    = document.getElementById('upassword');
const modal = document.querySelector('#my-modal');
const closeBtn = document.querySelector('.close');
const userArr = [];

function login(){

    console.log(uname);
    
    if (uname.value === "" || upassword.value === "") {
        alert('Please fill in both the username and password.');
        emptyValue()
        return;
    }

    if(uname.value === 'Tharun'){
        if(upassword.value === 'html123'){
            window.location.href='mainpage.html';
            userNamedisplay();
            console.log(userNamedisplay());
        } else {
            document.getElementById('wrongPassword').style.display='block';
            emptyValue()
            setTimeout(() => {
                document.getElementById('wrongPassword').style.display='none';
        }   , 3000);
        }
    } else {
        document.getElementById('wrongUser').style.display='block';
        emptyValue()
        setTimeout(() => {
            document.getElementById('wrongUser').style.display='none';
        }, 3000);
    }
}

function emptyValue(){
    uname.value='';
    upassword.value='';
}

function viewPassword(){
    upassword.type=upassword.type==="password"?"text":"password";
}

function userNamedisplay(){
    const userName = {
        Username: uname.value,
        firstLetter: uname.value.charAt(0)
    };

    userArr.push(userName);

    const loginContainer = document.querySelector(".user-info");

    const loginElement = document.createElement("section");
    loginElement.classList.add("loginItem");

    loginElement.innerHTML=`
        <section class="profile-pic">${Username.firstLetter}</section>
        <span class="mainUsername">${userName.Username}</span>
    `;

    loginContainer.appendChild(loginElement);
}
/*------------------------------------tharun.html------------------------------------*/

const toggleButton = document.getElementById('toggle-btn');
const sidebar      = document.getElementById('sidebar');
const navbar       = document.getElementById("navbarContainer");

//Side Bar Action
function openSidenav(){
    document.getElementById("mySidenav").style.width="250px";
}

function closeSidenav(){
    document.getElementById("mySidenav").style.width="0";
}

function showContent(id) {
    // Hide all sections
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
        section.style.display = "none"; // Hide all sections
    });

    // Show the selected section
    document.getElementById(id).classList.add('active');
    document.getElementById(id).style.display = "flex"; // Show selected section

    // Keep the "All Tasks 🎯" title always visible
    if (id === "completedTasks") {
        document.querySelector(".Tasktitle").style.display = "none";
    } else {
        document.querySelector(".Tasktitle").style.display = "block";
    }
}


//Date Popup
function dateClick(){
    document.querySelector(".datePopup").style.display = "block";
}

document.querySelector(".close-btn").addEventListener("click", function() {
    document.querySelector(".datePopup").style.display = "none";
});

//Priority Popup
function priorityClick(){
    document.querySelector(".priorityPopup").style.display = "block";
}

document.querySelectorAll(".close-btn").forEach(button => {
    button.addEventListener("click", function() {
        this.closest(".priorityPopup").style.display = "none"; // Closes the specific popup
    });
});

//Add Popup
function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}
  
function outsideClick(e) {
    if (e.target == modal) {
    modal.style.display = 'none';
    }
}
window.addEventListener('click', outsideClick);


const arrAddtask = [];

// Task Insertion
function addTask() {
    const values = {
        title: document.querySelector(".textInput").value,
        desc: document.querySelector(".textAreainput").value,
        date: document.querySelector(".dateInput").value,
        priority: document.querySelector(".form-select").value
    };

    // Push task to array
    arrAddtask.push(values);

    // Select task container
    const taskContainer = document.querySelector("#taskList");

    // Create task element
    const taskElement = document.createElement("section");
    taskElement.classList.add("taskItem");

    taskElement.innerHTML = `
        <article class="myTaskcontent">
            <section class="taskUppercontent">                      
                <section class="taskCheckbox">
                    <input type="checkbox" id="customCheckbox">
                    <label for="customCheckbox"></label>
                </section>
                
                <section class="taskDetails">
                    <span class="taskTitle">${values.title}</span>
                </section>
                
                <section class="options">
                    <button type="button" aria-label="Edit"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button type="button" aria-label="Delete" onclick="deleteTask(this)"><i class="fa-solid fa-trash"></i></button>
                </section>
            </section>
                              
        </article>
    `;

    // Append task to container
    taskContainer.appendChild(taskElement);

    // Clear input fields
    document.querySelector(".textInput").value = "";
    document.querySelector(".textAreainput").value = "";
    document.querySelector(".dateInput").value = "";
    document.querySelector(".form-select").value = "";

    closeModal(); // Close the modal after adding a task
}

// Function to delete a task
function deleteTask(button) {
    button.closest(".taskItem").remove(); // Remove the task item from DOM
}
