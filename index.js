body {
  color: #fffeeb;
  background-image: url('https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
}

.instruction, .submit, .results{
  display: flex;
  flex-direction: column;
}

#map {
  height: 37%;
  width: 90%;
  margin: auto;
}

 #results{
  width: 75%;
  margin: auto;
}

.instruction{
  color: #fffeeb;
  text-align: center;
  font-size: 40pt;
  width: 80%;
  margin: auto;
}

#results{
  background-image: url('https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  color: #fffeeb;
  text-align: center;
  padding-inline: 5%;
  padding-bottom: 15%;
  padding-top: 5%;
  margin-top: 5%;
}


#pac-input {
  background-color: #fffeeb;
  font-family: Roboto;
  font-size: 25px;
  font-weight: 300;
  margin-left: 12px;
  padding: 0 11px 0 13px;
  text-overflow: ellipsis;
  width: 400px;
}

#pac-input:focus {
  border-color: #4d90fe;
}

button {
  padding:0.7em 1.7em;
  border-radius:10px;
  font-family:'Roboto',sans-serif;
  font-size: xx-large;
  color:#fffeeb;
  background-color:brown;
  box-shadow:inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
  width: 40%;
  }

.submit{
  display: block;
  text-align: center;
  padding-top: 5%;
  padding-bottom: 1%;
}

.headline{
  font-size: x-large;
  text-emphasis: bold;
}

.year{
  font-size: x-large;
}

#results a {
  text-decoration: none;
  color: #fffeeb;
  background-color: brown;
  font-size: large;
}

#map {
  height: 40%;
  width: 90%;
  margin: auto;
}

@media (min-width: 992px){
  #map {
    height: 40%;
    width: 70%;
    margin: auto;
  }

  .instruction{
    font-size: xxx-large;
    width: 60%;
  }
}
