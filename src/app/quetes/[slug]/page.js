"use client"
import React, { useEffect, useState } from 'react';
import QRCodeReader from '@/app/components/qrcode-reader';
import Localisation from '@/app/components/localisation'

export default function QuestDetail({ params }) {

  const [rows, setRows] = useState([]);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [decodedValue, setDecodedValue] = useState("");

  const getData = async () => {
    await fetch(`/api/get-quest?slug=${params.slug}`)
            .then(res => res.json())
            .then(data => {
                setRows(data.data.rows);
            })
            .catch(err => console.log(err))
  }

   const updateQuest = async (decodedValue) => {
     await fetch(`/api/update-quest?slug=${params.slug}&decodedValue=${decodedValue}`)
       .then(res => res.json())
       .then(data => {
         console.log('Quête mise à jour avec succès !', data);
         setUpdateSuccess(true);
       })
       .catch(err => {
         console.log(err);
       });
   }
  
  useEffect(()=> {
      getData();
  }, [])

  useEffect(() => {
    if (updateSuccess) {
      // Forcez le rafraîchissement de la page après 1 seconde pour mettre à jour les données
      setTimeout(() => {
        setUpdateSuccess(false);
        window.location.reload();
      }, 4000);
    }
  }, [updateSuccess])
  
  const handleResult = async (result) => {
    setDecodedValue(result)
    updateQuest(result);
    // Construire l'URL souhaitée
    const newUrl = `${window.location.pathname}?${result}`;
    window.history.pushState({}, '', newUrl);
  }
  return (
    <>
     {rows.map((row) => (
      <div className='single' key={row.id}> {/* Ajout de la clé unique */}
        <picture>
            <img className='img-entry' src={row.thumbnail} alt=""/>
          </picture>
          <p className='title'>{row.titre}</p>
          <p className='description'>{row.description}</p>
          <Localisation latitude={row.lat} longitude={row.long}></Localisation>
          <p className='description'>Veuillez vous rendre a moins de 3m avant de scannez le QRCODE</p>
          {updateSuccess && (  
            decodedValue === row.id_qrcode ? (
              <div className='container-alert'>
                <div className="alert flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800" role="alert">
                  <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <div className="ms-3 text-sm font-medium">
                    QRCODE valide. La page va recharger.
                  </div>
                </div>
              </div>
            ) : (
              <div className='container-alert'>
                <div className="alert flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
                  <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 17a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1zM10 7a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1z"/>
                  </svg>
                  <div className="ms-3 text-sm font-medium">
                    Échec de la validation du QRCODE. Veuillez réessayer.
                  </div>
                </div>
              </div>
            )
          )}

          {row.status ? (
            <p>Quête terminée. <a className='quests' href="/quetes">Retournez voir les quêtes.</a></p>
          ) : (
            <QRCodeReader onResult={handleResult} />
          )}
      </div>
    ))}  
    </>
  );
}
