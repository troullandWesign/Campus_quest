"use client"
// QRCodeReader.js
import { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

export default function QRCodeReader({onResult}) {
    const [decodedText, setDecodedText] = useState(null);
    useEffect(() => {
        const qrCodeScanner = new Html5QrcodeScanner(
          "reader", 
          { fps: 10, qrbox: 250 }
        );
    
        qrCodeScanner.render((decodedText) => {
            // Mettre à jour l'état avec le texte décodé
            setDecodedText(decodedText);
            onResult(decodedText);
          });

        // Nettoyer lors de la suppression du composant ou du changement d'itinéraire
        return () => {
          qrCodeScanner.clear();
        };
      }, []);
      

  return (
    <div id="reader">
    </div>
  );
}
