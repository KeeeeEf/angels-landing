import { Box, Button, IconButton, Link, Modal, Paper, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import AngelsLogo from "../../images/angels_logo.webp";
import WalletIcon from "../../images/icons/wallet"
import {getWallets} from "../../scripts/bifrost";
import CloseIcon from '@mui/icons-material/Close';
import { CardanoWallet } from "../../scripts/types";

const Header: React.FC = () => {
    const theme = useTheme()

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState<CardanoWallet | undefined>();
    
    let WalletList = getWallets();

    return (
        <header className="fixed z-100 w-full !p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="!h-20 !w-144">
                    <img
                        src={AngelsLogo}
                        alt="angels logo"
                        className="h-20"
                    />
                </div>
                <div>
                    <Button 
                        onClick={()=>setIsModalOpen(true)}
                        disableRipple
                        sx={{
                            backgroundImage: `linear-gradient(to right, ${theme.palette.gradient.button[30]}, ${theme.palette.gradient.button[20]} 41%, ${theme.palette.gradient.button[10]}, ${theme.palette.gradient.button[30]})`,
                            borderRadius: "12px",
                            gap: "10px",
                            "&:hover": {
                                backgroundImage: `linear-gradient(to right, ${theme.palette.gradient.button[30]}, ${theme.palette.primary.main} 100%, ${theme.palette.gradient.button[40]}, ${theme.palette.gradient.button[50]})`,
                            },
                            "&:active": {
                                backgroundImage: `linear-gradient(to right, ${theme.palette.gradient.button[60]})`
                            }
                        }}
                        className="!w-39 !h-12"
                    >
                        <WalletIcon sx={{color: theme.palette.secondary.dark, fontSize: "24px"}}/>
                        <Typography
                            sx={{
                                color: theme.palette.secondary.dark,
                                fontWeight: 500
                            }}
                            className="!text-sm capitalize"
                        >
                                Connect Wallet
                        </Typography>
                    </Button>
                    <Modal
                        open={isModalOpen}
                        onClose={()=> setIsModalOpen(false)}
                        aria-labelledby="wallet-modal-title"
                        aria-describedby="wallet-modal-description"
                    >
                        <Box
                            component="div"
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                backgroundColor: theme.palette.background.default,
                                borderRadius: "20px"
                            }}
                            className="w-116 flex flex-col items-center !p-8"
                        >         
                            <IconButton
                                onClick={()=> setIsModalOpen(false)}
                                className="!absolute !top-4 !right-4"
                            >
                                <CloseIcon 
                                    sx={{
                                        color: theme.palette.grey[50]
                                    }}
                                />
                            </IconButton>
                            <div id="wallet-modal-title" className="relative">
                                <Typography 
                                    sx={{
                                        color: theme.palette.text.primary
                                    }}
                                    className="!text-[28px] !font-semibold"
                                >
                                    Connect a Wallet
                                </Typography>
                            </div>
                            <div className="grid grid-cols-1 w-full !gap-y-2 !mt-6">
                                {WalletList.map((wallet) => {
                                    return(
                                        <Button
                                            onClick={()=>setSelectedWallet(wallet)}
                                            key={wallet.id}
                                            sx={{
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                border: `1px solid ${theme.palette.text.disabled}`,
                                                "&:hover": {
                                                    backgroundColor: theme.palette.grey[300]
                                                }
                                            }}
                                            className="!h-15"
                                        >
                                            <div className="w-9">
                                                <img
                                                    src={wallet.icon}
                                                    alt={wallet.id}
                                                />
                                            </div>
                                            <div>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 500,
                                                        color: theme.palette.text.primary
                                                    }}
                                                    className="!text-[20px] capitalize"
                                                >
                                                    {wallet.id}
                                                </Typography>
                                            </div>
                                            <div/>
                                        </Button>
                                    );
                                })}
                            </div>
                            <div className="w-full mt-1">
                                <Button
                                    sx={{
                                        color: theme.palette.grey[200],
                                        fontWeight: 400,
                                        textAlign: "left",
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                            textDecoration: "underline"
                                        }
                                    }}
                                >
                                    <Typography
                                        className="capitalize"
                                    >
                                        Show more
                                    </Typography>
                                </Button>
                            </div>
                            <div className="mt-8">
                                <Typography
                                    sx={{
                                        color: theme.palette.grey[100],
                                        textAlign: "center"
                                    }}
                                    className="!text-sm"
                                >
                                    <span>By connecting your wallet, you agree to Angel Finance&apos;s </span><br/> 
                                    <Link className="cursor-pointer">Terms of Service</Link>
                                    <span> and consent to its </span>
                                    <Link className="cursor-pointer">Privacy Policy.</Link>
                                </Typography>
                            </div>
                        </Box>
                    </Modal>
                </div>
            </div>
        </header>
    );
};

export default Header;