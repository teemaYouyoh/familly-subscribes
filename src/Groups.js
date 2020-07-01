import React, { Component } from 'react';

class Groups extends Component {
    state = { 
        data: [],
        region: 'ru',
    }

    componentDidMount() {
        this.getData()
        .then((data) => {
                this.setState({
                    data,
                })
            })
            .catch();
    }

    getData = async () => {
        let res = await fetch('http://localhost:3000/subscribes-groups');
        res = await res.json();
        return res;
    }

    handleChange = (e) => {
        e.persist();
        const { value } = e.target;
        this.setState({
            region: value
        })
        console.log(value);
    }

    filterItems = () => {
        const { data } = this.state;

    }

    renderItems = (data) => {
        return data.map((group, i) => {
            if (this.state.region == group.region){
                return (
                    <div className="group" key={group._id}>
                        <div className="region">{group.region}</div>
                        <div className="type">{group.type}</div>
                        <div className="isFull">{group.isFull}</div>
                    </div>
                )
            }
        })
    }

    render() {
        const {data} = this.state; 
        const groups = this.renderItems(data);

        return (
            <div>
                <div className="check">
                    <input onChange={this.handleChange} type="radio" name="region" value="RU" id=""/>ru
                    <input onChange={this.handleChange} type="radio" name="region" value="UA" id=""/>ua
                </div>
                {groups}
            </div>
        );
    }
}

export default Groups;