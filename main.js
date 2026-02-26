// console.log("hello");


const jobTitle = document.querySelectorAll('.job-title');
for(let title of jobTitle){
    title.classList.add('font-semibold');
}

let jobTotal = document.getElementById('job-section').children.length;
// console.log(jobTotal);
document.getElementById('total-job-amount').innerText = jobTotal;