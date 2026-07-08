"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import Container from "@/components/ui/container";
import { navigation } from "@/data/navigation";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);


const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-4 flex-shrink-0"
          >
            <Image
              src="/images/conference-logo.jpeg"
              alt="ICFCINT"
              width={48}
              height={48}
              className="rounded"
            />

            <div className="leading-tight">
              <div
                className={`text-2xl font-bold transition-colors ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                ICFCINT 2027
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? scrolled
                        ? "text-[#00629B]"
                        : "text-white"
                      : scrolled
                      ? "text-slate-700 hover:text-[#00629B]"
                      : "text-blue-100 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Navigation */}

          <div className="lg:hidden">
            <Sheet
              open={mobileMenuOpen}
              onOpenChange={setMobileMenuOpen}
            >
              <SheetTrigger className={`rounded-lg p-2 transition ${
                  scrolled
                    ? "text-slate-900 hover:bg-slate-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Menu size={28} />
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[300px]"
              >
                <div className="mt-8 flex flex-col">

                  <h2 className="mb-6 text-xl font-bold text-[#003B71]">
                    ICFCINT 2027
                  </h2>

                  {navigation.map((item) => {
                    const active = pathname === item.href;

                    return (
                      // <SheetClose
                      //   key={item.href}
                      //   asChild
                      // >
                      //   <Link
                      //     href={item.href}
                      //     className={`rounded-lg px-3 py-3 transition ${
                      //       active
                      //         ? "bg-[#00629B] text-white"
                      //         : "text-slate-700 hover:bg-slate-100"
                      //     }`}
                      //   >
                      //     {item.label}
                      //   </Link>
                      // </SheetClose>
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`rounded-lg px-3 py-3 transition ${
                          active
                            ? "bg-[#00629B] text-white"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}