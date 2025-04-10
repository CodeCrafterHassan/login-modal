let btn = document.querySelectorAll('.login-btn');
let btnOuter =document.querySelector('.login-btn')
let movingDiv = document.querySelectorAll('.moving-color');
let outerModal = document.querySelector('.outer');
let btnInner = document.querySelector('.modal-btn');

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
btn.forEach(function(evt) {
  // Mouse move
  evt.addEventListener('mousemove', function(e) {
    let rect = evt.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.bottom;

    movingDiv.forEach(function(el) {
      el.style.transform = `translateX(${x - 75}px) translateY(${y - 35}px)`;
    });
  });

  // Touch move
  evt.addEventListener('touchmove', function(e) {
    e.preventDefault(); // Prevent scrolling while moving

    let rect = evt.getBoundingClientRect();
    let touch = e.touches[0];

    let x = touch.clientX - rect.left;
    let y = touch.clientY - rect.bottom;

    movingDiv.forEach(function(el) {
      el.style.transform = `translateX(${x - 75}px) translateY(${y - 35}px)`;
    });
  }, { passive: false });
});
