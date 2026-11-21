import { brand } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="bg-night py-8 text-sm text-slate-300">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-between gap-3 px-6">
        <span>{brand}</span><span>Software, automation, AI and optimization</span>
      </div>
    </footer>
  );
}
