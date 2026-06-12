import { services, type ServiceItem } from "./services";

export function getAdjacentServices(id: string): {
  prev: ServiceItem | null;
  next: ServiceItem | null;
} {
  const index = services.findIndex((s) => s.id === id);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? services[index - 1]! : null,
    next: index < services.length - 1 ? services[index + 1]! : null,
  };
}
