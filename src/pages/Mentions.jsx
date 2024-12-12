export default function Mentions() {
  const companyDetails = [
    { label: "Numéro de téléphone", value: "0613873714" },
    { label: "Adresse e-mail", value: "l.beaufort@keral-capital.fr" },
    { label: "N° de TVA intracommunautaire", value: "FR80934336744" },
    { label: "Directeur de la publication", value: "Beaufort Laura" },
  ];

  return (
    <div className="bg-stone-100 text-lg px-6 py-12 lg:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-gray-900">
        {/* Titre principal */}
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Mentions légales
        </h1>

        {/* Description */}
        <p className="mt-6">
          Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004
          pour la Confiance en l’économie numérique, il est porté à la
          connaissance des utilisateurs et visiteurs, ci-après l' "Utilisateur",
          du site https://keral-capital.fr , ci-après le "Site", les présentes
          mentions légales.
        </p>
        <p className="mt-4">
          La connexion et la navigation sur le Site par l’Utilisateur implique
          acceptation intégrale et sans réserve des présentes mentions légales.
        </p>
        <p className="mt-4">
          Ces dernières sont accessibles sur le Site à la rubrique "Mentions
          légales".
        </p>

        {/* Édition du site */}
        <h2 className="mt-10 text-3xl font-semibold tracking-tight text-gray-900">
          Édition du site
        </h2>
        <p className="mt-6">
          L'édition du Site est assurée par la société Keral Capital, SAS au
          capital de 10 000 euros, immatriculée au Registre du Commerce et des
          Sociétés de Paris sous le numéro 934336744 dont le siège social est
          situé au 1 rue de Stockholm, 75008 Paris.
        </p>
        <ul className="mt-4 space-y-2">
          {companyDetails.map((detail, index) => (
            <li key={index}>
              <span className="font-bold">{detail.label} : </span>
              {detail.value}
            </li>
          ))}
        </ul>

        {/* Hébergeur */}
        <h2 className="mt-10 text-3xl font-semibold tracking-tight text-gray-900">
          Hébergeur
        </h2>
        <p className="mt-6">
          L'hébergeur du Site est la société Netlify, dont le siège social est
          situé au 2325 3rd Street, 94107 San Francisco.
        </p>

        {/* Accès au site */}
        <h2 className="mt-10 text-3xl font-semibold tracking-tight text-gray-900">
          Accès au site
        </h2>
        <p className="mt-6">
          Le Site est normalement accessible, à tout moment, à l'Utilisateur.
          Toutefois, l'Éditeur pourra, à tout moment, suspendre, limiter ou
          interrompre le Site afin de procéder, notamment, à des mises à jour ou
          des modifications de son contenu. L'Éditeur ne pourra en aucun cas
          être tenu responsable des conséquences éventuelles de cette
          indisponibilité sur les activités de l'Utilisateur.
        </p>
        <p className="mt-4">
          Toute utilisation, reproduction, diffusion, commercialisation,
          modification de toute ou partie du Site, sans autorisation expresse de
          l’Éditeur est prohibée et pourra entraîner des actions et poursuites
          judiciaires telles que prévues par la règlementation en vigueur.
        </p>
      </div>
    </div>
  );
}
