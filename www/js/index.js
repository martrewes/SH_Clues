/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

// document.addEventListener('deviceready', onDeviceReady, false);

// function onDeviceReady() {
//     // Cordova is now initialized. Have fun!

//     console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
//     document.getElementById('deviceready').classList.add('ready');



// }

//import '../css/index.css';

var app = {
  initialize: function() {
      this.bindEvents();
  },
  
  bindEvents: function() {
      document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  
  onDeviceReady: function() {
      app.receivedEvent('deviceready');
  
  }
  // Update DOM on a Received Event
}


  
//document.getElementById("button").onclick = showMe();

var data = JSON.parse(data)

function showMe(){
  setTimeout(function () { 
      window.location.reload(true); 
    }, 30000); 
    var clueno = document.getElementById('search').value
    console.log(clueno);
    var found = getCountryByCode(clueno);
    document.getElementById('output').innerHTML = found[0].text
    document.getElementById("button").disabled = true;
    ProgressCountdown(30, 'pageBeginCountdown', 'pageBeginCountdownText').then(value => alert(`Time Up! Please return device.`));
  }

function getCountryByCode(number) {
return data.filter(
  function(data) {
    return data.number == number
      }
    );  
  }

  function ProgressCountdown(timeleft, bar, text) {
    return new Promise((resolve, reject) => {
      var countdownTimer = setInterval(() => {
        timeleft--;
  
        document.getElementById(bar).value = timeleft;
        document.getElementById(text).textContent = timeleft;
  
        if (timeleft <= 0) {
          clearInterval(countdownTimer);
          resolve(true);
        }
      }, 1000);
    });
  }