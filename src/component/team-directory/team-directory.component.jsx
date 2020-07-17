import React from 'react'
import './team-directory.css'
import TeamIteam from '../team-iteam/team-iteam.component'
class Team extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            teams:[
                {
                    name: 'Herukoo',
                    imageUrlJ: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1592303708/purnoto/team_2_sztd0j.jpg',
                    imageUrlP:'https://res.cloudinary.com/dltd4gs4a/image/upload/v1592303695/purnoto/team_1_pgvons.png',
                    id: 1,
                    linkUrl: 'hats',
                    position:'volunteer',
                    classing:'img--layout-1'
                  },
                  
                  {
                    name: 'Herukoo',
                    imageUrlJ: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1592303708/purnoto/team_2_sztd0j.jpg',
                    imageUrlP:'https://res.cloudinary.com/dltd4gs4a/image/upload/v1592303695/purnoto/team_1_pgvons.png',
                    id: 2,
                    linkUrl: 'hats',
                    position:'volunteer',
                    classing:'img--layout-2'
                  },
                 
                  {
                    name: 'Herukoo',
                    imageUrlJ: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1592303708/purnoto/team_2_sztd0j.jpg',
                    imageUrlP:'https://res.cloudinary.com/dltd4gs4a/image/upload/v1592303695/purnoto/team_1_pgvons.png',
                    id: 3,
                    linkUrl: 'hats',
                    position:'volunteer',
                    classing:'img--layout-3'
                  },
                 
                  {
                    name: 'Herukoo',
                    imageUrlJ: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1592303708/purnoto/team_2_sztd0j.jpg',
                    imageUrlP:'https://res.cloudinary.com/dltd4gs4a/image/upload/v1592303695/purnoto/team_1_pgvons.png',
                    id: 4,
                    linkUrl: 'hats',
                    position:'volunteer',
                    classing:'img--layout-4'
                  },
                 
                  {
                    name: 'Herukoo',
                    imageUrlJ: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1592303708/purnoto/team_2_sztd0j.jpg',
                    imageUrlP:'https://res.cloudinary.com/dltd4gs4a/image/upload/v1592303695/purnoto/team_1_pgvons.png',
                    id: 5,
                    linkUrl: 'hats',
                    position:'volunteer',
                    classing:'img--layout-5'
                  },
                 
                  {
                    name: 'Herukoo',
                    imageUrlJ: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1592303708/purnoto/team_2_sztd0j.jpg',
                    imageUrlP:'https://res.cloudinary.com/dltd4gs4a/image/upload/v1592303695/purnoto/team_1_pgvons.png',
                    id: 6,
                    linkUrl: 'hats',
                    position:'volunteer',
                    classing:'img--layout-6'
                  },
                 
                  {
                    name: 'Herukoo',
                    imageUrlJ: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1592303708/purnoto/team_2_sztd0j.jpg',
                    imageUrlP:'https://res.cloudinary.com/dltd4gs4a/image/upload/v1592303695/purnoto/team_1_pgvons.png',
                    id: 7,
                    linkUrl: 'hats',
                    position:'volunteer',
                    classing:'img--layout-7'

                  },
                 
                  {
                    name: 'Herukoo',
                    imageUrlJ: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1592303708/purnoto/team_2_sztd0j.jpg',
                    imageUrlP:'https://res.cloudinary.com/dltd4gs4a/image/upload/v1592303695/purnoto/team_1_pgvons.png',
                    id: 8,
                    linkUrl: 'hats',
                    position:'volunteer',
                    classing:'img--layout-8'
                  },
                 
                 
            ]
        }
    }
    render(){
     
        return(
            <div className="container-fluid margin-con">
            <div className="row">
              <div className="col-12">
                <div className="heading heading--primary"><span className="heading__pre-title">Team</span>
                  <h2 className="heading__title no-margin-bottom"><span className="team-heading">Meet</span> <span>our Team</span></h2>
                </div>
              </div>
            </div>
            <div className="row margin-bottom">
              
                  {
                    this.state.teams.map(({id,...otherInfo}) => (
                       <TeamIteam key={id} {...otherInfo} />


                     ))
                  }
    
              </div>
              </div>
              
        )
    }
}
export default Team;