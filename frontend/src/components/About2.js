import React from 'react'
import './About2.css'
import AbtCard from './AbtCard'
const About2 = () => {
  return (
    <div className='section-abt2'>
    <h2 style={{textAlign:"center"}} className="ourteam-abt2"><u>Our Team</u></h2>
    <div className='row-abt2'>
        <AbtCard name="CSNPSR" fullName="Pavana Saketha Ram" role="Team Lead" desc="A 'know and own-it-all' who is a very generous and helpful person." mail="saketha@gmail.com" />
        <AbtCard name="Aviral" fullName="Aviral Katiyar" role="Co-Founder" desc="Anime lover with a knack of helping people and is also a quick learner. (The MOM of the group)" mail="aviral@gmail.com" />
        <AbtCard name="Akhil" fullName="Akhilender Bongirwar" role="Co-Founder" desc="Is a diligent and hard worker who is hands down the most popular person of the group." mail="akhil@gmail.com" />
        <AbtCard name="AKS" fullName="Atharv Sawant" role="Co-Founder" desc="A very hardworking person who makes everything seem possible." mail="aks@gmail.com" />
        <AbtCard name="Ayush" fullName="Ayush Gupta" role="Co-Founder" desc="Also a hardworking a diligent person who doesn't let go of a concept until he fully grasps it." mail="ayush@gmail.com" />
        <AbtCard name="Atharva" fullName="Atharva Dudhe" role="Co-Founder" desc="A football lover who always does what he says he'll do.(Sticks by his word)" mail="atharva@gmail.com" />
    </div>

    </div>
  )
}

export default About2