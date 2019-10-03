import React, { Component } from 'react'
    //import the components we will need
    import NewsCard from './NewsCard'
    import NewsManager from '../../modules/NewsManager'

    class NewsList extends Component {
        //define what this component needs to render
        state = {
            news: [],
        }

        deleteNewsArticle = id => {
            NewsManager.delete(id)
            .then(() => {
              NewsManager.getAll()
              .then((newNewsArticles) => {
                this.setState({
                    news: newNewsArticles
                })
              })
            })
          }
    componentDidMount(){
        console.log("NEWS LIST: ComponentDidMount");
        //getAll from NewsManager and hang on to that data; put it in state
        NewsManager.getAll()
        .then((newsArticlesFromDatabase) => {
            this.setState({
                news: newsArticlesFromDatabase
            })
        })
    }

    render(){
        console.log("NEWS LIST: Render");

        return (
            <>
            <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/news/new") }}>
                        Input New Article
                    </button>
            </section>
            <div className="container-cards">
                {this.state.news.map(singleNewsArticle =>
                    singleNewsArticle.active ?
                        <NewsCard key={singleNewsArticle.id} newsProp={singleNewsArticle} deleteNewsArticle={this.deleteNewsArticle} {...this.props} /> : ``)}
            </div>
            </>
        )
}
}
export default NewsList;
