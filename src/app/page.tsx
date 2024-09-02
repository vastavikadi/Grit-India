import Image from "next/image";

export default function Home() {
  return (
    <main className="flex top-5 h-80 flex-col items-center justify-between p-24">

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Dress{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Get a deeper insight into the different costumes worn in different cultures.
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Learn about interesting stories that are very popular among people!
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Try Yourself{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Try cultural fits of your choice.
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Invent{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Mix different cultures into one to invent something extraordinary!
          </p>
        </a>
      </div>
    </main>
  );
}
