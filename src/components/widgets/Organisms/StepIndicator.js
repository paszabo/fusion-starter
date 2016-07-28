/* eslint-disable react/no-multi-comp */
import React, {PropTypes} from 'react';

/*
  Step Indicator component.
  Parameters:
    labels (required)
      - this determines the number of steps, and each item becomes the label of each corresponding step (in order)
      - minimum 3, max 5
    className (options)
      - additional classes to add to <ul class="tracker">
    activeStep (optional)
      - set which step should show active.  Each step to the left (smaller index) of the active item will automatically be set to "completed"
      - a value of '0' will set all to grey/'incomplete'
    id (optional)
      - set the id attribute of the <ul class="tracker">
*/

const StepIndicator = (props) => {
  // return the component if greater than 2 steps are included.
  // If there are more than 5, trim to 5.
  const activeStep = props.activeStep || 0;

  if(props.labels){
    if(props.labels.length > 5) {
      props.labels = props.labels.slice(0,5);
    }
    if(props.labels.length > 3){
      return (
        <ul key={props.id} className={"tracker "+ props.className} id={props.id ? props.id : ""}>
          {props.labels.map(function(label, i){
            return (
              <StepIndicatorItem key={i} status={activeStep && activeStep > i+1 ? "complete" : activeStep === i+1 ? "active" : ""} step={i+1} label={label} />
            );
          })}
        </ul>
      );
    } else {
      return null;
    }
  }
};
StepIndicator.propTypes = {
  labels: PropTypes.array,
  className: PropTypes.string,
  activeStep: PropTypes.number,
  id: PropTypes.string
};

// individual Step Indicator items
const StepIndicatorItem = (props) => {
  return (
    <li className={'tracker-item' + (props.status ? ' tracker-' + props.status : '')} data-trackerindex={props.step}>
      <div className="tracker-step">{props.step}</div>
      <div className="tracker-label">{props.label}</div>
    </li>
  );
};
StepIndicatorItem.propTypes = {
  status: PropTypes.string,
  step: PropTypes.number.isRequired,
  label: PropTypes.string
};

export default StepIndicator;
/* eslint-enable react/no-multi-comp */
