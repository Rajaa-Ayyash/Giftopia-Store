import TMP from '../aboutUs/aboutUsVidAndPic/TeamMPic.jpg'


const TeamMembers = (props) => {

  return (


    <div className="team-card" >
      <img src={TMP} className="team-card-img" alt="person" />
      <div class="team-card-info">
        <h4>{props.name}</h4>
        <div>{props.identification}</div>
      </div>
    </div>


  );

}

export default TeamMembers