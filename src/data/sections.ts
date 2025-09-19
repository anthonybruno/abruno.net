import type { Section } from '@/types';

export const sections: Section[] = [
  {
    title: 'Projects',
    items: [
      {
        name: 'Signal',
        description:
          'Interactive portfolio built as a multi-service AI system.',
        url: 'https://signal.abruno.net',
        color: 'text-tony-mint',
        icon: 'signal-icon',
        iconWidth: 16,
        iconHeight: 16,
      },
      {
        name: 'Studies',
        description: 'Deep dives on some recent projects.',
        url: 'https://studies.abruno.net',
        color: 'text-tony-blueberry',
        icon: 'studies-icon',
        iconWidth: 15,
        iconHeight: 14,
      },
      {
        name: 'Thoughts',
        description: 'I guess you gotta write stuff every now and then.',
        url: 'https://thoughts.abruno.net',
        color: 'text-tony-cherry',
        icon: 'thoughts-icon',
        iconWidth: 20,
        iconHeight: 18,
      },
    ],
  },
  {
    title: 'Side Projects',
    items: [
      {
        name: 'dev-config',
        description: 'Shared tooling for ESLint, Prettier, and commits.',
        url: 'https://npmjs.com/package/abruno-dev-config',
      },
      {
        name: 'gpt-auto-commit',
        description: 'CLI to automatically generate commits with GPT-4o.',
        url: 'https://npmjs.com/package/gpt-auto-commit',
      },
      {
        name: 'Copy mailto Chrome Extension',
        description:
          'Copy those pesky mailto links directly to your clipboard.',
        url: 'https://chromewebstore.google.com/detail/copy-email-links/ocffkcplakjlhbaadfcokiiflaelnaib',
      },
    ],
  },
  {
    title: 'Where you can find me',
    items: [
      {
        name: 'Email',
        url: 'mailto:anthonybruno@gmail.com',
      },
      {
        name: 'Github',
        url: 'https://github.com/anthonybruno',
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/brunotony',
      },
    ],
  },
];
