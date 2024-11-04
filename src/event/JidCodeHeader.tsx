type JidCodeHeaderProps = {
    jidCode: string
}

export const JidCodeHeader = ({jidCode}: JidCodeHeaderProps) => {
    return (
        <div className="join rounded-lg">
            <div className="join-item border text-xl pl-2.5 pr-2">{jidCode.substring(0, 1)}</div>
            <div className="join-item border text-xl pl-2 pr-2">{jidCode.substring(1, 3)}</div>
            <div className="join-item border text-xl pl-2 pr-2">{jidCode.substring(3, 5)}</div>
            <div className="join-item border text-xl pl-2 pr-2.5">{jidCode.substring(5, 6)}</div>
        </div>
    );
}
