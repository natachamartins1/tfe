// CreateSolution.js

import { connect } from 'react-redux';
import { createTheorie } from '../../redux/actions';
import NewTheorie from '../backend/exercices/add/NewTheorie';


const mapDispatchToProps = dispatch => {

  return {

    onAddTheorie: theorie => {
      dispatch(createTheorie(theorie));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewTheorie);