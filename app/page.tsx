import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="font-medium text-2xl">Next steps</h2>
      </div>

      <footer className="mt-12 border-t border-gray-200 pt-8 text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  );
}
