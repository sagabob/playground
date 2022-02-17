import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {selectColorFromMetric} from '../utils/helpers'


const SkillComp = (skillInfo) => {
    return <>
        <div className="skill-item-wrapper">
            <div className="skill-item">
                <div className="skill-metric">
                    <CircularProgressbar value={skillInfo.metric} text={`${skillInfo.metric}`} styles={buildStyles({
                        textSize: `30px`,
                        pathColor: `${selectColorFromMetric(skillInfo.metric)}`,
                        textColor: `#040508`
                    })} />
                </div>
                <div className="meta">
                    <span className="meta-title">{skillInfo.name}</span>
                    <span className="skill-description">{skillInfo.experience}</span>
                </div>
            </div>
            <div className="skill-notes">
                <ul >
                    {skillInfo.skill_notes.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    </>;
};

export default SkillComp;
