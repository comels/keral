import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero Section: Section principale avec le titre, la description et un bouton */}
      <div className="relative bg-stone-100">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          {/* Texte principal à gauche */}
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-48 lg:pt-40 xl:col-span-6">
            <div className="mx-auto max-w-lg lg:mx-0">
              <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Investir en toute confiance
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                Réalisez vos projets immobiliers grâce aux conseils d’experts
              </p>
              {/* Bouton "Nous contacter" */}
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  to="/contact"
                  className="rounded-md bg-[#01575c] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#01575c]/90"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>

          {/* Image à droite */}
          <div className="relative lg:col-span-5 xl:absolute xl:inset-0 xl:left-1/2">
            <img
              alt="Building"
              src="./building-2.jpg"
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            />
          </div>
        </div>
      </div>

      {/* Mission Section: Titre et description de la mission */}
      <div className="overflow-hidden bg-white pt-24">
        <div className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Notre mission
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-700 sm:text-xl/8">
              Keral Capital rend accessible à tous la réalisation d’opérations
              immobilières. Nous accompagnons les investisseurs avec ou sans
              expérience dans chaque étape de leur projet immobilier.
            </p>
          </div>
        </div>

        {/* Core Plus and Value Add Section */}
        <div className="flex flex-col xl:flex-row items-center xl:justify-around gap-10 mx-10">
          {/* Core Plus Bloc */}
          <div>
            <div className="relative max-w-2xl xl:max-w-xl">
              <img
                className="xl:h-80 w-full rounded-lg object-cover"
                src="./basque.jpg"
                alt="Basque"
              />
              {/* Titre superposé en bas à gauche */}
              <h5 className="absolute bottom-4 left-4 text-white text-4xl font-bold px-3 py-2 rounded-lg">
                Core plus
              </h5>
            </div>
            <div className="p-5">
              <p className="mb-5 text-xl font-medium text-gray-900">
                Acheter des actifs sans besoin de travaux et les valoriser par :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>Une revalorisation locative</li>
                <li>Une vente à la découpe</li>
                <li>Une acquisition à un prix en dessous du marché</li>
              </ul>
            </div>
          </div>

          {/* Value Add Bloc */}
          <div>
            <div className="relative max-w-2xl xl:max-w-xl">
              <img
                className="xl:h-80 w-full rounded-lg object-cover"
                src="./graffiti.jpg"
                alt="Graffiti"
              />
              {/* Titre superposé en bas à gauche */}
              <h5 className="absolute bottom-4 left-4 text-white text-4xl font-bold px-3 py-2 rounded-lg">
                Value add
              </h5>
            </div>
            <div className="p-5">
              <p className="mb-5 text-xl font-medium text-gray-900">
                Acheter des actifs à création de valeur et les valoriser par :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>La réalisation de travaux</li>
                <li>Un repositionnement de l’actif</li>
                <li>Un traitement des problèmes juridiques</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-stone-100 py-24 mt-20 px-10">
          <blockquote className="text-center mx-auto max-w-3xl text-xl font-semibold text-[#01575c] sm:text-3xl">
            <p>
              Dans chacune de nos stratégies, nous mettons un point d’honneur à
              minimiser les risques. Notre priorité absolue est de sécuriser les
              capitaux de nos investisseurs tout au long du processus.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
