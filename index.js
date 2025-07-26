const target = document.getElementById("text-target");
const text = "Novalink Systems";
let i = 0;
let isDeleting = false;

function type() {
    if (isDeleting) {
        target.textContent = text.substring(0, i--);
        if (i < 0) {
            isDeleting = false;
            setTimeout(type, 500);
        } else {
            setTimeout(type, 100);
        }
    } else {
        target.textContent = text.substring(0, i++);
        if (i > text.length) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else {
            setTimeout(type, 150);
        }
    }
}
type();