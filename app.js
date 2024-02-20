const projects = {
  theWildOasis: {
    name: "The Wild Oasis",
    url: "https://the-wild-oasis-jc.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The Wild Oasis is a cabin hotel management system used by authorized employees only. This website was created using React.js, and used to see the statistics of the sales, manage bookings, and manage cabins. The website itself was the result project of The Ultimate React Course, which was guided by Jonas Schmedtmann.",
  },
  yelpcamp: {
    name: "YelpCamp",
    url: "https://newyelpcamp.cyclic.app/",
    image:
      "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    description:
      "YelpCamp is a website that is very useful for users who want to find nearby campground, see the campground reviews, and rating. This website includes the web API so user can see the precise location of the campground. Also, users who own a campground can add it to the YelpCamp. This project is developed during the Web Developer Bootcamp in Udemy, using HTML, CSS, JavaScript, Node.js, and MongoDB.",
  },
  mapty: {
    name: "Mapty",
    url: "https://mapty-jeremy.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Mapty is an web application used to track running or cycling progress. In this app, user can click on a specific point on the map, and then add a new activity together with its details.",
  },
  tsfashions: {
    name: "TS Fashions",
    url: "https://tsapparel1.000webhostapp.com/",
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "TS Fashions is an e-commerce application used by fashion enthusiast to purchase new and trending outfits. The web is created using Laravel, PHP, and Bootstrap.",
  },
  bankist: {
    name: "Bankist",
    url: "https://bankist-jc2.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Bankist is a front-end web application that was part of The Complete JavaScript Course 2023 project, led by Jonas Schmedtmann. The purpose of this project is to create a modern-styled web app and implement JavaScript knowledge obtained throughout the course.",
  },
  dicer: {
    name: "Dicer",
    url: "https://dicer-jc.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    description:
      "Dicer! is a dice game for two players. The gameplay is relatively simple, the first player to reach 100 points is the winner. New game feature is also provided in case the user wants to restart the game.",
  },
  natours: {
    name: "Natours",
    url: "https://natours-five-tau.vercel.app",
    image:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Natours is a front-end project developed during the Advanced CSS project in Udemy. The tools used to develop this website are: HTML, CSS, and SASS. SASS is basically similar to CSS, with some extra functionalities CSS are lack of. In this project, there are some beautiful animations that will attract users attention.",
  },
};

const portofolioParent = document.querySelector(".portofolio");
let portofolioChild = null;
let idx = 1;

for (let [_, project] of Object.entries(projects)) {
  portofolioChild = document.createElement("div");
  portofolioChild.classList.add("portofolio-box");
  portofolioChild.id = `pb-${idx}`;
  portofolioChild.innerHTML = `
    <img
      src=${project.image}
      alt=${project.name}
    />
    <a href=${project.url} id="link-pb-${idx}" type="hidden"></a>
    <div class="portofolio-details">
      <div class="portofolio-text">
        <h2>${project.name}</h2>
        <p>
          ${project.description}
        </p>
      </div>
      <span class="portofolio-line"></span>
    </div>
  `;

  portofolioParent.appendChild(portofolioChild);
  idx += 1;
}

// projects.forEach((project, idx) => {
//   console.log("project", project);
//   portofolioChild = document.createElement("div");
//   portofolioChild.classList.add("portofolio-box");
//   portofolioChild.id = `pb-${idx}`;
//   portofolioChild.innerHTML = `
//     <img
//       src=${project.image}
//     />
//     <div class="portofolio-details">
//       <div class="portofolio-text">
//         <h2>${project.name}</h2>
//         <p>
//           ${project.description}
//         </p>
//       </div>
//       <span class="portofolio-line"></span>
//     </div>
//   `;
// });

// portofolioParent.appendChild(portofolioChild);
console.log("Porto parent", portofolioParent);

const boxes = document.querySelectorAll(".portofolio-box");
boxes.forEach((box, idx) => {
  box.addEventListener("click", () => {
    document.getElementById(`link-pb-${idx + 1}`).click();
  });
});

// const pb1 = document.querySelector("#pb-1");

// pb1.addEventListener("click", () => {
//   window.open("https://newyelpcamp.cyclic.app/");
// });

// const pb2 = document.querySelector("#pb-2");

// pb2.addEventListener("click", () => {
//   window.open("https://dicer-jc.vercel.app/");
// });

// const pb3 = document.querySelector("#pb-3");

// pb3.addEventListener("click", () => {
//   window.open("https://natours-five-tau.vercel.app");
// });

// const pb4 = document.querySelector("#pb-4");

// pb4.addEventListener("click", () => {
//   window.open("https://github.com/jeremychristiandi/kenshin-impact.git");
// });

// const pb5 = document.querySelector("#pb-5");

// pb5.addEventListener("click", () => {
//   window.open("https://github.com/jeremychristiandi/chatbot-messenger.git");
// });

// const pb6 = document.querySelector("#pb-6");

// pb6.addEventListener("click", () => {
//   window.open(
//     "https://github.com/jeremychristiandi/karen-virtualassistant.git"
//   );
// });

// const pb7 = document.querySelector("#pb-7");

// pb7.addEventListener("click", () => {
//   window.open("https://github.com/jeremychristiandi/flight-visualization.git");
// });

const navMenu = document.getElementsByClassName("nav-menu")[0];
const navbar2 = document.getElementsByClassName("navbar")[0];

navMenu.addEventListener("click", () => {
  navbar2.classList.toggle("active");
});
