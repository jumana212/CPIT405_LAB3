// ===== Task 1: Dark / Light Mode =====
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});

// ===== Task 2: Show More / Show Less =====
const aboutBtn = document.getElementById("about-btn");
const moreAbout = document.getElementById("more-about");

aboutBtn.addEventListener("click", function () {
    moreAbout.classList.toggle("hidden");

    if (moreAbout.classList.contains("hidden")) {
        aboutBtn.textContent = "Show More";
    } else {
        aboutBtn.textContent = "Show Less";
    }
});

// ===== Task 3: Dynamic Projects =====
const projects = [
    {
        title: "CarWash+ | Java Automation System",
        description: "Developed a complete management system for a car wash service using Java.",
        category: "Programming",
        technologies: ["Java", "OOP"]
    },
    {
        title: "Cryptography Algorithms | ECB vs CBC Analysis",
        description: "Compared ECB and CBC encryption modes and showed how CBC chaining prevents pattern recognition in encrypted data.",
        category: "Programming",
        technologies: ["Python", "Cryptography"]
    },
    {
        title: "Personal CV Website",
        description: "Built and published my personal CV website, then made it interactive using the JavaScript DOM.",
        category: "Web",
        technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"]
    }
];

const container = document.getElementById("projects-container");

function renderProjects(list) {
    // Clear old cards to avoid duplicates
    container.innerHTML = "";

    list.forEach(function (project) {
        const card = document.createElement("article");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.title;

        const category = document.createElement("span");
        category.className = "category";
        category.textContent = project.category;

        const desc = document.createElement("p");
        desc.textContent = project.description;

        const tech = document.createElement("p");
        tech.className = "tech";
        tech.textContent = "Technologies: " + project.technologies.join(", ");

        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(desc);
        card.appendChild(tech);

        container.appendChild(card);
    });
}

renderProjects(projects);

// ===== Task 4: Project Filtering =====
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selected = button.dataset.category;

        filterButtons.forEach(function (b) {
            b.classList.remove("active");
        });
        button.classList.add("active");

        if (selected === "All") {
            renderProjects(projects);
        } else {
            const filtered = projects.filter(function (p) {
                return p.category === selected;
            });
            renderProjects(filtered);
        }
    });
});

// ===== Task 5: Print / Save as PDF =====
const printBtn = document.getElementById("print-btn");

printBtn.addEventListener("click", function () {
    window.print();
});
