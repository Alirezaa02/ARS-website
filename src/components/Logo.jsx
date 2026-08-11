import { Link } from "react-router-dom";
import "../styles/ars-logo.css";

export default function Logo({ light = false }) {
  return (
    <Link
      to="/"
      className={`ars-logo${light ? " ars-logo--light" : ""}`}
      aria-label="ARS home"
    >
      <span className="ars-mark" aria-hidden="true">
        <span className="ars-screen">
          <span className="ars-scan"></span>
          <span className="ars-caret"></span>
        </span>
        <span className="ars-base"></span>
      </span>
      <span className="ars-word">
        ARS
        <small>AI support &amp; web</small>
      </span>
    </Link>
  );
}
