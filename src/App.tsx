import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div style={{ marginTop: 30, backgroundColor: 'red', display: 'flex', justifyContent: 'center' }}>

        <div>
          <div style={{ backgroundColor: 'salmon', height: 80, fontFamily: 'Poppins', fontSize: 64, fontStyle: 'normal', fontWeight: 'bold', color: '#FFFFFF' }}>
            Login
          </div>
          <div style={{ backgroundColor: 'seagreen', fontFamily: 'Poppins', fontSize: 18, fontStyle: 'normal', color: '#FFFFFF'  }}>
            Donec a libero bibendum, pretium enim ac

          </div>
          <div style={{ backgroundColor: 'red', display:'flex', flexDirection:'column' }}>
            {/* <div style={{backgroundColor:'tan', display:'flex'}}>
              <div style={{marginLeft:10, backgroundColor:'red'}}>skskaksjass</div>
              <div style={{marginLeft:10, backgroundColor:'red'}}>ggggggggggg</div>
              <div style={{marginLeft:10, backgroundColor:'red'}}>dff</div>
            </div> */}
            <label htmlFor="" style={{fontFamily: 'Poppins', fontSize: 14, fontStyle: 'normal', color: '#FFFFFF' }}>Username</label>
            <input style={{marginTop:10, background:'rgba(255, 255, 255, 0.06)', borderRadius:20, height:24, padding:15}} type="text" placeholder='Type your username'/>
          </div>

          <div style={{ backgroundColor: 'skyblue' }}>
            ssssssssssss
          </div>
          <div style={{ backgroundColor: 'slategrey' }}>
            hoooo
          </div>
          <div style={{ backgroundColor: 'springgreen' }}>
            ssssssssssss
          </div>

        </div>
      </div>
    </>
  );
}


export default App;
