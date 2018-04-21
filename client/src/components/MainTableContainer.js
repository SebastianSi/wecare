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
            employeeId: null,
            patients: [],
            sortedBy: ''
        }
    }

    onHeaderCellClicked = (event) => {
        console.log(event.target)
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
        }
        // this.openEditModal(event.target.innerHTML)
    }

    componentWillReceiveProps(props) {
        this.setState({patients: props.patients})
    }

    openEditModal = (employeeId) => {
        this.setState({
            modalOpened: true,
            employeeId
        })
    }

    removeEmployee = () => {
        console.log('REMOVING PATIENT', this.state.employeeId)
        let { employeeId } = this.state

        fetch(`api/employee/delete/${employeeId}`, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res=>res.json())
            .then( res => {
                console.log(res)
                this.setState({
                    modalOpened: false
                })
                this.props.getPatients()
            }).catch(function(err) {
            console.log(err)
        });
    }


    render() {

        //TODO: Checkbox column
        //TODO: if due date less than 3 days, textColor of row - Red
        //TODO: if checked row, change color back to black

        const patients = this.state.patients
        const tableContent = patients && patients.map((patient) => {
            return <TableRow key={patient[Constants.ID]}>
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
                <TableRowColumn style={{width: 190}}>{patient[Constants.DUE_DATE]}</TableRowColumn>
                <TableRowColumn style={{width: 50}}>{patient[Constants.BOOL]} <Checkb/></TableRowColumn>
            </TableRow>
        })

        return (
            <div>
                    <EmployeeModal
                        isOpen={this.state.modalOpened}
                        removeEmployee={this.removeEmployee}
                    />
                <Table

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
                            <TableHeaderColumn style={{width: 50}}>Bool</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>{tableContent}</TableBody>
                </Table>
            </div>
        );
    }
}

export default MainTableContainer;
