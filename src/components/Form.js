import React from 'react'
import { connect } from 'react-redux'
import { addArticle, getArticles } from '../js/actions'
import uuid from 'uuid'

const mapDispatchToProps = (dispatch) => {
    return {
        addArticlee : artcile => dispatch(addArticle(artcile)),
        getAll : () => dispatch(getArticles())
    }
}

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            disable : false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleGetAll = this.handleGetAll.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log("target.id", event.target.id)
        this.setState({ [event.target.id]: event.target.value });
      }

    handleSubmit(event){
        event.preventDefault();
        this.props.addArticlee({ title: this.state.title, id:uuid() })
        this.setState({ title: ''})
    }

    handleGetAll(event){
        this.props.getAll()
        this.setState({
            disable: true
        })
    }
    
    render() {
        const { title } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={title}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-success btn-lg">
                        SAVE
                    </button>
                    
                </form>
                <button disabled={this.state.disable} onClick={this.handleGetAll} className="btn btn-success btn-lg">
                    Get All
                </button>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Form)