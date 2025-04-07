// src/app/components/footer/footer.tsx
import React from "react";
import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        borderTop: "1px solid #ccc",
        marginTop: "2rem",
      }}
    >
      <p>© {new Date().getFullYear()} FRANCHIDEV. Tous droits réservés.</p>
      <p>
        <Link href="/mentionsLegales">Mentions légales</Link>
      </p>
    </footer>
  );
};

export default Footer;
