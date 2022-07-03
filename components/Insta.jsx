export default function Insta({url}) {
    return(
        <iframe  
            className="embed-insta" 
            src={`${url}`} 
            frameBorder="0" 
            ></iframe>
    )
}