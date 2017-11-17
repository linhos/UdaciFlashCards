import React, {Component} from 'react'
import {connect} from 'react-redux'
import {SectionList} from 'react-native-scripts'
import {fetchDecks} from '../actions'
import {Text} from 'react-native'


class BaseComponent extends Component
{

    componentDidMount() {
        this.props.fetchDecks()
    }

    render() {
        return (
            <Text>BaseComponent</Text>
        )
    }

}

function mapStateToProps({decks}) {
    return {
        decks: Object.keys(decks)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDecks: () => dispatch(fetchDecks()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseComponent)
