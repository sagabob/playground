import React from 'react';
import PositionComp from './PositionComp'

const WorkplaceComp = (workspaceInfo) => {
    return <>
        <div className="experience-item-wrapper">
            <div className="experience-item">
                <a href={workspaceInfo.link} target="_blank"  rel="noreferrer" ><img src={workspaceInfo.image} alt="" /></a>
                <div className="meta">
                    <span className="meta-title">{workspaceInfo.company}</span>
                    <span >
                        <span>{workspaceInfo.work_type}</span>
                        <span>&#8213;</span>
                        <span>{workspaceInfo.total_time}</span>
                    </span>
                </div>
            </div>
            <div className="timeline">
                <div className="outer">
                    {workspaceInfo.positions.map((workspace, index) =>
                        (<PositionComp {...workspace} key={index} />))}
                </div>
            </div>
        </div>
    </>;
};

export default WorkplaceComp;
