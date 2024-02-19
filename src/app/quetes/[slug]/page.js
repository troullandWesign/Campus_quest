"use client"
import { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { sql } from "@vercel/postgres";


export default function QuestDetail({ params }) {
  const [decodedText, setDecodedText] = useState(null);
  const [quest, setQuest] = useState(null);
  useEffect(() => {
    const qrCodeScanner = new Html5QrcodeScanner(
      "reader", 
      { fps: 10, qrbox: 250 }
    );

    qrCodeScanner.render((decodedText) => {
      // Mettre à jour l'état avec le texte décodé
      setDecodedText(decodedText);
    });

    async function fetchQuest() {
      try {
        const { rows } = await sql`
          SELECT * FROM quetes
          WHERE Slug = ${params.slug};
        `;
        console.log(rows)
        // Vérifier si des données ont été trouvées
        if (rows.length > 0) {
          setQuest(rows[0]); // Définir la quête trouvée dans l'état
        } else {
          console.error("Aucune quête trouvée avec ce slug.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de la quête :", error);
      } finally {
        qrCodeScanner.clear();
      }
    }

    fetchQuest(); // Appeler la fonction pour récupérer la quête

   
    return () => {
      qrCodeScanner.clear();
    };
  }, []); // Assurez-vous de passer une dépendance vide pour n'exécuter cet effet qu'une fois

  return (
    <>
      {quest ? (
        <div>
          <p>Details quest {params.slug}</p>
          <p>Title: {quest.title}</p>
          <p>Description: {quest.description}</p>
          {/* Ajoutez ici d'autres éléments de quête à afficher */}
        </div>
      ) : (
        <p>Chargement de la quête...</p>
      )}
      <div id="reader"></div>
      {decodedText && (
        <p>Texte décodé du QR code : {decodedText}</p>
      )}
    </>
  );
}
