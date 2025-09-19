import { sections } from '@/data/sections';
import { Section } from '@/components/Section';
import { Currently } from '@/components/Currently';
import avatar from '@/assets/anthony-bruno-avatar@2x.png';

export function App() {
  return (
    <div class="justify-center flex gap-14 py-24 px-10">
      <aside class="hidden md:block w-full max-w-[250px]">
        <div class="rounded-full overflow-hidden bg-tony-300 dark:bg-tony-600 aspect-square p-3.5">
          <img
            src={avatar}
            alt="Avatar of Anthony Bruno"
            class="dark:opacity-75"
          />
        </div>
      </aside>
      <div class="max-w-md ">
        <header class="pb-9 space-y-3">
          <h1 class="text-2xl md:text-[40px] leading-none font-bold md:tracking-tight">
            Anthony Bruno
          </h1>
          <h2 class="text-xl leading-tight font-medium text-tony-400 dark:text-tony-300">
            Engineering Manager who cares about people, process, and shipping
            great products.
          </h2>
        </header>
        <main class="space-y-12">
          {sections.map((section) => (
            <Section key={section.title} section={section} />
          ))}
          <Currently />
        </main>
        <footer class="pt-40">
          <span class="text-tony-400">&copy; {new Date().getFullYear()}</span>
        </footer>
      </div>
    </div>
  );
}
