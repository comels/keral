export default function Contact() {
  return (
    <div className="bg-stone-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Contact
          </h2>
          <p className="mt-6 text-lg/8 text-gray-900">
            N'hésitez pas à nous contacter par mail si vous avez une question.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div>
            <h3 className="border-l border-[#01575c] pl-6 font-semibold text-gray-900">
              Laura BEAUFORT
            </h3>
            <h3 className="border-l border-[#01575c] pl-6 font-medium text-gray-900">
              Directeur général
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-700">
              <p>l.beaufort@keral-capital.fr</p>
              <p>0613873714</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-[#01575c] pl-6 font-semibold text-gray-900">
              Kevin FORGES
            </h3>
            <h3 className="border-l border-[#01575c] pl-6 font-medium text-gray-900">
              Président
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-700">
              <p>k.forges@keral-capital.fr</p>
              <p>0648066209</p>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
