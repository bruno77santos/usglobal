import Link from 'next/link'

type CardBlog = {
  urlImage: string
  title: string
  description: string
  articleDetailsLink: string
  Category: string
  key: number
}

export default function CardBlog(props: CardBlog) {
  return (
    <div className="mt-[48px] w-[308px] flex flex-col" key={props.key}>
      <img
        src={props.urlImage}
        alt={props.title}
        className="rounded-lg shadow-md object-cover"
      />

      <div className="flex items-center gap-5 mt-[18px]">
        {/* Categoria opcional futura */}
      </div>

      <h3 className="text-[23px] text-white font-[700] mt-[16px]">{props.title}</h3>
      <p className="text-white mt-[16px] text-[16px]">{props.description}</p>

      <Link href={props.articleDetailsLink}>
        <div className="mt-[24px] lg:flex py-3.5 px-4 text-lg font-medium rounded-lg transition-all duration-300 text-[#E6E6E6] bg-[#FF0C34] hover:opacity-70 hover:text-white cursor-pointer text-center">
          Ver artigo completo
        </div>
      </Link>
    </div>
  )
}
