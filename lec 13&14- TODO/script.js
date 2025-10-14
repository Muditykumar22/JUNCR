// --- 1. ELEMENT SELECT KRE HAI YHA ---

// To-Do List Elements
const input = document.getElementById('taskInput');
const btn = document.getElementById('addBtn');
const list = document.getElementById('taskList');
const timeInput = document.getElementById('timeInput');

// Profile & Page Elements
const loginPage = document.getElementById('loginPage');
const mainContent = document.querySelector('.container');
const editPage = document.getElementById('editPage'); 
const displayName = document.getElementById('displayName');
const editProfileBtn = document.getElementById('editProfileBtn');
const userNameInput = document.getElementById('userNameInput');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const cancelProfileBtn = document.getElementById('cancelProfileBtn');

// Login Elements
const usernameInputLogin = document.getElementById('usernameInputLogin');
const passwordInputLogin = document.getElementById('passwordInputLogin');
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');

// Filter Elements
const filterAll = document.getElementById('filterAll');
const filterActive = document.getElementById('filterActive');
const filterCompleted = document.getElementById('filterCompleted');
const filterControls = document.getElementById('filterControls');


// --- 2. REGISTRATION & STORED CREDENTIALS ---

let tempID = "";
let tempPass = "";


while (!tempID || !tempPass) {
    let inputID = window.prompt("Firstly Register your self:", "Enter Your UserName Here...");
    let inputPass = window.prompt("Create your password:", "Enter Your Pass Here...");
    
    if (inputID === null || inputPass === null) {
        window.alert("Registration is required to proceed. Please refresh the page to register.");
        inputID = ""; 
        inputPass = "";
    }

    tempID = inputID.trim();
    tempPass = inputPass.trim();
    
    if (!tempID || !tempPass) {
         window.alert("Username and Password cannot be empty! Please try again.");
    }
}

const storedID = tempID;
const storedPassword = tempPass;


// --- 3. PROFILE & LOGIN MANAGEMENT LOGIC ---

// Helper function to switch pages
function togglePage(showElement, hideElement) {
    hideElement.style.display = 'none';
    showElement.style.display = 'block';
}

// A. Login Button Logic
loginBtn.addEventListener('click', () => {
    loginError.textContent = ''; 

    const enteredUsername = usernameInputLogin.value.trim();
    const enteredPassword = passwordInputLogin.value.trim(); 

    if (enteredUsername === storedID && enteredPassword === storedPassword) {
        // Login Successful: Switch to Main Content
        togglePage(mainContent, loginPage); 
    } else {
        // Invalid credentials
        loginError.textContent = 'Invalid credentials. Try again!';
        passwordInputLogin.value = ''; 
    }
});

// B. Edit Button (Go to Edit Page)
editProfileBtn.addEventListener('click', () => {
    userNameInput.value = displayName.textContent.replace('Hello, ', '').replace('!', '').trim();
    togglePage(editPage, mainContent); 
});

// C. Cancel Button (Go back to Main Page)
cancelProfileBtn.addEventListener('click', () => {
    togglePage(mainContent, editPage);
});

// D. Save Button (Save data and go back)
saveProfileBtn.addEventListener('click', () => {
    const newName = userNameInput.value.trim();

    if (!newName) {
        window.alert('Name cannot be empty!');
        return;
    }

    displayName.textContent = `Hello, ${newName}!`;
    togglePage(mainContent, editPage);
    window.alert('Profile saved successfully!');
});


// --- 4. TASK FILTERING ---

// Helper function to manage 'active' class on buttons
function setActiveFilter(clickedButton) {
 
    if (!filterControls) return; 
    
    const buttons = filterControls.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    clickedButton.classList.add('active');
}


function filterTasks(filterType) {
    const tasks = list.querySelectorAll('li'); 
    
    tasks.forEach(taskItem => {
        // Task Item ke andar ka span jismein 'completed' class hai
        const taskSpan = taskItem.querySelector('span');
        const isCompleted = taskSpan ? taskSpan.classList.contains('completed') : false;
        
        switch (filterType) {
            case 'active':
                taskItem.style.display = isCompleted ? 'none' : 'flex';
                break;
            case 'completed':
                taskItem.style.display = isCompleted ? 'flex' : 'none';
                break;
            case 'all':
            default:
                taskItem.style.display = 'flex';
                break;
        }
    });
}

// --- FILTER BUTTON LISTENERS ---
if (filterAll && filterActive && filterCompleted) {
    filterAll.addEventListener('click', (e) => {
        filterTasks('all');
        setActiveFilter(e.target);
    });

    filterActive.addEventListener('click', (e) => {
        filterTasks('active');
        setActiveFilter(e.target);
    });

    filterCompleted.addEventListener('click', (e) => {
        filterTasks('completed');
        setActiveFilter(e.target);
    });
}


// --- 5. TO-DO LIST CORE LOGIC ---

function setReminder(task, taskTime, listItem, taskSpan) {
    if (!taskTime) return;

    const [hours, minutes] = taskTime.split(':');
    const now = new Date();
    let reminderTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);

    if (reminderTime < now) {
        reminderTime.setDate(reminderTime.getDate() + 1); 
    }

    const delay = reminderTime.getTime() - now.getTime();

    if (delay > 0) {
        setTimeout(() => {
            if (!taskSpan.classList.contains('completed')) {
                window.alert(`⏰ REMINDER: It's time for: ${task} at ${taskTime}!`);
            }
            listItem.classList.remove('priority-high'); 
        }, delay);
        console.log(`Reminder set for ${task} in ${Math.round(delay / 60000)} minutes.`);
    }
}

// Main Add Button Listener
btn.addEventListener('click', () => {
    const task = input.value.trim();
    const taskTime = timeInput.value; 

    if (!task) {
        window.alert('Please enter a task');
        return;
    }
    
    // 1. Element Creation 
    const listItem = document.createElement('li');
    const priorityBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const taskSpan = document.createElement('span');

    // 2. Element Content
    priorityBtn.textContent = '⭐';
    deleteBtn.textContent = '❌';
    const displayTime = taskTime ? ` (${taskTime})` : ''; 
    taskSpan.textContent = task + displayTime; 
    taskSpan.style.marginRight = '10px';

    
    // 3. Set Reminder (Using the helper function)
    setReminder(task, taskTime, listItem, taskSpan);

    
    // 4. Event Listeners
    taskSpan.addEventListener('click', () => {
        taskSpan.classList.toggle('completed');
        
        filterTasks(filterControls.querySelector('.active').id.replace('filter', '').toLowerCase());
    });

    priorityBtn.addEventListener('click', () => {
        listItem.classList.toggle('priority-high'); 
    });

    deleteBtn.addEventListener('click', () => {
        listItem.remove();
       
        filterTasks(filterControls.querySelector('.active').id.replace('filter', '').toLowerCase());
    });
    
    // 5. DOM Insertion
    listItem.appendChild(priorityBtn);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);

    // 6. Cleanup
    input.value = '';
    timeInput.value = ''; 
    input.focus();
});
