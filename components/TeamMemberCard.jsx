import Image from 'next/image';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

import '@styles/profileCard.css'
import backgroundImage from '@public/assets/team/background.jpeg'
import linkedinIcon from '@public/assets/icons/linkedin.svg';
import twitterIcon from '@public/assets/icons/twitter.svg';
import githubIcon from '@public/assets/icons/github.svg';

const TeamMemberCard = ({ member }) => {
  return (
          <div className='ProfileCard'>
            <div className='header-image mb-0'>
              <div className='OverlayElm'/>
                <Image
                    src={backgroundImage.src}
                    alt='header image'
                    width={350}
                    height={200}
                    className='header-image'
                  />
            </div>
            <Image
                 src={member.avatar}
                 alt={member.name}
                 width={150}
                 height={150}
                 className='position-absolute ProfileImage mx-auto'

               />
            <div className='text-center mt-4 text-2xl text-violet-900 font-bold z-4 mx-auto'>
              {member.name}
            </div>
            <div className='text-center text-lg text-fuchsia-900 font-bold z-4 mx-auto'>
              {member.position}
            </div>
            <div className='text-center mt-2 text-sm z-4 mx-auto'>
              {member.quote}
            </div>
            <div className='flex align-center justify-center'>
            <div className="absolute bottom-4 flex flex-row space-x-4 justify-items-center mt-4">
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={twitterIcon}
                      alt="Twitter"
                      className="w-8 h-8 transform hover:scale-110 transition-transform duration-200"
                    />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={githubIcon}
                      alt="GitHub"
                      className="w-8 h-8 transform hover:scale-110 transition-transform duration-200"
                    />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={linkedinIcon}
                      alt="LinkedIn"
                      className="w-8 h-8 transform hover:scale-110 transition-transform duration-200"
                    />
                  </a>
                </div>
                </div>
          </div>
    // <div class="Pcontainer">
    //   <div className='image'>
    //     <Image
    //             src={member.avatar}
    //             alt={member.name}
    //             width={200}
    //             height={300}
    //           />
    //   </div>
    //   <div className="Pcontent">
    //     <div className="info">
    //       <h2>
    //         {member.name}
    //       </h2>
    //       <span>Web Developer</span>
    //     </div>
    //   </div>
    //   <ul>
    //     <li>
    //       <a href={member.github} target="_blank" rel="noopener noreferrer">
    //       <FaGithub />
    //       <span class="fab fa-facebook-f"></span>
    //       </a>
    //     </li>
    //     <li>
    //       <a href={member.github} target="_blank" rel="noopener noreferrer">
    //       <FaGithub />
    //       <span class="fab fa-facebook-f"></span>
    //       </a>
    //     </li>
    //     <li>
    //       <a href={member.github} target="_blank" rel="noopener noreferrer">
    //       <FaGithub />
    //       <span class="fab fa-facebook-f"></span>
    //       </a>
    //     </li>
    //   </ul>
    // </div>
    
    // <div className="profile-container">
    //   <div className="profile-wrapper">
    //     <div className="profile-card">
    //       <div className="profile-picture">
    //         <Image
    //           src={member.avatar}
    //           alt={member.name}
    //           width={100}
    //           height={100}
    //           objectFit="cover"
    //           className="rounded-full"
    //         />
    //       </div>
    //       <h2>{member.name}</h2>
    //       <h4>{member.position}</h4>
    //       {member.quote && <p>{member.quote}</p>}
    //       <div className="icons">
    //         {member.twitter && (
    //           <a href={member.twitter} target="_blank" rel="noopener noreferrer">
    //             <FaTwitter />
    //           </a>
    //         )}
    //         {member.github && (
    //           <a href={member.github} target="_blank" rel="noopener noreferrer">
    //             <FaGithub />
    //           </a>
    //         )}
    //         {member.linkedin && (
    //           <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
    //             <FaLinkedin />
    //           </a>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default TeamMemberCard;