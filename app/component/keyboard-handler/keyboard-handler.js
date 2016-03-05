/**
 * See http://stackoverflow.com/a/33585501/387204
 *
 * Handle resizing enclosed View and scrolling to input
 * Usage:
 *    <KeyboardHandler ref='kh' offset={50}>
 *      <View>
 *        ...
 *        <TextInput ref='username'
 *          onFocus={()=>this.refs.kh.inputFocused(this,'username')}/>
 *        ...
 *      </View>
 *    </KeyboardHandler>
 *
 *  offset is optional and defaults to 34
 *  Any other specified props will be passed on to ScrollView
 */

var React = require('react-native');
var {
    ScrollView,
    View,
    DeviceEventEmitter
} = React;


var myprops = {
    offset: 34
};

var KeyboardHandler = React.createClass({
    propTypes: {
        offset: React.PropTypes.number,
        children: React.PropTypes.node
    },
    getDefaultProps(){
        return myprops;
    },
    getInitialState(){
        DeviceEventEmitter.addListener('keyboardDidShow', (frames)=> {
            if (!frames.endCoordinates) return;
            this.setState({keyboardSpace: frames.endCoordinates.height});
        });
        DeviceEventEmitter.addListener('keyboardWillHide', (frames) => {
            this.setState({keyboardSpace: 0});
        });

        this.scrollviewProps = {
            automaticallyAdjustContentInsets: true,
            scrollEventThrottle: 200
        };
        // pass on any props we don't own to ScrollView
        Object.keys(this.props).filter((n)=> {
            return n != 'children';
        })
        .forEach((e)=> {
            if (!myprops[e])this.scrollviewProps[e] = this.props[e];
        });

        return {
            keyboardSpace: 0
        };
    },
    render(){
        return (
            <ScrollView ref='scrollView' {...this.scrollviewProps}>
                {this.props.children}
                <View style={{height:this.state.keyboardSpace}}></View>
            </ScrollView>
        );
    },
    inputFocused(_this, refName){
        setTimeout(()=> {
            let scrollResponder = this.refs.scrollView.getScrollResponder();
            scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
                React.findNodeHandle(_this.refs[refName]),
                this.props.offset,
                true
            );
        }, 50);
    }
});

module.exports = KeyboardHandler;