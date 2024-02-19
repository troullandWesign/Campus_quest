import Quest from '@/app/components/quest/quest'

export default function Quetes() {
  const quests = [
    new Quest("Hisory Quest", "history-quest" , "Plongez dans l'histoire a travers différentes dates et découvrez ou se cache le QRCODE.", "QRCode", "/images/quest1.jpg", false),
    new Quest("Lunch Quest", "lunch-quest" ,"À travers le déjeunez du midi, le dragon de la nourriture se cache parmis vous, découvre le et scannez le", "QRCode.", "/images/quest2.jpg", false),
    new Quest("Life Quest", "life-quest","Votre vie étudiante est pleine de ressources, à vous de trouver ou se cache le point vital de celle-ci a fin de la scanner.", "QRCode", "/images/quest3.jpg", false),
  ];

  return (
      <div className="p-6 flex flex-col gap-6 ">
        <h1>Archive des quêtes</h1>
        {quests.map((quest, index) => (
          <div key={index}>
            <a href={`/quetes/${quest.slug}`} className="flex flex-col items-center bg-dark border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700/50 dark:bg-gray-800/50 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-60 md:h-auto md:rounded-none md:rounded-s-lg border-b border-gray-50" src={quest.thumbnail} alt="image quête"/>
              <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{quest.title}</h5>
                  <p className="mb-3 font-normal text-white dark:text-gray-400">{quest.description}</p>
                  <button type="button" className="text-white bg-theme  focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Découvrez</button>
              </div>
            </a>
          </div>
        ))}
    </div>
  );
}
