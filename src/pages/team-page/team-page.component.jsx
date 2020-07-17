import React from 'react';
import './team-page.styles.css'
import Team from '../../component/team-directory/team-directory.component'
import Header from '../../component/header/header.component'

const TeamPage = () => (
    <div class="section team">
        <Header isItTeam/>
        <Team />


        </div>
)
export default TeamPage;