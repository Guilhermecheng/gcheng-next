interface PageTitleProps {
    title: string;
    subtitle?: string;
    // children: React.ReactNode;
}

export function PageTitle({ title, subtitle }: PageTitleProps) {

    return (
        <>
            <h1 className="font-semibold text-zinc-700 dark:text-amber-400 tracking-wide text-2xl mb-1 laptop:mb-2 laptop:text-4xl">
                <div className="flex items-center">
                    <span className="font-press-start text-amber-400 dark:text-zinc-100">{title.charAt(0)}</span>
                    {title.substring(1, 1000)}
                </div>

                {/* { title } */}
            </h1>

            { subtitle && (
                <h3 className="font-semibold text-base laptop:text-lg text-zinc-400 dark:text-white">
                    { subtitle }
                </h3>
            ) }
        </>
    )
}