// data.tsx
import img1 from '@/../public/images/aifest.png'
import img2 from '@/../public/images/gifty.png'
import img3 from '@/../public/images/ML_project.png'
import img4 from '@/../public/images/Gostu.png'

const projects = [
    {
        image: img1,
        title: 'AI Fest 24 ',
        description: 'Website for the registrations to the AI fest Hackathon',
        link: 'https://ai-fest-website.vercel.app/'
    },
    {
        image: img2,
        title: 'GIFTY',
        description: 'This mobile application, built with Flutter, aims to seamlessly connect gift and flower sellers/owners with potential buyers, fostering a convenient and enjoyable shopping experience. ',
        link: 'https://github.com/larbi1512/GIFTY'
    },
    {
        image: img3,
        title: 'MetroPT3-Predictive-Maintenance',
        description: 'A comparative analysis and predictive maintenance study using the MatroPT3 timeseries dataset including real time sensors in the metro station. ',
        link: 'https://github.com/muohannedxd/MetroPT3-Predictive-Maintenance'
    },
    {
        image: img4,
        title: 'Gostu DZ',
        description: 'An Educational Platform For BAC Students',
        link: 'https://gostu.net/'
    }
];



const skills = [
    'scikit learn',
    'tensorflow',
    'keras',
    'pandas',
    'numpy',
    'matplotlib',
    'seaborn',
    'javascript',
    'typescript',
    'react',
    'next.js',
    'flutter',
    'dart',
    'python',
    'java',
    'c++',
    'c',
    'html',
    'css',
    'sass',
    'tailwindcss',
    'bootstrap',
    'git',
    'github',
    'docker',
    'figma',
    'adobe illustrator',
    'adobe photoshop',
    'R',
    'SQL',
    'NoSQL',
    'firebase',
    'mongodb',
    'postgresql',
    'mysql',
    'linux',
    'bash',
    'Django',
    'flask',
    'fastapi',
    'UI design',
    'UX design',
    'UX research',
    'wireframing',
    'prototyping',
    'graphic design',
    'data mining',
    'machine learning',
    'deep learning',
];

const experience = [
    {
        position: 'Front-end developer',
        company: 'Gostu dz',
        date: 'July 2023 - Present',
    },
    {
        position: 'Full-Stack intern',
        company: 'FikraTek solutions',
        date: 'July 2024 - Present',
    },
    {
        position: 'Mobile UI/UX designer',
        company: 'Gostu dz',
        date: 'July 2023 - December 2023',
    },
    {
        position: 'Machine Learning intern',
        company: 'Cellula technologies',
        date: 'february 2024 - March 2023',
    },
    {
        position: 'Design Team Leader',
        company: 'GDSC ENSIA',
        date: 'October 2022 - June 2023',
    },
    {
        position: 'Marketing Team Leader',
        company: 'GDSC ENSIA',
        date: 'October 2023- July 2024',
    }
];
export  {projects, skills, experience};
