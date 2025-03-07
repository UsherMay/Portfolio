function WorkSubSection({idx,title, company, location, duration, description}){
    return(
    <>
        <div key={idx}>
            <h4 className="font-semibold">
                <strong>{title}</strong> chez {company} ({duration}), {location}
            </h4>
            
            <p>
                {description}
            </p>
        </div>
                                
        <br/>
    </>);
}

export default WorkSubSection;