import React from 'react'
import team1 from '../../assets/images/team1.png'
import team2 from '../../assets/images/team2.png'
import team3 from '../../assets/images/team3.png'
import team4 from '../../assets/images/team4.png'
import team5 from '../../assets/images/team5.png'
import team6 from '../../assets/images/team6.png'
import {ReactComponent as FacebookIcon} from '../../assets/images/facebook-icon.svg'
import {ReactComponent as TwitterIcon} from '../../assets/images/twitter-icon.svg'
import { ReactComponent as InstagramIcon } from '../../assets/images/instagram-icon.svg'



const teamArray = [
  {
    name: "kerry lorem",
    position: "business developer",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem exercitationem eligendi labore deserunt quisquam sequi.",
    image: team1
  },
  {
    name: "kerry lorem",
    position: "business developer",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem exercitationem eligendi labore deserunt quisquam sequi.",
    image: team2
  },
  {
    name: "kerry lorem",
    position: "business developer",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem exercitationem eligendi labore deserunt quisquam sequi.",
    image: team3
  },
  {
    name: "kerry lorem",
    position: "business developer",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem exercitationem eligendi labore deserunt quisquam sequi.",
    image: team4
  },
  {
    name: "kerry lorem",
    position: "business developer",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem exercitationem eligendi labore deserunt quisquam sequi.",
    image: team5
  },
  {
    name: "kerry lorem",
    position: "business developer",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem exercitationem eligendi labore deserunt quisquam sequi.",
    image: team6
  },
]

type teamMember = {
  name: string,
  position: string,
  details: string,
  image: string
}




const TeamLogic = () => {
  return (
    <>
      {
        teamArray.map((member: teamMember) => {
          const { name, position, details, image } = member;

          return(
            <article className="team__members__member">
              <picture className="team__members__member__image">
                <img src={image} alt={position} />
              </picture>
              <h3 className="team__members__member__name">{name}</h3>
              <p className="team__members__member__position">{position}</p>
              <p className="team__members__member__details">{details}</p>
              <figure className="team__members__member__socials">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
              </figure>
            </article>
          )
        })
      }


    </>
  )
}

export default TeamLogic