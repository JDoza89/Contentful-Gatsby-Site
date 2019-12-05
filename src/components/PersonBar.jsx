import React from 'react'
import PropTypes from 'prop-types';
import RichText from './RichText';

export default class PersonBar extends React.Component {

    constructor(props) {
        super(props);
        console.log("PersonBar props", props);
        }    

render(){
        return (
            <section className="team__section">
                <div className="container">
                    <div className="">
                        <div className="section__headline">
                            <div className="section__headline-label">
                                <h2>{this.props.content.heading}</h2>
                            </div>
                            <div className="section__headline-pattern">
                            </div>
                        </div>

                        <div className="team__section-content">
                            <ul id="TeamGrid" className="team__grid">
                                {this.props.content.people.map((person, index) => {
                                        var richText = <div></div>
                                        if(person.bio){
                                            richText = <RichText richText={person.bio.json.content}/>
                                        }
                                    return (
                                        <li className="col-5ths" key={index}>
                                            <div className="card__team">
                                                <div className="card__image-container">
                                                    <div className="">
                                                        <img src={'https:' + person.picture.file.url} className="img-responsive  width-100 face " alt=":("/>
                                                    </div>
                                                </div>
                                                <div className="team__info">
                                                    <h3>{person.name}</h3>
                                                    <p>{person.title}</p>
                                                    {richText}
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}
