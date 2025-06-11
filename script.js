document.addEventListener("DOMContentLoaded", () => {
  var typed = new Typed("#typed-name", {
    strings: ["Nguyễn Trần Thiên Phú"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: false,
  });

  const skillsSection = document.getElementById("skills-section");
  const skillBars = document.querySelectorAll(".skill-bar-fill");

  // Kiểm tra xem có tìm thấy section kỹ năng không để tránh lỗi
  if (skillsSection) {
    const animateSkills = () => {
      let sectionTop = skillsSection.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 150) {
        skillBars.forEach((bar) => {
          const skillLevel = bar.getAttribute("data-level");
          bar.style.width = skillLevel;
        });
      }
    };

    // Lắng nghe sự kiện scroll
    window.addEventListener("scroll", animateSkills);
  }
});
