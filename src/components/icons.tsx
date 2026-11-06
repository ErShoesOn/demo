import {
  Briefcase,
  Car,
  CarFront,
  Heart,
  Mountain,
  Plane,
  Route,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIcon } from "@/data/services";
import type { VehicleIcon } from "@/data/vehicles";

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  chauffeur: CarFront,
  ev: Zap,
  airport: Plane,
  corporate: Briefcase,
  wedding: Heart,
  intercity: Route,
};

const vehicleIcons: Record<VehicleIcon, LucideIcon> = {
  sedan: CarFront,
  hatchback: Car,
  suv: Mountain,
  premium: Sparkles,
  ev: Zap,
};

export function ServiceIconMark({
  icon,
  className,
}: {
  icon: ServiceIcon;
  className?: string;
}) {
  const Icon = serviceIcons[icon];
  return <Icon className={className} aria-hidden="true" />;
}

export function VehicleIconMark({
  icon,
  className,
}: {
  icon: VehicleIcon;
  className?: string;
}) {
  const Icon = vehicleIcons[icon];
  return <Icon className={className} aria-hidden="true" />;
}
