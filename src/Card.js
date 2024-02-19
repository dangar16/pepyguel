
function Card(props){
    return (
        <>
            <div className="card mb-3" style={{width: 18 + 'rem', border: "none", backgroundColor: "#E1F0DA"}}>
                <img className='card-img-top mt-3' src={props.logo} height="350px" width="180px" alt="Rosa"></img>
                <div className='card-body'>
                    <h5 className="card-title" style={{textAlign: "center"}}>
                        {props.title}
                    </h5>
                    <p className='card-text' style={{textAlign: "justify"}}>
                        {props.text}
                    </p>

                </div>
            </div>
        </>
    )
}

export default Card