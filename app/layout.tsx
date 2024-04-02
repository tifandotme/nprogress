import type { Metadata } from "next"
import { NProgressProvider } from "./nprogress"
import "./globals.css"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Next.js NProgress Example",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <NProgressProvider>
          <header className="py-10 flex w-full gap-10 justify-center items-center text-center">
            <Link
              className="p-2 min-w-[100px] bg-neutral-800 hover:bg-neutral-700"
              href="/"
            >
              /
            </Link>
            <Link
              className="p-2 min-w-[100px] bg-neutral-800 hover:bg-neutral-700"
              href="/foo"
            >
              /foo
            </Link>
          </header>

          <main className="max-w-screen-sm mx-auto">{children}</main>
        </NProgressProvider>
      </body>
    </html>
  )
}
