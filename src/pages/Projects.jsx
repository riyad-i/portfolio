import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function Projects(){




    return (
        <>
        <h1>Projects Display</h1>
        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" height={480}/>

        <h3>Technologies/Skills</h3>

        <br/>

        <div className="Icons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" height={100}/>
            <img src="data:image/png;base64,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" height={100}/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" height={100}/>
            <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" height={100}/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8BpVGyUg-bm9JS1F5EUrGefkfoPGCBE66Q&usqp=CAU" alt="python" height={100}/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONWh6CJ57cgjmrhxRtoOjNGJ_jAyZidiuVQ&usqp=CAU" alt="python" height={100}/>
            {/* <FontAwesomeIcon icon={faPython}> </FontAwesomeIcon> */}
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/> 
        </>
    )

}