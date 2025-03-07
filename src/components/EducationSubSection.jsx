import { v4 as uuidv } from 'uuid'
function EducationSubSection({education, idx, _}){
    return(
        <>
            <li key={idx}>
                <strong>{education.title}</strong> - {education.school} ({education.duration})
            </li>
            <li key={education.idShort}>
                {education.description}
            </li>
            
            <br/>
        </>
    );

}

export default EducationSubSection;