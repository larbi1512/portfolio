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

export default projects;
