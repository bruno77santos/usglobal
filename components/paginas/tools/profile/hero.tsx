

export default function Hero(props: {title: string}) {
    return (
<section className="bg-[url('/calc/bg/bg-profile-invest.png')] bg-cover bg-center h-auto mt-10 lg:h-[502px] overflow-hidden">
            <div className="bg-[#0C2E3E]/80 h-full ">

                <div className="w-[97%] max-w-[1280px] flex flex-col items-left justify-center gap-10 p-10 lg:p-0 lg:gap-10 h-full mx-auto">
                    <div className="w-[97%] max-w-[1127px]">
                        <h1 className="text-white font-bold text-3xl lg:text-5xl mt-5">
                            {props.title}
                        </h1>



                    </div>
                </div>

            </div>
        </section>
    );
}
