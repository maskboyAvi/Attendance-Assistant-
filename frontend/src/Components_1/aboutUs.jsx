import React from "react";
import TeamCard from "./teamCard";
import CSNPSR from "../Images/Main/CSNPSR.jpeg";
import Aviral from "../Images/Main/Aviral.jpeg";
import Akhil from "../Images/Main/Akhil.jpeg";
import AKS from "../Images/Main/AKS.jpeg";
import Ayush from "../Images/Main/Ayush.jpeg";
import Atharva from "../Images/Main/Vishal.jpg";
import Header from "./header";
import Footer from "./footer";
import abt from "./aboutUs.module.css";

function Team() {
  return (
    <>
    <Header />
    <body className={abt["about-body"]}>
    <div className={abt["section"]}>
      <h2 style={{ textAlign: "center" }} className={abt["ourteam","about-h2"]}>
        <u>Our Team</u>
      </h2>
      <div className={abt["row"]}>
        <div className={abt["column"]}>
          <TeamCard
            imageSrc={CSNPSR}
            name="Pavana Saketha Ram"
            role="Team Lead"
            description="A 'know and own-it-all' who is a very generous and helpful person."
            email="pavan.sakethram@gmail.com"
          />
        </div>

        <div className={abt["column"]}>
          <TeamCard
            imageSrc={Aviral}
            name="Aviral Katiyar"
            role="Co-Founder"
            description="Anime lover with a knack of helping people and is also a quick learner. (The MOM of the group)"
            email="aviral@gmail.com"
          />
        </div>

        <div className={abt["column"]}>
          <TeamCard
            imageSrc={Akhil}
            name="Bongirwar Akhilender"
            role="Co-Founder"
            description="Is a diligent and hard worker who is hands down the most popular person of the group."
            email="akhil@gmail.com"
          />
        </div>
      </div>
      <div className={abt["row row1"]}>
        <div className={abt["column"]}>
          <TeamCard
            imageSrc={AKS}
            name="Atharv Sawant"
            role="Co-Founder"
            description="A very hardworking person who makes everything seem possible."
            email="aks@gmail.com"
          />
        </div>

        <div className={abt["column"]}>
          <TeamCard
            imageSrc={Ayush}
            name="Ayush Gupta"
            role="Co-Founder"
            description="A hardworking and diligent person who doesn't let go of a concept until he fully grasps it."
            email="ayush@gmail.com"
          />
        </div>

        <div className={abt["column"]}>
          <TeamCard
            imageSrc={Atharva}
            name="Vishal"
            role="Co-Founder"
            description="SANGEET PREMI -> A music lover who often remain lost in his music"
            email="vishal@gmail.com"
          />
        </div>
      </div>
    </div>
    </body>
    <Footer />
    </>
  );
}

export default Team;