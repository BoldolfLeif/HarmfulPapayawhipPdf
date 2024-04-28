import Link from "next/link";
import { useRouter } from "next/router";

const ArticlePage = () => {
  const router = useRouter();
  return ( 
    <div>
      <h1>Article Page: {router.query.articleid}</h1>
      <p>A page for: {router.query.action}</p>
      <p><Link href={`/iwantaguy/${router.query.action}/articles`}>BACK TO ALL {router.query.action} ARTICLES</Link></p>
      <p><Link href={`/iwantaguy`}>RESTART SEARCH</Link></p>
    </div>
   );
}
 
export default ArticlePage;