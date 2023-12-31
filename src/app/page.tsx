import { EmptyMusics } from '@/components/EmptyMusics'
import { api } from '@/lib/api'
import { cookies } from 'next/headers'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

dayjs.locale(ptBR)

export default async function Home() {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMusics />
  }

  const token = cookies().get('token')?.value

  const response = await api.get('/musics', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const musics: any = response.data

  if (musics.length === 0) {
    return <EmptyMusics />
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {musics.map((movie: any) => {
        return (
          <div key={movie.id} className="space-y-4">
            <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
              {dayjs(movie.createdAt).format('D[ de ]MMMM[, ]YYYY')}
            </time>
            <Image
              src={movie.coverUrl}
              alt=""
              width={592}
              height={280}
              className="aspect-video w-full rounded-lg object-cover"
            />
            <p className="text-lg leading-relaxed text-gray-100">
              {movie.excerpt}
            </p>
            <Link
              href={`/musics/${movie.id}`}
              className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
            >
              Ler mais
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )
      })}
    </div>
  )
}
