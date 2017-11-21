import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text, View} from 'react-native'


class NewDeckComponent extends Component {
    render () {
        return (
            <Text>New deck compoenet</Text>
        )
    }
}

export default connect ()(NewDeckComponent)