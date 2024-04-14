import Link from "next/link";

export default function Home() {
  return <div>
    <h1>THIS IS HOME</h1>
    <p><Link href="/iwantaguy">CHOOSE AN ACTION</Link></p>
    <p><Link href="/account">ACCOUNT PAGE</Link></p>
  </div>;
}
