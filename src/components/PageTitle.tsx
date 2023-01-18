interface PageTitleProps {
    title: string;
    subtitle?: string;
    // children: React.ReactNode;
}

export function PageTitle({ title, subtitle }: PageTitleProps) {

    return (
        <>
            <h1 className="font-semibold text-zinc-800 dark:text-white text-2xl laptop:mb-1 laptop:text-4xl">
                { title }
            </h1>

            { subtitle && (
                <h3>
                    { subtitle }
                </h3>
            ) }
        </>
    )
}