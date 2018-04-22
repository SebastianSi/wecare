import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import EmployeeModal from './EditPatientModal';
import Constants from '../AppConstants'
import Checkb from '../common/Checkb'
import utils from '../utils/utils'

class MainTableContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalOpened: false,
            currPatientId: null,
            patients: [],
            sortedBy: ''
        }
    }

    onHeaderCellClicked = (event) => {
        console.log(event.target.innerHTML)
        if (event.target.innerHTML === 'FirstName') {
            if (this.state.sortedBy === 'FirstName') {
                this.setState({patients: utils.sortPatients(this.state.patients, 'ReverseFirstName')})
                this.setState({sortedBy: 'ReverseFirstName'})
            } else if (this.state.sortedBy === 'ReverseFirstName') {
                this.setState({patients: utils.sortPatients(this.state.patients, 'FirstName')})
                this.setState({sortedBy: 'FirstName'})
            } else { //is first time
                this.setState({patients: utils.sortPatients(this.state.patients, 'FirstName')})
                this.setState({sortedBy: 'FirstName'})
            }
        } else if (event.target.innerHTML === 'Due Date') {
            if (this.state.sortedBy === 'DueDate') {
                this.setState({patients: utils.sortPatients(this.state.patients, 'ReverseDueDate')})
                this.setState({sortedBy: 'ReverseDueDate'})
            } else if (this.state.sortedBy === 'ReverseDueDate') {
                this.setState({patients: utils.sortPatients(this.state.patients, 'DueDate')})
                this.setState({sortedBy: 'DueDate'})
            } else { //is first time
                this.setState({patients: utils.sortPatients(this.state.patients, 'DueDate')})
                this.setState({sortedBy: 'DueDate'})
            }
        }
        // this.openEditModal(event.target.innerHTML)
    }

    componentWillReceiveProps(props) {
        this.setState({patients: props.patients})
    }

    openEditModal = (currPatientId) => {
        this.setState({
            modalOpened: true,
            currPatientId
        })
    }

    onToggleCellClicked = (row, col, event) => {

        //CLEANEST CODE EVER:

        console.log('COL', col)
        if (col !== 9) {
            console.log(event.target.parentNode.childNodes[0].innerHTML)
            let patientCnp = event.target.parentNode.childNodes[0].innerHTML

            console.log(this.state.patients)
            let patientId = utils.getPatientByCnp(this.state.patients, patientCnp)[Constants.ID]
            this.setState({currPatientId: patientId})
            this.openEditModal(patientId)
            return null
        } else {
            this.setState({
                modalOpened: false
            })
            console.log(event.target.parentNode.parentNode.parentElement.parentNode.childNodes[0].innerHTML)
            let patientCnp = event.target.parentNode.parentNode.parentElement.parentNode.childNodes[0].innerHTML

            console.log(this.state.patients)
            let patientId = utils.getPatientByCnp(this.state.patients, patientCnp)[Constants.ID]
            this.setState({currPatientId: patientId})
        }

    }



    handleCheckboxToggled = (value) => {
        console.log('VALUEE: ', value)
        setTimeout(() => {
            let patientId = this.state.currPatientId

                fetch(`api/patients/${patientId}/flag/${value}`, {
                    method: 'put',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res=>res.json())
                    .then( res => {
                        console.log(res)
                        this.props.getPatientsData()
                    }).catch(function(err) {
                    console.log(err)
                });
        }, 50)


    }



    render() {

        let duePatientStyle = {color: 'red'}

        const patients = this.state.patients
        const tableContent = patients && patients.length && patients.map((patient) => {
            let isPatientDueAndUnchecked = ( patient[Constants.DUE_DATE] - Date.now() ) < 259200000 && !patient[Constants.BOOL]
            let patientRowStyle = isPatientDueAndUnchecked ? duePatientStyle : {}
            // let timestamp = {}
            return <TableRow key={patient[Constants.ID]} style={patientRowStyle}>
                {/*<TableRowColumn style={{cursor: 'pointer'}}>{patient[Constants.ID]}</TableRowColumn>*/}
                <TableRowColumn style={{width: 95}}>{patient[Constants.CNP]}</TableRowColumn>
                <TableRowColumn>{patient[Constants.FIRST_NAME]}</TableRowColumn>
                <TableRowColumn>{patient[Constants.LAST_NAME]}</TableRowColumn>
                <TableRowColumn>{patient[Constants.CITY]}</TableRowColumn>
                <TableRowColumn>{patient[Constants.COUNTY]}</TableRowColumn>
                <TableRowColumn>{patient[Constants.MAIN_HOSPITAL]}</TableRowColumn>
                <TableRowColumn style={{width: 140}}>{patient[Constants.GENERAL_PRACTITIONER]}</TableRowColumn>
                <TableRowColumn>{patient[Constants.TELEPHONE]}</TableRowColumn>
                {/*<TableRowColumn style={{width: 190}}>{patient[Constants.EMAIL]}</TableRowColumn>*/}
                <TableRowColumn style={{width: 190}}>{new Date( patient[Constants.DUE_DATE] ).toDateString()}</TableRowColumn>
                <TableRowColumn style={{width: 50}}
                                onClick={this.onToggleCellClicked}
                >{patient[Constants.BOOL]}
                    <Checkb notifyToggle={this.handleCheckboxToggled}
                            checked={patient[Constants.BOOL]}
                            />
                </TableRowColumn>
            </TableRow>
        })

        return (
            <div>
                    <EmployeeModal
                        patientId={this.state.currPatientId}
                        isOpen={this.state.modalOpened}
                    />
                <Table
                    onCellClick={this.onToggleCellClicked}
                    style={{overflow: 'hidden'}}
                       // bodyStyle={{overflow:'visible', width: 1500}}
                        >
                    <TableHeader>
                        <TableRow  onClick={this.onHeaderCellClicked} >
                            <TableHeaderColumn style={{width: 95}}>CNP</TableHeaderColumn>
                            <TableHeaderColumn>FirstName</TableHeaderColumn>
                            <TableHeaderColumn>LastName</TableHeaderColumn>
                            <TableHeaderColumn>City</TableHeaderColumn>
                            <TableHeaderColumn>County</TableHeaderColumn>
                            <TableHeaderColumn>MainHospital</TableHeaderColumn>
                            <TableHeaderColumn style={{width: 140}}>GeneralPractitioner</TableHeaderColumn>
                            <TableHeaderColumn>Telephone</TableHeaderColumn>
                            {/*<TableHeaderColumn style={{width: 190}}>Email</TableHeaderColumn>*/}
                            <TableHeaderColumn style={{width: 190}}>Due Date</TableHeaderColumn>
                            <TableHeaderColumn style={{width: 50}}>Done</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>{tableContent}</TableBody>
                </Table>
            </div>
        );
    }
}

export default MainTableContainer;
