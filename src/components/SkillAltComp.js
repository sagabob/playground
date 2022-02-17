import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { selectColorFromMetric } from '../utils/helpers'

const SkillAltComp = (skillInfo) => {
    return <>
        <div className="skill-item-wrapper">
            <div className="skill-item">
                <div className="skill-metric">
                    <CircularProgressbarWithChildren value={skillInfo.metric} styles={buildStyles({
                        pathColor: `${selectColorFromMetric(skillInfo.metric)}`,
                        textColor: `#040508`
                    })} >
                        <img
                            style={{ width: 20, height: 20, marginTop: 10 }}
                            src={skillInfo.icon}
                            alt="tool"
                        />
                        <div style={{ fontSize: 10, marginTop: 0 }}>
                            <strong>{skillInfo.metric}</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="meta">
                    <span className="meta-title">{skillInfo.name}</span>
                    <span className="skill-description">{skillInfo.experience}</span>
                </div>
            </div>
        </div>
    </>;
};


export default SkillAltComp