import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class Feed extends PureComponent {

  static propTypes = {
    isScrollUp: PropTypes.bool,
    shouldScrollUp: PropTypes.bool,
    shouldScrollDown: PropTypes.bool,
    loadOffset: PropTypes.number.isRequired,
    onReachOffset: PropTypes.func.isRequired,
  }

  node = null

  nodeScrollOffset = {
    scrollTop: null,
    scrollHeight: null,
  }

  componentWillReceiveProps({ shouldScrollUp, shouldScrollDown }) {
    if (shouldScrollUp) {
      this.scrollUp()
    }
    else if (shouldScrollDown) {
      this.scrollDown()
    }
  }

  componentWillUnmount() {
    const { isScrollUp } = this.props

    if (this.node) {
      this.node.removeEventListener('scroll', this.onScroll)

      if (isScrollUp) {
        window.removeEventListener('resize', this.scrollDown)
      }
    }
  }

  setNode = (node) => {
    const { isScrollUp } = this.props

    if (node) {
      this.node = node
      this.node.addEventListener('scroll', this.onScroll)

      if (isScrollUp) {
        window.addEventListener('resize', this.scrollDown)
      }
    }
  }

  scrollDown = () => this.node.scrollTop = this.node.scrollHeight

  scrollUp = () => {
    const { scrollTop, scrollHeight } = this.nodeScrollOffset

    this.node.scrollTop = this.node.scrollHeight - scrollHeight + scrollTop
  }

  onScroll = () => {
    const { loadOffset, isScrollUp, onReachOffset } = this.props
    const { scrollTop, scrollHeight, offsetHeight } = this.node

    this.nodeScrollOffset = {
      scrollTop,
      scrollHeight,
    }

    if (isScrollUp) {
      if (loadOffset >= scrollTop) {
        onReachOffset()
      }
    }
    else if (loadOffset >= scrollHeight - scrollTop - offsetHeight) {
      onReachOffset()
    }
  }

  render() {
    const { className, children } = this.props

    return (
      <div className={className} ref={this.setNode}>
        {children}
      </div>
    )
  }
}
