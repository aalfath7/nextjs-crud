import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>CRUD with Next JS</h1>
      <Link href="/users">Start</Link>
    </div>
  );
}
