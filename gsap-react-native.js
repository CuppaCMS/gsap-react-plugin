var __hasProp = {}.hasOwnProperty;
if (window._gsQueue == null) { window._gsQueue = []; }
window._gsQueue.push(function() {
    return window._gsDefine.plugin({
        propName: 'state',
        API: 2,
        version: '1.0.2',
        init: function(target, value, tween) {
            var end, p, start, _ref, _ref1, _ref2;
            if (typeof target.setState !== 'function') {
                return false;
            }
            if (target._tweenState == null) {
                target._tweenState = {};
            }
            this._tween = {};
            for (p in value) {
                if (!__hasProp.call(value, p)) continue;
                end = value[p];
                start = (_ref = (_ref1 = (_ref2 = target.state) != null ? _ref2[p] : void 0) != null ? _ref1 : target._tweenState[p]) != null ? _ref : end;
                this._tween[p] = start;
                this._addTween(this._tween, p, start, end, p);
            }
            this._target = target;
            return true;
        },
        set: function(ratio) {
            var k, v, _ref;
            this._super.setRatio.call(this, ratio);
            _ref = this._tween;
            for (k in _ref) {
                v = _ref[k];
                this._target._tweenState[k] = v;
            }
            return this._target.setState(this._tween);
        }
    });
});
if (window._gsDefine) { window._gsQueue.pop()(); }

window._gsQueue.push(function() {
    return window._gsDefine.plugin({
        propName: 'style',
        priority: 0,
        API: 2,
        version: '0.0.1',
        init: function(target, value, tween, index) {
            if(!target) return false;
            this._target = target;
            this._tween = {};
            for (p in value) {
                end = value[p];
                let realProp = p;
                if(realProp == "alpha") realProp = "opacity";
                start = 0;
                if(this._target.gsStyle) start = this._target.gsStyle[p];
                this._tween[p] = start;
                this._addTween(this._tween, p, start, end, p);
            }
            return true;
        },
        set: function(ratio) {
            if(!this._target || !this._target.setNativeProps) return false;
            this._super.setRatio.call(this, ratio);
            var value = this._tween;
            for (p in value) {
                let realProp = p;
                if(realProp == "alpha") realProp = "opacity";
                this._target.setNativeProps({style:{[realProp]:value[p]}  } );
            }
            this._target.gsStyle = value;
        }
    });
});
if (window._gsDefine) { window._gsQueue.pop()(); }

window._gsQueue.push(function() {
    return window._gsDefine.plugin({
        propName: 'transform',
        priority: 0,
        API: 2,
        version: '0.0.1',
        init: function(target, value, tween, index) {
            if(!target) return false;
            this._target = target;
            this._tween = {};
            for (p in value) {
                end = value[p];
                start = 0;
                if(this._target.gsTransform) start = this._target.gsTransform[p];
                this._tween[p] = start;
                this._addTween(this._tween, p, start, end, p);
            }
            return true;
        },
        set: function(ratio) {
            if(!this._target || !this._target.setNativeProps) return false;
            this._super.setRatio.call(this, ratio);
            var value = this._tween;
            for (p in value) {
                let realProp = p;
                if(realProp == "x") realProp = "translateX";
                if(realProp == "y") realProp = "translateY";
                this._target.setNativeProps({style:{transform:[{[realProp]:value[p]}]}});
            }
            this._target.gsTransform = value;
        }
    });
});
if (window._gsDefine) { window._gsQueue.pop()(); }
