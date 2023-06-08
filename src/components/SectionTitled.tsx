interface SectionTitledProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
    children?: React.ReactNode;
}

export const SectionTitled: React.FC<SectionTitledProps> = ({
    title,
    children,
    ...props
}) => {
    return (
        <section {...props}>
            <div className="relative overflow-hidden section-titled-bg">
                <div
                    className="absolute animate-fadeInUp -right-8 -z-50 h-0 w-0 rotate-90 select-none md:block hidden animate-fade-in-up"
                    aria-hidden
                >
                    <span
                        title={title}
                        className="bg-gradient-to-b from-blue-600 to-zinc-1000 bg-clip-text text-[220px] font-bold uppercase text-transparent opacity-40"
                    >
                        {title}
                    </span>
                </div>
                {children}
            </div>
        </section>
    );
};
