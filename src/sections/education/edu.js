import { FaUniversity } from 'react-icons/fa';
import Wed from '../../assets/wed.png';
import Troon from '../../assets/troon.jpeg';
import Dice from '../../assets/dice.png';

export const edu = [
  {
    id: '1',
    university: 'Østfold University College, Norway',
    degree: 'Master in Smart Energy Technology',
    date: '2021 - 2023',
    icon: <FaUniversity />,
  },
  {
    id: '2',
    university: 'University of Haripur, Pakistan',
    degree: 'Bachelor in Software Engineering',
    date: '2016 - 2020',
    icon: <FaUniversity />,
  },
];

export const exp = [
  {
    id: 1,
    company: 'Wedplanix',
    role: 'Frontend Developer',
    date: ' Jun 2022 - Nov 2022',
    skills: 'React, TypeScript, JavaScript, HTML5, CSS3',
    icon: Wed,

  },
  {
    id: 2,
    company: 'Troon Technologies',
    role: 'Frontend Developer',
    date: 'Aug 2020 - Jun 2021',
    skills: 'React, TypeScript, JavaScript, HTML5, CSS3',
    icon : Troon,
  },
  {
    id: 3,
    company: 'DICE',
    role: 'Big Data Analyst',
    date: ' Oct 2019 - Nov 2019',
    skills: 'Hadoop, HiveQL, Apache Impala,  MySQL',  
    icon : Dice,
  }
  
];
