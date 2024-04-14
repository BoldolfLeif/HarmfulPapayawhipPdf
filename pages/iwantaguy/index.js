import Link from "next/link";

const Iwantaguy = () => {
  return ( 
    <div>
      <h1>I want a GUY</h1>
      <p>Page lists option to choose to find a guy to do stuff OR to do stuff for</p>
      <p><Link href={'/iwantaguy/todostuffforme/articles'}>To do stuff FOR ME</Link></p>
      <p><Link href={'/iwantaguy/todostufffor/articles'}>To do stuff FOR</Link></p>
      <p><Link href={'/'}>BACK HOME</Link></p>
    </div>
   );
}
 
export default Iwantaguy;