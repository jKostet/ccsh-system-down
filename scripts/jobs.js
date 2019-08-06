
var about = document.getElementById("about");
var jobs = document.getElementById("jobs");



function displayAbout() {
  //console.log("hide jobs");
  jobs.classList.add('hidden');

  //console.log("show About");
  about.classList.remove('hidden');
}

function displayJobs() {
  //console.log("hide About");
  about.classList.add('hidden');
  
  //console.log("show jobs");
  jobs.classList.remove('hidden');
}

function displayJob(n) {
  //console.log("hide jobs");
  jobs.classList.add('hidden');

  var job = document.getElementById("job-" + n);
  //console.log("toggle job-" + n + " visibility");
  job.classList.toggle('hidden');
}


