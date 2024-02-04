import './scss/Experience.css'

function Carta({src,h1,p}) {
    return (
        <>
            <div className='carta'>
                <img src={src} alt="img" />
                <div>
                    <h1>{h1}</h1>
                    <p>{p}</p>
                </div>
            </div>
        </>
    )
}

export default function Experience() {
    return (
        <>
            <div className='experience'>
                <h4>Meet Our Team</h4>
                <h6>Experience Team Members</h6>
                <div className='meri'>
                    <Carta src={'src/img/i3.png'} h1={'Robert C. Simmons'} p={'Business Consultant'}/>
                    <Carta src={'src/img/i1.png'} h1={'Christopher L. Wagner'} p={'Senior Manager'}/>
                    <Carta src={'src/img/i2.png'} h1={'Lawrence C. Dickerson'} p={'Financial Consultant'}/>
                </div>
            </div>
        </>
    )
}