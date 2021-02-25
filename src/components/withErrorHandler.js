import React from 'react';
import Aux from './auxil';
import Modal from './UI/Modal/Modal';


const WithErrorHandler = (WrappedComponent,axios)=>{
    return class extends React.Component {
        state = {
            error : null
        }
        
        componentDidMount(){
            axios.interceptors.request.use(req=>{
                this.setState({error:null})
                return req;
            },error=>{
                this.setState({error:error})
            })


            axios.interceptors.response.use(null,error=>{
                this.setState({error:error})
            })

            
        }

        closeErrorModel = ()=>{
            this.setState({error:null})
        }
        
        render(){
            return(
                <Aux>
                   <Modal show={this.state.error} modalClose={this.closeErrorModel}>
                       {this.state.error ? this.state.error.message : null}
                   </Modal>
                   <WrappedComponent {...this.props} />
                </Aux>
            )
            
        }
    }
}

export default WithErrorHandler;