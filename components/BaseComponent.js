import React, {Component} from 'react'
import {connect} from 'react-redux'
import {SectionList} from 'react-native-scripts'



class BaseComponent extends Component
{

    render() {
        return (
            <SectionList />
        )
    }

}

function mapStateToProps({decks}) {
    return {
        decks: Object.keys(decks)
    }
}

export default connect(mapStateToProps)(BaseComponent)
