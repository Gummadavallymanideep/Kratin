document.addEventListener("DOMContentLoaded", function() {
    // Chart.js code here
    const ctx = document.getElementById("progress-chart").getContext("2d");

    const data = {
        labels: ["Label 1", "Label 2", "Label 3"], // Example labels
        datasets: [
            {
                label: "Dataset 1",
                data: [10, 20, 15], // Example data
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            }
        ]
    };

    const options = {
        // Your options here
    };

    const progressChart = new Chart(ctx, {
        type: "bar",
        data: data,
        options: options
    });
});