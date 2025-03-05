//Task 2: Adding Support Tickets Dynamically
const tickContainerByID = document.getElementById("ticketContainer"); //pull the document by its ID
const tickContainerByQuery = document.querySelector('#ticketContainer');  //pull the document by the query's first instance

    //Function that creates an employee card
function createSupportTicket(customerName, issueDes, priorityLevel){
    const supportTicket = document.createElement('div'); //create a new element to represent the employee card that would be stored in the div container
    supportTicket.setAttribute('class', 'support-ticket'); //set the class of the new element as employee card
    supportTicket.setAttribute('id', 'supportTicket'); //set the id of the new element as employee card
    supportTicket.setAttribute('priority-level', priorityLevel); //set the priority level as an attribute of each ticket


    //updates the text for the card with the parameters plugged in when function called
    supportTicket.innerHTML = `
    <h3 class= "customer-name">Customer Name: ${customerName}</h3>
    <p class= "issues-description">Issues Description: ${issueDes}</p>
    <label class= "priority-level">Priority Level: ${priorityLevel}</label>
    <button class = "resolve-ticket">Resolve</button>
    <button class = "edit-ticket">Edit</button>
    `; 


    tickContainerByID.appendChild(supportTicket); //add element support ticket to the dashboard and the ticketContainer

    //create resolve button that resolves the support ticket when pressed
const resolveButton = supportTicket.querySelector('.resolve-ticket');

resolveButton.addEventListener('click', (event) => {
       //Task 4: removeChild and stopPropagation()
  event.stopPropagation(); //clicking the resolve button will not bubble up to the ticket container
  tickContainerByID.removeChild(supportTicket); //remove the selected support ticket
});


//Task 5: Additional Challenge - Inline Editing of Employee Details
const editButton = supportTicket.querySelector('.edit-ticket'); //create edit button that will edit the employee info
editButton.addEventListener('click', (event) => {
    event.stopPropagation(); //stop it from bubbling to the employeeCard container
    editSupportTicket(supportTicket);});

supportTicket.addEventListener('dblclick', (event) => { //when employee card is double clicked, you may edit the employee info
    event.stopPropagation();
    editSupportTicket(supportTicket);});}

function editSupportTicket(supportTicket){  //for the edit support ticket command, do the following to the support ticket info
    const nameElement = supportTicket.querySelector('.customer-name'); //establish name element from the ticket
    const issuesElement = supportTicket.querySelector('.issues-description'); //establish position element from the ticket
    const priorityElement = supportTicket.querySelector('.priority-level');

    const nameInput = document.createElement('input'); //make it so that name can be recognized as an input
    nameInput.value = nameElement.innerText.replace('Customer Name: ', ''); //replace the inner text of the ticket
    const issuesInput = document.createElement('input'); //make it so that issues description can be recognized as an input
    issuesInput.value = issuesElement.innerText.replace('Issues Description: ', ''); //replace the inner text of the ticket
    const priorityInput = document.createElement('input'); //make it so that priority level can be recognized as an input
    priorityInput.value = priorityElement.innerText.replace('Priority Level: ', ''); //replace the inner text of the ticket


    const saveButton = document.createElement('button'); //establish a save button to exit out of edit mode
    saveButton.innerText = 'Save'; //save button is labeled as save

    nameElement.innerHTML= ''; //allow the name element to be printed to the browser using the input
    issuesElement.innerHTML= ''; //allow the issues description element to be printed to the browser using the input
    priorityElement.innerHTML= ''; //allow the priority element to be printed to the browser using the input
    nameElement.appendChild(nameInput); //link the edited input to the printed element
    issuesElement.appendChild(issuesInput); //link the edited input to the printed element
    priorityElement.appendChild(priorityInput); //link the edited input to the printed element

    supportTicket.appendChild(saveButton); //link the save button to the support ticket

    saveButton.addEventListener('click', () => {  //when the save button is clicked, do the following
        nameElement.innerHTML = `Customer Name: ${nameInput.value}`; //print the edited name element such as
        issuesElement.innerHTML = `Issues Description: ${issuesInput.value}`; //print the edited position element such as
        priorityElement.innerHTML = `Priority Level: ${priorityInput.value}`; //print the edited position element such as

        saveButton.remove(); //once the button is clicked, the button will disappear from the browser

        const editButton = supportTicket.querySelector('.edit-ticket'); //the edit button will reappear as an option again
        editButton.innerText = 'Edit';});}//edit button labeled as edit

//Testing the functions
createSupportTicket("Emma Dole", "Refund denied", "High")
createSupportTicket("John Spear", "Wrong item delivered", "High")
createSupportTicket("Jake Little", "Not working", "Moderate")


//Task 3: Converting NodeLists to Arrays for Bulk Updates
const nodeList = document.querySelectorAll('.support-ticket[priority-level="High"]'); //create an element that stores all queries associated with support-ticket
const arrayOfNodes = Array.from(nodeList); //for the items in the nodelist element, convert to an array
arrayOfNodes.forEach( item => {  //for every item in the array of nodes, do the following
        item.style.color = "#800000";  //change the text color to maroon in the printed html file
        item.style.backgroundColor = '#FFB6C1'}); //change the background color to light pink in the printed html file


//Task 4: Implementing Ticket Resolution with Event Bubbling
   //Refer to Task 2 for attaching a 'click' eventListener to the "resolve" button that removes its parent ticket using removeChild
   //Refer to Task 2 for stopPropagation() in the "resolve" button to prevent bubbling

   const ticketContainer = document.getElementById('ticketContainer'); //pull the parent container for the customer section by the id
    
   ticketContainer.addEventListener('click', () => { 
       console.log(`Ticket clicked`);});  //add an event listner so that when any ticket is clicked, it logs the message


//Task 5: Additional Challenge - Inline Editing of Support Tickets 
    //Refer to task 2 for the functions and variables created to make it so you can save and edit the text in the browser
  

