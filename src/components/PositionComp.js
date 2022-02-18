import React from 'react';

const PositionComp = (positionInfo) => {
    return <>
        <div className="timeline-card">
            <h5 className="subtitle is-6">{positionInfo.role}</h5>
            <div className="timeperiod">
                <span>
                    <span>{positionInfo.time_at_role_start}</span>
                    <span>&#8213;</span>
                    <span>{positionInfo.time_at_role_end}</span>
                    {positionInfo.time_at_role != null && <span>({positionInfo.time_at_role})</span>}
                </span>
            </div>
            <div className="location-description">
                <span>{positionInfo.location}</span>
            </div>
            <div className="key-description">
                <ul >
                    {positionInfo.highlights.map((highlight, index) =>
                    (
                        <li key={index}>{highlight}</li>
                    ))}
                </ul>
            </div>
        </div>
    </>;
};

export default PositionComp;
