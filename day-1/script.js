//get .box
const box = document.querySelector(".box");

function circles() {
    var circle = document.createElement("span");
    circle.className = "circle";
    circle.style.width = "10px";
    circle.style.height = "10px";
    circle.style.borderRadius = "50%";
    box.appendChild(circle);
}

//run circles function 10 times
for (var i = 0; i < 50; i++) {
    circles();
}
if ('IntersectionObserver' in window) {
    // IO code here
    console.log('IntersectionObserver is supported');
    const implement = (entries, className) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
            } else {
                entry.target.classList.remove(className);
            }
        });
    }

    const observer = new IntersectionObserver(entries => {
        implement(entries, 'level-3');
    }, {
        rootMargin: '-49% 0% -49% 0%'
    });
    const observer2 = new IntersectionObserver(entries => {
        implement(entries, 'level-2');
    }, {
        rootMargin: '-45% 0% -45% 0%'
    });
    const observer3 = new IntersectionObserver(entries => {
        implement(entries, 'level-1');
    }, {
        rootMargin: '-40% 0% -40% 0%'
    });


    let circles = document.querySelectorAll('.circle');

    circles.forEach((circle => {
        observer.observe(circle)
        observer2.observe(circle)
        observer3.observe(circle)
    }))


} else {
    console.log('IntersectionObserver is not supported');
}