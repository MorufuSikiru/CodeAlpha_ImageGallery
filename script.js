const images =
  [
    {
      id: 1,
      src: "https://plus.unsplash.com/premium_photo-1710849581742-f2151607c745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      title:
        "Alpine Heights",
      category:
        "Nature",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1528055823578-1c18ae59ef8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fENpdHklMjBTa3lsaW5lJTIwVXJiYW58ZW58MHx8MHx8fDA%3D",
      title:
        "City Skyline",
      category:
        "Urban",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1574726252024-83b799196f99?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:
        "Golden Sunrise",
      category:
        "Nature",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1547723741-1799757b60d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fFN0cmVldCUyMFN0b3JpZXN8ZW58MHx8MHx8fDA%3D",
      title:
        "Street Stories",
      category:
        "Urban",
    },
    {
      id: 5,
      src: "https://plus.unsplash.com/premium_photo-1663950775064-e220c016d6e5?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:
        "Forest Canopy",
      category:
        "Nature",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1628895272659-c9c1642b9471?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fE1vdW50YWluJTIwTGFrZXxlbnwwfHwwfHx8MA%3D%3D",
      title:
        "Mountain Lake",
      category:
        "Nature",
    },
    {
      id: 7,
      src: "https://plus.unsplash.com/premium_photo-1679785652921-ea051205a473?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHQlMjBBYnN0cmFjdCUyMExpZ2h0fGVufDB8fDB8fHww",
      title:
        "Abstract Light",
      category:
        "Abstract",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1680921826904-fae65dd3b14b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxOZW9uJTIwTmlnaHRzfGVufDB8fDB8fHww",
      title:
        "Neon Nights",
      category:
        "Urban",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1640622333314-05b7986f1b35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:
        "Portrait Study",
      category:
        "Portraits",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1610435086622-9a0ff2bbb618?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHRoZSUyMEdhemV8ZW58MHx8MHx8fDA%3D",
      title:
        "The Gaze",
      category:
        "Portraits",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1591014949393-a3d927b4609f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fERlc2VydCUyMER1bmVzfGVufDB8fDB8fHww",
      title:
        "Desert Dunes",
      category:
        "Nature",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1552900144-5a8ca71fd614?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:
        "Color Play",
      category:
        "Abstract",
    },
  ];

const categories =
  [
    "All",
    ...new Set(
      images.map(
        (
          i,
        ) =>
          i.category,
      ),
    ),
  ];
let activeCategory =
  "All";
let filtered =
  [
    ...images,
  ];
let lbIndex = 0;

// Build filters
const filterBar =
  document.getElementById(
    "filterBar",
  );
categories.forEach(
  (
    cat,
  ) => {
    const btn =
      document.createElement(
        "button",
      );
    btn.className =
      "filter-btn" +
      (cat ===
      "All"
        ? " active"
        : "");
    btn.textContent =
      cat;
    btn.addEventListener(
      "click",
      () => {
        document
          .querySelectorAll(
            ".filter-btn",
          )
          .forEach(
            (
              b,
            ) =>
              b.classList.remove(
                "active",
              ),
          );
        btn.classList.add(
          "active",
        );
        activeCategory =
          cat;
        filterGallery();
      },
    );
    filterBar.appendChild(
      btn,
    );
  },
);

function filterGallery() {
  filtered =
    activeCategory ===
    "All"
      ? [
          ...images,
        ]
      : images.filter(
          (
            i,
          ) =>
            i.category ===
            activeCategory,
        );
  const grid =
    document.getElementById(
      "galleryGrid",
    );
  const count =
    document.getElementById(
      "countDisplay",
    );
  const catDisplay =
    document.getElementById(
      "categoryDisplay",
    );
  count.textContent =
    filtered.length +
    " photo" +
    (filtered.length !==
    1
      ? "s"
      : "");
  catDisplay.textContent =
    activeCategory ===
    "All"
      ? "All Categories"
      : activeCategory;

  grid.innerHTML =
    "";
  if (
    filtered.length ===
    0
  ) {
    grid.innerHTML = `<div class="empty-state"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><p>No images in this category.</p></div>`;
    return;
  }
  filtered.forEach(
    (
      img,
      index,
    ) => {
      const item =
        document.createElement(
          "div",
        );
      item.className =
        "gallery-item";
      item.innerHTML = `
      <img src="${img.src}&auto=format" alt="${img.title}" loading="lazy">
      <div class="overlay">
        <div class="overlay-icon">
          <svg viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
        </div>
      </div>
      <div class="item-info">
        <div class="item-title">${img.title}</div>
        <div class="item-meta">
          <span class="item-category">${img.category}</span>
          <span class="item-num">#${String(img.id).padStart(2, "0")}</span>
        </div>
      </div>
    `;
      item.style.animationDelay =
        index *
          0.05 +
        "s";
      item.addEventListener(
        "click",
        () =>
          openLightbox(
            index,
          ),
      );
      grid.appendChild(
        item,
      );
    },
  );
}

// Lightbox
const lightbox =
  document.getElementById(
    "lightbox",
  );
const lbImg =
  document.getElementById(
    "lbImg",
  );
const lbTitle =
  document.getElementById(
    "lbTitle",
  );
const lbMeta =
  document.getElementById(
    "lbMeta",
  );
const lbCounter =
  document.getElementById(
    "lbCounter",
  );

function openLightbox(
  index,
) {
  lbIndex =
    index;
  updateLightbox();
  lightbox.classList.add(
    "open",
  );
  document.body.style.overflow =
    "hidden";
}

function closeLightbox() {
  lightbox.classList.remove(
    "open",
  );
  document.body.style.overflow =
    "";
}

function updateLightbox() {
  const img =
    filtered[
      lbIndex
    ];
  lbImg.src =
    img.src +
    "&auto=format";
  lbImg.alt =
    img.title;
  lbTitle.textContent =
    img.title;
  lbMeta.textContent =
    img.category +
    " · Photo #" +
    String(
      img.id,
    ).padStart(
      2,
      "0",
    );
  lbCounter.textContent =
    lbIndex +
    1 +
    " / " +
    filtered.length;
}

document
  .getElementById(
    "lbClose",
  )
  .addEventListener(
    "click",
    closeLightbox,
  );
document
  .getElementById(
    "lbPrev",
  )
  .addEventListener(
    "click",
    () => {
      lbIndex =
        (lbIndex -
          1 +
          filtered.length) %
        filtered.length;
      updateLightbox();
    },
  );
document
  .getElementById(
    "lbNext",
  )
  .addEventListener(
    "click",
    () => {
      lbIndex =
        (lbIndex +
          1) %
        filtered.length;
      updateLightbox();
    },
  );
lightbox.addEventListener(
  "click",
  (
    e,
  ) => {
    if (
      e.target ===
      lightbox
    )
      closeLightbox();
  },
);

// Keyboard navigation
document.addEventListener(
  "keydown",
  (
    e,
  ) => {
    if (
      !lightbox.classList.contains(
        "open",
      )
    )
      return;
    if (
      e.key ===
      "ArrowLeft"
    ) {
      lbIndex =
        (lbIndex -
          1 +
          filtered.length) %
        filtered.length;
      updateLightbox();
    }
    if (
      e.key ===
      "ArrowRight"
    ) {
      lbIndex =
        (lbIndex +
          1) %
        filtered.length;
      updateLightbox();
    }
    if (
      e.key ===
      "Escape"
    )
      closeLightbox();
  },
);

// Init
filterGallery();
