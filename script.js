console.clear();

const brands = document.querySelectorAll(".brand");

brands.forEach((brand) => {

  brand.addEventListener("mouseenter", () => {

    brand.style.transform = "scale(1.05)";

  });

  brand.addEventListener("mouseleave", () => {

    brand.style.transform = "scale(1)";

  });

});
