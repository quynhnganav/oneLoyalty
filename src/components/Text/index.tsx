import * as React from 'react';
import { TextStyle, StyleProp, Text as DefaultText, StyleSheet } from 'react-native';


interface VoucherItemProps {
    style?: StyleProp<TextStyle>,
}

const Text: React.FC<VoucherItemProps> = React.memo(({
    children, style
}) => {
    return (
        <DefaultText style={[style, styles.text]}>{children}</DefaultText>
    )
})

export default Text;

const styles = StyleSheet.create({
    text: {
        color: '#003560'
    }
})

