```js
const { DirectionalHint } = require('../../components/Callout');

<div style={{ height: '375px' }}>
  <Callout
    content={<UserHovercard user={user} />}
    directionalHint={DirectionalHint.bottomLeftEdge}
    startVisible={false}
  >
    <FakeLink>{user.name}</FakeLink>
  </Callout>
</div>
```
