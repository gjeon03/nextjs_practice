import Link from "next/link";
import { useRouter } from "next/router";
import css from "styled-jsx/css";

const style = css`
  a {
    text-decoration: none;
  }
  .active {
    color: tomato;
  }
`;

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{style}</style>
    </nav>
  );
}
