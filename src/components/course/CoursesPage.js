import React ,{PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators}from 'redux'
import {Connect} from 'react-redux'
import * as courseActions from '../../actions/courseActions'
import {Link} from 'react-router';
import {Moment} from 'react-moment';
// import { Grid, Card, Icon, Table } from 'semantic-ui-react';

const Table = ({courses}) => {
  console.log(courses,"--")
  return (
      <div>
        <table className="ui celled table">
          <thead>
          <tr>
            <th>Block Number</th>
            <th>Dec Number</th>
            <th>Age</th>
            <th>Miner</th>
            <th>Reward</th>
          </tr>
          </thead>
          <tbody>
          {courses.map(course =>
              <tr key={course.hash}>
                  <td>{course.blockNumber}</td>
                  <td>{course.decNumber}</td>
                  <td>{parseInt(course.age,10)}</td>
                  <td>{course.miner}</td>
                  <td>{course.blockReward} EXP</td>
              </tr>
          )}
          </tbody>
        </table>
      </div>
  )
}

const Row =({course}) => {
  return (
      <tr key={course.hash}>
        <td><Link to={`/blocks/${course.blockNumber}`}>{course.blockNumber}</Link></td>
        <td><Link to={`/uncle/${course.decNumber}`}>{course.decNumber}</Link></td>
        <td>  <Moment unix fromNow>{parseInt(course.age,10)}</Moment></td>      <td><Link to={`address/${course.miner}`}>{course.miner}</Link></td>
        <td>{course.blockReward} EXP</td>
      </tr>
  )
}

class CoursesPage extends Component{
  constructor(props,context){
      super(props, context);
      this.state ={
          currentPage : 1
      }
  }
    componentDidMount(){
        this.fetchCourses();
    }

    fetchCourses() {
        this.context.store.dispatch(courseActions.loadCourses());
    }

  render(){
    return(
        <div>
          <h1>Courses</h1>
          {this.props.courses.total_record && <Table courses={this.props.courses.uncles} />}
        </div>
    )
  }
}

CoursesPage.PropTypes= {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return{
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  return{
    actions:bindActionCreators(courseActions,dispatch)
  }
}
export default connect(mapStateToProps)(CoursesPage);
