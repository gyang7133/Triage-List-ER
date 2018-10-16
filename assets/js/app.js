const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]

alert("Current Patient List: " + patientList.join(', '));


const command = prompt('Choose one: update, delete, add, reorder');


// 1. If the user typed in 'add', prompt them for a patient name, add that patient to the list, and display the list.
if(command == "add"  || command == "Add")
{
  const patient = prompt("Hello, please enter new patient's name to add.");
  patientList.push(patient);

  // Display the patient list 
  alert("Current Patient List: " + patientList.join(', '));
}

// 2. If the user typed in 'update', prompt them for a patient name,  prompt them for a new name, update the name to the new name, and display the list.
else if(command == "update" || command == "Update")
{
  const patientReplace = prompt('Enter Patient to Update');
	const patientUpdate = prompt('Enter New Name for Patient');
  patientIndex = patientList.indexOf(patientReplace);
  
  if(patientList.includes(patientReplace))
    {
      patientList[patientIndex]=patientUpdate;
    }
  else
  {
    alert("Patient Name "+patientReplace+" not found")
  }
  
  // Display the patient list 
  alert("Current Patient List: " + patientList.join(', '));
  
}

//3. If the user typed in 'delete', prompt them for a patient name, delete that patient, and display the list.
else if (command == "delete" || command == "Delete")
{
  const patientDelete = prompt("Enter Patient's name to delete");
  patientIndex = patientList.indexOf(patientDelete);
  const confirmSwitch = confirm("Are you sure you want to delete " + patientDelete + ". ");
  
  // Confirm if user wants to delete the patient.
  if(confirmSwitch == true)
  {
      if(patientList.includes(patientDelete))
    {
      patientList.splice(patientIndex, 1);
      alert("Patient has been deleted.");
    }

    else
    {
      alert("Patient Name " + patientDelete + " not found." + " \nPlease try another name");
    }

  }
  
  // Display the patient list  
   alert("Current Patient List: " + patientList.join(', '));
}

// 4. If the user typed in 'reorder', prompt them for a patient name, prompt them for another patient name, switch the two entered patients, and display the list.
else if(command == "reorder" || command == "Reorder")
{
	const patient1 = prompt("Enter Patient One Name to Reorder");
  const patient2 = prompt("Enter Patient Two Name to Reorder");
  const confirmSwitch = confirm("Confirm that you are about to switch the poistions of " + patient1 + " and " + patient2 + ". ");

    if(confirmSwitch == true)
    {
      patient1Index = patientList.indexOf(patient1);
      patient2Index = patientList.indexOf(patient2);
      
      var temp = patientList[patient1Index];
      patientList[patient1Index] = patientList[patient2Index];
      patientList[patient2Index] = temp;

      alert("Patients have been reorderd.");
    }

    else
    {
      if (patientList.includes(patient1) === false)
        {
          alert("Patient Name " + patient1 + " not found." + " \nPlease try another name");
        }
      if (patientList.includes(patient2) === false)
      {
        alert("Patient Name " + patient1 + " not found." + " \nPlease try another name");
      }
    }
     // Display the patient list 
      alert("Current Patient List: " + patientList.join(', '));
}




