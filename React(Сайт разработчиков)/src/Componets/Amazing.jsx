import './scss/Amazing.css'
function Carter({src}) {
    return(
        <>
        <div className='carter'>
            <h1>Technical Analysis</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going</p>
            <img className='back' src="./src/img/back.png" alt="" />
            <img src={src} alt="sdfsdfs" />
        </div>
        </>
    ) 
}
export default function Amazing() {
    return (
        <>
        <div className='mainn'>
            <h6>Our Services</h6>
            <h1>Amazing Business Services</h1>
            <div>
                <Carter src={'src/img/phon.png'}/>
                <Carter src={'src/img/phon1.png'}/>
            </div>
        </div>
        </>
    )
}