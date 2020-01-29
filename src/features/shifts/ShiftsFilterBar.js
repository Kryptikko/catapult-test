import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import ShiftsFilterComboBox from './ShiftsFilterComboBox'
import {filterByJobType, filterByStartTime} from '../../actions/shiftsActions'

function ShiftsFilterBar(props) {
  const {
    startTimeValue,
    startTimeOptions,
    jobTypeValue,
    jobTypeOptions,
    onStartTimeChange,
    onJobTypeChange} = props;

  return (
    <div>
      <ShiftsFilterComboBox
        label={"Filter by job type"}
        onChange={onJobTypeChange}
        options={jobTypeOptions}
        value={jobTypeValue} />
      <ShiftsFilterComboBox
        label={"Filter by starting time"}
        onChange={onStartTimeChange}
        value={startTimeValue}
        options={startTimeOptions} />
    </div>
  );
}

ShiftsFilterBar.propTypes = {
  onStartTimeChange: PropTypes.func.isRequired,
  onJobTypeChange: PropTypes.func.isRequired,
  jobTypeValue: PropTypes.string.isRequired,
  jobTypeOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
  startTimeValue: PropTypes.string.isRequired,
  startTimeOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
}

const mapStateToProps = ({shiftsFilters}) => {
  const {jobTypeValue, jobTypeOptions, startTimeValue, startTimeOptions} = shiftsFilters;
  return {jobTypeValue, jobTypeOptions, startTimeValue, startTimeOptions};
}

const mapDispatchToProps = (dispatch) => ({
  onStartTimeChange: (value) => dispatch(filterByStartTime(value.target.value)),
  onJobTypeChange: (value) => dispatch(filterByJobType(value.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShiftsFilterBar)
