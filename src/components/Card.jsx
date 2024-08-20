import PropTypes from 'prop-types';


const userdata=[
    {
        name:"sivaprakash",
        city:"Madurai",
        designation:"Front end developer",
        skills:['C','C++','Java','Python','Git'],
        profile:"images/1.jpg",
        status:true
    },
    {
        name:"sri kumar",
        city:"Sivkasi",
        designation:"Backend end developer",
        skills:['C','C++','Java','Python','Git','NET','flask','django'],
        profile:"images/2.jpg",
        status:false
    },
    {
        name:"mohan",
        city:"Madurai",
        designation:"Software Testing",
        skills:['Automation Testing','Manual testing'],
        profile:"images/3.jpg",
        status:true
    },

]


function User(props){
    return (
        <div className="card-container">
            <span className={props.status?'online':'offline'}>
                {props.status?'Online':'Offline'}
            </span>
            <img src={props.profile} alt="" className="img-container" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.designation}</p>
            <div className="btn-container">
                <button className="btnprimary">Message</button>
                <button className="btnoutline">Following</button>
            </div>
            <div className="skills">
                <p>skills</p>
                <ul>
                {props.skills.map((skill,index) => <li key={index}>
                    {skill}
                </li>)}
                </ul>
            </div>
        </div>
    )
}

const Card = () => {
  return (
    <>  
       {
        userdata.map(
            (user,index)=><User 
            key={index}
            name={user.name} 
            city={user.city}
            designation={user.designation}
            skills={user.skills}
            profile={user.profile}
            status={user.status} />
        )
       }
       {/* <User 
            name="sivaprakash" 
            city="Madurai"
            designation="Front end developer"
            skills={['C','C++','Java','Python','Git']}
            profile="images/1.jpg"
            status={true}

        />  */}
    </>
  )
}

User.PropTypes = {
    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    designation:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    profile:PropTypes.string.isRequired,
    status:PropTypes.bool.isRequired,
}

export default Card
