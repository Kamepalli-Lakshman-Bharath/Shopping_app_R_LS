"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [crtCnt, setCrtCnt] = useState(0);
  const { push } = useRouter();
  useEffect(() => {
    setCrtCnt(JSON.parse(localStorage.getItem("CART_COUNT")));
  });
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <a href="/">
          <div className={styles.logo}>
            <span className={styles.logo_1}>SHOP</span>LANE
          </div>
        </a>
        <div className={styles.content}>
          <Link href="/#clothing">CLOTHING</Link>
          <Link href="/#accessories">ACCESSORIES</Link>
        </div>
      </div>
      <div onClick={() => push("/Cart")} className={styles.cart}>
        <img src="/cart.svg" alt="cart" />

        {crtCnt > 0 && <p className={styles.cartCount}>{crtCnt}</p>}
      </div>
    </nav>
  );
}
