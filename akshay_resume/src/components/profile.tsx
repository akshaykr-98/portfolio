'use client'

import { useState, useEffect } from 'react';
import Card from '../components/card'

const Skills = ['JavaScript', 'TypeScript', 'NodeJs', 'ReactJs','MySQL', 'docker','HTML','CSS'];

export default function Profile() {
  const [text, setText] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150); // typing speed
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const currentSkill = Skills[skillIndex];

    const type = () => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        setSpeed(50); // faster delete
      } else {
        setText((prev) => currentSkill.slice(0, prev.length + 1));
        setSpeed(150); // slower type
      }

      // If typing complete, pause before deleting
      if (!isDeleting && text === currentSkill) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      // If deleting complete, move to next skill
      if (isDeleting && text === '') {
        setIsDeleting(false);
        setSkillIndex((prev) => (prev + 1) % Skills.length);
      }
    };

    const timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, skillIndex]);


  useEffect(()=>{
  fetch('https://dummyjson.com/products')
  .then((res)=> res.json())
  .then((data)=>{
    setProjects( data.products.map((project:object)=>{
      // console.log("---", project);
      return Card(project)
    })
  )
  }
  )
  },[])
  return (
    <section>
      <div className='header' id='header'>
        <p><b>Akshay Kumar</b></p>
      </div>
      <div className="profile" id='profile'>
        <div className="summary">
          <p>
            A FullStack developer having experience of <span className="typing">{text}</span>
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
        {projects}
      </div>
    </section>
  );
}