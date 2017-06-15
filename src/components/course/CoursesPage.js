import React ,{PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators}from 'redux'
class CoursesPage extends Component{
  constructor(props,context){
    super(props,context)
  }

  render(){
    return(
        <h2>Courses Page</h2>
    )
  }
}
CoursesPage.PropTypes= {
  // actions:PropTypes.object.isRequired,
  // courses:PropTypes.array.isRequired
}

// function mapStateToProps(state,ownProps) {
//   return{
//     courses:state.courses
//   }
// }
// function mapDispatchToProps(dispatch) {
//   return{
//     actions:bindActionCreators(courseActions,dispatch)
//   }
// }
export default CoursesPage;
