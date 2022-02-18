import React from 'react'
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { primaryIconColor } from '../utils/colors';

const CertificationComp = (certificationInfo) => {
    return (
        <div className="certification-item-wrapper">
            <div className="certification-item">
                <div className="certification-metric">
                    <a href={certificationInfo.provider_link} target="_blank" rel="noreferrer" ><img src={certificationInfo.icon} alt="" /></a>
                </div>
                <div className="meta">
                    <span className="meta-title">{certificationInfo.title}</span>
                    <span >
                        <span>{certificationInfo.issued}</span>
                        <span>&#8213;</span>
                        <span>{certificationInfo.expires}</span>
                    </span>
                </div>
            </div>
            <div className="certification-notes">
                <ul>
                    <li>{certificationInfo.credential_Id}</li>
                    <li>
                        <a className="button is-outlined is-smal is-link" href={certificationInfo.badge} target="_blank" rel="noreferrer">
                            <span className="icon is-small">
                                <FontAwesomeIcon icon={faForward} color={primaryIconColor} size="sm"/>
                            </span>
                            <span>Credential</span>
                        </a></li>
                </ul>

            </div>
        </div>
    )
}

export default CertificationComp