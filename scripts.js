// function downloadCSV(csv, filename) {
//     var csvFile;
//     var downloadLink;

//     // Retrieve csv file from experiment
//     csvFile = new Blob([csv], {type: "text/csv"});

//     // Download link
//     downloadLink = document.createElement("a");

//     // Retrieve File name
//     downloadLink.download = filename;

//     // Create a link to the file
//     downloadLink.href = window.URL.createObjectURL(csvFile);

//     // Hide download link
//     downloadLink.style.display = 'none';

//     // Add link to the DOM
//     document.body.appendChild(downloadLink);

//     downloadLink.click();
// }


jsPsych.init({
    timeline: timeline,
    on_finish:function(){
        var csv = jsPsych.data.get().csv();
        var filename = "SRT_task.csv"
        downloadCSV(csv,filename);
        jsPsych.data.displayData()
    }
    })


