import { CodeIcon, HeartIcon, SparklesIcon } from "../icon/Icons";
// import Avatar from "../../assets/Avatar.jpg";

import paltalk from '../../assets/projects/paltalk.png';
import chowbus from '../../assets/projects/chowbus.png';
import gopuff from '../../assets/projects/gopuff.png';
import hoteltonight from '../../assets/projects/hoteltonight.png';
import mako from '../../assets/projects/mako.png';
import napavalley from '../../assets/projects/napavalley.png';
import teranga from '../../assets/projects/teranga.png';

const USER = {
    firstName: process.env.REACT_APP_FIRST_NAME,
    lastName: process.env.REACT_APP_LAST_NAME,
    title: process.env.REACT_APP_TITLE,
    experienceYear: process.env.REACT_APP_EXPERIENCE,
    cvMessage: 'Thank you for downloading my cv!',
    // avatar: Avatar,
};

const CONTACT = {
    email: process.env.REACT_APP_EMAIL,
    email_form: process.env.REACT_APP_EMAIL_FORM,
    github: process.env.REACT_APP_GITHUB,
};

const LABEL = {
    myStack: 'My Proficient Tech Stack & Tools',
    slider: 'Creative and Proactive'
};

const OVERVIEW = {
    title: 'Overview',
    subtitle: USER.title,
    aboutMe: `
        <p class="text-sm font-light">
            Hello, I am 
            <span class="font-semibold text-black dark:text-white">
                ${USER.firstName}.
            </span> <br />
            As a tech-savvy and analytical professional with substantial
            experience developing Mobile and Web App
            development of experience. Proven success managing
            software development lifecycle from requirement
            gathering to project execution, planning, building, and
            debugging applications from system design to writing
            end-to-end tests. Demonstrated expertise in React /
            React Native / Flutter for Front-End, Python / Django /
            RoR for Back-End and creating user-friendly web and
            mobile applications with clean code and architecture.
            <br /> <br />

            My strength is I am a 
            <span class="font-semibold text-black dark:text-white">
                determined problem solver and effective team player,
            and adapt to new situations
            </span>
            . I love swimming and playing volleyball in my free time.
            The reason why I love swimming is that this improves patience quality so this could be 
            very helpful when I deal with problems in my work.
            In turn, my goal is to continue to grow and improve myself so that 
            I can be stronger performer and contender in the workplace.
            <br /> <br />

            <span class="font-semibold text-black dark:text-white">
                Thanks.
            </span>
        </p>
    `,
    featureCards: [
        {
            title: 'Clean & Intuitive',
            desc: 'Keep the UI clean with a modern touch without compromising UX.',
            icon: SparklesIcon
        }, {
            title: 'Detail Oriented',
            desc: 'Awareness to ease of access, UI consistency, and improved UX.',
            icon: HeartIcon
        }, {
            title: 'Pretty & Optimized',
            desc: 'Writing clean code is a top priority while keeping it optimized.',
            icon: CodeIcon
        },
    ]
};

const PROJECTS = {
    title: 'Projects',
    subtitle: 'Recent projects upon which I have worked on.',
    data: [
        {
            id: 0,
            thumbnail: chowbus,
            title: "Chowbus App",
            description:
                "Chowbus is a food delivery app that specializes in Asian cuisine. It offers a curated selection of dishes from a variety of Asian restaurants, ensuring high-quality and authentic meals.",
            live: "https://chowbus.com/",
            // code: "https://",
            tech: ["React Native", "React", "Redux Toolkit"],
            featured: true,
        },
        {
            id: 1,
            thumbnail: mako,
            title: "Mako - Live Streams&Chat",
            description:
                "Mako is a real-time communication app, allowing users to send instant messages, make voice and video calls, and participate in group chats. It also supports sharing various types of media, such as photos, videos, and documents, enhancing the overall user experience.",
            live: "https://play.google.com/store/apps/details?id=com.matchu.machat&hl=en&gl=us",
            // code: "https://",
            tech: ["React Native", "Expo", "Socket.io", "WebRTC"],
            featured: true,
        },
        {
            id: 2,
            thumbnail: teranga,
            title: "Teranga Lodges",
            description:
                "Teranga Lodges offers unique, eco-friendly accommodations located in the scenic Belgian countryside.",
            live: "https://www.terangalodges.com/",
            // code: "https://havenly.com/",
            featured: false,
            tech: ["React", "Next.js", "Django", "PostgresSQL"],
        },
        {
            id: 3,
            thumbnail: hoteltonight,
            title: "Hotel Tonight",
            description:
                "HotelTonight is a mobile application that allows users to book last-minute hotel rooms at discounted rates.",
            live: "https://www.hoteltonight.com/",
            // code: "https://stickdatei-vektordatei.de/",
            tech: ["React Native Cli", "React", "TailwindCSS", "Express"],
            featured: false,
        },
        {
            id: 4,
            thumbnail: paltalk,
            title: "Paltalk",
            description: "Paltalk is a versatile platform offering video chats, voice calls, and text-based conversations.",
            live: "https://www.paltalk.com/mobile/mobile.html",
            // code: "https://arabfor.sa/",
            featured: false,
            tech: ["Swift", "iOS", "Java", "Kotlin", "Socket.io"]
        },
        {
            id: 5,
            thumbnail: gopuff,
            title: "Gopuff",
            description:
                "Gopuff is an on-demand delivery service that brings everyday essentials, groceries, and other items directly to customers' doors.",
            live: "https://gopuff.com/",
            // code: "https://dunkelbraun.com/",
            tech: ["Flutter", "Dart", "BLOC", "MongoDB"],
            featured: false,
        },
        {
            id: 6,
            thumbnail: napavalley,
            title: "Napavalley",
            description: "The hotel offers luxurious accommodations with amenities such as a pool, spa treatments, and curated packages for wine tours and romantic getaways",
            live: "https://www.napavalleylodge.com/",
            // code: "https://play.google.com/store/apps/details?id=com.arabfor.arabforClient",
            featured: false,
            tech: ["Laravel", "Vue.js", "Bootstrap"]
        },
    ]
};

const SKILLS = {
    title: 'Expertise',
    subtitle: 'I am proficient in performing tasks related to all of the listed skills below.',
};

export const CONSTANTS = {
    USER,
    LABEL,
    OVERVIEW,
    PROJECTS,
    SKILLS,
    CONTACT
}