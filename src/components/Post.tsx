import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/utils/consts/format-date';
import { ArrowTrendingUpIcon, ClockIcon } from '@heroicons/react/24/outline';
import { ImagePlaceholder } from './ImagePlaceholder';
import { resizeImage } from '@/utils/image';
import { getBlurDataUrl } from '@/utils/getBlurDataUrl';

interface PostProps {
  postInfo:
    | {
        __typename?: 'Post' | undefined;
        id: string;
        slug: string;
        title: string;
        views: number;
        publishedAt: any;
        coverImage?:
          | {
              __typename?: 'PostCoverImage' | undefined;
              url: string;
            }
          | null
          | undefined;
      }
    | undefined;
}

export const Post = (props: PostProps) => {
  const { postInfo } = props;

  if (!postInfo) return null;

  const postImageSrc = postInfo.coverImage?.url
    ? resizeImage(postInfo.coverImage.url, {
        w: 1040,
        h: 585,
        c: 'cover',
      })
    : undefined;

  const blurDataURL = postImageSrc && getBlurDataUrl(postImageSrc);

  return (
    <Link
      href={`/${postInfo.slug}`}
      className='flex w-full flex-col items-center gap-4 rounded-xl border border-zinc-100 px-2 py-2 hover:border-zinc-200 sm:flex-row dark:border-slate-800 dark:hover:border-slate-700'
    >
      <div className='flex aspect-video w-full overflow-hidden rounded-lg sm:max-w-52'>
        {postInfo.coverImage?.url ? (
          <Image
            src={postImageSrc}
            alt='Post Image'
            width={1040}
            height={585}
            className='flex-1'
            placeholder='blur'
            blurDataURL={blurDataURL}
          />
        ) : (
          <ImagePlaceholder />
        )}
      </div>
      <div className='flex w-full flex-col px-3 text-slate-950 dark:text-zinc-300'>
        <h3 className='mb-5 line-clamp-3 text-xl font-semibold md:text-2xl dark:text-zinc-100'>
          {postInfo.title}
        </h3>
        <div className='mb-3 flex w-full flex-row justify-between text-xs'>
          <p className='flex flex-row items-center gap-1'>
            <ClockIcon className='h-4 w-4' />
            {formatDate(postInfo.publishedAt)}
          </p>
          <p className='flex flex-row items-center gap-2'>
            <ArrowTrendingUpIcon className='h-4 w-4' />
            {postInfo.views}
          </p>
        </div>
      </div>
    </Link>
  );
};
