'use client';

import React, { useState } from 'react';
import { Button } from '@mantine/core';

const muscleGroups = [
  'Neck',
  'Shoulders',
  'Chest',
  'Trunk',
  'Lower Back',
  'Hips',
  'Legs',
  'Ankles',
];

export const MuscleGroups = () => {
  const [activeLink, setActiveLink] = useState(muscleGroups[0]);

  return (
    <>
      {muscleGroups.map((muscleGroup) => (
        <Button
          key={muscleGroup}
          variant={activeLink === muscleGroup ? 'filled' : 'light'}
          onClick={() => setActiveLink(muscleGroup)}
          h="40"
          mt="sm"
        >
          {muscleGroup}
        </Button>
      ))}
    </>
  );
};
