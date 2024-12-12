export default function Services() {
  return (
    <div className="bg-stone-100">
      <div>
        <img
          src="./building-3.jpg"
          alt=""
          className="aspect-[14/4] w-full object-cover object-top"
        />
      </div>
      <div className="py-12 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Une gestion complète de l’opération
            </h2>
            <p className="mt-5 text-lg/8 text-gray-900">
              Nos experts vous accompagnent en amont de l’opération, notamment
              dans la structuration, pour optimiser chaque étape du processus.
            </p>
          </div>
          <div className="mx-auto mt-10  border-t border-gray-200 pt-10 flex items-center flex-col gap-10 lg:gap-0 lg:flex-row justify-between">
            <div className="flex max-w-sm flex-col justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-2xl font-semibold text-gray-900">
                  Conseils à l’acquisition
                </h3>
                <p className="mt-3 line-clamp-3 mb-5 text-gray-900">
                  Nous accompagnons nos clients dans tout le processus
                  d’acquisition :
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>Closing</li>
                <li>Sourcing</li>
                <li>Analyse de l’opération</li>
                <li>Définition d’une stratégie et d’un business plan</li>
                <li>Due diligence</li>
              </ul>
            </div>
            <div className="flex max-w-sm flex-col justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-2xl font-semibold text-gray-900">
                  Conseils à l’asset management
                </h3>
                <p className="mt-3 line-clamp-3 mb-3 text-gray-900">
                  Nous accompagnons nos client dans tout le suivi de projet :
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>Refinancement</li>
                <li>Suivi des travaux</li>
                <li>Recherche et mise en place de locataires</li>
                <li>Commercialisation</li>
                <li>Gestion locative</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
