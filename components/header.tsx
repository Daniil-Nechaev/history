"use client"

import React, { type PropsWithChildren } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

const LinkButton = ({ href, children }: PropsWithChildren<{ href: string }>) => {
  const pathname = usePathname()
  return (
    <Button
      variant="link"
      onClick={(event) => {
        if (pathname !== "/") {
          return;
        }
        event.preventDefault()

        if (!href.match(/\/#([A-Za-z0-9]+)/g)) {
          toast("Что-то пошло не так :(", {
            description: `Похоже, что ссылка ${href} не хэшовая`
          })
          return
        }
        const id = href.slice(2)
        const heading = document.getElementById(id)
        if (!heading) {
          toast("Что-то пошло не так :(", {
            description: `Не удалось найти элемент с id #${id}`
          })
          return;
        }
        heading.scrollIntoView({ behavior: "smooth", block: "start"})
      }}
      asChild
    >
      <Link href={href}>
        {children}
      </Link>
    </Button>
  );
};

export const Header = () => {

  return (
    <header className="w-full h-16 flex justify-center items-center sticky shadow top-0 bg-background z-30">
      <nav className="gap-2">
        <LinkButton href="/#articles">Статьи</LinkButton>
        <LinkButton href="/#quizes">Квизы</LinkButton>
      </nav>
    </header>
  );
};