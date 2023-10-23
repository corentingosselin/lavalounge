import Image from "next/image";
import React from "react";

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "black",
      padding: "10px 20px",
      opacity: "0.6",
      fontFamily: "Roboto Mono, monospace",
    },
    navbarItems: {
      display: "flex",
      gap: "20px",
    },
    navLink: {
      color: "white",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.navbar}>
      <div>
        <Image
          src="/logo-lava.png"
          alt="Logo"
          style={styles.logo}
          width={50}
          height={100}
        />
      </div>
      <div style={styles.navbarItems} className="flex space-x-4">
        <div>
          <a href="/events-calendar" style={styles.navLink}>
            events-calendar
          </a>
        </div>
        <div>
          <a href="/creations" style={styles.navLink}>
            creations
          </a>
        </div>
      </div>
      <div>
        <a href="/about" style={styles.navLink}>
          about
        </a>
      </div>
    </div>
  );
};

export default Navbar;
