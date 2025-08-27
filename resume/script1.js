async function data() {
  try {
    const url = await fetch("/resume/data.json");
    const data = await url.json();
    console.log("success");

    let tech = document.getElementById("technicalSkill");

    let seperator = document.createElement("div");
    seperator.className = "seperator";

    let seperatorbutton = document.createElement("button");
    seperatorbutton.className = "close";
    seperatorbutton.id = "techclose";
    seperatorbutton.innerHTML = "&times;";

    let buttonsplit = document.querySelector(".buttonssplit");

    seperatorbutton.addEventListener("click", () => {
      buttonsplit.style.display = "block";
      tech.style.display = "none";
    });

    for (let i = 0; i < data.Programming.length; i++) {
      //progress div

      let progress = document.createElement("div");
      progress.className = "progress box";

      //div two

      let two = document.createElement("div");
      two.className = "two";
      let images = document.createElement("img");
      images.src = data.Programming[i].image;
      let span = document.createElement("span");
      span.textContent = data.Programming[i].language;

      //div progress container

      let progresscontainer = document.createElement("div");
      progresscontainer.className = "progress-container";
      let progressbar = document.createElement("div");
      progressbar.className = "progress-bar";

      progressbar.style.width = `${data.Programming[i].width}%`;

      tech.appendChild(seperator);
      seperator.appendChild(seperatorbutton);
      seperator.appendChild(progress);
      progress.appendChild(two);
      two.appendChild(images);
      two.appendChild(span);
      progress.appendChild(progresscontainer);
      progresscontainer.appendChild(progressbar);

      observer.observe(progress);

      observer.observe(seperatorbutton);
    }

    let tools = document.getElementById("toolsandTechnology");
    let cannon = document.createElement("div");
    cannon.className = "cannon";

    let seperatorbutton1 = document.createElement("button");
    seperatorbutton1.className = "close";
    seperatorbutton1.id = "appclose";
    seperatorbutton1.innerHTML = "&times;";

    seperatorbutton1.addEventListener("click", () => {
      buttonsplit.style.display = "block";
      tools.style.display = "none";
    });

    for (let i = 0; i < data.tools.length; i++) {
      let two = document.createElement("div");
      two.className = "two box select";
      let images = document.createElement("img");
      images.src = data.tools[i].image;
      let span = document.createElement("span");
      span.textContent = data.tools[i].language;

      tools.appendChild(cannon);
      cannon.appendChild(seperatorbutton1);
      cannon.appendChild(two);
      two.appendChild(images);
      two.appendChild(span);

      observer.observe(two);
    }

    let softskills1 = document.getElementById("softskills");

    let seperatesplit = document.createElement("div");
    seperatesplit.className = "seperatesplit";

    let split1 = document.createElement("div");
    split1.className = "seperate";

    let split2 = document.createElement("div");
    split2.className = "seperate2 box";

    let images1 = document.createElement("img");
    images1.src = "../logo/Curious-bro.png";

    let seperatorbutton2 = document.createElement("button");
    seperatorbutton2.className = "close";
    seperatorbutton2.id = "appclose";
    seperatorbutton2.innerHTML = "&times;";

    seperatorbutton2.addEventListener("click", () => {
      buttonsplit.style.display = "block";
      softskills1.style.display = "none";
    });

    for (let i = 0; i < data.softskills.length; i++) {
      let two = document.createElement("div");
      two.className = "two1 box";

      let span = document.createElement("span");
      span.textContent = data.softskills[i].skills;

      softskills1.appendChild(seperatesplit);

      seperatesplit.appendChild(split1);
      split1.appendChild(two);
      split1.appendChild(seperatorbutton2);

      seperatesplit.appendChild(split2);
      split2.appendChild(images1);
      two.appendChild(span);

      observer.observe(two);
      observer.observe(split2);
    }

    //projects

    let projectscontainer = document.getElementById("projects");
    for (let i = 0; i < data.projects.length; i++) {
      let cardprojects = document.createElement("div");
      cardprojects.className = "card-projects box";

      let projectsheader = document.createElement("div");
      projectsheader.className = "projects-header box";

      let span = document.createElement("span");
      span.innerHTML = data.projects[i].num;

      let span1 = document.createElement("span");
      span1.className = "title";
      span1.innerHTML = data.projects[i].title;

      let projectsimg = document.createElement("div");
      projectsimg.className = "projects-img box";

      let imageproject = document.createElement("img");
      imageproject.src = data.projects[i].projectsimg;
      let zoom = document.createElement("img");
      zoom.src = "../img/zoom-in.png";
      zoom.className = "zoom";
      zoom.id = "zoom";
      projectsimg.addEventListener("mouseover", () => {
        zoom.style.display = "block";
      });
      projectsimg.addEventListener("mouseleave", () => {
        zoom.style.display = "none";
      });
      imageproject.addEventListener("click", () => {
        bigimage1.style.display = "block";
        bigimage.src = imageproject.src;
      });

      let hr = document.createElement("hr");

      let projectsdescription = document.createElement("div");
      projectsdescription.className = "projects-description box";
      projectsdescription.innerHTML = data.projects[i].projectsdescription;

      let projectbutton = document.createElement("button");
      projectbutton.className = "box";
      projectbutton.onclick = function () {
        window.open(data.projects[i].link, "_blank");
      };
      projectbutton.innerHTML = "View Github";

      projectscontainer.appendChild(cardprojects);
      cardprojects.appendChild(projectsheader);
      projectsheader.appendChild(span);
      projectsheader.appendChild(span1);
      cardprojects.appendChild(projectsimg);
      projectsimg.appendChild(zoom);
      projectsimg.appendChild(imageproject);
      cardprojects.appendChild(hr);
      cardprojects.appendChild(projectsdescription);
      cardprojects.appendChild(projectbutton);

      observer.observe(imageproject);
      observer.observe(cardprojects);
      observer.observe(projectsheader);
      observer.observe(projectsimg);
      observer.observe(projectsdescription);
    }

    bigimagebutton.addEventListener("click", () => {
      bigimage1.style.display = "none";
    });
  } catch (error) {
    console.log("Error data connection: " + error);
  }
}

data();
