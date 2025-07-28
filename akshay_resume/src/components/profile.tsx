'use client'

import { useState, useEffect } from 'react';
import Card from '../components/card'
import { getSkills } from '../services/common';

export default function Profile() {
  const [text, setText] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const [projects, setProjects] = useState<any[]>([]);
  const [skills, setSkills] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSkills('', '');
        if (result.status === 200) {
          const apiSkills = result.data.map((skill: any) => skill.name as string);
          const uniqueSkills = [...new Set(apiSkills)] as string[];
          setSkills(uniqueSkills);
        }
      } catch (err) {
        console.error('Failed to load skills:', err);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    if (!skills.length) return;
    const currentSkill = skills[skillIndex];

    const type = () => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        setSpeed(50);
      } else {
        setText((prev) => currentSkill.slice(0, prev.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && text === currentSkill) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === '') {
        setIsDeleting(false);
        setSkillIndex((prev) => (prev + 1) % skills.length);
      }
    };

    const timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, skillIndex, skills]);


  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.products);
      })
      .catch((err) => console.error('Failed to load projects:', err));
  }, []);
  return (
    <section>
      <div className='header' id='header'>
        <p><b>Akshay Kumar</b></p>
      </div>
      <div className="profile" id='profile'>
        <div className="summary">
          <p>
            A FullStack developer having experience of{' '}
            {skills.length > 0 && <span className="typing">{text}</span>}
          </p>
          <span><b>
            As a full-stack developer, I have extensive experience of approx 4 years in building web and mobile
            applications using technologies such as React.js, React Native, Node.js, and Docker. My expertise
            includes working with both SQL (MySQL) and NoSQL (MongoDB) databases. With a strong
            knowledge of JavaScript and TypeScript, I develop scalable and robust applications, and I have server-
            side development experience using frameworks like Express and Loopback.
          </b></span>
        </div>
        <div className="profileSummary">
          {/* <p><u><b>PROFILE SUMMARY</b></u></p> */}

        </div>
      </div>
      <div className='projects' id='card'>
        {projects.map((project: any, index: number) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </section>
  );
}