import { React, useState } from 'react';
import { ReportTable, ReportHeader } from '../components/Reports';
import Header from '../components/Header';

function Reports() {
  const [state, setState] = useState({
    startDate: new Date(),
    endDate: new Date(),
    selectedBranches: [],
  });

  const setStartDate = (date) => {
    setState({ ...state, startDate: date });
  };

  const setEndDate = (date) => {
    setState({ ...state, endDate: date });
  };

  const setSelectedBranches = (selectedBranches) => {
    setState({ ...state, selectedBranches });
  };

  return (
    <div className="">
      <Header />
      <ReportHeader
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setSelectedBranches={setSelectedBranches}
      />
      <ReportTable
        startDate={state.startDate}
        endDate={state.endDate}
        selectedBranches={state.selectedBranches}
      />
    </div>
  );
}

export { Reports };
