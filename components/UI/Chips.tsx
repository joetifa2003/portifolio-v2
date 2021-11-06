const Chips = ({ items }: { items: string[] | object[] }) => {
    return (
        <div tw="flex -m-2 flex-wrap">
            {items.map((item, index) => (
                <div tw="p-2" key={index}>
                    <div tw="text-base bg-gray px-4 rounded-md py-2 border-2 border-darkCyan">
                        {item}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chips;
