'use client';
import { AppShell, Burger, Group, NavLink, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { IconHome, IconTrophy, IconUsersGroup } from '@tabler/icons-react';

import { Avatar } from '@mantine/core';


const LINKS = [
    { title: 'Home', href: '/', Icon: IconHome },
    { title: 'Tournaments', href: '/tournaments', Icon: IconTrophy },
    { title: 'Players', href: '/players', Icon: IconUsersGroup },
];


export function PressStartShell({ children }: Readonly<{ children: React.ReactNode }>) {
    const [ mobileOpened, { toggle: toggleMobile } ] = useDisclosure();
    const [ desktopOpened, { toggle: toggleDesktop } ] = useDisclosure(true);

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'md',
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                    <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                Navbar
                {LINKS.map(({ title, href, Icon }, index) => {
                    return (
                        <NavLink
                            leftSection={<Icon />}
                            label={title}
                            href={href}
                            key={index}
                        />
                    )
                })}
            </AppShell.Navbar>
            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell>
    );
}