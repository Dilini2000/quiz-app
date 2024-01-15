
const form = document.querySelector('form');
const span = document.querySelector('.span');
const inputName = document.querySelector('.h2');
const candidateName = document.querySelector('#name');
const correctAnswers = ['D','A','B','B','B'];

// candidateName.addEventListener('input', (e) => {
//     const scoreName = e.target.value;
//     // console.log(scoreName);
//     inputName.textContent = `${scoreName}`;
//   });

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const candidateAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
    // console.log(candidateAnswer);
    let score = 0
    correctAnswers.forEach((ans,i)=>{
    if(ans===candidateAnswers[i]) score+=20
    })
    // console.log(score);

    scrollTo(0,0)

    span.textContent= `%${score}`
   
    let i=0
    setInterval(() => {
        if(i<=score) span.textContent = `%${i}`
        i++
    }, 50);

    const scoreName = candidateName.value;
    // console.log (scoreName);
    inputName.textContent = `${scoreName}`;

    
});



