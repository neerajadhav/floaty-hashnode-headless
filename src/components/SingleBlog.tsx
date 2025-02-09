import Link from 'next/link';
import { resizeImage } from '@/utils/image';
import { CoverImage } from './CoverImage';
import { ImagePlaceholder } from './ImagePlaceholder';

interface SingleBlogProps {
  blogInfo: {
    __typename?: 'Post' | undefined;
    id: string;
    slug: string;
    title: string;
    brief: string;
    publishedAt?: any;
    coverImage?:
      | {
          __typename?: 'PostCoverImage' | undefined;
          url: string;
        }
      | null
      | undefined;
  };
}

export const SingleBlog = (props: SingleBlogProps) => {
  const { brief, title, slug } = props.blogInfo;
  const coverImageSrc = props.blogInfo.coverImage?.url
    ? resizeImage(props.blogInfo.coverImage.url, {
        w: 1600,
        h: 840,
        c: 'thumb',
      })
    : undefined;

  return (
    <Link
      href={`/${slug}`}
      className='group w-full items-center rounded-2xl border border-zinc-100 px-4 py-4 text-slate-950 hover:border-zinc-200 sm:max-w-72 md:max-w-80 lg:max-w-96 dark:border-slate-800 dark:hover:border-slate-700'
    >
      <article className='relative flex w-full flex-col gap-3'>
        {coverImageSrc ? (
          <CoverImage title={title} src={coverImageSrc} priority={true} />
        ) : (
          <ImagePlaceholder />
        )}
        <h3 className='line-clamp-2 text-xl font-semibold dark:text-zinc-100'>
          {title}
        </h3>
        <p className='line-clamp-3 text-justify text-sm leading-snug text-slate-500 dark:text-zinc-300'>
          {brief}
        </p>
      </article>
    </Link>
  );
};
