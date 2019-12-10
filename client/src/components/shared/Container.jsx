import React from 'react'
import Routes from '../screens'
import Nav from '../shared/Nav'

export default class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            coder: []
        }
    }
    async componentDidMount() {
        this.fetchCoders()
    }

    fetchCoders = async () => {
        try {
            const coders = await getCoders()
            this.setState({ coders })
        } catch (err) {
            console.error(err)
        }
    }
    addCoder = coder => this.setState({ coder: [...this.state.coders, coders] })
    setUser = user => this.setState({ user })
    clearUser = () => this.setState({ user: null })

    render() {
        const { user, coders } = this.state
        return (
            <>
                <Nav user={user} />
                <main className="container">
                    <Routes
                        getCoders={this.getCoders}
                        coders={coders}
                        setUser={this.setUser}
                        addCoder={this.addCoder}
                        clearUser={this.clearUser}
                    />
                </main>
            </>
        )
    }
}

