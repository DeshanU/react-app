function Message(){
    const name = "Deshan";

    if(name)
        return <h1 className="text-5xl"> Hello {name} </h1>;
    return <h1> Hello World </h1>;
}   

export default Message;