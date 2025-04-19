function appendCardsInExplore(link, img, h3, duration, level, number_of_students, ratings, rupees, status) {
    let exploreCards = document.querySelector("#explore-courses .swiper-wrapper");

    let html = `<div class="swiper-slide flex justify-center items-center">
    <div
        class="course-card relative w-[280px] h-[420px] rounded-2xl border-2 border-[#777] flex flex-col overflow-hidden">
        <span class="absolute top-2 right-2 bg-[rgba(0,0,0,0.5)] text-white text-center text-sm px-2 py-1 rounded-full shadow">${status}</span>
        <img src="${img}" alt="img" loading="lazy" class="w-full h-[180px] object-cover rounded-t-2xl">
        <div class="details flex flex-col gap-2 bg-[rgba(0,0,0,0.2)] backdrop-blur-sm p-4 flex-1 rounded-b-2xl">
            <h3 class="font-bold text-lg line-clamp-2">${h3}</h3>
            <div class="flex justify-between text-sm">
                <span class="flex gap-1.5 items-center">
                    <i class="hgi-stroke hgi-rounded hgi-clock-01 text-lg"></i>
                    <p>${duration}</p>
                </span>
                <span class="flex gap-1.5 items-center">
                    <i class="hgi-stroke hgi-rounded hgi-auto-conversations text-lg"></i>
                    <p>${level}</p>
                </span>
            </div>
            <div class="flex justify-between text-sm">
                <span class="flex gap-1.5 items-center">
                    <i class="hgi-stroke hgi-rounded hgi-user-multiple-02 text-lg"></i>
                    <p>${number_of_students}</p>
                </span>
                <span class="flex gap-1.5 items-center">
                    <i class="hgi-stroke hgi-rounded hgi-star text-lg"></i>
                    <p class="text-yellow-400">${ratings}</p>
                </span>
            </div>
            <div class="flex justify-between items-center">
                <span class="flex gap-1.5 items-center">
                    <i class="bx bx-rupee text-xl"></i>
                    <p class="font-bold">${rupees}</p>
                </span>
            </div>
            <a href="${link}"
                class="enrol-btn mt-auto w-full p-2 bg-blue-800 text-white text-center rounded-full font-bold hover:bg-blue-700 transition-all duration-300 active:scale-90">
                Enrol Now
            </a>
        </div>
        </div>
    </div>`

    exploreCards.insertAdjacentHTML("beforeend", html);
}

const statusOptions = [
    'New ✨',
    'Trending🔥',
    'Limited Seats ⌛'
]

const exploreCards = [
    {
        link: "#",
        img: "https://github.com/AbuBakar5173/imagesDataBase/blob/main/ChatGPT%20Image%20Apr%2016,%202025,%2007_53_11%20PM.png?raw=true",
        h3: "Advance Diploma in Computer Application",
        duration: "12 months",
        level: "Beginner",
        number_of_students: "2700+",
        ratings: "4.8",
        rupees: "8,500",
        status: statusOptions[0]
    },
    {
        link: "#",
        img: "https://github.com/AbuBakar5173/imagesDataBase/blob/main/ChatGPT%20Image%20Apr%2016,%202025,%2008_05_25%20PM.png?raw=true",
        h3: "Diploma in Computer Teacher's Training",
        duration: "12 months",
        level: "Advance",
        number_of_students: "700+",
        ratings: "4.5",
        rupees: "13,300",
        status: statusOptions[0]
    },
    {
        link: "#",
        img: "https://github.com/AbuBakar5173/imagesDataBase/blob/main/GraphicDesign.webp?raw=true",
        h3: "Certificate Course in Graphic Design",
        duration: "12 months",
        level: "Beginner",
        number_of_students: "700+",
        ratings: "4.3",
        rupees: "9,500",
        status: statusOptions[0]
    },
    {
        link: "#",
        img: "https://github.com/AbuBakar5173/imagesDataBase/blob/main/EnglishTyping.webp?raw=true",
        h3: "Certificate Course in English Typing",
        duration: "3 months",
        level: "Beginner",
        number_of_students: "7k+",
        ratings: "4.3",
        rupees: "3,999",
        status: statusOptions[0]
    },
    {
        link: "#",
        img: "https://github.com/AbuBakar5173/imagesDataBase/blob/main/ChatGPT%20Image%20Apr%2016,%202025,%2008_11_55%20PM.png?raw=true",
        h3: "Advance Diploma in <br> Financial Accounting",
        duration: "6 months",
        level: "Beginner",
        number_of_students: "700+",
        ratings: "4.3",
        rupees: "8,500",
        status: statusOptions[0]
    },
    {
        link: "#",
        img: "https://github.com/AbuBakar5173/imagesDataBase/blob/main/dataentry.png?raw=true",
        h3: "Diploma in Data Entry Operator",
        duration: "12 months",
        level: "Beginner",
        number_of_students: "700+",
        ratings: "4.3",
        rupees: "9,500",
        status: statusOptions[0]
    },
    {
        link: "#",
        img: "https://github.com/AbuBakar5173/imagesDataBase/blob/main/cttc-Excel.webp?raw=true",
        h3: "Certificate Course in Advance Excel",
        duration: "12 months",
        level: "Beginner",
        number_of_students: "700+",
        ratings: "4.3",
        rupees: "9,500",
        status: statusOptions[0]
    },
    {
        link: "#",
        img: "https://github.com/AbuBakar5173/imagesDataBase/blob/main/cttc-tally.webp?raw=true",
        h3: "Certificate Course in TallyPrime & GST",
        duration: "12 months",
        level: "Beginner",
        number_of_students: "700+",
        ratings: "4.3",
        rupees: "9,500",
        status: statusOptions[0]
    },
    {
        link: "#",
        img: "https://github.com/AbuBakar5173/imagesDataBase/blob/main/DCA.png?raw=true",
        h3: "Diploma in Computer Application (C1288)",
        duration: "6 months",
        level: "Intermediate",
        number_of_students: "1100+",
        ratings: "4.2",
        rupees: "6,830",
        status: statusOptions[0]
    },
    {
        link: "#",
        img: "https://github.com/AbuBakar5173/imagesDataBase/blob/main/Post%20Graduate%20Diploma%20in%20Computer%20Applications.png?raw=true",
        h3: "Post Graduate Diploma in Computer Application",
        duration: "12 months",
        level: "Graduated",
        number_of_students: "400+",
        ratings: "4.2",
        rupees: "11,720",
        status: statusOptions[0]
    },
];

exploreCards.forEach(course => {
    appendCardsInExplore(
        course.link, course.img, course.h3, course.duration, course.level, course.number_of_students, course.ratings, course.rupees, course.status
    );
});