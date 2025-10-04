import React from "react";
import styles from "./timeline.module.css";

const TimeLine = () => {
  const items = [

  {
    year: "2025-2026",
    title: "Devoteam, Rabat",
    description:
      "Worked on advanced AI projects involving machine learning, deep learning, reinforcement learning (RL), CrewAI, and n8n automation workflows.",
  },
  {
    year: "2025-2026",
    title: "Freelance Project",
    description:
      "Completed a paid project in web development, gaining practical experience in delivering solutions to a real client.",
  },
  {
    year: "2024-2025",
    title: "TE Connectivity, Tanger",
    description:
      "Internship as my first experience with a large company. I learned a lot about team management, the production chain, and how IT plays a role in programming and controlling machines using sensors.",
  },
  

];


  return (
    <div className={styles.timelineContainer}>
      {items.map((item, index) => (
        <div className={styles.timelineItem} key={index}>
          <div className={styles.icon}></div>
          <div className={styles.timelineContent}>
            <span className={styles.year}>{item.year}</span>
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
