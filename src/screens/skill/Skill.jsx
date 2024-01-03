import React from 'react';
import { skills } from '../../data/data';
import { SkillItem } from '../../components';

const Skill = () => {
    return (
        <section className="skill container section" id="skill">
            <h2 className="section__title">Skills</h2>

            <SkillItem data={skills} />
        </section>
    )
}

export default Skill
