import { useTheme, Theme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import React from "react";
import Tokenomics from "../../images/section2/tokenomics.webp"
import Background from "../../images/section2/background.webp"

export default function Section2() {
    const theme = useTheme<Theme>();
    return (
        <section className="relative pt-[230px] pb-[259px]" style={{backgroundImage: `url(${Background})`}}>
            <div className="container mx-auto">
                <div>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            fontWeight: 700,
                            fontFamily: "Cinzel",
                            color: theme.palette.primary.main
                        }}
                        className="!text-[64px]"
                    >
                        Tokenomics
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            color: theme.palette.text.primary
                        }}
                        className="!text-xl"
                    >
                        The distribution is designed to support public access, maintain liquidity,<br />
                        and enable sustainable ecosystem growth through future drops.
                    </Typography>
                </div>
                <div className="flex mt-[82.38px] gap-[73.5px] items-center">
                    <div className="relative">
                        <div>
                            <img  src={Tokenomics} alt="Tokenomics"
                            className="h-[673.64px] !aspect-square"
                            />
                        </div>
                        <div className="absolute top-[calc(50%-64px)] left-[calc(50%-160.25px)]">
                            <Typography 
                                sx={{
                                    fontFamily: "Cinzel",
                                    fontWeight: 900,
                                    textAlign: "center",
                                    color: theme.palette.primary.light                  
                                }}
                                className="!text-[64px]"
                            >
                                1,000,000
                            </Typography>
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    color: theme.palette.primary.light  
                                }}
                                className="!text-2xl leading-8"
                            >
                                <span>
                                    Total Supply 
                                </span>
                                <span className="font-extrabold">
                                   &nbsp;$ANGELS
                                </span>
                            </Typography>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 justify-between">
                        <div 
                            style={{backgroundColor: theme.palette.grey[50]}}
                            className="flex !rounded-[12px] overflow-hidden h-28"
                        >
                            <div 
                                style={{
                                    backgroundColor: theme.palette.grey[100],
                                }} 
                                className="w-6 h-full">
                            </div>

                            <div className="flex p-6">
                                <div className="flex flex-col gap-[15px]">
                                    <Typography
                                        sx={{
                                            fontFamily:"Cinzel",
                                            color: theme.palette.primary.light,
                                            fontWeight: 800,
                                        }}
                                        className="!text-[40px] !leading-[30px]"
                                    >
                                        49.6%
                                    </Typography>
                                    <Typography
                                        sx={{
                                            textTransform: "uppercase",
                                            fontWeight: 600,
                                            color: theme.palette.text.primary
                                        }}
                                    >
                                        reserved for replacement drop
                                    </Typography>
                                </div>
                                <div className="flex flex-col gap-[15px]">
                                    <Typography
                                        sx={{
                                            fontFamily:"Cinzel",
                                            color: theme.palette.primary.light,
                                            fontWeight: 800,
                                        }}
                                        className="!text-[40px] !leading-[29.2px]"
                                    >
                                        496,000
                                    </Typography>
                                    <Typography
                                        sx={{
                                            textTransform: "uppercase",
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            textAlign: "right",
                                        }}
                                    >
                                        Amount
                                    </Typography>
                                </div>
                            </div>
                        </div>

                        <div 
                            style={{backgroundColor: theme.palette.grey[50]}}
                            className="flex !rounded-[12px] overflow-hidden h-28"
                        >
                            <div 
                                style={{
                                    backgroundColor: theme.palette.grey[200],
                                }} 
                                className="w-6 h-full"></div>

                            <div className="flex justify-between w-full p-6">
                                <div className="flex flex-col gap-[15px]">
                                    <Typography
                                        sx={{
                                            fontFamily:"Cinzel",
                                            color: theme.palette.primary.light,
                                            fontWeight: 800,
                                        }}
                                        className="!text-[40px] !leading-[29.2px]"
                                    >
                                        44.4%
                                    </Typography>
                                    <Typography
                                        sx={{
                                            textTransform: "uppercase",
                                            fontWeight: 600,
                                            color: theme.palette.text.primary
                                        }}
                                    >
                                        reserved for sale
                                    </Typography>
                                </div>
                                <div className="flex flex-col gap-[15px]">
                                        <Typography
                                        sx={{
                                            fontFamily:"Cinzel",
                                            color: theme.palette.primary.light,
                                            fontWeight: 800,
                                        }}
                                        className="!text-[40px] !leading-[29.2px]"
                                    >
                                        444,000
                                    </Typography>
                                    <Typography
                                        sx={{
                                            textTransform: "uppercase",
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            textAlign: "right",
                                        }}
                                    >
                                        Amount
                                    </Typography>
                                </div>
                            </div>
                        </div>

                        <div 
                            style={{backgroundColor: theme.palette.grey[50]}}
                            className="flex !rounded-[12px] overflow-hidden h-28"
                        >
                            <div 
                                style={{
                                    backgroundColor: theme.palette.grey[300],
                                }} 
                                className="w-6 h-full"></div>

                            <div className="flex justify-between w-full p-6">
                                <div className="flex flex-col gap-[15px]">
                                    <Typography
                                        sx={{
                                            fontFamily:"Cinzel",
                                            color: theme.palette.primary.light,
                                            fontWeight: 800,
                                        }}
                                        className="!text-[40px] !leading-[29.2px]"
                                    >
                                        6%
                                    </Typography>
                                    <Typography
                                        sx={{
                                            textTransform: "uppercase",
                                            fontWeight: 600,
                                            color: theme.palette.text.primary
                                        }}
                                    >
                                        reserved for lp
                                    </Typography>
                                </div>
                                <div className="flex flex-col gap-[15px]">
                                        <Typography
                                        sx={{
                                            fontFamily:"Cinzel",
                                            color: theme.palette.primary.light,
                                            fontWeight: 800,
                                        }}
                                        className="!text-[40px] !leading-[29.2px]"
                                    >
                                        60,000
                                    </Typography>
                                    <Typography
                                        sx={{
                                            textTransform: "uppercase",
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            textAlign: "right",
                                        }}
                                    >
                                        Amount
                                    </Typography>
                                </div>
                            </div>
                        </div>

                        <div 
                            style={{backgroundColor: theme.palette.grey[50]}}
                            className="flex !rounded-[12px] overflow-hidden h-28"
                        >
                            <div 
                                style={{
                                    backgroundColor: theme.palette.grey[400],
                                }} 
                                className="w-6 h-full"></div>

                            <div className="flex justify-between w-full p-6">
                                <div className="flex flex-col gap-[15px]">
                                    <Typography
                                        sx={{
                                            fontFamily:"Cinzel",
                                            color: theme.palette.primary.light,
                                            fontWeight: 800,
                                        }}
                                        className="!text-[40px] !leading-[29.2px]"
                                    >
                                        0%
                                    </Typography>
                                    <Typography
                                        sx={{
                                            textTransform: "uppercase",
                                            fontWeight: 600,
                                            color: theme.palette.text.primary
                                        }}
                                    >
                                        team/product
                                    </Typography>
                                </div>
                                <div className="flex flex-col gap-[15px]">
                                        <Typography
                                        sx={{
                                            fontFamily:"Cinzel",
                                            color: theme.palette.primary.light,
                                            fontWeight: 800,
                                        }}
                                        className="!text-[40px] !leading-[29.2px]"
                                    >
                                        --
                                    </Typography>
                                    <Typography
                                        sx={{
                                            textTransform: "uppercase",
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            textAlign: "right",
                                        }}
                                    >
                                        Amount
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute -bottom-1 z-[-1] w-full !h-[1153px] bg-gradient-to-t from-[#171614] to-[#171614]/0"></div>
        </section>
    );
}