import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Constants from "../AppConstants";


export default class EditPatientModal extends React.Component {
    state = {
        open: false,
        currPatientId: null,
        cnp: '',
        firstName: '',
        lastName: '',
        city: '',
        county: '',
        address: '',
        email: '',
        dueDate: '',
        phone: ''

    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleCityChange = (event) => {
        this.setState({
            city: event.target.value
        });
    };

    handleAddressChange = (event) => {
        this.setState({
            address: event.target.value
        });
    };

    handlePhoneChange = (event) => {
        this.setState({
            phone: event.target.value
        });
    };

    handleCnpChange = (event) => {
        this.setState({
            cnp: event.target.value
        });
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleRemove = () => {
        this.handleClose();
    };

    componentWillReceiveProps(nextProps) {
        console.log('NEXTPROPS: ', nextProps)
        this.setState({
            open: nextProps.isOpen,
            currPatientId: nextProps.patientId
        })
        let { patientId } = nextProps
        fetch(`api/patients/${patientId}`, {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        }).then(res=>res.json())
            .then( res => {
                console.log('GetPatientByID: ', res)
                this.setState({
                    cnp: res.cnp,
                    firstName: res.firstName,
                    lastName: res.lastName,
                    city: res.city,
                    county: res.county,
                    address: res.address,
                    email: res.email,
                    dueDate: res.dueDate,
                    phone: res.phone
                })
            }).catch(function(err) {
            console.log(err)
        });
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={false}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={this.handleRemove}
            />
        ];

        return (
            <div>

                <Dialog
                    title="Detailed Patient Info"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    // bodyStyle={{maxHeight: '1000px !important'}}
                    // contentStyle={{maxHeight: '1000px !important'}}
                    // style={{maxHeight: '1000px !important'}}
                    // actionsContainerStyle={{maxHeight: '1000px !important'}}
                    // overlayStyle={{maxHeight: '1000px !important'}}
                >
                    <TextField
                        value={this.state.firstName + ' ' + this.state.lastName}
                        floatingLabelText="Patient Name"
                        // onChange={this.handleChange}
                    />
                    <br/>
                    <TextField
                        value={this.state.cnp}
                        floatingLabelText="CNP"
                        onChange={this.handleCnpChange}
                    />
                    <br/>
                    <TextField
                        value={this.state.city}
                        floatingLabelText="City"
                        onChange={this.handleCityChange}
                    />
                    <br/>
                    <TextField
                        value={this.state.address}
                        floatingLabelText="Address"
                        onChange={this.handleAddressChange}
                    />
                    <br/>
                    <TextField
                        value={this.state.phone}
                        floatingLabelText="Phone"
                        onChange={this.handlePhoneChange}
                    />
                    <br/>
                    <TextField
                        value={ new Date(this.state.dueDate).toDateString()}
                        floatingLabelText="Due Date"
                    />
                    <br/>
                </Dialog>
            </div>
        );
    }
}

