'use client';

import React from 'react';
import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MuscleGroups } from './MuscleGroups';

export const BasicAppShell = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <h3>Header</h3>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
        <h3>Header</h3>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <h3>Muscle Groups</h3>
        <MuscleGroups />
      </AppShell.Navbar>
      <AppShell.Main>
        <h1>Main Content</h1>
        {children}
      </AppShell.Main>
    </AppShell>
  );
};
