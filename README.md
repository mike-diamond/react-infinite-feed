# react-infinite-feed
Infinite feed with up or down scroll direction

[![Npm Version](https://badge.fury.io/js/react-infinite-feed.svg)](https://www.npmjs.com/package/react-infinite-feed)
[![Month Downloads](https://img.shields.io/npm/dm/react-infinite-feed.svg)](http://npm-stat.com/charts.html?package=react-infinite-feed)
[![Npm Licence](https://img.shields.io/npm/l/react-infinite-feed.svg)](https://www.npmjs.com/package/react-infinite-feed)

### Instalation
`npm install --save react-infinite-feed`

### Usage
This component helps to implement infinite scroll.
It takes `loadOffset` property and when user scrolled to that point it handles `onReachOffset` function,
which can be used to load additional data to the feed.

By default scroll works from the top to the bottom (like socials feeds e.g. facebook or instagram).
If you set property `isScrollUp` the component will scroll from the bottom to the top (like messengers e.g. telegram).

```jsx
import React, { PureComponent } from 'react'
import Feed from 'react-infinite-feed'

import Loader from './Loader/Loader'
import Message from './Message/Message'


export default class Chat extends PureComponent {

  state = {
    shouldScrollUp: false,
    shouldScrollDown: false,
  }

  componentDidUpdate({ chatMessages: oldChatMessages }) {
    const { chatMessages } = this.props

    // these steps are necessary only if your scroll direction is up 
    const isMessagesUpdated = (
      !oldChatMessages.length
      || chatMessages.some(({ id }, index) => !oldChatMessages[index] || oldChatMessages[index].id !== id)
    )

    if (!oldChatMessages.length) {
      this.setState({
        shouldScrollDown: true,
      })
    }
    else if (isMessagesUpdated) {
      this.setState({
        shouldScrollUp: true,
      })
    }
    else {
      this.setState({
        shouldScrollUp: false,
        shouldScrollDown: false,
      })
    }
  }

  fetchMoreMessages = () => {
    // Some actions to fetch more messages to 'chatMessages' property
  }

  render() {
    const { shouldScrollUp, shouldScrollDown } = this.state
    const { chatMessages, loadOffset, isLoadedChatMessages } = this.props

    return (
      <Feed
        isScrollUp
        onReachOffset={this.fetchMoreMessages}
        {...{ loadOffset, shouldScrollUp, shouldScrollDown }}
      >
        {
          isLoadedChatMessages
            ? chatMessages.map(({ id, message, author }) => (
              <Message key={id} {...{ id, message, author }} />
            ))
            : <Loader />
        }
      </Feed>
    )
  }
}
```

### Examples
[Scroll up feed demo](https://react-firebase-chat-11658.firebaseapp.com/)

[Boilerplate with this component](https://github.com/mike-diamond/react-firebase-ssr-boilerplate)
