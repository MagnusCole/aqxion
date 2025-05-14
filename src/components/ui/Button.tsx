export function ButtonOutlineGold({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block border border-[color:var(--color-gold)] text-[color:var(--color-gold)] rounded-full px-6 py-2 hover:bg-[color:var(--color-gold)] hover:text-black transition font-medium"
    >
      {children}
    </a>
  );
}
