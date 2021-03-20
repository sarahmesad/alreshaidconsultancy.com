function hide() {
    document.getElementById("intro").style.display = 'none';
    document.getElementById("about").style.display = 'none';
    document.getElementById("services").style.display = 'none';
    document.getElementById("skills").style.display = 'none';
    document.getElementById("experiences").style.display = 'none';
    document.getElementById("info").style.display = 'none';
    document.getElementById("contact").style.display = 'none';
}

document.querySelector('a.intro-link').addEventListener('click', function () {
    hide();
    document.getElementById('intro').style.display = 'flex';
})
document.querySelector('a.about-link').addEventListener('click', function () {
    hide();
    document.getElementById('about').style.display = 'block';
})
document.querySelector('a.services-link').addEventListener('click', function () {
    hide();
    document.getElementById('services').style.display = 'block';
})
document.querySelector('a.skills-link').addEventListener('click', function () {
    hide();
    document.getElementById('skills').style.display = 'block';
})
document.querySelector('a.experiences-link').addEventListener('click', function () {
    hide();
    document.getElementById('experiences').style.display = 'block';
})
document.querySelector('a.info-link').addEventListener('click', function () {
    hide();
    document.getElementById('info').style.display = 'block';
})
document.querySelector('a.contact-link').addEventListener('click', function () {
    hide();
    document.getElementById('contact').style.display = 'block';
})
