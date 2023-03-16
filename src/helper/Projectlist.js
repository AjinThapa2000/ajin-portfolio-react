import Proj1 from "../assests/img1.png";
import Proj2 from "../assests/img2.PNG";
import Proj3 from "../assests/img3.png";
import Proj4 from "../assests/img4.PNG";
import Proj5 from "../assests/img5.gif";
import Proj6 from "../assests/img6.png";
import photo from '../assests/avatar.png'

const profile={
  pic: photo,
  name: 'Ajin Thapa',
  role: 'Full stack developer',
  description:
    'Everyday learner who is highly interested in cutting edge technology, web development, JavaScript, python and  backend development.',
  resume: 'https://www.dropbox.com/s/p2y53foqizxy1v0/Dinesh_Thapa_CV%20%281%29.pdf?dl=0',
}

const project = [
  {
    name: "Wrok Scheduler",
    image: Proj1,
    description: 'This website application is a straightforward daily planner intended to assist users in planning their workdays.',
    stack: ['localstorage', 'Clock', 'User input note'],
    sourceCode: 'https://github.com/AjinThapa2000/work-scheduler',
    livePreview: 'https://ajinthapa2000.github.io/work-scheduler/'
    
  },
  {
    name: "Password Generator",
    image:Proj2,
    description:
    'Unique Password Generator is program that generate unique strong password for your security. Password of length 64 char can be create using this program.',
    stack: ['FrontEnd','Character Combination','Password Length'],
    sourceCode: 'https://github.com/AjinThapa2000/Unique-Password-Generetor',
    livePreview:'https://ajinthapa2000.github.io/Unique-Password-Generetor/'
  },
  {
    name: "WeatherForecast",
    image:Proj3,
    description:'View 5 days weather forecast of the city based on your search input.',
    stack: ['localstorage', 'Openweather API', 'Google Map API'],
    sourceCode: 'https://github.com/AjinThapa2000/WeatherForecast',
    livePreview:'https://ajinthapa2000.github.io/WeatherForecast/'
  },
  {
    name: "Time Quiz",
    image:Proj4,
    description:'Play time Quiz and obtain high score based on given time clock',
    stack: ['Frontend', 'Option Selection','Clock Timeout'],
    sourceCode: 'https://github.com/AjinThapa2000/Play-Time-Quiz',
    livePreview:'https://ajinthapa2000.github.io/Play-Time-Quiz/'
  },
  {
    name: "README_Generator",
    image:Proj5,
    description:'Create dynamic readme file for your project.',
    stack: ['nmp-i','node-16','Command-line Readme'],
    sourceCode: 'https://github.com/AjinThapa2000/Dynamically-generated-ReadMe'
  },
  {
    name: "Food-Cocktails-API",
    image:Proj6,
    description:
    'Get instruction about how to make different food and cocktails at home.',
    stack: ['Food-API', 'Cocktails-API', 'Local storage'],
    sourceCode: 'https://github.com/AjinThapa2000/Food-Cocktails-API/settings/pages',
    livePreview:'https://ajinthapa2000.github.io/Food-Cocktails-API/'
  },

  
];

const Contact = {
  email: 'dineshthapa2000@gmail.com',
}
 

export {project,Contact,profile}

