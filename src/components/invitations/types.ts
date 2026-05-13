export interface InvitationData {
  title: string;
  subtitle?: string;
  hosts?: string;
  recipient?: string;
  message?: string;
  date: string;
  time?: string;
  location: string;
  rsvp?: string;
  dressCode?: string;
  monogram?: string;
}

export const sampleInvitation: InvitationData = {
  title: "Sofía & Mateo",
  subtitle: "se casan",
  hosts: "Sofía Herrera y Mateo Linares",
  message:
    "Tu presencia hará de este día un recuerdo inolvidable. Acompáñanos a celebrar nuestro amor bajo las estrellas.",
  date: "Sábado 12 de Septiembre, 2026",
  time: "18:00 hrs",
  location: "Hacienda Las Estrellas · Valle de Bravo",
  rsvp: "rsvp@sofiaymateo.com · 5 de Agosto",
  dressCode: "Etiqueta · Vestido largo",
  monogram: "M",
};
