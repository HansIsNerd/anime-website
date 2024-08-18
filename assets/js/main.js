const nav__links = document.querySelectorAll(".nav__link");
nav__links.forEach((item) => {
  item.addEventListener('click', function () {
    nav__links.forEach(i => i.classList.remove("active__link"));
    this.classList.add("active__link");

    const target_id = this.getAttribute('data-target');
    document.querySelectorAll('.library__container, .pengurus__container, .anggota__container').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById('target_id').style.display = 'block';

    // Default menu item
    document.querySelector('.nav__link[data-target="home__container"]').click();

  });
});
