const rtMap = new WeakMap();

class RTFriend {
  constructor(rt) {
    rtMap.set(this, rt);
  }

  get rt() {
    return rtMap.get(this);
  }
}

module.exports = { RTFriend };
