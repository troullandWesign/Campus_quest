"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setAuthenticated] = useState(false);
    const Router = useRouter;

    const handleSignIn = () => {
        const nomUtilisateurValide = 'admin';
        const motDePasseValide = 'admin';
    
        if (username === nomUtilisateurValide && password === motDePasseValide) {
          setAuthenticated(true);
          alert('Connexion réussie!');
          Router.push('/');
        } else {
          alert('Nom d\'utilisateur ou mot de passe incorrect.');
        }
      };
      
    return (
    <div className="flex justify-center items-center h-screen">
        {isAuthenticated ? (
              window.location.replace('/')
            ) : (
            // Rendu du formulaire de connexion
    <div
    className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
    style={{
      backgroundImage:
     "url('https://wallpapers-clan.com/wp-content/uploads/2023/07/fantasy-mountains-clouds-landscape-background.jpg')"
    }}
    >
    <div className="rounded-xl bg-gray-800/50 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
      <div className="text-white">
        <div className="mb-8 flex flex-col items-center">
          <img
            src="/images/logo.png"
            width={50}
            alt=""
            srcSet=""
            className="mb-3 h-20 w-20"
          />
          <h1 className="mb-2 text-2xl">Campus Quest</h1>
          <span className="text-gray-300">Veuillez vous connecter</span>
        </div>
        <form action="#">
  <div className="mb-4 text-lg">
    <input
      className="rounded-full border-none bg-theme px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
      type="text"
      name="name"
      placeholder="id@email.com"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required // Champ obligatoire
    />
  </div>
  <div className="mb-4 text-lg">
    <input
      className="rounded-full border-none bg-theme bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none "
      type="password" // Utilisez "password" au lieu de "Password"
      name="password"
      placeholder="*********"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required // Champ obligatoire
    />
  </div>
  <div className="mt-8 flex justify-center text-lg text-black">
    <button
      type="button" // Utilisez "button" pour éviter de soumettre le formulaire
      onClick={handleSignIn}
      className="rounded-3xl bg-theme bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
    >
      Login
    </button>
  </div>
</form>
      </div>
    </div>
  </div>
        )}
    </div>
    );
  };
  
export default LoginForm;
  