import React, { Component } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Axios from 'axios';
import queryString from 'query-string';

export default class Proedit extends Component {

    state  = {
        projects: [], 
        projectId:"",
        projectName:'',
        projectDescription:'',
        
      }
     
     
    componentDidMount() {    
        let proId = this.props.match.params.proId;
      Axios.get("http://localhost:8080/dt/api/v1/project/"+ proId)
          .then(result => {
            
            this.setState({             
                projectId:result.data.projectId,
                projectName: result.data.projectName,
                projectDescription: result.data.projectDescription
                
              });
         
          })       
     }

     handleAdd=(e)=>{ 
        e.preventDefault();
        Axios.post("http://localhost:8080/dt/api/v1/project/",{projectId:this.state.projectId,projectName:this.state.projectName,projectDescription:this.state.projectDescription})
        .then(res=>
         {
          console.log( this.state);        
          alert("Project Updated successfully");
        //   this.refreshProject(res);
          
         }
        ) 
        
      }

    handleChangepid =(e)=>{
        this.setState({projectId:e.target.value});
        console.log( e);
       }
      handleChangepname =(e)=>{
        this.setState({projectName:e.target.value});
        console.log( e);
       }
       handleChangepdes =(e)=>{
        this.setState({projectDescription:e.target.value});
        console.log( e);
       }


    render() {
        return (
            <div>
                <Header />
                <div className="Nav">     

                    <h2>Modify Project</h2>
                    <form onSubmit={this.handleAdd}>
                    {/* <label>Id</label><br></br>
                    <input type="text" name="projectId" className="txtid" value={this.state.projectId}onChange={this.handleChangepid} required ></input><br></br><br></br>     
                    <label>Name</label><br></br> */}
                    <input type="text" name="projectName" className="txtid" value={this.state.projectName}onChange={this.handleChangepname} required></input><br></br><br></br>     
                    <label>Description</label> <br></br>                 
                    <input type="text" name="projectDescription" className="txtid" value={this.state.projectDescription}onChange={this.handleChangepdes} required></input><br></br><br></br>
                    <button className="save_but" type="submit"><i className="fa fa-save" >
                    &nbsp;Save</i></button>                                         
                    &emsp;<a href="/pro"><input type="button" Value="Back" className="reset_but"/></a> 
                </form>                          
                    </div>
                <Footer />
            </div>
        )
    }
}
