// Smooth scrolling effect for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});


const exerciseHoursElement = document.getElementById("exercise-hours");
const addExerciseButton = document.getElementById("add-exercise-btn");

let totalExerciseHours = 0;

addExerciseButton.addEventListener("click", () => {
    const hours = prompt("Enter the number of hours of exercise:");
    if (hours !== null) {
        const parsedHours = parseFloat(hours);
        if (!isNaN(parsedHours) && parsedHours >= 0) {
            totalExerciseHours += parsedHours;
            exerciseHoursElement.textContent = totalExerciseHours.toFixed(2);
        } else {
            alert("Invalid input. Please enter a valid positive number.");
        }
    }
});

// JavaScript for tracking nutrition data
const nutritionSummaryElement = document.getElementById("nutrition-summary");
const nutritionInput = document.getElementById("nutrition-input");
const trackNutritionButton = document.getElementById("track-nutrition-btn");

let trackedNutrition = [];

trackNutritionButton.addEventListener("click", () => {
    const nutritionData = nutritionInput.value.trim();
    if (nutritionData) {
        trackedNutrition.push({ date: new Date(), data: nutritionData });
        updateNutritionSummary();
        nutritionInput.value = ""; // Clear the input field
    }
});

function updateNutritionSummary() {
    if (trackedNutrition.length > 0) {
        let summary = "";
        trackedNutrition.forEach(entry => {
            const formattedDate = formatDate(entry.date);
            summary += `${formattedDate}: ${entry.data}<br>`;
        });
        nutritionSummaryElement.innerHTML = summary;
    } else {
        nutritionSummaryElement.textContent = "No data tracked.";
    }
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}



// JavaScript for displaying present and next check-up dates
const checkupDatesElement = document.getElementById("checkup-dates");

// Get today's date
const today = new Date();
const presentCheckupDate = formatDate(today);

// Calculate next check-up date (1 week from today)
const nextCheckupDate = new Date(today);
nextCheckupDate.setDate(nextCheckupDate.getDate() + 7);
const formattedNextCheckupDate = formatDate(nextCheckupDate);

checkupDatesElement.textContent = `Present check-up date: ${presentCheckupDate}, Next check-up date: ${formattedNextCheckupDate}`;

// Function to format date as "YYYY-MM-DD"
function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// JavaScript for medication management with prescription status
const medicationPrescriptionsElement = document.getElementById("medication-prescriptions");

const prescriptions = [
    { medication: "Medication A", done: false },
    { medication: "Medication B", done: true },
    { medication: "Medication C", done: false }
];

function updateMedicationPrescriptions() {
    medicationPrescriptionsElement.innerHTML = "";
    for (const prescription of prescriptions) {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = prescription.done;
        checkbox.addEventListener("change", () => {
            prescription.done = checkbox.checked;
        });

        const label = document.createElement("label");
        label.textContent = prescription.medication;

        const prescriptionContainer = document.createElement("div");
        prescriptionContainer.classList.add("prescription-container"); // Add the class
        prescriptionContainer.appendChild(checkbox);
        prescriptionContainer.appendChild(label);

        medicationPrescriptionsElement.appendChild(prescriptionContainer);
    }
}


updateMedicationPrescriptions();
