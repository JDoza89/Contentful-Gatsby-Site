import React from 'react'
import PropTypes from 'prop-types';
import Header from '../components/header';
import HeroSection from '../components/HeroSection';
import PersonBar from '../components/PersonBar';


class PageTemplate extends React.Component {
    render() {
        const {content} = this.props.data.contentfulPage;
        console.log(content);
        return (
            <div>
                {content.map((component, index) => {
                    switch(component["__typename"]){
                        case "ContentfulHeroSection":
                            return <HeroSection content={component} />
                    
                        case "ContentfulPersonBar":
                            return <PersonBar content={component}/>
                        
                        default:
                            return
                    }
                })}
            </div>
        )
    }
}

PageTemplate.propTypes = {
    data: PropTypes.object.isRequired
}
export default PageTemplate

export const pageQuery = graphql`
    query pageQuery($slug: String!){
        contentfulPage(slug: {eq: $slug}){
            title
            slug
            content{
                __typename
                    ... on Node {
                    ... on ContentfulPersonBar{
                        heading
                        people{
                        picture{
                            file{
                                url
                            }
                        }
                        name
                        title
                        interestingFact
                        bio{
                            json
                        }
                    }
                }
            }
                    ... on ContentfulHeroSection{
                        title
                        links{
                            json
                        }
                        heroImage{
                            title
                            file{
                                url
                            }
                        }
                    }
                }
            }
        }
    `
