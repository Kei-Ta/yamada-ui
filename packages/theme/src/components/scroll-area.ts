import type { ComponentStyle } from "@yamada-ui/core"

export const ScrollArea: ComponentStyle<"ScrollArea"> = {
  baseStyle: {
    outline: 0,
    _focusVisible: {
      boxShadow: "inline",
    },
    _scrollbar: {
      w: "3",
      h: "3",
    },
    _scrollbarTrack: {
      bg: "transparent",
    },
    _scrollbarThumb: {
      bg: "blackAlpha.600",
      bgClip: "padding-box",
      border: "3px solid transparent",
      rounded: "full",
      _nativeHover: {
        bg: "blackAlpha.800",
        bgClip: "padding-box",
      },
    },
    _dark: {
      _scrollbarThumb: {
        bg: "whiteAlpha.600",
        bgClip: "padding-box",
        _nativeHover: {
          bg: "whiteAlpha.800",
          bgClip: "padding-box",
        },
      },
    },
    _scrollbarButton: {},
    _scrollbarCorner: {
      bg: "transparent",
    },
    "@-moz-document url-prefix()": {
      scrollbarColor: "whiteAlpha.600 transparent",
      _light: {
        scrollbarColor: "whiteAlpha.600 transparent",
      },
      _dark: {
        scrollbarColor: "whiteAlpha.600 transparent",
      },
    },
  },
}
