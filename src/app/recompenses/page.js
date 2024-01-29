import Recompense from '@/app/components/recompense/recompense'

export default function Recompenses() {
  const rewards = [
    new Recompense('Recompense 1', 'Description de la Recompense 1.'),
    new Recompense('Recompense 2', 'Description de la Recompense 2.'),
    // Ajoutez d'autres quêtes au besoin
  ];

  return (
    <main >  
      <div>
        <h1>Liste des Recompenses</h1>
        {rewards.map((quest, index) => (
          <div key={index}>
            <h2>{quest.title}</h2>
            <p>{quest.description}</p>
          </div>
        ))}
    </div>

    </main>
    
  );
}
