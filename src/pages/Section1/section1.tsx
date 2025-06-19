import { Button, Typography, useTheme } from "@mui/material";
import React, { ReactNode } from "react";
import TokenSale from "../../images/icons/token_sale.svg";
import WhitePaper from "../../images/icons/white_paper.svg";
import background from "../../images/section1/background.webp";

export default function Section1(){
    const theme = useTheme();

    return(
        <section   
            style={{
                backgroundColor: theme.palette.background.default,
                backgroundImage: `url(${background})`,
            }} 
            className="pt-45"
        >
            <div className="container mx-auto">
                <div>
                    <div className="">
                        <Typography 
                            sx={{
                                textTransform:'uppercase',
                                color: theme.palette.primary.main,
                                textAlign: 'center',
                            }}
                            className="!text-[112px] font-bold !leading-26 mb-6"
                        >
                            The Angels <br/>Have Arrived
                        </Typography>
                    <Typography 
                        sx={{
                            color: theme.palette.text.primary,
                            textAlign: 'center',
                        }}
                        className="text-2xl leading-6"
                    >
                        <span>Join Angel Finance on Cardano—bringing DeFi to new heights with lending,<br/>
                        borrowing, and yield farming powered by </span>
                        <span className="font-bold">$ANGELS</span>
                        <span> and the Levvy protocol. </span>
                    </Typography>
                    </div>
                    <div className="flex justify-center gap-3 mt-10">
                        <Button variant="contained" color="primary">
                            Token Sale
                        </Button>
                        <Button variant="contained" color="primary">
                            White Paper
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
} 