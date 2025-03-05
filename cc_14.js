//Task 2: Adding Support Tickets Dynamically
const tickContainerByID = document.getElementById("ticketContainer"); //pull the document by its ID
const tickContainerByQuery = document.querySelector('#ticketContainer');  //pull the document by the query's first instance

    //Function that creates an employee card
function createSupportTicket(customerName, issueDes, priorityLevel){
    const supportTicket = document.createElement('div'); //create a new element to represent the employee card that would be stored in the div container
    supportTicket.setAttribute('class', 'support-ticket'); //set the class of the new element as employee card
    supportTicket.setAttribute('id', 'supportTicket'); //set the id of the new element as employee card
    supportTicket.setAttribute('data-priority', priorityLevel); //set the priority level as an attribute of each ticket


    //updates the text for the card with the parameters plugged in when function called
    supportTicket.innerHTML = `
    <h3 class= "customer-name">Customer Name: ${customerName}</h3>
    <p class= "issues-description">Issues Description: ${issueDes}</p>
    <label for= "priority-level">Priority Level: ${priorityLevel}</label>
    <button class = "resolve-ticket">Resolve</button>
    `; 

    //create resolve button that resolves the support ticket when pressed
const resolveButton = supportTicket.querySelector('.resolve-ticket');

resolveButton.addEventListener('click', (event) => {
       //Task 4: removeChild and stopPropagation()
  event.stopPropagation(); //clicking the resolve button will not bubble up to the ticket container
  tickContainerByID.removeChild(supportTicket); //remove the selected support ticket
});

tickContainerByID.appendChild(supportTicket); //add element support ticket to the dashboard and the ticketContainer
}

//Testing the functions
createSupportTicket("Emma Dole", "Refund denied", "High")
createSupportTicket("John Spear", "Wrong item delivered", "High")
createSupportTicket("Jake Little", "Not working", "Moderate")


//Task 3: Converting NodeLists to Arrays for Bulk Updates
const nodeList = document.querySelectorAll('.support-ticket[data-priority="High"]'); //create an element that stores all queries associated with support-ticket
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

