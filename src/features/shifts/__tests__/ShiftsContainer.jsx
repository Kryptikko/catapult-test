import React from 'react'
import {shallow} from 'enzyme'
import { mapStateToProps, mapDispatchToProps } from '../ShiftsContainer';


describe('ShiftsContainer tests', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      contractors: {
        contractorsList: []
      },
      shiftsFilters:{
        jobTypeValue: "ALL",
        startTimeValue: "ALL",
      },
      shifts: {
        fetchingShifts: true,
        shiftsList: [],
        pendingShifts: [],
      }
    };
  });

  it('should pipe the "fetchingShifts" flag', () => {
    expect(mapStateToProps(initialState).fetchingShifts).toEqual(true);
  });

  it('should filter shifts list on Job Type', () => {
    initialState.shiftsFilters.jobTypeValue = "to not be filtered";
    initialState.shifts.shiftsList = [{
      jobType: "to be filtered",
    }, {
      jobType: "to not be filtered",
    }];
    const props = mapStateToProps(initialState)
    expect(props.shiftsList.length).toEqual(1);
  });

  it('should filter shifts list on Start Time', () => {
    initialState.shiftsFilters.startTimeValue = "PM";
    initialState.shifts.shiftsList = [{
      startTime: "11:00",
    }, {
      startTime: "13:00",
    }];
    const props = mapStateToProps(initialState)
    expect(props.shiftsList.length).toEqual(1);
  });

  it('should aggragate assigned contractors to shifts', () => {
    initialState.contractors.contractorsList = [{
      roleId: 1
    }]
    initialState.shifts.shiftsList = [{
      roleId: 1
    }];
    const props = mapStateToProps(initialState)
    expect(props.shiftsList[0].invitedContractsList.length).toEqual(1);
  });

  it('should display shifts loading status', () => {
    initialState.shifts.pendingShifts = [1]
    initialState.shifts.shiftsList = [{
      roleId: 1
    }];
    const props = mapStateToProps(initialState)
    expect(props.shiftsList[0].fetchContractors).toEqual(true);
  });


});
