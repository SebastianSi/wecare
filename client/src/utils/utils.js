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
//
// var items = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Zeros', value: 37 }
// ];
//
// // sort by value
// items.sort(function (a, b) {
//     return a.value - b.value;
// });
//
// // sort by name
// items.sort(function(a, b) {
//     let nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     let nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//         return -1;
//     }
//     if (nameA > nameB) {
//         return 1;
//     }
//
//     // names must be equal
//     return 0;
// });
