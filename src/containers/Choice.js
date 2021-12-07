import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";


import { Grid, Card, CardContent } from '@material-ui/core';

import img1 from '../assets/images/01.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';

const Choice = () => {
    const [loginName, setLoginName] = useState();
    useEffect(() => {
        // const profilePhoto = localStorage.getItem('photoData');
        const name = localStorage.getItem('nameData');
        setLoginName(name);
        console.log("data fetch", name);
    },[]);


    return (
        <div className="bg-grey">
            <Grid container>
                {/* <Grid item lg={2} className="shadow-2xl h-screen bg-white">
                    <div className="p-10">
                        <h className="text-lightBlue text-2xl">Aqua
                            <p className="text-black inline text-2xl">Monitor</p></h>
                    </div>
                </Grid> */}
                <Grid item lg={12} xs={12} md={12}>
                    <div className="m-10">
                        <h className="text-black font-bold text-2xl">{loginName}
                            <p className="text-black font-normal inline text-1xl">,welcome back</p></h>
                    </div>
                    <div className="">
                        <Grid container className="mb-10">
                            <Grid item lg={1} md={1} xs={0}></Grid>
                            <Grid item lg={4} md={4} xs={12}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardContent>
                                        <img src={img1} alt="img1" />
                                        <div className="flex justify-center mt-5">
                                            <Link to="/statics"><button className="bg-brown text-white font-bold rounded-lg p-3">
                                                Water Statistics
                                            </button></Link>
                                        </div>
                                    </CardContent>
                                </Card>
                                <br /><br />
                                <Card sx={{ maxWidth: 345 }} className="mb-10 md:mb-0">
                                    <CardContent>
                                        <img src={img2} alt="img2" />
                                        <div className="flex justify-center mt-5">
                                            <Link to="/tips"><button className="bg-brown text-white font-bold rounded-lg p-3">
                                                Tips
                                            </button></Link>
                                        </div>
                                    </CardContent>
                                </Card>

                            </Grid>
                            <Grid item lg={2} md={2} xs={0}></Grid>
                            <Grid item lg={4} md={4} xs={12}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardContent>
                                        <img src={img3} alt="img1" />
                                        <div className="flex justify-center mt-5">
                                            <button className="bg-brown text-white font-bold rounded-lg p-3">
                                                Notifications
                                            </button>
                                        </div>
                                    </CardContent>
                                </Card>
                                <br /><br />
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardContent>
                                        <img src={img4} alt="img1" />
                                        <div className="flex justify-center mt-5">
                                            <Link to="/user"><button className="bg-brown text-white font-bold rounded-lg p-3">
                                                User Detail
                                            </button></Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item lg={1} md={1} xs={0}></Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default withRouter(Choice);