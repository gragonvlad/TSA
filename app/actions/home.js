'use strict'

import { 
  GET_DIRECTION,
  HIDE_TAP_TEXT,
  SHOW_TAP_TEXT,
  HIDE_DIRECTION
} from '../constant/ActionType';

export function getDirection () {
  return {
    type: GET_DIRECTION
  }
}

export function hideTapText () {
  return {
    type: HIDE_TAP_TEXT
  }
}

export function showTapText () {
  return {
    type: SHOW_TAP_TEXT
  }
}

export function hideDirection () {
  return {
    type: HIDE_DIRECTION
  }
}
