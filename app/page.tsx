import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <nav className="w-full flex justify-center border-b border-gray-200 h-16 bg-white">
        <div className="w-full flex justify-between items-center p-3 px-8 text-sm">
          <div className="flex gap-5 items-center font-semibold">
            <Link href={"/"} className="text-gray-900">
              Next.js Supabase Starter
            </Link>
            <div className="flex items-center gap-2">
              <DeployButton />
            </div>
          </div>
          <div className="flex items-center gap-4">
            {!hasEnvVars ? (
              <EnvVarWarning />
            ) : (
              <Suspense>
                <AuthButton />
              </Suspense>
            )}
            <ThemeSwitcher />
          </div>
        </div>
      </nav>

      <div className="flex-1 flex flex-col gap-20 items-center py-12">
        <div className="w-full max-w-4xl px-8">
          <Hero />
          <div className="mt-12 flex-1 flex flex-col gap-6">
            <h2 className="font-medium text-xl mb-4">Next steps</h2>
            {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
          </div>
        </div>

        <footer className="w-full flex items-center justify-center border-t border-gray-200 mx-auto text-center text-xs gap-8 py-12 bg-white mt-auto">
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
    </>
  );
}
