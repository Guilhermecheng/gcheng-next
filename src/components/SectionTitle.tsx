interface SectionTitleProps {
    title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
    return (
        <>
            <h1 className="text-xl laptop:text-2xl mt-8 text-zinc-600 dark:text-amber-400 flex items-center uppercase tracking-wider font-semibold"> 
                <span className="font-press-start text-amber-400 dark:text-zinc-100">{title.charAt(0)}</span>
                {title.substring(1, 1000)}
            </h1>
        </>
    )
}