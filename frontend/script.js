/* =========================================================
   PORTFOLIO CONFIGURATION
========================================================= */


/* =========================================================
   PERSONAL INFORMATION
========================================================= */

const portfolio = {

    name: "Arghajit Biswas",

    intro: "Hi, I am",

    description:
        "A CSE student and aspiring full-stack developer who loves to build real-world projects.",

    subdescription:
        "Turning ideas into useful, meaningful, and real-world digital experiences.",

    roles: [
        "Developer",
        "Designer",
        "Programmer",
        "Creator"
    ],

    email: "arghajit.cse.2500133@gmail.com",

    /* =====================================================
       RESUME
    ===================================================== */

    resume: {
        file: "../assets/Arghajit_Biswas_Resume.pdf",
        downloadName: "Arghajit_Biswas_Resume.pdf"
    }

};



/* =========================================================
   NAVIGATION
========================================================= */

const navigation = [

    {
        name: "Home",
        target: "#home"
    },

    {
        name: "About",
        target: "#about"
    },

    {
        name: "Skills",
        target: "#skills"
    },

    {
        name: "Projects",
        target: "#projects"
    },

    {
        name: "Resume",
        target: "resume"
    }

];



/* =========================================================
   SOCIAL MEDIA
========================================================= */

const socials = [

    {
        name: "GitHub",

        url:
            "https://github.com/arghajitbiswas1866-notfound",

        icon: `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
            >
                <path
                    d="M8 0C3.58 0 0 3.58 0 8
                    c0 3.54 2.29 6.53 5.47 7.59
                    .4.07.55-.17.55-.38
                    0-.19-.01-.82-.01-1.49
                    -2.01.37-2.53-.49-2.69-.94
                    -.09-.23-.48-.94-.82-1.13
                    -.28-.15-.68-.52-.01-.53
                    .63-.01 1.08.58 1.23.82
                    .72 1.21 1.87.87 2.33.66
                    .07-.52.28-.87.51-1.07
                    -1.78-.2-3.64-.89-3.64-3.95
                    0-.87.31-1.59.82-2.15
                    -.08-.2-.36-1.02.08-2.12
                    0 0 .67-.21 2.2.82
                    .64-.18 1.32-.27 2-.27
                    s1.36.09 2 .27
                    c1.53-1.04 2.2-.82 2.2-.82
                    .44 1.1.16 1.92.08 2.12
                    .51.56.82 1.27.82 2.15
                    0 3.07-1.87 3.75-3.65 3.95
                    .29.25.54.73.54 1.48
                    0 1.07-.01 1.93-.01 2.2
                    0 .21.15.46.55.38
                    A8.01 8.01 0 0 0 16 8
                    c0-4.42-3.58-8-8-8"
                />
            </svg>
        `
    },

    {
        name: "LinkedIn",

        url:
            "https://www.linkedin.com/in/arghajit-biswas-59a1312b9/",

        icon: `
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path
                    d="M20.45 20.45h-3.56v-5.57
                    c0-1.33-.03-3.04-1.85-3.04
                    -1.85 0-2.14 1.45-2.14 2.95v5.66
                    H9.35V8.99h3.42v1.56h.05
                    c.48-.9 1.64-1.85 3.37-1.85
                    3.6 0 4.26 2.37 4.26 5.46v6.29ZM5.34
                    7.43a2.07 2.07 0 1 1 0-4.14
                    2.07 2.07 0 0 1 0 4.14ZM7.12
                    20.45H3.56V8.99h3.56v11.46ZM22.23
                    0H1.77C.79 0 0 .77 0 1.72v20.56
                    C0 23.23.79 24 1.77 24h20.46
                    C23.21 24 24 23.23 24 22.28V1.72
                    C24 .77 23.21 0 22.23 0Z"
                />
            </svg>
        `
    },

    {
        name: "Instagram",

        url:
            "https://www.instagram.com/arghajit292006",

        icon: `
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
            >
                <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                />

                <circle
                    cx="12"
                    cy="12"
                    r="4"
                />

                <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                />
            </svg>
        `
    }

];



/* =========================================================
   SKILLS
========================================================= */

const skills = [

    {
        name: "Python",
        category: "backend",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },

    {
        name: "C",
        category: "backend",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
    },

    {
        name: "JavaScript",
        category: "frontend",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },

    {
        name: "HTML5",
        category: "frontend",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },

    {
        name: "CSS",
        category: "frontend",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },

    {
        name: "SQL",
        category: "backend",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    },

    {
        name: "PostgreSQL",
        category: "backend",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    },

    {
        name: "API",
        category: "backend",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
    },

    {
        name: "Git",
        category: "tools",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },

    {
        name: "Postman",
        category: "tools",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
    },

    {
        name: "Canva",
        category: "tools",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
    },

    {
        name: "VS Code",
        category: "tools",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    }

];



/* =========================================================
   CURRENTLY LEARNING
========================================================= */

const currentlyLearning = [

    {
        name: "React",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },

    {
        name: "Docker",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    },

    {
        name: "Data Structures & Algorithms",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
    }

];



/* =========================================================
   HERO TECH ITEMS
========================================================= */

const heroTech = [

    {
        name: "Python",
        className: "tech-python",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },

    {
        name: "HTML",
        className: "tech-html",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },

    {
        name: "CSS",
        className: "tech-css",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },

    {
        name: "JavaScript",
        className: "tech-javascript",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },

    {
        name: "Git",
        className: "tech-git",
        icon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },

    {
        name: "Code",
        className: "tech-code",
        icon: null
    }

];



/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [

    {
        title: "Portfolio Website",

        description:
            "A modern and responsive developer portfolio built to showcase my skills, projects, experience and journey.",

        image: "../assets/image.png",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        github:
            "https://github.com/yourusername/portfolio",

        live: "",

        featured: true
    },

    {
        title: "Smart Tourism Management",

        description:
            "AI-powered smart travel planning platform for personalized trips, budgets, recommendations, and crowd-aware travel planning.",

        image: "../assets/bengaltrail-project-img.png",

        technologies: [
            "Python",
            "SQL",
            "JS",
            "HTML5",
            "Tailwind CSS"
        ],

        github:
            "https://github.com/arghajitbiswas1866-notfound/Bengaltrail",

        live: "",

        featured: false
    },

    {
        title: "Ganesh Chaturthi poster",

        description:
            "A creative Ganesh Chaturthi poster blending traditional festive elements with a modern visual design to celebrate the arrival of Lord Ganesha.",

        image: "../assets/lord ganesha CT.png",

        technologies: [
            "Canva"
        ],

        github:
            "",

        live: "",

        featured: false
    },

    {
        title: "Call Of Duty poster",

        description:
            "A cinematic Call of Duty poster featuring a bold military aesthetic, dramatic composition, and intense visual elements inspired by the game's action-packed atmosphere.",

        image: "../assets/COD PINTREST VERSION.png",

        technologies: [
            "Canva"
        ],

        github:
            "",

        live: "",

        featured: false
    }

];



/* =========================================================
   DOM ELEMENTS
========================================================= */

const navbarBrand =
    document.getElementById("navbar-brand");

const navbarLinks =
    document.getElementById("navbar-links");

const heroName =
    document.getElementById("hero-name");

const heroDescription =
    document.getElementById("hero-description");

const heroSubdescription =
    document.getElementById("hero-subdescription");

const changingText =
    document.getElementById("changing-text");

const socialIcons =
    document.getElementById("social-icons");

const heroButtons =
    document.getElementById("hero-buttons");

const heroVisual =
    document.getElementById("hero-visual");

const aboutContent =
    document.getElementById("about-content");

const skillFilters =
    document.getElementById("skill-filters");

const skillsGrid =
    document.getElementById("skills-grid");

const learningContainer =
    document.getElementById("currently-learning");

const footer =
    document.getElementById("footer");

const projectsGrid =
    document.getElementById("projects-grid");



/* =========================================================
   CREATE NAVBAR
========================================================= */

function createNavbar() {

    navbarBrand.innerHTML = `

        <a
            href="#home"
            class="navbar-brand-custom"
        >
            Code Architects
        </a>

    `;


    navigation.forEach(
        (item, index) => {

            const li =
                document.createElement("li");

            li.className =
                "nav-item";


            const link =
                document.createElement("a");

            link.className =
                "nav-link nav-link-custom";


            /* =================================================
               RESUME NAVIGATION
            ================================================= */

            if (item.target === "resume") {

                link.href =
                    portfolio.resume.file;

                link.target =
                    "_blank";

                link.rel =
                    "noopener noreferrer";

            } else {

                link.href =
                    item.target;

            }


            link.textContent =
                item.name;


            if (index === 0) {

                link.classList.add(
                    "active"
                );

            }


            link.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".nav-link-custom"
                        )
                        .forEach(
                            nav => {

                                nav.classList.remove(
                                    "active"
                                );

                            }
                        );


                    link.classList.add(
                        "active"
                    );

                }
            );


            li.appendChild(link);

            navbarLinks.appendChild(li);

        }
    );

}



/* =========================================================
   CREATE HERO CONTENT
========================================================= */

function createHeroContent() {

    heroName.innerHTML =
        portfolio.name;


    heroDescription.textContent =
        portfolio.description;


    heroSubdescription.textContent =
        portfolio.subdescription;


    /* =====================================================
       HERO BUTTONS
       Only View My Work + Download Resume
    ===================================================== */

    heroButtons.innerHTML = `

        <a
            href="#projects"
            class="hero-btn hero-btn-primary"
        >
            View My Work
        </a>


        <a
            href="${portfolio.resume.file}"
            class="hero-btn hero-btn-secondary"
            download="${portfolio.resume.downloadName}"
        >
            Download Resume
        </a>

    `;

}



/* =========================================================
   CREATE SOCIAL ICONS
========================================================= */

function createSocials() {

    socialIcons.innerHTML = "";


    socials.forEach(
        (social, index) => {

            const link =
                document.createElement("a");


            link.className =
                "social-link";


            link.href =
                social.url;


            link.target =
                "_blank";


            link.rel =
                "noopener noreferrer";


            link.title =
                social.name;


            link.innerHTML =
                social.icon;


            link.style.animationDelay =
                `${1 + index * 0.12}s`;


            socialIcons.appendChild(
                link
            );

        }
    );

}



/* =========================================================
   CREATE HERO VISUAL
========================================================= */

function createHeroVisual() {

    /*
        Profile circle
    */

    const circle =
        document.createElement("div");

    circle.className =
        "profile-circle";

    heroVisual.appendChild(
        circle
    );


    /*
        Profile person
    */

    const person =
        document.createElement("img");

    person.className =
        "profile-person";

    person.src =
        "../assets/no-bg2.png";

    person.alt =
        portfolio.name;

    heroVisual.appendChild(
        person
    );


    /*
        Technology items
    */

    heroTech.forEach(
        (tech, index) => {

            const item =
                document.createElement("div");

            item.className =
                `tech-item ${tech.className}`;

            item.title =
                tech.name;


            if (tech.icon) {

                item.innerHTML = `

                    <img
                        src="${tech.icon}"
                        alt="${tech.name}"
                    >

                `;

            } else {

                item.innerHTML = `

                    <span class="tech-item-code">
                        &lt;/&gt;
                    </span>

                `;

            }


            heroVisual.appendChild(
                item
            );


            /*
                Pop animation
            */

            setTimeout(
                () => {

                    item.classList.add(
                        "show"
                    );


                    /*
                        Start floating after
                        pop animation
                    */

                    setTimeout(
                        () => {

                            item.classList.remove(
                                "show"
                            );

                            item.classList.add(
                                "floating"
                            );

                        },
                        700
                    );

                },
                800 + index * 300
            );

        }
    );


    /*
        Developer label
    */

    const developer =
        document.createElement("div");

    developer.className =
        "developer-label";

    developer.textContent =
        "Developer";

    heroVisual.appendChild(
        developer
    );


    setTimeout(
        () => {

            developer.classList.add(
                "show"
            );

        },
        2700
    );

}



/* =========================================================
   TYPING EFFECT
========================================================= */

let wordIndex = 0;

let letterIndex = 0;

let deleting = false;


function typeEffect() {

    const word =
        portfolio.roles[wordIndex];


    if (!deleting) {

        changingText.textContent =
            word.substring(
                0,
                letterIndex + 1
            );


        letterIndex++;


        if (
            letterIndex ===
            word.length
        ) {

            deleting = true;


            setTimeout(
                typeEffect,
                1500
            );


            return;

        }

    } else {

        changingText.textContent =
            word.substring(
                0,
                letterIndex - 1
            );


        letterIndex--;


        if (
            letterIndex === 0
        ) {

            deleting = false;

            wordIndex++;


            if (
                wordIndex ===
                portfolio.roles.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 65 : 110
    );

}



/* =========================================================
   CREATE ABOUT SECTION
========================================================= */

function createAbout() {

    aboutContent.innerHTML = `

        <div class="about-image-container">

            <img
                src="../assets/about-section.jpg"
                class="about-image"
                alt="About ${portfolio.name}"
            >

        </div>


        <div class="about-text">

            <span class="section-label">
                WHO I AM
            </span>


            <h2>
                About Me
            </h2>


            <p>
                I am a CSE student and aspiring
                full-stack developer who enjoys
                building useful and meaningful
                digital projects.
            </p>


            <p>
                I am constantly learning new
                technologies and improving my
                skills through real-world projects.
            </p>


            <a
                href="${portfolio.resume.file}"
                class="resume-download-btn"
                download="${portfolio.resume.downloadName}"
            >
                Download Resume
            </a>

        </div>

    `;

}



/* =========================================================
   SKILL FILTERS
========================================================= */

const filters = [

    {
        name: "All",
        value: "all"
    },

    {
        name: "Frontend",
        value: "frontend"
    },

    {
        name: "Backend",
        value: "backend"
    },

    {
        name: "Tools",
        value: "tools"
    }

];


function createSkillFilters() {

    skillFilters.innerHTML = "";


    filters.forEach(
        filter => {

            const button =
                document.createElement("button");


            button.className =
                "skill-filter";


            button.textContent =
                filter.name;


            button.dataset.filter =
                filter.value;


            if (
                filter.value === "all"
            ) {

                button.classList.add(
                    "active"
                );

            }


            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".skill-filter"
                        )
                        .forEach(
                            btn => {

                                btn.classList.remove(
                                    "active"
                                );

                            }
                        );


                    button.classList.add(
                        "active"
                    );


                    displaySkills(
                        filter.value
                    );

                }
            );


            skillFilters.appendChild(
                button
            );

        }
    );

}



/* =========================================================
   DISPLAY SKILLS
========================================================= */

function displaySkills(
    category = "all"
) {

    skillsGrid.innerHTML = "";


    const filteredSkills =
        category === "all"
            ? skills
            : skills.filter(
                skill =>
                    skill.category ===
                    category
            );


    filteredSkills.forEach(
        (skill, index) => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "skill-card";


            card.innerHTML = `

                <img
                    src="${skill.icon}"
                    alt="${skill.name}"
                    loading="lazy"
                >

                <span>
                    ${skill.name}
                </span>

            `;


            skillsGrid.appendChild(
                card
            );


            setTimeout(
                () => {

                    card.classList.add(
                        "show"
                    );

                },
                index * 70
            );

        }
    );

}



/* =========================================================
   CURRENTLY LEARNING
========================================================= */

function displayCurrentlyLearning() {

    learningContainer.innerHTML = `

        <h3>
            Currently Learning
        </h3>

        <div
            class="learning-grid"
            id="learning-grid"
        ></div>

    `;


    const learningGrid =
        document.getElementById(
            "learning-grid"
        );


    currentlyLearning.forEach(
        (skill, index) => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "skill-card";


            card.innerHTML = `

                <img
                    src="${skill.icon}"
                    alt="${skill.name}"
                    loading="lazy"
                >

                <span>
                    ${skill.name}
                </span>

            `;


            learningGrid.appendChild(
                card
            );


            setTimeout(
                () => {

                    card.classList.add(
                        "show"
                    );

                },
                index * 100
            );

        }
    );

}



/* =========================================================
   CREATE PROJECT CARD
========================================================= */

function createProjectCard(
    project,
    index
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "project-card";


    if (project.featured) {

        card.classList.add(
            "featured"
        );

    }


    /* =====================================================
       PROJECT IMAGE
    ===================================================== */

    const imageContainer =
        document.createElement(
            "div"
        );


    imageContainer.className =
        "project-image-container";


    const image =
        document.createElement(
            "img"
        );


    image.src =
        project.image;


    image.alt =
        project.title;


    image.loading =
        "lazy";


    /*
        Get actual image dimensions
        and automatically set aspect ratio.
    */

    const updateImageRatio =
        () => {

            if (
                image.naturalWidth > 0 &&
                image.naturalHeight > 0
            ) {

                imageContainer.style.aspectRatio =
                    `${image.naturalWidth} / ${image.naturalHeight}`;

            }

        };


    image.addEventListener(
        "load",
        updateImageRatio
    );


    if (
        image.complete
    ) {

        updateImageRatio();

    }


    imageContainer.appendChild(
        image
    );



    /* =====================================================
       PROJECT CONTENT
    ===================================================== */

    const content =
        document.createElement(
            "div"
        );


    content.className =
        "project-content";



    /* =====================================================
       TITLE
    ===================================================== */

    const title =
        document.createElement(
            "h3"
        );


    title.textContent =
        project.title;



    /* =====================================================
       DESCRIPTION
    ===================================================== */

    const description =
        document.createElement(
            "p"
        );


    description.textContent =
        project.description;



    /* =====================================================
       TECHNOLOGIES
    ===================================================== */

    const technologies =
        document.createElement(
            "div"
        );


    technologies.className =
        "project-technologies";


    project.technologies.forEach(
        technology => {

            const tag =
                document.createElement(
                    "span"
                );


            tag.textContent =
                technology;


            technologies.appendChild(
                tag
            );

        }
    );



    /* =====================================================
       PROJECT BUTTONS
    ===================================================== */

    const buttons =
        document.createElement(
            "div"
        );


    buttons.className =
        "project-buttons";



    /* =====================================================
       GITHUB BUTTON
    ===================================================== */

    if (
        project.github
    ) {

        const github =
            document.createElement(
                "a"
            );


        github.href =
            project.github;


        github.target =
            "_blank";


        github.rel =
            "noopener noreferrer";


        github.className =
            "project-btn github-btn";


        github.innerHTML = `

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
            >
                <path
                    d="M8 0C3.58 0 0 3.58 0 8
                    c0 3.54 2.29 6.53 5.47 7.59
                    .4.07.55-.17.55-.38
                    0-.19-.01-.82-.01-1.49
                    -2.01.37-2.53-.49-2.69-.94
                    -.09-.23-.48-.94-.82-1.13
                    -.28-.15-.68-.52-.01-.53
                    .63-.01 1.08.58 1.23.82
                    .72 1.21 1.87.87 2.33.66
                    .07-.52.28-.87.51-1.07
                    -1.78-.2-3.64-.89-3.64-3.95
                    0-.87.31-1.59.82-2.15
                    -.08-.2-.36-1.02.08-2.12
                    0 0 .67-.21 2.2.82
                    .64-.18 1.32-.27 2-.27
                    s1.36.09 2 .27
                    c1.53-1.04 2.2-.82 2.2-.82
                    .44 1.1.16 1.92.08 2.12
                    .51.56.82 1.27.82 2.15
                    0 3.07-1.87 3.75-3.65 3.95
                    .29.25.54.73.54 1.48
                    0 1.07-.01 1.93-.01 2.2
                    0 .21.15.46.55.38
                    A8.01 8.01 0 0 0 16 8
                    c0-4.42-3.58-8-8-8"
                />
            </svg>

            GitHub

        `;


        buttons.appendChild(
            github
        );

    }



    /* =====================================================
       LIVE DEMO BUTTON
    ===================================================== */

    if (
        project.live
    ) {

        const live =
            document.createElement(
                "a"
            );


        live.href =
            project.live;


        live.target =
            "_blank";


        live.rel =
            "noopener noreferrer";


        live.className =
            "project-btn live-btn";


        live.innerHTML = `

            Live Demo

            <span>
                ↗
            </span>

        `;


        buttons.appendChild(
            live
        );

    }



    /* =====================================================
       ASSEMBLE CONTENT
    ===================================================== */

    content.appendChild(
        title
    );


    content.appendChild(
        description
    );


    content.appendChild(
        technologies
    );


    content.appendChild(
        buttons
    );



    /* =====================================================
       ASSEMBLE CARD
    ===================================================== */

    card.appendChild(
        imageContainer
    );


    card.appendChild(
        content
    );



    /* =====================================================
       CARD ANIMATION
    ===================================================== */

    card.style.animationDelay =
        `${index * 120}ms`;


    return card;

}



/* =========================================================
   DISPLAY PROJECTS
========================================================= */

function displayProjects() {

    if (
        !projectsGrid
    ) {

        console.error(
            "Project grid element not found."
        );

        return;

    }


    projectsGrid.innerHTML =
        "";


    projects.forEach(
        (project, index) => {

            const card =
                createProjectCard(
                    project,
                    index
                );


            projectsGrid.appendChild(
                card
            );


            /*
                Trigger card animation
            */

            setTimeout(
                () => {

                    card.classList.add(
                        "show"
                    );

                },
                100 + index * 120
            );

        }
    );

}



/* =========================================================
   ACTIVE NAVIGATION ON SCROLL
========================================================= */

function setupScrollNavigation() {

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-link-custom"
        );


    window.addEventListener(
        "scroll",
        () => {

            let current = "";


            sections.forEach(
                section => {

                    const sectionTop =
                        section.offsetTop;


                    if (
                        window.scrollY >=
                        sectionTop - 150
                    ) {

                        current =
                            section.getAttribute(
                                "id"
                            );

                    }

                }
            );


            navLinks.forEach(
                link => {

                    link.classList.remove(
                        "active"
                    );


                    /*
                        Do not try to activate
                        Resume based on scrolling.
                    */

                    if (
                        link.getAttribute(
                            "href"
                        ) ===
                        `#${current}`
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                }
            );

        }
    );

}



/* =========================================================
   INITIALIZE EVERYTHING
========================================================= */

function initializePortfolio() {

    createNavbar();

    createHeroContent();

    createSocials();

    createHeroVisual();

    createAbout();

    createSkillFilters();

    displaySkills();

    displayCurrentlyLearning();

    displayProjects();

    createFooter();

    setupScrollNavigation();

    typeEffect();

}



/* =========================================================
   START PORTFOLIO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initializePortfolio
);



/* =========================================================
   FOOTER
========================================================= */

function createFooter() {

    const year =
        new Date().getFullYear();


    /* =====================================================
       FORMSPREE
    ===================================================== */

    const formspreeEndpoint =
        "https://formspree.io/f/mljdrdzw";


    /* =====================================================
       FOOTER HTML
    ===================================================== */

    footer.innerHTML = `

        <div class="footer-content">


            <!-- =========================================
                 FOOTER INFORMATION
            ========================================== -->

            <div class="footer-left">

                <h3>
                    ${portfolio.name}
                </h3>


                <p>
                    Have a project, opportunity, or
                    collaboration in mind?
                    Send me a message and I'll get back
                    to you.
                </p>


                <span>
                    © ${year} ${portfolio.name}
                    · Built with HTML, CSS & JavaScript.
                </span>

            </div>


            <!-- =========================================
                 CONTACT FORM
            ========================================== -->

            <div class="footer-contact">

                <h3>
                    Let's Work Together
                </h3>


                <form
                    id="contact-form"
                    action="${formspreeEndpoint}"
                    method="POST"
                >


                    <!-- NAME -->

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        autocomplete="name"
                        required
                    >


                    <!-- EMAIL -->

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        autocomplete="email"
                        required
                    >


                    <!-- MESSAGE -->

                    <textarea
                        name="message"
                        placeholder="Tell me about your project or opportunity..."
                        rows="5"
                        required
                    ></textarea>


                    <!-- EMAIL SUBJECT -->

                    <input
                        type="hidden"
                        name="_subject"
                        value="New Portfolio Contact"
                    >


                    <!-- SPAM PROTECTION -->

                    <input
                        type="text"
                        name="_gotcha"
                        tabindex="-1"
                        autocomplete="off"
                        style="display:none"
                    >


                    <!-- SEND BUTTON -->

                    <button
                        type="submit"
                    >
                        Send Message
                    </button>


                    <!-- STATUS -->

                    <p
                        id="contact-status"
                        class="contact-status"
                        aria-live="polite"
                    ></p>


                </form>

            </div>

        </div>

    `;


    /* =====================================================
       FORM ELEMENTS
    ===================================================== */

    const contactForm =
        document.getElementById(
            "contact-form"
        );


    const contactStatus =
        document.getElementById(
            "contact-status"
        );


    const submitButton =
        contactForm.querySelector(
            "button"
        );


    /* =====================================================
       FORM SUBMISSION
    ===================================================== */

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            /* ---------------------------------------------
               Check Formspree configuration
            --------------------------------------------- */

            if (
                formspreeEndpoint.includes(
                    "YOUR_FORM_ID"
                )
            ) {

                contactStatus.textContent =
                    "Contact form is not configured yet.";

                contactStatus.className =
                    "contact-status error";

                return;

            }


            /* ---------------------------------------------
               Loading state
            --------------------------------------------- */

            submitButton.disabled =
                true;

            submitButton.textContent =
                "Sending...";

            contactStatus.textContent =
                "";


            /* ---------------------------------------------
               Collect form data
            --------------------------------------------- */

            const formData =
                new FormData(
                    contactForm
                );


            try {

                /* -----------------------------------------
                   Send to Formspree
                ----------------------------------------- */

                const response =
                    await fetch(
                        contactForm.action,
                        {
                            method: "POST",

                            body: formData,

                            headers: {
                                "Accept":
                                    "application/json"
                            }
                        }
                    );


                /* -----------------------------------------
                   SUCCESS
                ----------------------------------------- */

                if (
                    response.ok
                ) {

                    contactStatus.textContent =
                        "✓ Message sent successfully! I'll get back to you soon.";

                    contactStatus.className =
                        "contact-status success";


                    contactForm.reset();

                }


                /* -----------------------------------------
                   FORM ERROR
                ----------------------------------------- */

                else {

                    let message =
                        "Unable to send your message.";


                    try {

                        const data =
                            await response.json();


                        if (
                            data.errors &&
                            data.errors.length
                        ) {

                            message =
                                data.errors
                                    .map(
                                        error =>
                                            error.message
                                    )
                                    .join(" ");

                        }

                    }

                    catch (error) {

                        console.error(
                            "Formspree response error:",
                            error
                        );

                    }


                    throw new Error(
                        message
                    );

                }

            }


            /* ---------------------------------------------
               NETWORK / UNKNOWN ERROR
            --------------------------------------------- */

            catch (error) {

                console.error(
                    "Contact form error:",
                    error
                );


                contactStatus.textContent =
                    "✕ " +
                    (
                        error.message ||
                        "Something went wrong. Please try again."
                    );


                contactStatus.className =
                    "contact-status error";

            }


            /* ---------------------------------------------
               Restore button
            --------------------------------------------- */

            submitButton.disabled =
                false;

            submitButton.textContent =
                "Send Message";

        }
    );

}