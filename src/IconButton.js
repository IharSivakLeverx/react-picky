/**
 * DON'T EDIT THIS FILE UNLESS IT IS A DESIGN CHANGE OR BUG FIX
 * ALL CONTROL AND LAYOUT MUST BE IMPLEMENTED OUTSIDE OF THIS COMPONENT
 * BY USING EITHER WRAPPERS, {className} PROP OR {...rest} PROPS
 */

//@ts-check
import React from 'react';
import jss from 'react-jss';
import classNames from 'classnames';
import themeType, { cpg } from './theme';
import allIcons from './all-icons';

/**
 * @param {typeof themeType & typeof cpg} theme
 */
const styles = theme => ({
  reset: {
    border: 'none',
    outline: 'none',
    padding: 0,
    margin: 0,
    font: 'inherit',
    backgroundColor: 'transparent',
    '&:disabled': {
      opacity: 0.7,
      cursor: 'not-allowed',
    },
  },

  default: {
    cursor: 'pointer',
    textAlign: 'center',
    borderRadius: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // '&:focus': {
    // 	boxShadow: '0px 0px 0px 3px #fff, 0px 0px 0px 5px #4C5568',
    // }
  },

  grey: {
    backgroundColor: '#4C5568',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#414A5D',
    },
    '&:active': {
      backgroundColor: '#303A4E',
    },
  },

  // color variants
  accent: {
    backgroundColor: theme.palette.accent,
    color: '#ffffff',
    '&:hover': {
      backgroundColor: theme.palette.accentHover,
    },
    '&:active': {
      backgroundColor: theme.palette.accentActive,
    },
    '&:focus': {
      boxShadow: `0px 0px 0px 3px #fff, 0px 0px 0px 5px ${theme.palette.accentHover}`,
      backgroundColor: theme.palette.accentHover,
    }
  },
  neutral: {
    backgroundColor: '#f7f8fc',
    color: '#626c83',
    '&:hover': {
      backgroundColor: '#e6e8f3',
    },
    '&:active': {
      backgroundColor: '#cacfe0',
    },
    '&:focus': {
      boxShadow: '0px 0px 0px 3px #fff, 0px 0px 0px 5px #e6e8f3',
      backgroundColor: '#e6e8f3',
    }
  },

  // sizes
  small: {
    width: 24,
    height: 24,
    flex: '0 0 24px',

    fontSize: 18,
    lineHeight: '18px',
  },
  medium: {
    width: 36,
    height: 36,
    flex: '0 0 36px',

    fontSize: 24,
    lineHeight: '24px',
  },

  big: {
    width: 40,
    height: 40,
    flex: '0 0 40px',

    fontSize: 24,
    lineHeight: '24px',
  },

  large: {
    width: 44,
    height: 44,
    flex: '0 0 44px',

    fontSize: 24,
    lineHeight: '24px',
  },

  huge: {
    width: 48,
    height: 48,
    flex: '0 0 48px',
    fontSize: 40,
    lineHeight: '26px',
  }
});

/**
 * @type React.FC<{
 *   size?: 'small' | 'medium' | 'large'
 *   variant?: 'neutral' | 'accent'
 *   className?: string
 *   disabled?: boolean
 *   classes: { [K in keyof ReturnType<typeof styles>]: string }
 *   onClick: (event: React.MouseEvent<HTMLButtonElement>) => any
 *   name: keyof typeof allIcons
 * }>
 */
const IconButton = ({
                      classes,
                      onClick,
                      className,
                      size = 'medium',
                      variant = 'accent',
                      disabled,
                      name,
                      //@ts-ignore
                      theme,
                      ...rest
                    }) => {
  const classNameComposed = classNames(
    classes.reset,
    classes.default,
    classes[size],
    classes[variant],
    className,
  );

  return (
    <button
      className={classNameComposed}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <span className={`iconm-${name}`} />
    </button>
  );
};

export default jss(styles)(IconButton);
