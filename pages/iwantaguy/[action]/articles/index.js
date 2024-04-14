import Link from "next/link";
import { useRouter } from "next/router";

const articles = () => {
  const router = useRouter();
  return ( 
    <div>
      <h1>Lists all articles for: {router.query.action}</h1>
      <p><Link href={`/iwantaguy/${router.query.action}/articles/ARTICLEID_12345`}>ARTICLEID_12345</Link></p>
      <p><Link href={`/iwantaguy/${router.query.action}/articles/ARTICLEID_67890`}>ARTICLEID_67890</Link></p>
      <p><Link href={`/iwantaguy`}>RESTART SEARCH</Link></p>
    </div>
   );
}
 
export default articles;