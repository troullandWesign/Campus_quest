"use client";
import Image from 'next/image'
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  const isAuthenticated = true; // Définissez cela sur le statut d'authentification réel
  return (
    <main>
      <div>
      {isAuthenticated ? (
         <div
         className="h-screen w-full bg-gray-900 bg-cover bg-no-repeat"
         style={{
           backgroundImage:
             'url("https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80")'
         }}
         >
          <h1>Bienvenue sur la page d'accueil !</h1>
          <p>Vous êtes maintenant authentifié.</p>
        </div>
      ) : (
        // Rendre un autre contenu pour les utilisateurs non authentifiés si nécessaire
        <h1>Bienvenue sur la page d'accueil !</h1>
      )}
      </div>
    </main>
  )
}
