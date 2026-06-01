import React from 'react';
import PropTypes from 'prop-types';

const SkillBadge = ({ skill }) => {
  return (
    <span className="badge bg-primary me-2 mb-2 p-2 fs-6">
      {skill}
    </span>
  );
};

SkillBadge.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default SkillBadge;