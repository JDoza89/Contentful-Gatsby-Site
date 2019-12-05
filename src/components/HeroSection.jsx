import React from "react"
import RichText from "./RichText";
export default class HeroSection extends React.Component {

    constructor(props) {
        super(props);
        console.log("HeroSection props", props);
        }    

render(){
    var richText = <div></div>
    if(this.props.content.links){
        richText = <RichText richText={this.props.content.links.json.content}/>
    }
    else{
        var richText = <div></div>
    }
 
  return (
    <section className="hero__section">
    <div className="hero__content">
        <div className="container">
            <div className="">
                <div className="hero__content-vertical table-content">
                    <div className="table-cell">
                        <img className="inview fromLeftIn" data-in="fromLeftIn" data-out="fromLeftOut" src={'https:' + this.props.content.heroImage.file.url} />

                        <h1 className="color--white inview fromRightIn" data-scroll="#fff" data-in="fromRightIn" data-out="fromRightOut">
                            {this.props.content.title}
                                </h1>{richText}<br />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
}