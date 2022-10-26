import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props){
    return (
        <Pressable android_ripple={{color: '#dddddd'}} 
                    onPress={props.onDelete.bind(this, props.id)}
                    style={({ pressed }) => pressed && styles.pressedItem}
                    >
            <View style={styles.goalList}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalList: {
        borderWidth: 1,
        borderColor: '#5e0acc',
        padding: 8,
        margin: 8,
        alignItems: 'center',
        backgroundColor: '#5e0acc',
        color: '#fff'
      },
    goalText: {
        color: '#fff',
        fontSize: 12
    },
    pressedItem: {
        opacity: 0.5
    }

});