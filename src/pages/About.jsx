export default function About() {
  return (
    <div>
      <div className="bg-stone-100 px-10">
        <div className="max-w-4xl mx-auto text-center py-12 lg:py-24">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            À propos
          </h1>
          <p className="my-8 text-justify text-lg text-gray-800 sm:text-xl/8">
            Nous avons accompagné nos clients dans la structuration et la
            recherche de financements, qu’ils soient bancaires ou privés. Nous
            avons observé que l’accès au financement est devenu de plus en plus
            complexe, entraînant une stagnation des financements et des ventes
            sur le marché. Dans ce contexte, nous sommes convaincus qu’un
            investisseur sans besoin de financement peut saisir des opportunités
            d’acquisition d’actifs à des prix avantageux. Conscients des défis
            liés aux dispositifs tels que le 150-0 B Ter, nous mettons notre
            expertise au service des acteurs souhaitant réaliser des opérations
            immobilières complexes. Entourés de nos conseillers expérimentés,
            nous sommes déterminés à créer des opportunités et à mener à bien
            des opérations qui dépassent les attentes de nos clients. Notre
            ambition est d’offrir à chacun la possibilité de devenir un
            professionnel de l’immobilier. Pour ce faire, nous avons constitué
            un réseau de spécialistes (avocats, notaires, experts, etc.) afin
            d’assurer le bon déroulement de chaque opération. Nous souhaitons
            également préserver la liberté de décision de nos clients. Nous
            proposons des actifs conformes à leurs cahiers des charges, mais la
            décision d’investir reste entièrement entre leurs mains. Les fonds
            demeurent sous leur contrôle jusqu’au closing, et la société
            détentrice des actifs est entièrement leur propriété. Ainsi, nous
            agissons en tant que partenaires et conseillers tout au long du
            processus.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-5xl mx-auto px-10">
        <div className="">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Les Associés Fondateurs
            </h2>
            <p className="mt-6 text-lg/8">
              Après quatre années de collaboration au sein de Qilin Company,
              nous avons choisi de capitaliser sur nos compétences
              complémentaires et sur la qualité de notre relation
              professionnelle pour aller plus loin.
              <p className="mt-2">
                Forts de notre expérience commune dans l’acquisition et le
                financement de 250 millions d’euros d’actifs, nous avons décidé
                de diversifier nos activités en accompagnant différents acteurs
                dans leurs recherches de financements et leurs projets
                immobiliers.
              </p>
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-14 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none"
          >
            {/* Première personne */}
            <li>
              <img
                alt=""
                src="./laura.jpg"
                className="aspect-[14/13] w-full rounded-2xl object-cover object-top"
              />
              <h3 className="mt-6 text-lg/8 font-semibold tracking-tight">
                Laura BEAUFORT
              </h3>
              <p className="text-base/7 text-gray-800">
                Laura est titulaire d’un Master 2 en Corporate Finance et a
                commencé sa carrière dans l’immobilier chez Patrizia. Désireuse
                de découvrir une entreprise plus agile, elle rejoint ensuite
                Qilin Company. Pendant deux ans, elle travaille sur les sujets
                de sourcing, acquérant ainsi une expertise complète dans les
                opérations immobilières et la gestion des différents acteurs.
                Par la suite, elle rejoint Kevin Forges dans le pôle
                financement, où ils travaillent ensemble sur la structuration et
                la levée de dette, tant bancaire que privée, lors de situations
                complexes.
              </p>
            </li>

            {/* Deuxième personne */}
            <li>
              <img
                alt=""
                src="./kevin.jpg"
                className="aspect-[14/13] w-full rounded-2xl object-cover object-top"
              />
              <h3 className="mt-6 text-lg/8 font-semibold tracking-tight">
                Kevin FORGES
              </h3>
              <p className="text-base/7 text-gray-800">
                Titulaire d’un Master 2 en Audit et Conseil, Kevin commence sa
                carrière chez BDO. Après quatre années d’expérience en audit au
                sein du groupe, il se tourne vers le conseil et se spécialise
                dans l’analyse financière et la conformité. De 2019 à 2023,
                Kevin dirige le pôle financement chez Qilin Company. Durant
                cette période, il orchestre la structuration de la dette, la
                recherche de financement bancaires et la levée de fonds en
                Equity et dette obligataire.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-24 bg-stone-100 ">
        <div className="max-w-5xl mx-auto px-10">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Le réseau associé
            </h2>
            <p className="mt-6 text-lg/8">
              Nous avons choisi de nous associer avec Bloom Legal afin de
              bénéficier d’un accompagnement global et stratégique dans la
              gestion quotidienne de nos dossiers. Bloom Legal est un réseau
              d’experts composé d’avocats spécialisés en droit des affaires et
              fiscalité, ainsi que de conseillers financiers, d’experts en
              propriété industrielle et d’ingénieurs, offrant une expertise
              pluridisciplinaire pour répondre à nos besoins spécifiques.
            </p>
            <p className="mt-6 text-lg/8">
              Ce partenariat offre un appui stratégique dans la gestion
              quotidienne, tant pour les acquisitions en share deal que pour la
              recherche de subventions, facilitant ainsi la création de
              synergies significatives.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="https://bloom-legal.com/"
                target="blank"
                className="rounded-md bg-[#01575c] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#01575c]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                En savoir plus
              </a>
            </div>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-14 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none"
          >
            {/* Première personne */}
            <li>
              <img
                alt=""
                src="./sylvie.jpeg"
                className="aspect-[14/13] w-full rounded-2xl object-cover object-top"
              />
              <h3 className="mt-6 text-lg/8 font-semibold tracking-tight">
                Sylvie LERAT
              </h3>
              <p className="text-base/7 text-gray-800">
                Sylvie s’appuie sur ses 25 années d’expérience au sein des
                services des impôts, puis en tant qu’avocate en Droit des
                sociétés et en Droit fiscal pour conseiller les PME et leurs
                dirigeants. Son expertise repose sur l’optimisation de leur
                situation juridique et fiscale et la mise en œuvre d’une
                protection sociale adéquate. Elle bénéficie d’une forte
                notoriété au titre de ses relations avec les autorités fiscales,
                le contentieux fiscal et l’assistance à redressement ainsi que
                sur la fiscalité des transactions.
              </p>
            </li>

            {/* Deuxième personne */}
            <li>
              <img
                alt=""
                src="./clement.jpeg"
                className="aspect-[14/13] w-full rounded-2xl object-cover object-top"
              />
              <h3 className="mt-6 text-lg/8 font-semibold tracking-tight">
                Clément MARQUEZ
              </h3>
              <p className="text-base/7 text-gray-800">
                Professionnel chevronné avec plus de 15 ans d’expérience dans
                les domaines de la gestion industrielle, de l’innovation et du
                conseil stratégique en France et à l’étranger. Sa carrière
                diversifiée lui a permis de développer une expertise unique à
                l’intersection de la technologie, de la finance et de la
                stratégie d’entreprise. Aujourd’hui, il met cette expérience au
                service des entreprises, les aidant à naviguer dans les
                complexités des financements publics et de la fiscalité pour
                stimuler leur croissance et leur compétitivité.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
