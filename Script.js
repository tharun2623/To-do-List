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

//Priority Popup
function priorityClick(){
    document.querySelector(".priorityPopup").style.display = "block";
}

document.querySelectorAll(".close-btn").forEach(button => {
    button.addEventListener("click", function() {
        this.closest(".priorityPopup").style.display = "none"; // Closes the specific popup
    });
});

//Time picker
let selectedHour = "";
let selectedMinute = "";

document.addEventListener("DOMContentLoaded", function() {
    let timeInput = document.getElementById('timeInput');

    let currentTime = new Date();
    let formattedTime = currentTime.getHours().toString().padStart(2, '0') + ':' + currentTime.getMinutes().toString().padStart(2, '0');

    // Set default value in input field
    timeInput.value = formattedTime;

    // Initialize Flatpickr
    flatpickr("#timeInput", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
        defaultDate: formattedTime,
        allowInput: true,  // Allow manual typing
        onClose: function(selectedDates, dateStr, instance) {
            validateTimeInput();
        },
        onChange: function(selectedDates, dateStr, instance) {
            [selectedHour, selectedMinute] = dateStr.split(':');
            console.log("Stored Hour:", selectedHour);
            console.log("Stored Minute:", selectedMinute);
        }
    });

    // Function to validate typed input
    function validateTimeInput() {
        let typedTime = timeInput.value.trim();
        let timeParts = typedTime.split(':');

        if (timeParts.length === 2) {
            let hours = parseInt(timeParts[0], 10);
            let minutes = parseInt(timeParts[1], 10);

            if (isNaN(hours) || isNaN(minutes) || hours > 23 || minutes > 59) {
                alert("Invalid time! Please enter a valid 24-hour format (HH:MM).");
                timeInput.value = formattedTime;  // Reset to last valid time
            }
        } else {
            alert("Invalid format! Use HH:MM (24-hour).");
            timeInput.value = formattedTime;
        }
    }
});

``
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
let arrAddtask = [
    {   
        title: 'My Task',
        desc: 'Working fine',
        time: '02:20',
        priority: 'High'
    },
    {   
        title: 'My Task2',
        desc: 'Asal kolar',
        time: '02:20',
        priority: 'Low'
    },
    {   
        title: 'My Task3',
        desc: 'Kolar Asal',
        time: '02:20',
        priority: 'Moderate'
    },
    {   
        title: 'My Task4',
        desc: 'Baasha',
        time: '02:20',
        priority: 'High'
    }
];

window.document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

function addTask() {
    const taskTitle = document.querySelector(".textInput").value; // To get the title as unique id

    const values = {
        title: taskTitle,
        desc: document.querySelector(".textAreainput").value,
        date: document.querySelector(".dateInput").value,
        time: document.querySelector("#timeInput").value,
        priority: document.querySelector(".form-select").value
    }; // Storing the values in the object
    
    if(!values.title || !values.desc || !values.date || !values.time || !values.priority){
        alert("Enter all the fields to create a task!")
        return; //Will push out by not creating a task
    }

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
                <section class="taskDetails" onclick="loadCompletedTasks(${arrAddtask.indexOf(values)})">
                    <span class="taskTitle">${values.title}</span>
                </section>
                
                <section class="options">
                    <button type="button" aria-label="Edit" onclick="openEditModal('${values.title}')"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button type="button" aria-label="Delete" onclick="deleteTask('${values.title}', this)"><i class="fa-solid fa-trash"></i></button>
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
    document.querySelector("#timeInput").value = "";
    document.querySelector(".form-select").value = "";

    closeModal(); // Close the modal after adding a task
}

//Function to edit a task
let currentEditingIndex = -1; // Store index of the task being edited

function openEditModal(taskTitle) {
    const modal = document.getElementById("editTaskModal");
    modal.style.display = "flex"; // Show modal

    // Find the task and populate fields
    const taskIndex = arrAddtask.findIndex(task => task.title === taskTitle);
    if (taskIndex === -1) return;

    document.getElementById("editTaskTitle").value = arrAddtask[taskIndex].title;
    document.getElementById("editTaskDesc").value = arrAddtask[taskIndex].desc;
    document.getElementById("editTaskTime").value = arrAddtask[taskIndex].time;
    document.getElementById("editTaskPriority").value = arrAddtask[taskIndex].priority;
}

function closeEditModal() {
    document.getElementById("editTaskModal").style.display = "none";
}

// Close when clicking outside the modal
window.onclick = function(event) {
    const modal = document.getElementById("editTaskModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function saveEditedTask() {
    if (currentEditingIndex === -1) return; // No task is being edited

    const newTitle = document.getElementById("editTaskTitle").value.trim();
    
    if (!newTitle) {
        alert("Task title cannot be empty!");
        return;
    }

    // Check if the new title already exists
    if (arrAddtask.some(task => task.title === newTitle && task !== arrAddtask[currentEditingIndex])) {
        alert("Task title must be unique!");
        return;
    }

    // Update task title in the array
    arrAddtask[currentEditingIndex].title = newTitle;

    // Update UI manually instead of reloading everything
    document.querySelectorAll(".taskItem")[currentEditingIndex].querySelector(".taskTitle").textContent = newTitle;

    closeEditModal();
}

function closeEditModal() {
    document.getElementById("editTaskModal").style.display = "none";
    currentEditingIndex = -1; // Reset index
} 

// Function to delete a task
function deleteTask(taskTitle, button) {
    console.log("Trying to delete task:", taskTitle); // Debugging log
    
    if (!taskTitle) {
        console.error("Task title is undefined or null!");
        return;
    }

    // Find the index of the task to remove
    const taskIndex = arrAddtask.findIndex(task => task.title === taskTitle);
    
    if (taskIndex !== -1) {
        arrAddtask.splice(taskIndex, 1); // Remove task from array
        
        // Update UI
        button.closest(".taskItem").remove();
        
        console.log("Task deleted successfully:", taskTitle);
    } else {
        console.error("Task not found in arrAddtask:", taskTitle);
    }
}

// Function to load tasks from localStorage and display them in the UI
function loadTasks() {
    const taskContainer = document.querySelector("#taskList");
    taskContainer.innerHTML = ""; // Clear existing tasks in UI

    // arrAddtask = JSON.parse(localStorage.getItem('Tasks')) || [];

    arrAddtask.forEach((values,index) => {
        const taskElement = document.createElement("section");
        taskElement.classList.add("taskItem");

        taskElement.innerHTML = `
            <article class="myTaskcontent">
                <section class="taskUppercontent">                      
                    <section class="taskDetails" onclick="loadCompletedTasks(${index})">
                        <span class="taskTitle">${values.title}</span>
                    </section>
                    
                    <section class="options">
                        <button type="button" aria-label="Edit" onclick="openEditModal('${values.title}')"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button type="button" aria-label="Delete" onclick="deleteTask('${values.title}', this)"><i class="fa-solid fa-trash"></i></button>
                    </section>
                </section>                              
            </article>
        `;

        taskContainer.appendChild(taskElement);
    });
}

// Load tasks when the page loads
document.addEventListener("DOMContentLoaded", loadTasks);

// List Selection to display in the Completed Tasks
let completedTasks = [];

function loadCompletedTasks(valueIndex) {
    if (valueIndex < 0 || valueIndex >= arrAddtask.length) return; // Prevent errors

    // Get the selected task
    const selectedTask = { ...arrAddtask[valueIndex] }; // Clone the task

    // Remove the selected task from arrAddtask
    arrAddtask.splice(valueIndex, 1);

    // Add the selected task to completedTasks array
    completedTasks.push(selectedTask);

    // Refresh UI for both task lists
    loadTasks();
    loadCompletedTasksUI();
}

// Function to update completed tasks UI
function loadCompletedTasksUI() {
    const completedTaskList = document.querySelector("#completedTaskList");
    completedTaskList.innerHTML = ""; // Clear existing tasks

    completedTasks.forEach((task) => {
        let taskElement = document.createElement("section");
        taskElement.classList.add("myTaskcontent");

        taskElement.innerHTML = `
            <article class="myTaskcontent">
                <section class="taskUppercontent">
                    <section class="taskDetails">
                        <span class="taskTitle">${task.title}</span>
                    </section>
                    <section class="options">
                        <button type="button" aria-label="Edit"><i class="fa-solid fa-pen-to-square"></i></button>
                    </section>
                </section>                              
            </article>
        `;
        completedTaskList.appendChild(taskElement);
    });
}


document.querySelectorAll('.taskDetails').forEach((task) => {
    task.addEventListener("click", function () {
        const taskData = JSON.parse(decodeURIComponent(this.getAttribute("data-task")));
        loadCompletedTasks(taskData);
    });
});

// Ensure completed tasks are loaded when the page loads
document.addEventListener("DOMContentLoaded", loadCompletedTasks);

