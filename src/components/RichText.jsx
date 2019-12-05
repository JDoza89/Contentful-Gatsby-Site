import React from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

class RichText extends React.Component {
    constructor(props) {
        super(props);
        console.log("HeroSection props", props);
        }  

    render() {
        var html = (<div></div>);
        switch(this.props){
            case undefined || null: 
                html = (<div></div>);
            default:
                    html = documentToHtmlString(this.props.richText);
        }
        return (
            <>
               {html}
            </>
        )
    }
}

export default RichText;