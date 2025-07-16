/* ========================= navigation animation ==================== */
let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('.nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top > offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

/* ========================= typing animation ==================== */
var typed = new Typed(".typing", {
    strings: ["Web Developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

/* ========================= Aside ==================== */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
    });
}

// Toggle aside
const navToggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    aside.classList.toggle("active");
})
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
}


