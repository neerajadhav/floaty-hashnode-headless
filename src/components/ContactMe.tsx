'use client';
import { usePublicationQuery } from '../../generated/graphq';
import { ModeToggle } from './DarkModeBtn';
import { SocialLinks } from './SocialLinks';
const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

export const ContactMe = () => {
  const { data } = usePublicationQuery({
    host,
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer className='mb-[4.5rem] select-none lg:mx-0 print:hidden'>
      <div className='flex w-full flex-col items-center gap-6 border border-zinc-200 bg-[#f6f6f6] p-8 text-gray-950 dark:border-black dark:bg-black dark:text-zinc-300'>
        <ModeToggle />

        <h2 className='text-2xl font-bold transition-all duration-300 hover:scale-105 lg:text-3xl'>
          Have a Project Idea?
        </h2>

        <div className='flex flex-col items-center gap-3'>
          <p className='text-lg font-medium lg:text-xl'>Let&apos;s connect</p>
          <SocialLinks />
        </div>

        <p className='text-sm text-gray-500 dark:text-zinc-300'>
          Source Code at{' '}
          <a
            href='//github.com/neerajadhav/floaty-hashnode-headless'
            target='_blank'
            className='font-medium text-gray-700 transition-all hover:text-blue-500 dark:text-zinc-300 dark:hover:text-blue-400'
          >
            GitHub
          </a>
        </p>

        {data?.publication?.title && (
          <p className='flex items-center gap-1 text-sm text-gray-500 dark:text-zinc-300'>
            &copy; {data.publication.title} {currentYear}
          </p>
        )}
      </div>
    </footer>
  );
};
