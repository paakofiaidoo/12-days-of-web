let accordion = document.querySelector('.accordion');

//get all details in accordion
let details = accordion.querySelectorAll('details');
let active = null

if (active) {
    details[active].open = true;
}
setInterval(() => {
    console.log(active);
}, 1000);
// onclick on detail element set active to index of detail element in details array
details.forEach(
    (detail, index) => {
        detail.addEventListener('click', function (e) {
            if (active !== index) {
                active = index
            } else {
                active = null
            }
            details.forEach(
                (detailIN) => {
                    detailIN.open = null
                }
            )
        }
        );
    }
)




