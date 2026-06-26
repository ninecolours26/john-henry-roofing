import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ServiceIcon from "./ServiceIcon";

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <ServiceIcon type={service.iconType} />
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <Link to={service.path}>
        Learn More
        <ArrowRight size={14} />
      </Link>
    </article>
  );
}
