

// This type refer at breadcrumps
export type BreadcrumpsType = {
    dir: { title: string; url: string, end?: boolean }[];
};
export default function Breadcrumbs(props: BreadcrumpsType) {
    return (
        <div className="w-full text-left text-white">
            <nav aria-label="breadcrumb" className="block w-full">
                <ol className="flex w-full flex-wrap items-center rounded-md bg-blue-gray-50 bg-opacity-60 py-2 px-4">
                    {props.dir.map((value, index) => (
                        <li
                            key={index}
                            className="flex cursor-pointer items-center font- font-normal leading-normal text-blue-gray-900  antialiased transition-colors duration-300 hover:text-red-500"
                        >
                            <a className="opacity-60 text-lg" href={value.url}>
                                <span>{value.title}</span>
                            </a>
                            {value.end ? (
                                ""
                            ) : (
                                <span className="pointer-events-none mx-2 select-none text-lg font-sans font-normal leading-normal text-blue-gray-500 antialiased">
                                    /
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
}