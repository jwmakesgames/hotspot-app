/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { TouchableOpacity, TextStyle } from 'react-native'
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  BoxProps,
} from '@shopify/restyle'

import Text from './Text'
import { Colors, Theme } from '../theme/theme'
import Box from './Box'

const restyleFunctions = [spacing, border, backgroundColor]
type Props = BoxProps<Theme> & {
  mode?: 'text' | 'contained'
  variant?: ButtonVariant
  onPress?: () => void
  title: string
  textStyle?: TextStyle
}

type ButtonVariant = 'primary' | 'secondary'

const Button = ({
  onPress,
  title,
  mode = 'text',
  variant = 'primary',
  textStyle,
  ...rest
}: Props) => {
  const props = useRestyle(restyleFunctions, rest)

  const getBackground = (): Colors | undefined => {
    if (mode === 'contained') {
      if (variant === 'secondary') {
        return 'secondaryMain'
      }
      return 'primaryMain'
    }

    return undefined
  }

  const getTextColor = (): Colors => {
    if (mode === 'contained') {
      if (variant === 'secondary') {
        return 'blueGray'
      }
      return 'primaryText'
    }

    return 'secondaryText'
  }

  return (
    <Box backgroundColor={getBackground()} borderRadius="m" {...props}>
      <TouchableOpacity onPress={onPress}>
        <Text
          paddingVertical="m"
          variant="button"
          color={getTextColor()}
          style={textStyle}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Box>
  )
}

export default Button
