function RoofBase({ children }) {
  return (
    <svg className="service-icon" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

function RepairIcon() {
  return (
    <RoofBase>
      <path d="M8 36 L32 16 L56 36" />
      <path d="M16 34 L16 52 L48 52 L48 34" />
      <path d="M22 39 L42 39" />
      <path d="M24 45 L40 45" />
      <path d="M37 18 L48 8" />
      <path d="M43 7 L51 15" />
      <path d="M42 13 L51 22" />
    </RoofBase>
  );
}

function ReplacementIcon() {
  return (
    <RoofBase>
      <path d="M7 35 L32 14 L57 35" />
      <path d="M15 33 L15 53 L49 53 L49 33" />
      <path d="M20 38 L44 38" />
      <path d="M20 44 L44 44" />
      <path d="M20 50 L44 50" />
      <path d="M26 28 L38 28" />
      <path d="M30 24 L34 24" />
    </RoofBase>
  );
}

function InspectionIcon() {
  return (
    <RoofBase>
      <path d="M9 34 L32 16 L55 34" />
      <path d="M17 33 L17 50 L33 50" />
      <path d="M24 39 L36 39" />
      <path d="M24 45 L32 45" />
      <circle cx="43" cy="44" r="8" />
      <path d="M49 50 L56 57" />
    </RoofBase>
  );
}

function UrgentIcon() {
  return (
    <RoofBase>
      <path d="M8 35 L32 16 L56 35" />
      <path d="M16 34 L16 52 L48 52 L48 34" />
      <path d="M33 25 L28 37 L36 37 L31 49" />
      <path d="M50 13 L50 21" />
      <path d="M50 27 L50.1 27" />
    </RoofBase>
  );
}

function ShingleIcon() {
  return (
    <RoofBase>
      <path d="M8 43 L32 20 L56 43" />
      <path d="M15 42 L49 42" />
      <path d="M20 37 L44 37" />
      <path d="M24 32 L40 32" />
      <path d="M19 47 L29 47" />
      <path d="M35 47 L45 47" />
      <path d="M23 53 L41 53" />
    </RoofBase>
  );
}

function FlatIcon() {
  return (
    <RoofBase>
      <path d="M10 28 L54 20 L54 42 L10 50 Z" />
      <path d="M16 31 L16 46" />
      <path d="M26 29 L26 44" />
      <path d="M36 27 L36 42" />
      <path d="M46 25 L46 40" />
      <path d="M25 20 L25 13 L35 13 L35 18" />
      <path d="M42 17 L42 10 L50 10 L50 15" />
    </RoofBase>
  );
}

function EavesIcon() {
  return (
    <RoofBase>
      <path d="M9 30 L32 14 L55 30" />
      <path d="M15 31 L49 31" />
      <path d="M17 36 L47 36" />
      <path d="M47 36 C51 36 53 38 53 41 C53 44 51 46 48 46" />
      <path d="M48 46 L48 55" />
      <path d="M48 55 C48 58 53 58 53 55" />
      <path d="M20 42 L36 42" />
    </RoofBase>
  );
}

function SoffitIcon() {
  return (
    <RoofBase>
      <path d="M8 31 L32 14 L56 31" />
      <path d="M15 33 L49 33" />
      <path d="M19 38 L45 38" />
      <path d="M19 43 L45 43" />
      <path d="M19 48 L45 48" />
      <path d="M23 53 L41 53" />
      <circle cx="25" cy="43" r="1.2" />
      <circle cx="32" cy="43" r="1.2" />
      <circle cx="39" cy="43" r="1.2" />
    </RoofBase>
  );
}

function SidingIcon() {
  return (
    <RoofBase>
      <path d="M12 25 L32 13 L52 25" />
      <path d="M17 25 L17 54 L47 54 L47 25" />
      <path d="M21 31 L43 31" />
      <path d="M21 36 L43 36" />
      <path d="M21 41 L43 41" />
      <path d="M21 46 L43 46" />
      <path d="M21 51 L43 51" />
    </RoofBase>
  );
}

export default function ServiceIcon({ type }) {
  const icons = {
    repair: RepairIcon,
    replacement: ReplacementIcon,
    inspection: InspectionIcon,
    urgent: UrgentIcon,
    shingle: ShingleIcon,
    flat: FlatIcon,
    eaves: EavesIcon,
    soffit: SoffitIcon,
    siding: SidingIcon
  };

  const Icon = icons[type] || ReplacementIcon;
  return <Icon />;
}
