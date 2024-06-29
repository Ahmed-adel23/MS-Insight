import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Badge, Surface, Title } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
const IconSize = 24;
const AppHeader = ({  title,  onRightPress,  optionalBtnPress, optionalBadge }) => {

	const RightView = () => (
			<View style={[styles.view, styles.rightView]}>
				 <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
					<Feather name="bell" size={IconSize} color="white" />
				 <Badge style={{ position: 'absolute', top: -5, right: -10 }}>{optionalBadge}</Badge>
				</TouchableOpacity>
				<TouchableOpacity onPress={onRightPress}>
					<Feather name="more-vertical" size={IconSize} color="white" />
				</TouchableOpacity>
			</View>
	)
	const TitleView = () => (
		<View style={styles.titleView}>
			<Title style={{ color: "white" , paddingLeft: 10 }}>{title}</Title>
		</View>
	) 

	return (
		<Surface style={[styles.header,  { backgroundColor: "#019874" } ]}>
			<TitleView />
			<RightView />
		</Surface>
	)
}

export default AppHeader

const styles = StyleSheet.create({
	header: {
		height: 50,
		shadowOffset:{width: 10 , height: 10},
		elevation: 25,
		shadowColor: "black" ,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor:' black',
	},
	view: {
		marginHorizontal: 16,
		alignItems: 'center',
		flexDirection: 'row',
		
	},
	titleView: {
		flex: 1,
	},
	rightView: {
		justifyContent: 'flex-end',
	},
	rowView: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 10,
	}
})