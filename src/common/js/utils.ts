/** 获取用户手机transitioned 事件支持类型 */
export function whichTransitionEvent() {
  const el = document.createElement('fakeelement');
  const transitions = {
    'transition':'transitionend',
    'OTransition':'oTransitionEnd',
    'MozTransition':'transitionend',
    'WebkitTransition':'webkitTransitionEnd'
  }
  for(let t in transitions) {
      if( el.style[t] !== undefined ) {
          return transitions[t];
      }
  }
}