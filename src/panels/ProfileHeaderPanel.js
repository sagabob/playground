import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { primaryIconColor } from '../utils/colors';
import profileData from '../content/profile.json';

const ProfileHeaderPanel = () => {
    return (
        <>
            <div className="profile-header has-text-centered">
                <div className="h-avatar is-xl">
                    <img className="avatar" src={profileData.photos.portrait} alt="personal-logo" />
                    <img className="badge" src={profileData.photos.nationality} alt="location" />
                </div>
                <h3 className="title is-4 is-narrow is-thin mb-1">Bob Pham</h3>
                <p className="bio-introduction mb-1">
                    {profileData.introduction.map((line, index) =>
                    (
                        <span key={index}>{line}<br /></span>
                    ))}

                </p>
                <div className="profile-stats">
                    <div className="profile-stat">
                        <FontAwesomeIcon icon={faUsers} color={primaryIconColor} />
                        <span>{profileData.stat.connection}</span>
                    </div>
                    <div className="separator"></div>
                    <div className="profile-stat">
                        <FontAwesomeIcon icon={faCodeBranch} color={primaryIconColor} />
                        <span>{profileData.stat.projects}</span>
                    </div>
                    <div className="separator"></div>
                    <div className="socials">
                        <a href={profileData.links.linkedin} target="_blank" rel="noreferrer" > <FontAwesomeIcon icon={faLinkedin} color={primaryIconColor} /></a>
                        <a href={profileData.links.github} target="_blank" rel="noreferrer" > <FontAwesomeIcon icon={faGithub} color={primaryIconColor} /></a>
                        <a href={profileData.links.codepen} target="_blank" rel="noreferrer" > <FontAwesomeIcon icon={faCodepen} color={primaryIconColor} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileHeaderPanel