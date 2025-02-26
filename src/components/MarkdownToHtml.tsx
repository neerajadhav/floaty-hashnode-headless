import { useEmbeds } from '../../hooks/useEmbeds';
import { markdownToHtml } from '../utils/markdownToHtml';
import { memo } from 'react';

type Props = {
  contentMarkdown: string;
};

const _MarkdownToHtml = ({ contentMarkdown }: Props) => {
  const content = markdownToHtml(contentMarkdown);
  useEmbeds({ enabled: true });

  return (
    <div
      className='hashnode-content-style mx-auto w-full md:max-w-screen-md dark:text-yellow-50/80'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export const MarkdownToHtml = memo(_MarkdownToHtml);
