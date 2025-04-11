let btn = document.querySelectorAll('.login-btn');
let btnOuter =document.querySelector('.login-btn')
let movingDiv = document.querySelectorAll('.moving-color');
let outerModal = document.querySelector('.outer');
let btnInner = document.querySelector('.modal-btn');
let eyeBtn = document.querySelector('.eye')
let hideBtn = document.querySelector('.hide');
let showBtn = document.querySelector('.show');
let passwordType = document.querySelector('.password')

btn.forEach(function(evt){
    evt.addEventListener('mousemove', function(e){
        let rect = evt.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.bottom;
        movingDiv.forEach(function(el){
            el.style.transform = ` translateX(${x - '75'}px) translateY(${y - '35'}px)`
        })
    })
});

btnOuter.addEventListener('click',function(){
    outerModal.classList.add('open');
    btnOuter.style.display = "none";
})
btnInner.addEventListener('click', function(el){
    const userName = document.querySelector('.username').value;
    const password = document.querySelector('.password').value;
    alert(`Entered Username: ${userName}
                Password: ${password}`);
})
window.addEventListener('click' , function(e){
    if (e.target === outerModal){
        outerModal.classList.remove('open')
        btnOuter.style.display = "flex";
    }
})
    eyeBtn.addEventListener('click', function(){
        if(hideBtn.style.opacity === '1'){
            hideBtn.style.opacity = '0'
            showBtn.style.opacity = '1'
            passwordType.type = 'text'
        }else{
            hideBtn.style.opacity = '1'
            showBtn.style.opacity = '0'
            passwordType.type = 'password'
        }
    })
btn.forEach(function(evt){
    evt.addEventListener('touchmove', function(e){
    e.preventDefault()
    let move = evt.getBoundingClientRect();
    let touch = e.touches[0];
    let x = touch.clientX - move.left;
    let y = touch.clientY - move.top;

    movingDiv.forEach(function(e){
        e.style.transform = `translateX(${x -75}px) translateY(${y -35}px)`
    });
    },{ passive : false});
})
