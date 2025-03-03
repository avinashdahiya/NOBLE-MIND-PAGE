// navbar
const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.getElementById("rotates").classList.toggle("rotate-42")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotates-2").classList.toggle("rotate-43")
    document.body.classList.toggle("overflow-hidden")
}

// section 3

const visionPoints = [{
    img: "./assets/images/svg/section-3-check-img.svg",
    discription: "The future of how we live, work, and learn. We see a world where technology is not just a tool but a transformative force for good, reshaping every aspect of human existence."
},
{
    img: "./assets/images/svg/section-3-check-img.svg",
    discription: "Technology is seen as a force for good, capable of driving positive change in society and improving the human experience."
},
{
    img: "./assets/images/svg/section-3-check-img.svg",
    discription: "Share insights and innovations that have a positive impact across borders and sectors."
}
];

const visionList = document.getElementById('vision-list');

visionList.innerHTML = visionPoints.map(point => `
        <div class="vision-card w-100">
        <div class= "d-flex align-items-start gap-10">
            <img src="${point.img}" alt="correct-img">
            <p class = "font-family-primary fw-normal fs-6 lh-24 text-black opacity-80 max-w-386 mb-0">${point.discription}</p>
        </div>
        </div>
    `).join('');




// section 4
const cardData = [
    {
        img: "./assets/images/svg/health-care-img.svg",
        title: "Healthcare",
        text: "We are on a mission to revolutionize the field of healthcare through cutting-edge innovation."
    },
    {
        img: "./assets/images/svg/icon.svg",
        title: "Education",
        text: "Education is rooted in the idea that learning should be a lifelong journey."
    },
    {
        img: "./assets/images/svg/finance-img.svg",
        title: "Finance",
        text: "Recognizing that knowledge is the cornerstone of financial empowerment."
    },
    {
        img: "./assets/images/svg/marketing-img.svg",
        title: "Marketing",
        text: "Where marketing campaigns are driven by data-driven insights and creativity knows no bounds."
    },
    {
        img: "./assets/images/svg/entertainment-img.svg",
        title: "Entertainment",
        text: "We believe that technology has the power to transport individuals to new worlds, unlocking creativity."
    },
    {
        img: "./assets/images/svg/agriculture-img.svg",
        title: "Agriculture",
        text: "We are passionate about regenerative farming practices and sustainable agriculture."
    }
];

const cardContainer = document.getElementById("card-container-1");

cardContainer.innerHTML = cardData.map(card => `
            <div class="col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                <div class="card-box-1 w-100">
                    <div class="img-circle d-flex justify-content-center align-items-center mb-20">
                      <img src="${card.img}" alt="images">
                    </div>
                    <h5 class="font-family-primary fw-bold fs-4 lh-33 text-black">${card.title}</h5>
                    <p class="font-family-primary fw-normal fs-6 lh-24 text-black opacity-80 max-w-324 mb-0">${card.text}</p>
                </div>
            </div>
        `).join('');




// section 5
const cardsData = [
    {
        Image: "./assets/images/svg/correct-svg.svg",
        title: "Customer-Centric",
        description: "Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value."
    },
    {
        Image: "./assets/images/svg/correct-svg.svg",
        title: "Global Resonance",
        description: "Share insights and innovations that have a positive impact across borders and sectors."
    },
    {
        Image: "./assets/images/svg/correct-svg.svg",
        title: "Ethical Leadership",
        description: "Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent."
    },
    {
        Image: "./assets/images/svg/correct-svg.svg",
        title: "Innovation",
        description: "Stay at the vanguard of technological transformation, redefining futures and driving excellence in all our offerings."
    },
    {
        Image: "./assets/images/svg/correct-svg.svg",
        title: "Commitment to Vision 2030",
        description: "Align with and champion Saudi Arabia's technological and societal aspirations."
    },
    {
        Image: "./assets/images/svg/correct-svg.svg",
        title: "Collaboration",
        description: "Forge strategic partnerships across industries and institutions, emphasizing both global and local advancements."
    },
    {
        Image: "./assets/images/svg/correct-svg.svg",
        title: "Social Responsibility",
        description: "Dedicate ourselves to uplifting communities, driving positive change, and promoting sustainable practices in both business and societal arenas."
    },
    {
        Image: "./assets/images/svg/correct-svg.svg",
        title: "Workplace Harmony",
        description: "Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity. We are more than a team; we are a family."
    }
];

const container = document.getElementById("cardsContainer");

container.innerHTML = cardsData.map(card => `
            <div class="col-12 col-md-6 mb-4 d-flex justify-content-center"> 
                <div class="card-box w-100">
                    <div class="d-flex align-items-center gap-8 mb-2">
                        <img src="${card.Image}" alt="correct-img">
                        <h5 class="font-family-primary fw-bold fs-6 lh-24 text-black mb-0">${card.title}</h5>
                    </div>
                        <p class="font-family-primary fw-normal fs-6 lh-24 text-black opacity-80 mb-0">${card.description}</p>
                </div>
            </div>
        `)
    .join('');



    
// back to top
let backToTopButton = document.getElementById("backToTop");
window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};
backToTopButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
