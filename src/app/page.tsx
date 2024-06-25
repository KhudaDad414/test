import Image from "next/image";
import Client from './client';

export default function Home() {
  console.log("Hello from the server Component.");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Client />
    </main>
  );
}
