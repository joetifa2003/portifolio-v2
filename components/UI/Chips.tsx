const Chips = ({ items }: { items: string[] | object[] }) => {
    return (
        <div className="flex flex-wrap -m-2">
            {items.map((item, index) => (
                <div className="p-2" key={index}>
                    <div className="px-4 py-2 text-base border-2 rounded-md bg-gray border-darkCyan">
                        {item}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chips;
