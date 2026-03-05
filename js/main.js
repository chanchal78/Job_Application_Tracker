// console.log('hello');

const totalJobCount = document.getElementById("total-job-amount");
const totalInterviewCount = document.getElementById("total-interview-amount");
const totalRejectedCount = document.getElementById("total-rejected-amount");
const availableJobCount = document.getElementById("available-job-count");

const interviewBtns = document.querySelectorAll('.interviewBtn');

interviewBtns.forEach(function(button){
    button.addEventListener("click", function(){
        const card = button.closest('.cards');
        const status = card.querySelector('.status');

        status.innerText = 'INTERVIEW';
        status.classList.remove("bg-[#EEF4FF]");
        status.classList.add("bg-green-200");

        counts();
        filterCards();
    });
});

const rejectedBtns = document.querySelectorAll('.rejectedBtn');

rejectedBtns.forEach(function(button){
    button.addEventListener("click", function(){
        const card = button.closest('.cards');
        const status = card.querySelector('.status');

        status.innerText = 'REJECTED';
        status.classList.remove("bg-[#EEF4FF]");
        status.classList.add("bg-red-200");

        counts();
        filterCards();
    });
});

const deleteBtns = document.querySelectorAll('.delete-icon');

deleteBtns.forEach(function(button){
    button.addEventListener("click", function(){
        const card = button.closest('.cards');
        card.remove();

        counts();
        filterCards();
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

    filterCards();
}

function filterCards(){
    const cards = document.querySelectorAll(".cards");
    let visibleCardCount = 0;

    cards.forEach(function(card){
        const status = card.querySelector(".status").innerText;

        if((currentTab === 'all') || (currentTab === 'interview' && status === 'INTERVIEW') || (currentTab === 'rejected' && status === 'REJECTED')){
            card.classList.remove("hidden");
            visibleCardCount++;
        }
        else{
            card.classList.add("hidden");
        }
    });
    availableJobCount.innerText = visibleCardCount + ' jobs';

    const emptyState = document.getElementById('empty-state');
    if(visibleCardCount === 0){
        emptyState.classList.remove("hidden");

    }
    else{
        emptyState.classList.add("hidden");
    }
}

function counts(){
    let totalJob = 0;
    let interviewTotal = 0;
    let rejectedTotal = 0;

    const cards = document.querySelectorAll(".cards");
    cards.forEach(function(card){
        totalJob++;

        const status = card.querySelector('.status').innerText;

        if(status === 'INTERVIEW'){
            interviewTotal++;
        }
        else if(status === 'REJECTED'){
            rejectedTotal++;
        }
    });
    totalJobCount.innerText = totalJob;
    totalInterviewCount.innerText = interviewTotal;
    totalRejectedCount.innerText = rejectedTotal;
}

counts();
filterCards();

