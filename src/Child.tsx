import * as React from 'react';

interface InterfaceChildProps {

    title: string

}

class Child extends React.Component<InterfaceChildProps, undefined> {
    render(){
        return (
            <div id="title">
                {this.props.title}
            </div>
        )
    }

}

export default Child;