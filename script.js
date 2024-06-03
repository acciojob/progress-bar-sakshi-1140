const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentStep=1;

nextButton.addEventListener('click',()=>{
    if(currentStep<circles.length)
        currentStep++;
    update();
})

prevButton.addEventListener('click',()=>{
    if(currentStep>1)
        currentStep--;
    update()
})

function update(){
    circles.forEach((item,index)=>{
        if(index<currentStep)
            item.classList.add("active")
        else item.classList.remove('active')
    });

    prevButton.disabled= currentStep===1
    nextButton.disabled= currentStep===circles.length

}

update();