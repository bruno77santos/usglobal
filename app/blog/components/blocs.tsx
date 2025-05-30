import CardBlog from "./cardBlog"

type BlocsType = {
    title: string,
    cards: {
        urlImage: string,
        title: string,
        description: string,
        articleDetailsLink: string,
        Category: string
    }[]
}

export default function Blocs(props: BlocsType) {

    return (
        <div className="flex flex-col w-[90%] max-w-[1280px] mx-auto">
            <h1 className="text-[40px] text-white font-[700] text-center lg:text-left">{props.title}</h1>

            <div className="flex gap-4 mt-[18px] flex-wrap justify-center lg:justify-start">

                {props.cards.map((val, index) => (
                    <CardBlog
                        key={index}
                        urlImage={val.urlImage}
                        title={val.title}
                        description={val.description}
                        articleDetailsLink={val.articleDetailsLink}
                        Category={val.Category} />
                ))}


            </div>


        </div>
    )
}