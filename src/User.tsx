function User(){
    const names = ['Deshan', 'John', 'Joan'];
    const logged = true;

    return (
        <>
            <p> Users </p>
            <ul>
                {names.map( (name, index) => (
                    <li key={index}>{name}</li>
                    ))
                }
                
            </ul>
            {logged && <h1>Hello Member</h1>}
        </>
    );
      
}   

export default User;