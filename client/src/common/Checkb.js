import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    }
};

class Checkb extends React.Component {
    state = {
        checked: false
    }

    updateCheck() {
        this.setState((oldState) => {
            return {
                checked: !oldState.checked,
            };
        });
    }

    render() {
        return (
            <div style={styles.block}>
                <Checkbox
                    label=""
                    checked={this.state.checked}
                    onCheck={this.updateCheck.bind(this)}
                    style={styles.checkbox}
                />
            </div>
        );
    }
}
export default Checkb;
