import { getPages } from "@/lib/data";
import AccueilPage from "./accueil/page";

// Cette page est générée côté serveur (SSR)
export default async function Home() {
  // Récupération des données côté serveur
  const pages = await getPages();

  return <AccueilPage  />;
}

