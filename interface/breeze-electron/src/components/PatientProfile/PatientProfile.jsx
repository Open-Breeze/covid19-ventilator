import React from 'react';
import SimpleModal from '../Modal/SimpleModal';
import Numpad from '../PatientProfile/Numpad';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const toggleContainer = {
  height: 56,
  padding: 15,
  textAlign: 'center',
  justifyContent: 'center',
};

const modalStyle = {
  background: '#e0f7fa',
  radius: 8,
  borderRadius: 8,
  paddingRight: 15,
  paddingLeft: 15,
  textAlign: 'left'
};

const buttonStyle = {
  textAlign: 'center',
  paddingBottom: 15,
}

export default class PatientProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modalOneOpen: true
        };
    }  

      state = {
        value: 'female',
      };    
    
      handleValue = (event, value) => this.setState({ value });

      modalOneOpen() {
        this.state.modalOne.open = true;
        this.setState(this.state); 
      }
      modalOneClose() {
        this.state.modalOne.open = false;
        this.setState(this.state);
      }

      modalTwoOpen() {
        this.state.modalTwo.open = true;
        this.setState(this.state); 
      }
      modalTwoClose() {
        this.state.modalThree.open = false;
        this.setState(this.state);
      }

      modalThreeOpen() {
        this.state.modalThree.open = true;
        this.setState(this.state); 
      }
      modalThreeClose() {
        this.state.modalThree.open = false;
        this.setState(this.state);
      }

      modalFourOpen() {
        this.state.modalFour.open = true;
        this.setState(this.state); 
      }
      modalFourClose() {
        this.state.modalFour.open = false;
        this.setState(this.state);
      }

      modalFiveOpen() {
        this.state.modalFive.open = true;
        this.setState(this.state); 
      }
      modalFiveClose() {
        this.state.modalFive.open = false;
        this.setState(this.state);
      }

    render() {
        const { value } = this.state;
        return (
            <>
              <br></br>
              <div style={buttonStyle}>
              <Button variant="outlined" color="disabled" style={{backgroundColor: "#6BD6F3"}} disableElevation onClick={() => this.setState({modalOneOpen: true, modalTwoOpen: false})}>Patient Profile</Button>
              </div>
              {/*Intro Page*/}
              <SimpleModal open={this.state.modalOneOpen} modalClose={this.modalOneClose}>
              <Box component="span" m={1}>
              <Container>
                    <Grid container alignItems="stretch"justify="center" spacing={3} direction="column">
                    <Grid item xl={6} md={6} sm={12} xs={12}>
                        <Grid container justify="space-evenly" spacing={3} direction="row">
                        </Grid>
                    </Grid>
                    <div style={modalStyle}>
                  <h2 style={{textAlign: "center"}}><u>Setting Up Your Ventilator</u></h2>
                  {'    '}<p style={{textAlign: "center"}}>1. Has the ventilator circuit been assembled? (Circuit put together, HME filter, and tracheal suction)</p>
                  {'    '}<p style={{marginBottom: 241, textAlign: "center"}}>2. Did you hear the backup alarm when starting the machine? (If not, it may not be functioning properly)</p> 
                    </div>
                  <Grid item text-align="center" xl={6} md={6} sm={12} xs={12}>
                  <div style={buttonStyle}>
                  <Button variant="contained" color="secondary" disableElevation onClick={() => this.setState({modalOneOpen: false})}>Quit</Button> {'  '}
                  <Button variant="contained" color="default" onClick={() => this.setState({modalOneOpen: false, modalFourOpen: true})} >Skip</Button>{'  '}
                  <Button variant="contained" color="primary" onClick={() => this.setState({modalOneOpen: false, modalTwoOpen: true})}>Continue ➜ </Button>
                  </div>     
                        </Grid>
                    </Grid>
                </Container>
                </Box>
              </SimpleModal>

              {/*Flow Tests*/}
              <SimpleModal open={this.state.modalTwoOpen} modalClose={this.modalThreeClose}>
                <Box component="span" m={1}>
                <Container>
                    <Grid container alignItems="stretch"justify="center" spacing={3} direction="column">
                        <Grid item xl={6} md={6} sm={12} xs={12}>
                            <Grid container justify="space-evenly" spacing={3} direction="row">
                            </Grid>
                        </Grid>
                        <div style={modalStyle}>
                        <h2 style={{textAlign: "center"}}><u>Flow Test</u></h2>
                        <p>Connect the output tube to the ventilator, but not to the patient. Then press Begin Flow Test.</p><br></br><br></br><br></br>
                        <div style={buttonStyle}>
                        <Button variant="contained" color="primary" style={{marginBottom: 171}} onClick={(e) => window.alert("Flow Test Running!")}>Begin Flow Test</Button>
                        </div>
                        </div>
                        <Grid item text-align="center" xl={6} md={6} sm={12} xs={12}>
                        <div style={buttonStyle}>
                        <Button variant="contained" color="primary" onClick={() => this.setState({modalTwoOpen: false, modalOneOpen: true})} > Back </Button>{'  '}
                        <Button variant="contained" color="primary" onClick={() => this.setState({modalTwoOpen: false, modalThreeOpen: true})} >Continue ➜ </Button>

                        </div>
                        </Grid>
                    </Grid>
                </Container>
                </Box>
            </SimpleModal>

            {/*Pressure Tests*/}

            <SimpleModal open={this.state.modalThreeOpen} modalClose={this.modalFourClose}>
                <Box component="span" m={1}>
                <Container>
                    <Grid container alignItems="stretch"justify="center" spacing={3} direction="column">
                        <Grid item xl={6} md={6} sm={12} xs={12}>
                            <Grid container justify="space-evenly" spacing={3} direction="row">
                            </Grid>
                        </Grid>
                        <div style={modalStyle}>
                        <h2 style={{textAlign: "center"}}><u>Pressure Test</u></h2>
                        <p>Keep the output tube connected to the ventilator, but not to the patient. Block the tube mouthpiece with a gloved hand. 
                          Then press Begin Pressure Test. </p><br></br><br></br><br></br>
                        <div style={buttonStyle}>
                        <Button variant="contained" color="primary" style={{marginBottom: 152}} onClick={(e) => window.alert("Pressure Test Running!")}>Begin Pressure Test</Button>
                        </div>
                        </div>
                        <Grid item text-align="center" xl={6} md={6} sm={12} xs={12}>
                        <div style={buttonStyle}>
                        <Button variant="contained" color="primary" onClick={() => this.setState({modalThreeOpen: false, modalTwoOpen: true})} > Back </Button>{'  '}
                        <Button variant="contained" color="primary" onClick={() => this.setState({modalThreeOpen: false, modalFourOpen: true})} >Continue ➜ </Button>

                        </div>
                        </Grid>
                    </Grid>
                </Container>
                </Box>
            </SimpleModal>

            {/*Patient Profile*/}
            <SimpleModal open={this.state.modalFourOpen} modalClose={this.modalFourClose}>
                <Box component="span" m={1}>
                <Container>
                    <Grid container alignItems="stretch"justify="center" spacing={3} direction="column">
                        <Grid item xl={6} md={6} sm={12} xs={12}>
                            <Grid container justify="space-evenly" spacing={3} direction="row">
                            </Grid>
                        </Grid>
                        <div style={modalStyle}>
                          <p style={{textAlign: "center", paddingBottom: 0}}><h2><u>Patient Information</u></h2></p>
                        <div style={toggleContainer}>
                        <ToggleButtonGroup value={value}exclusive onChange={this.handleValue}>
                          <ToggleButton value="female">
                            Female
                          </ToggleButton>
                          <ToggleButton value="male">
                            Male
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </div>
                        <Numpad profileItemName="Patient Weight" setItem={this.setItemStateValue} startingValue={80} step={1} min={30} max={300} unit={"lbs"}/>
                        <br></br>
                        <Numpad profileItemName="Patient Height" setItem={this.setItemStateValue} startingValue={180} step={1} min={30} max={300} unit={"cm"}/>
                        <br></br>
                        <Numpad profileItemName="Breathing Rate" setItem={this.setItemStateValue} startingValue={60} step={1} min={30} max={300} unit={""}/>
                        <br></br><br></br>
                        </div>
                        <Grid item text-align="center" xl={6} md={6} sm={12} xs={12}>
                        <div style={buttonStyle}>
                        <Button variant="contained" color="primary" onClick={() => this.setState({modalFourOpen: false, modalThreeOpen: true})} > Back </Button>{'  '}
                        <Button variant="contained" color="default" onClick={() => this.setState({modalFiveOpen: true})} >Save Changes</Button>
                        </div>
                        </Grid>
                    </Grid>
                </Container>
                </Box>
            </SimpleModal>

            {/*Confirmation Modal*/}
            <SimpleModal open={this.state.modalFiveOpen} modalClose={this.modalFiveClose}>
            <Box component="span" m={1}>
                <Container>
                  <Grid container alignItems="stretch"justify="center" spacing={3} direction="column">
                   <Grid item xl={6} md={6} sm={12} xs={12}>
                    <Grid container justify="space-evenly" spacing={3} direction="row">
                    </Grid>
                  </Grid>
              <div style={modalStyle}>
              <p>Are you sure you wish to create a new patient profile?</p>
              <div style={buttonStyle}>
                <Button variant="contained" color="primary" onClick={() => this.setState({modalFiveOpen: false})} > Go Back</Button>{'  '}
                <Button variant="contained" color="default" onClick={() => this.setState({modalFourOpen: false, modalFiveOpen: false})} >Save Changes</Button>
              </div>
              </div>
                  </Grid>
                </Container>
              </Box>
            </SimpleModal>
            </>
        )
    };
}

