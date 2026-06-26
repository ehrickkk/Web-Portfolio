export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="section-container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="font-display text-sm font-semibold text-heading">
          Eric Lor
        </p>
        <p className="text-sm text-muted">
          &copy; {year} Eric Lor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
