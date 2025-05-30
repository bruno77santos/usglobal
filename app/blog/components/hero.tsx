

type heroType = {
    title: string,
    description: string,
    urlBackgroundImage: string
}

export function Hero(props: heroType) {
    return (
        <section style={{ backgroundImage: `url(${props.urlBackgroundImage})` }} className="bg-cover bg-center h-auto mt-10 lg:h-[724px] overflow-hidden">
            <div className="bg-[#0C2E3E]/90 h-full ">

                <div className="w-[97%] max-w-[1280px] flex flex-col items-left justify-center gap-10 p-10 lg:p-0 lg:gap-10 h-full mx-auto">
                    <div className="w-[97%] max-w-[974px]">
                        <h1 className="text-white font-bold text-3xl lg:text-5xl">
                            {props.title}
                        </h1>

                        <p className="text-[#E6E6E6] lg:text-2xl font-[500] mt-[24px]">
                            {props.description}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
