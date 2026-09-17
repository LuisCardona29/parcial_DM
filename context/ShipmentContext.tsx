import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

export type Shipment = {
  id: string;
  pickup: string;
  destination: string;
  detail: string;
  status: 'En camino' | 'Entregado';
  createdAt: string;
  price: string;
};

type ShipmentContextValue = {
  shipments: Shipment[];
  createShipment: (pickup: string, destination: string, detail: string) => Shipment;
};

const ShipmentContext = createContext<ShipmentContextValue | null>(null);

const initialShipments: Shipment[] = [
  { id: 'UC-2026-482', pickup: 'Calle 15 #7-34, Riohacha', destination: 'Carrera 8 #12-20, Riohacha', detail: 'Sobre con documentos', status: 'En camino', createdAt: 'Hoy · 10:42 a. m.', price: '$12.500' },
  { id: 'UC-2026-471', pickup: 'Usaquén', destination: 'Zona T', detail: 'Paquete pequeño', status: 'Entregado', createdAt: '12 sep. · 4:15 p. m.', price: '$11.800' },
  { id: 'UC-2026-429', pickup: 'Teusaquillo', destination: 'La Soledad', detail: 'Caja mediana', status: 'Entregado', createdAt: '08 sep. · 11:20 a. m.', price: '$10.900' },
];

export function ShipmentProvider({ children }: { children: ReactNode }) {
  const [shipments, setShipments] = useState(initialShipments);
  const value = useMemo(() => ({
    shipments,
    createShipment(pickup: string, destination: string, detail: string) {
      const shipment = { id: `UC-2026-${483 + shipments.length}`, pickup, destination, detail, status: 'En camino' as const, createdAt: 'Ahora mismo', price: '$12.500' };
      setShipments(current => [shipment, ...current]);
      return shipment;
    },
  }), [shipments]);
  return <ShipmentContext.Provider value={value}>{children}</ShipmentContext.Provider>;
}

export function useShipments() {
  const context = useContext(ShipmentContext);
  if (!context) throw new Error('useShipments debe usarse dentro de ShipmentProvider');
  return context;
}
