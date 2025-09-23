import type { Section } from '@/types';

export const sections: Section[] = [
  {
    title: 'Projects',
    items: [
      {
        name: 'Signal',
        description:
          'A portfolio reimagined as a multi-service agentic platform.',
        url: 'https://signal.abruno.net',
        color: 'text-tony-mint',
        icon: 'signal-icon',
        iconWidth: 16,
        iconHeight: 16,
      },
      {
        name: 'Case Studies',
        description: 'In-depth looks at projects and process.',
        url: 'https://studies.abruno.net',
        color: 'text-tony-blueberry',
        icon: 'studies-icon',
        iconWidth: 15,
        iconHeight: 14,
      },
      {
        name: 'Notes',
        description: 'Reflections on leadership, engineering, and AI.',
        url: 'https://thoughts.abruno.net',
        color: 'text-tony-cherry',
        icon: 'thoughts-icon',
        iconWidth: 20,
        iconHeight: 18,
      },
    ],
  },
  {
    title: 'Tools and experiments',
    items: [
      {
        name: 'dev-config',
        description:
          'Shared developer tooling for ESLint, Prettier, and commits.',
        url: 'https://npmjs.com/package/abruno-dev-config',
      },
      {
        name: 'gpt-auto-commit',
        description: 'AI that creates commit messages for you.',
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
