export function BrandLogo({ size = "header" }: { size?: "header" | "preloader" }) {
  return (
    <span className={`brand-logo brand-logo--${size}`} aria-label="Shah Faisal">
      <span className="brand-logo__text">FAISAL</span>
      <span className="brand-logo__dot" aria-hidden="true" />
    </span>
  );
}
