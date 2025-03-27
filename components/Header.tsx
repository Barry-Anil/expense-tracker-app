import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderProps } from '@/types'
import Typo from './Typo'
import { colors } from '@/constants/theme'

const Header = ({
    title ='',
    leftIcon,
    style
}: HeaderProps) => {
  return (
    <View style={[styles.container, style]}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        {
            title && (
                <Typo
                    size={22}
                    fontWeight={'600'}
                    style={{
                        textAlign: 'center',
                        width: leftIcon ? '82%' : '100%',
                        color: colors.neutral900
                    }}
                >{title}</Typo>
            )
        }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    leftIcon: {
        alignSelf: 'flex-start'
    }
})