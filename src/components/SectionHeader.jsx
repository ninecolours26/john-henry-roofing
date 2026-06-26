export default function SectionHeader({ kicker, title, children, align = "center" }) {
  return (
    <div className={`section-heading-wrap ${align === "left" ? "align-left" : ""}`}>
      {kicker && <div className={`section-kicker ${align === "left" ? "align-left" : ""}`}>{kicker}</div>}
      {title && <h2>{title}</h2>}
      {children && <p>{children}</p>}
    </div>
  );
}
