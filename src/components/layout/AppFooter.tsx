/** Quiet credit line at the foot of every page. ObGynVault is part of the OrthoVault family. */
export function AppFooter() {
  const year = Math.max(2026, new Date().getFullYear());
  return (
    <footer className="px-4 pb-4 pt-10 text-center text-[11px] leading-relaxed text-navy-400 md:px-6">
      <p>
        ObGynVault is an <span className="font-semibold text-navy-500">OrthoVault</span> product
      </p>
      <p>© {year} OrthoVault. All rights reserved. · Dr. Devarsh Goyal</p>
    </footer>
  );
}
