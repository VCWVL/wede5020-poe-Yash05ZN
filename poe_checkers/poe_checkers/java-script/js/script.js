// ---------------- Lightbox Gallery ----------------
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

// ---------------- Google Maps ----------------
function initMap() {
  const location = { lat: -33.9249, lng: 18.4241 }; // Cape Town
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: location,
  });
  new google.maps.Marker({ position: location, map: map });
}

// ---------------- Contact Form Validation ----------------
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const msg = document.getElementById("contactMessage").value.trim();

      if (name && email && msg) {
        document.getElementById("contactResponse").textContent =
          `Thank you ${name}! We’ll get back to you soon.`;
      } else {
        alert("Please fill out all fields.");
      }
    });
  }

  // ---------------- Enquiry Form Validation ----------------
  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const type = document.getElementById("type").value;

      if (name && email && message) {
        document.getElementById("response").textContent =
          `Thanks ${name}, your ${type} enquiry was received successfully!`;
      } else {
        alert("Please complete all fields.");
      }
    });
  }

  // ---------------- Product Search ----------------
  const productList = document.getElementById("product-list");
  if (productList) {
    const products = [
      { name: "Apples", price: "R20/kg" },
      { name: "Bananas", price: "R15/kg" },
      { name: "Carrots", price: "R18/kg" },
    ];

    const render = items => {
      productList.innerHTML = items.map(p => `
        <div class="product-card">
          <img src="images/${p.name.toLowerCase()}.jpg" alt="${p.name}">
          <h3>${p.name}</h3><p>${p.price}</p>
        </div>
      `).join("");
    };

    render(products);

    document.getElementById("search").addEventListener("keyup", e => {
      const search = e.target.value.toLowerCase();
      render(products.filter(p => p.name.toLowerCase().includes(search)));
    });
  }
});
