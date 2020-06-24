import React, { Component } from 'react';
import './horizontal.css';
import DpRutuja from './rutuja.jpeg';
import './App.css';
import Rutu1 from './rutu1.jpeg';
import Rutu2 from './rutu2.jpeg';
import Icon from './insta-icon.jpeg';
class RutujaProfile extends Component{

  render(){
  return (
    <div>
        <div className="ctQZg">   
            <div className="_47KiJ">
                <img src={Icon} style={{marginLeft : 1000}}></img>
                <p style={{marginRight : 150}}></p>
                <p style={{marginRight : 5000, marginTop :40}}>rutuja_2803 </p>
                <hr />        
            </div>
        </div>

        <div className="ctQZg">   
            <div className="_47KiJ">
                <img src={DpRutuja} height="140" width="140" style={{borderRadius : 70, marginTop :200, marginLeft : 1000}}></img>
                <p style={{marginLeft :100, marginTop : 200, fontSize : 50}}>2</p>

                <p style={{ marginTop : 300, marginLeft : -35}}>Posts</p>
                
                <p style={{marginLeft :90, marginTop : 200, fontSize : 50}}>548</p>
                
                <p style={{marginTop : 300, marginLeft : -80}}>Followers</p>
                
                <p style={{marginLeft :80, marginTop : 200, fontSize : 50}}>600</p>
                
                <p style={{marginTop : 300, marginLeft : -75}}>Following</p>

            </div>
        </div>
        
        <div className="ctQZg">   
            <div className="_47KiJ">
                <p style={{marginTop : 360, marginLeft : 1010, fontWeight : 700}}> rutuja_2803</p>
                </div>
            </div>


        <div className="ctQZg">   
            <div className="_47KiJ">
                <p style={{marginTop : 400, marginLeft : 1010, fontWeight : 700}}> <pre>mah lyf mah rules </pre></p>
                <p style={{marginTop : 430, marginLeft : -191, fontWeight : 700}}> <pre>Papa ki Pari </pre></p>
                
                </div>
            </div>

            <div className="ctQZg">   
            <div className="_47KiJ">
                <button style={{marginTop : 490, marginLeft : 1250, fontWeight : 700, blockSize : 50}}> Following</button>
                <button style={{marginTop : 490, marginLeft : 130, fontWeight : 700, blockSize : 50}}> Message</button>
                </div>
            </div>

            <div className="ctQZg">   
            <div className="_47KiJ">
                <img src={Rutu1} style={{marginTop : 550, marginLeft : 1010, fontWeight : 700, blockSize : 200}}></img>
                <img src={Rutu2} style={{marginTop : 550, marginLeft : 10, fontWeight : 700, blockSize : 200}}></img>
                
                
                </div>
            </div>         
   </div>
  );
 }
}

export default RutujaProfile;
