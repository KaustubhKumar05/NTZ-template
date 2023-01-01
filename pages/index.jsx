import { useState } from 'react';
import Head from 'next/head';
import {
    LegoIcon,
    WebhookIcon,
    DownloadIcon,
    LayoutIcon,
    GithubIcon
} from '@100mslive/react-icons';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';

const tech = [
    {
        title: 'Next.js',
        subText: "Flexible React framework that's fast - supports SSR, SSG",
        link: 'https://nextjs.org/docs/getting-started'
    },

    {
        title: 'TailwindCSS',
        subText: 'A utility-first CSS framework for rapid styling',
        link: 'https://tailwindcss.com/docs/installation'
    },
    {
        title: 'Zustand',
        subText: 'A small, fast and scalable bearbones state-management solution',
        link: 'https://github.com/pmndrs/zustand'
    },
    {
        title: 'React Icons',
        subText: 'Icon library developed by 100ms',
        link: 'https://ui.100ms.live/'
    }
];
const hooks = [
    {
        title: 'useLocalStorage',
        subText: 'Create states that persist using local storage',
        link: 'https://github.com/KaustubhKumar05/NTZ-template/blob/main/hooks/useLocalStorage.js'
    },
    {
        title: 'useDebounce',
        subText: 'Handles debounce for values that change quickly',
        link: 'https://github.com/KaustubhKumar05/NTZ-template/blob/main/hooks/useDebounce.js'
    },
    {
        title: 'useOnClickOutside',
        subText: 'Listen for clicks outside the element of interest',
        link: 'https://github.com/KaustubhKumar05/NTZ-template/blob/main/hooks/useOnClickOutside.js'
    }
];
const sections = [
    { title: 'Starter template for frontend projects', array: tech, icon: <LegoIcon /> },
    { title: 'Useful custom hooks:', array: hooks, icon: <WebhookIcon /> },
    { title: 'Custom components and design system:', array: [], icon: <LayoutIcon /> }
];

export default function Home() {
    const [modal, setModal] = useState(false);
    return (
        <>
            <Head>
                <title>NTZ Template</title>
                <meta name="description" content="Start building with NTZ" />
                <meta
                    property="og:image"
                    content="https://user-images.githubusercontent.com/57426646/210043800-6e92c393-9b91-4799-93f2-bd421c278584.png"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="p-4 md:p-6 bg-background-default min-h-screen">
                <Modal
                    setModal={setModal}
                    innerContent={
                        <div className="max-w-sm my-2">
                            <p className="text-primary-light">
                                This is a generic modal component - all of the content inside it is
                                passed as a prop.
                            </p>
                            <p className="text-primary-light">
                                It closes when the user clicks{' '}
                                <span className="text-primary-lighter">outside</span> its body
                            </p>
                            <Button
                                className="mt-5 float-right text-sm"
                                onClick={() => setModal(false)}>
                                Close
                            </Button>
                        </div>
                    }
                    modal={modal}
                />
                <div className="flex gap-2 items-center text-primary-dark">
                    <p className="font-bold text-3xl text-primary-default">NTZ template</p>

                    <a
                        href="https://github.com/KaustubhKumar05/NTZ-template"
                        target="_blank"
                        rel="noreferrer">
                        <GithubIcon style={{ height: '32px', width: '32px' }} />
                    </a>
                </div>
                {sections.map((section, id) => (
                    <div key={id}>
                        <p className="text-primary-light font-semibold text-xl mb-4 mt-8 flex gap-2 items-center">
                            {section.icon} {section.title}
                        </p>
                        <ul className="text-primary-light text-xl flex gap-4 flex-wrap">
                            {section?.array.map((item, id) => (
                                <a href={item.link} key={id}>
                                    <li className="text-primary-light p-3 text-lg border-bord-light border-2 rounded-lg w-full md:max-w-[265px] font-medium h-full hover:bg-background-light hover:border-bord-default">
                                        {item.title}{' '}
                                        <p className="text-primary-lighter font-normal">
                                            {item.subText}
                                        </p>
                                    </li>
                                </a>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="flex gap-2 items-center">
                    <Input placeholder="Placeholder text" className="text-sm p-2" />
                    <Button className="text-sm" onClick={() => setModal(true)}>
                        View modal
                    </Button>
                </div>
                <div className="flex gap-3 mt-4">
                    <Button className="text-sm">Standard</Button>
                    <Button variant="outlined" className="text-sm">
                        Outlined
                    </Button>
                    <Button variant="icon" className="text-sm gap-1">
                        <DownloadIcon style={{ height: '20px', width: '20px' }} />
                        Icon
                    </Button>
                    <Button variant="danger" className="text-sm">
                        Danger
                    </Button>
                </div>
            </main>
        </>
    );
}
