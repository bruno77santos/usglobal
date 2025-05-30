
type CardBlog = {
    urlImage: string,
    title: string,
    description: string,
    articleDetailsLink: string,
    Category: string
    key: number,
}

export default function CardBlog(props: CardBlog) {
    return (
        <div className="mt-[48px] w-[308px] flex flex-col" key={props.key}>
            <img src={
                props.urlImage
            } alt="Investimentos nos Estados Unidos: oportunidade ou estratégia?" />
            <div className="flex items-center gap-5 mt-[18px]">
                {/*
                <div className="relative bg-[#1F3298] rounded-[100px] text-[16px] h-[39px] text-white px-2">
                    <p className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{props.Category}</p>
                </div>
           
           */}

            </div>
            <h3 className="text-[23px] text-white font-[700] mt-[16px]">{props.title}</h3>
            <p className="text-white mt-[16px] text-[16px]">{props.description}</p>

            <a href={props.articleDetailsLink} type="button" className="mt-[24px] lg:flex py-3.5 px-4 text-lg font-medium rounded-lg transition-all duration-300 text-[#E6E6E6] bg-[#FF0C34] hover:opacity-70 hover:text-white ">

                <p className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Ver artigo completo</p>
            </a>
        </div>
    )
}