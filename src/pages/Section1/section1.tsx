import { Button, Typography, useTheme } from "@mui/material";
import React, { ReactNode } from "react";
import TokenSale from "../../images/icons/token_sale.svg";
import WhitePaper from "../../images/icons/white_paper.svg";
import AngelCoin from "../../images/section1/angel.svg";
import background from "../../images/section1/background.webp";

export default function Section1() {
    const theme = useTheme();

    return (
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
                                textTransform: 'uppercase',
                                color: theme.palette.primary.main,
                                textAlign: 'center',
                                fontFamily: "Cinzel",
                            }}
                            className="!text-[112px] font-bold !leading-26 !mb-6"
                        >
                            The Angels <br />Have Arrived
                        </Typography>
                        <Typography
                            sx={{
                                color: theme.palette.text.primary,
                                textAlign: 'center',
                            }}
                            className="text-2xl leading-6"
                        >
                            <span>Join Angel Finance on Cardano—bringing DeFi to new heights with lending,<br />
                                borrowing, and yield farming powered by </span>
                            <span className="font-bold">$ANGELS</span>
                            <span> and the Levvy protocol. </span>
                        </Typography>
                    </div>
                    <div className="flex justify-center gap-3 mt-10">
                        <Button 
                            variant="contained" startIcon={<img src={TokenSale} alt="Token Sale Icon"/>}
                            sx={{ 
                                backgroundColor: theme.palette.primary.light, 
                                color: theme.palette.text.secondary, 
                                borderRadius: '12px' 
                            }}
                            >
                            Token Sale
                        </Button>
                        <Button
                            variant="contained" startIcon={<img src={WhitePaper} alt="White Paper Icon"/>}
                            sx={{ 
                                backgroundColor: theme.palette.primary.light, 
                                color: theme.palette.text.secondary, 
                                borderRadius: '12px' 
                            }}
                        >
                            White Paper
                        </Button>
                    </div>
                    <div className="relative !mx-auto">
                        <img
                            src={AngelCoin}
                            alt="Angels Coin">
                        </img >
                    </div>

                </div>
            </div>
        </section>
    );
} 