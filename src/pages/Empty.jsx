import './Empty.css';

export default function Empty() {
    return (
        <div className='body'>
            <div className="container">
                <div className="modal">
                    <h2> Coming Soon </h2>
                    <div style={{display:'flex' , flexDirection:'row' , justifyContent:'center'}}>
                    <a href='/'><button type="button" class="accept-button"> Back Home </button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}