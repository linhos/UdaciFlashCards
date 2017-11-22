import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View} from 'react-native'
import { List, ListItem, Card, Button } from 'react-native-elements'



class BaseComponent extends Component
{

    render() {
        return (
            <View>
                <List>
                    {
                        this.props.state.decks.decks.map((item, i) => (
                        
                        <ListItem
                            onPress={() => this.props.navigation.navigate('DetailDeck', item)}
                            key={i}
                            title={item.title}
                            subtitle={Object.keys(item.questions).length}
                            leftIcon={{name: item.icon}}
                        />
                        ))
                    }
                </List>
                <Button
                    buttonStyle={{marginTop: 20, marginBottom: 10, backgroundColor: 'green'}}
                    icon={{name: 'add-circle'}}
                    title='New Deck'
                    onPress={() => {
                        this.props.navigation.navigate(
                            'NewDeck',
                        );
                        }
                    }
                />

            </View>



        )
    }

}

const mapStateToProps = state => {
    return {state}
}

export default connect(mapStateToProps)(BaseComponent)
