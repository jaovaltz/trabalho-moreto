import Link from 'next/link'

export function Hero() {
  return (
    <div className="space-y-5">
      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Sua lista de filmes em um só lugar
        </h1>
        <p className="text-lg leading-relaxed">
          Organize sua lista de filmes e tenha todos eles em um só lugar. A
          melhor maneira de gerenciar suas escolhas cinematográficas.
        </p>
      </div>

      <Link
        className="font-alt inline-block rounded-full bg-green-500 px-5 py-3 text-sm uppercase leading-none text-black hover:bg-green-600"
        href="/movies/new"
      >
        CADASTRAR
      </Link>
    </div>
  )
}
