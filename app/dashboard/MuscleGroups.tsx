"use client";

import styles from "./styles.module.css";
import { Button } from "@mantine/core";
import { useEffect, useState } from "react";

const muscleGroups = [
  "Neck",
  "Shoulders",
  "Chest",
  "Trunk",
  "Lower Back",
  "Hips",
  "Legs",
  "Ankles",
];

export const MuscleGroups = () => {
  const [activeLink, setActiveLink] = useState(muscleGroups[0]);

  useEffect(() => {
    console.log("activeLink", activeLink);
  }, [activeLink]);

  const muscleGroupLinks = muscleGroups.map((muscleGroup) => (
    <Button
      key={muscleGroup}
      variant={activeLink === muscleGroup ? "filled" : "light"}
      onClick={() => setActiveLink(muscleGroup)}
      // set active styles
    >
      {muscleGroup}
    </Button>
  ));

  return <div className={styles.list}>{muscleGroupLinks}</div>;
};
