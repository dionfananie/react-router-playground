import { Button } from "~/components/ui/button";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dion Fananie Playground" },
    { name: "description", content: "Web Service playground" },
  ];
}

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  );
}
