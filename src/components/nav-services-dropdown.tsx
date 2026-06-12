"use client";

import Link from "next/link";
import { services } from "@/data/services";
import { routes } from "@/lib/routes";

export function NavServicesDropdown() {
  return (
    <li className="nav-dropdown">
      <Link href={routes.solutions} className="nav-dropdown-trigger">
        שירותים
        <span className="nav-dropdown-chevron" aria-hidden="true">
          ▾
        </span>
      </Link>
      <ul className="nav-dropdown-menu" role="menu">
        <li role="none">
          <Link href={routes.solutions} className="nav-dropdown-item nav-dropdown-item-all" role="menuitem">
            כל השירותים
          </Link>
        </li>
        {services.map((service) => (
          <li key={service.id} role="none">
            <Link
              href={`/services/${service.id}`}
              className="nav-dropdown-item"
              role="menuitem"
            >
              <span className="nav-dropdown-num">{service.num}</span>
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
