import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const navItems = [
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Accreditations", to: "/accreditations" },
  { label: "Contact", to: "/contact" },
];



const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const isTransparentRoute = (pathname) => {
  return (
    pathname === "/" ||
    pathname === "/products" ||
    pathname === "/about" ||
    pathname === "/contact" ||
    pathname === "/accreditations" ||
    pathname.startsWith("/products/")
  );
};

const hasTransparentHeader = isTransparentRoute(location.pathname);

const showSolid = scrolled || !hasTransparentHeader;

  const { scrollYProgress } = useScroll();
  const progressWidth = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolid
          ? "bg-[var(--cream)]/95 backdrop-blur-sm border-b border-[var(--line)]"
          : "bg-transparent"
      }`}
    >
      <motion.div
        style={{ scaleX: progressWidth }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--paprika)] origin-left"
      />

      <div className="container-px flex items-center justify-between h-20">

        {/* Logo — white before scroll, ink after */}
        <Link
          to="/"
          onClick={() => {
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display text-xl md:text-2xl tracking-tight transition-colors duration-300"
        >
          <span className={showSolid ? "text-[var(--ink)]" : "text-[var(--cream)]"}>
            Mavio{" "}
          </span>
          <span className={showSolid ? "text-[var(--paprika)]" : "text-[var(--cream)]/70"}>
            Global
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => {
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "text-[var(--paprika)]"
                    : showSolid
                    ? "text-[var(--charcoal)] hover:text-[var(--paprika)]"
                    : "text-[var(--cream)]/85 hover:text-[var(--cream)]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger — white before scroll */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
        >
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            } ${showSolid  ? "bg-[var(--ink)]" : "bg-[var(--cream)]"}`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            } ${showSolid  ? "bg-[var(--ink)]" : "bg-[var(--cream)]"}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[var(--cream)] border-t border-[var(--line)] px-6 py-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-[var(--charcoal)]"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;