import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React, { ReactNode } from 'react';

interface PageSectionProps {
  title: string;
  children: ReactNode;
  link?: {
    href: string;
    text: string;
    icon?: ReactNode;
  };
  extraButtons?: ReactNode;
  isBlogArticle?: Boolean;
  className?: string;
}

const PageSection: React.FC<PageSectionProps> = ({
  title,
  children,
  link,
  extraButtons,
  isBlogArticle,
  className = '',
}) => {
  return (
    <section className='mx-2 flex flex-col items-start rounded-lg border bg-white text-gray-950 dark:border-bgDark dark:bg-bgDark/80 dark:text-zinc-300'>
      <div
        className={`sticky top-[-0.1px] z-30 flex w-full select-none flex-row items-center justify-between gap-3 rounded-t-lg border-b bg-white px-4 py-3 dark:border-bgDark dark:bg-bgDark print:hidden`}
      >
        {isBlogArticle && (
          <Link href='/blog'>
            <button className='rounded-full border border-zinc-100 p-1 text-sm hover:border-zinc-200 hover:bg-zinc-100 dark:border-bgDark dark:hover:border-gray-700 dark:hover:bg-gray-950'>
              <ArrowLeftIcon className='h-5 w-5' />
            </button>
          </Link>
        )}

        <div
          className={`w-full text-start text-sm font-semibold ${isBlogArticle && 'font-normal'} text-gray-700 dark:text-zinc-100`}
        >
          <p className='line-clamp-1 w-full'>{title}</p>
        </div>

        {link && (
          <div className='w-full text-end'>
            <Link
              href={link.href}
              className='flex w-full items-center justify-end gap-2 rounded-full text-sm font-medium text-gray-700 transition-all hover:text-blue-500 dark:border-bgDark dark:text-zinc-300 md:flex'
            >
              {link.text} {link.icon ?? <ArrowRightIcon className='h-4 w-4' />}
            </Link>
          </div>
        )}
        {extraButtons}
      </div>
      <div className={`mx-auto w-full p-4 ${className}`}>{children}</div>
    </section>
  );
};

export default PageSection;
