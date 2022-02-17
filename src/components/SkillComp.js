import React from 'react';
import { metricMediumColor, metricGoodColor, metricTopColor } from '../utils/colors'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const selectColor = (metric) => {
    if (metric < 80)
        return metricMediumColor;

    if (metric >= 90)
        return metricTopColor;

    return metricGoodColor;
}

const SkillComp = (skillInfo) => {
    return <>
        <div className="skill-item-wrapper">
            <div className="skill-item">
                <div className="skill-metric">
                    <CircularProgressbar value={skillInfo.metric} text={`${skillInfo.metric}`} styles={buildStyles({
                        textSize: `30px`,
                        pathColor: `${selectColor(skillInfo.metric)}`,
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
