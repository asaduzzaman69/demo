import React from 'react'
import './team-items.styles.css'

const TeamIteam = ({name,imageUrlJ,imageUrlP}) => (
  <div className="col-sm-6 col-lg-4 col-xl-3">
    <div className="team-item team-item--rounded">
    <ul className="team-item__socials">
      <li><i class="fab fa-facebook-f"></i></li>
      <li><i class="fab fa-twitter"></i></li>
      <li><i class="fab fa-instagram"></i></li>
    </ul>
    <div className="team-item__img-holder"><img className='img--layout-1'src={imageUrlP} alt="layout"/>
      <div className="team-item__img"><img className="img--bg" src={imageUrlJ} alt="teammate"/></div>
    </div>
    <div className="team-item__description">
      <div className="team-item__name">{name}</div>
      <div className="team-item__position">Ceo/Founder</div>
    </div>
  </div>
  </div>

)
export default TeamIteam;