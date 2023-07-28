import Image from "next/image";
import ComingSoon from "./coming-soon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ComingSoon />
    </main>
  );
}
