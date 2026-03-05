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
    })
})