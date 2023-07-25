import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function PressableButton({ children, onPressFunction, defaultStyle, pressedStyle }) {
  return (
    <Pressable
      onPress={onPressFunction}
      style={({ pressed }) => [defaultStyle, pressed && pressedStyle]}
    >
        {children}
    </Pressable>
  )
}