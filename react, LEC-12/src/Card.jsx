

const Card = () => {
    let arr = [
        {
            "id": 1,
            "name": "faizan",
            "age": 20,
            "state": "kashmir"
        },
        {
            "id": 2,
            "name": "ashish",
            "age": 21,
            "state": "J and K"
        },
        {
            "id": 3,
            "name": "sucharita",
            "age": 20,
            "state": "odisha"
        }
    ]
    return (
        <>
            {
                arr.map((element) => {
                    return (
                        <div key={element.id}>
                            <h1>profiles</h1>
                            <h1>${element.name}</h1>
                            <p>{element.state}</p>
                        </div>
                    )

                })
            }
        </>
    );
}

export default Card;
