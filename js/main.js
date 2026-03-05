// console.log('hello');

const interviewBtns = document.querySelectorAll('.interviewBtn');

interviewBtns.forEach(function(button){
    button.addEventListener("click", function(){
        const card = button.closest('.cards');
        const status = card.querySelector('.status');

        status.innerText = 'INTERVIEW';
    });
});

const rejectedBtns = document.querySelectorAll('.rejectedBtn');

rejectedBtns.forEach(function(button){
    button.addEventListener("click", function(){
        const card = button.closest('.cards');
        const status = card.querySelector('.status');

        status.innerText = 'REJECTED';
    });
});

const deleteBtns = document.querySelectorAll('.delete-icon');

deleteBtns.forEach(function(button){
    button.addEventListener("click", function(){
        const card = button.closest('.cards');
        card.remove();
    });
});

let currentTab = 'all';
const allTabBtn = document.getElementById("all-tab-btn");
const interviewTabBtn = document.getElementById("interview-tab-btn");
const rejectedTabBtn = document.getElementById("rejected-tab-btn");


function switchTab(tab){
    currentTab = tab;

    allTabBtn.classList.remove("bg-blue-600", "text-white");
    interviewTabBtn.classList.remove("bg-blue-600", "text-white");
    rejectedTabBtn.classList.remove("bg-blue-600", "text-white");

    allTabBtn.classList.add("bg-white", "text-black");
    interviewTabBtn.classList.add("bg-white", "text-black");
    rejectedTabBtn.classList.add("bg-white", "text-black");

    if(tab === "all"){
        allTabBtn.classList.remove("bg-white", "text-black");
        allTabBtn.classList.add("bg-blue-600", "text-white");
    }
    else if(tab === "interview"){
        interviewTabBtn.classList.remove("bg-white", "text-black");
        interviewTabBtn.classList.add("bg-blue-600", "text-white");
    }
    else if(tab === "rejected"){
        rejectedTabBtn.classList.remove("bg-white", "text-black");
        rejectedTabBtn.classList.add("bg-blue-600", "text-white");
    }
}