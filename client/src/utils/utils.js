const utils = {
    sortPatients: function(arr, criteria) {
        let newArr = []
        switch(criteria) {

            case 'FirstName':

                return arr.sort((a, b) => {
                    let nameA = a.firstName.toUpperCase();
                    let nameB = b.firstName.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });

            case 'ReverseFirstName':

                return arr.sort((a, b) => {
                    let nameA = a.firstName.toUpperCase();
                    let nameB = b.firstName.toUpperCase();
                    if (nameA > nameB) {
                        return -1;
                    }
                    if (nameA < nameB) {
                        return 1;
                    }
                    return 0;
                });

            case 'DueDate':

                return arr.sort((a, b) => {
                    let dueDateA = a.dueDate;
                    let dueDateB = b.dueDate;
                    if (dueDateA < dueDateB) {
                        return -1;
                    }
                    if (dueDateA > dueDateB) {
                        return 1;
                    }
                    return 0;
                });

            case 'ReverseDueDate':

                return arr.sort((a, b) => {
                    let dueDateA = a.dueDate;
                    let dueDateB = b.dueDate;
                    if (dueDateA > dueDateB) {
                        return -1;
                    }
                    if (dueDateA < dueDateB) {
                        return 1;
                    }
                    return 0;
                });
            default:
                return newArr
        }
    },
    getPatientByCnp: function(arr, cnp) {
        return arr.find(el => el.cnp === cnp)
    }
}

export default utils

