import Link from "next/link";

import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">React Pets</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/sign-in">Account</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
