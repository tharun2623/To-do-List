let uname         = document.getElementById('uname');
let upassword     = document.getElementById('upassword');
const modal       = document.querySelector('#my-modal');
const closeBtn    = document.querySelector('.close');
const userArr     = [];
const arrUsers    = [];
const arrPassword = [];


//Login Details
function login(){
    
    if (uname.value === "" || upassword.value === "") {
        alert('Please fill in both the username and password.');
        emptyValue()
        return;
    }

    const userData = 
        [
            {userName: "Tharun",Password:"html123"},
            {userName: "Vishnu",Password:"Vishnu"},
            {userName: "Gowtham",Password:"Gowtham"},
            {userName: "Sanjay",Password:"Sanjay"},
            {userName: "Varun",Password:"Varun"}
        ]

    const user = userData.find(user => user.userName === uname.value.trim() && user.Password === upassword.value.trim());

    console.log(user);

    if(user){
        localStorage.setItem('User',JSON.stringify(user));
        console.log(localStorage.getItem('User'));
        window.location.href = 'mainpage.html';
    } else {
        document.getElementById('wrongUser').style.display = 'block';
        emptyValue();
        setTimeout(() => {
            document.getElementById('wrongUser').style.display = 'none';
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


/*------------------------------------tharun.html------------------------------------*/

const toggleButton = document.getElementById('toggle-btn');
const sidebar      = document.getElementById('sidebar');
const navbar       = document.getElementById("navbarContainer");


//Display the User name
function displayUserInfo(){
    const storedUser = JSON.parse(localStorage.getItem('User'));

    if (storedUser) {
        document.querySelector('.user-info').innerHTML = `
            <section class="profile-pic">${storedUser.userName.charAt(0).toUpperCase()}</section>
            <span class="mainUsername">${storedUser.userName}</span>
        `;
    }

}

//Side Bar Action
function openSidenav(){
    document.getElementById("mySidenav").style.width="250px";
}

function closeSidenav(){
    document.getElementById("mySidenav").style.width="0";
}

// Clear storage and goes back to Login page
function logOut() {
    localStorage.removeItem("User");
    window.location.href = "login.html"; // Redirect to the first page
}

//Showing the Content through Sections
function showContent(id) {   
   
    // Hide all sections
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
        section.style.display = "none"; 
    });

    // Show the selected section
    const selectedSection = document.getElementById(id);
    if (selectedSection) {
        selectedSection.classList.add('active');
        selectedSection.style.display = "block"; 
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

//Flat time picker
flatpickr("#timeInput", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
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

// Task Insertion
const arrAddtask = [];

function addTask() {
    const values = {
        title: document.querySelector(".textInput").value,
        desc: document.querySelector(".textAreainput").value,
        date: document.querySelector(".dateInput").value,
        time: document.querySelector(".timeInput").value,
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

    //Store it in a local storage
    localStorage.setItem('Tasks',JSON.stringify(arrAddtask));

    console.log(localStorage.getItem('Tasks'));

    // Clear input fields
    document.querySelector(".textInput").value = "";
    document.querySelector(".textAreainput").value = "";
    document.querySelector(".dateInput").value = "";
    document.querySelector(".timeInput").value = "";
    document.querySelector(".form-select").value = "";

    closeModal(); // Close the modal after adding a task
}

// Function to delete a task
function deleteTask(button) {
    button.closest(".taskItem").remove(); // Remove the task item from DOM
}


