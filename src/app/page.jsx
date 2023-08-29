'use client'
import LandingComponent from "@/components/Landing/LandingComponent";
import SwitchTheme from "@/components/switches/SwitchTheme";

export default function Home() {
  return (
    <main className="flex bg-yellow-100 dark:bg-slate-700 flex-col p-24">
      <SwitchTheme />
      <LandingComponent/>
    </main>
  );
}
